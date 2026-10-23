import type { APIRoute } from "astro";
import crypto from "crypto";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  createAdminToken,
} from "@/lib/adminAuth";

export const prerender = false;

// ── Brute-Force-Schutz ────────────────────────────────────────────────────────
// Max. 5 Fehlversuche pro IP innerhalb von 15 Minuten, danach 15 min Sperre.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 Minuten

interface RateEntry {
  count: number;
  firstAttempt: number;
  lockedUntil?: number;
}

const loginAttempts = new Map<string, RateEntry>();

function getClientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (!entry) {
    loginAttempts.set(ip, { count: 0, firstAttempt: now });
    return { allowed: true };
  }

  // Sperre aktiv?
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return { allowed: false, retryAfterMs: entry.lockedUntil - now };
  }

  // Zeitfenster abgelaufen → zurücksetzen
  if (now - entry.firstAttempt > RATE_LIMIT_WINDOW_MS) {
    loginAttempts.set(ip, { count: 0, firstAttempt: now });
    return { allowed: true };
  }

  return { allowed: true };
}

function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const entry = loginAttempts.get(ip) ?? { count: 0, firstAttempt: now };
  entry.count += 1;

  if (entry.count >= RATE_LIMIT_MAX) {
    entry.lockedUntil = now + RATE_LIMIT_WINDOW_MS;
  }

  loginAttempts.set(ip, entry);
}

function clearAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

// ── Timing-sicherer String-Vergleich ─────────────────────────────────────────
function timingSafeStringEqual(a: string, b: string): boolean {
  // Gleiche Byte-Länge erforderlich für timingSafeEqual
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");

  // Längencheck separat, dann Inhalt timing-sicher vergleichen
  if (bufA.length !== bufB.length) {
    // Trotzdem vergleichen, um Timing-Leck über Länge zu minimieren
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

// ── API Route ─────────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, cookies }) => {
  const ip = getClientIp(request);
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    const retryAfterSec = Math.ceil((rateCheck.retryAfterMs ?? RATE_LIMIT_WINDOW_MS) / 1000);
    return new Response(
      JSON.stringify({ message: "Zu viele Versuche. Bitte später erneut versuchen." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(retryAfterSec),
        },
      }
    );
  }

  try {
    const body = await request.json();

    const username = String(body.username || "");
    const password = String(body.password || "");

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      return new Response(
        JSON.stringify({ message: "Admin-Zugang ist nicht konfiguriert." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Timing-sicherer Vergleich verhindert Timing-Angriffe
    const usernameOk = timingSafeStringEqual(username, adminUsername);
    const passwordOk = timingSafeStringEqual(password, adminPassword);

    if (!usernameOk || !passwordOk) {
      recordFailedAttempt(ip);
      return new Response(
        JSON.stringify({ message: "Benutzername oder Kennwort ist falsch." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Erfolgreicher Login → Zähler zurücksetzen
    clearAttempts(ip);

    const token = createAdminToken(username);

    cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: ADMIN_COOKIE_MAX_AGE,
      path: "/",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ message: "Login konnte nicht verarbeitet werden." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
};

