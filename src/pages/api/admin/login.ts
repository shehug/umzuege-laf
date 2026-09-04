import type { APIRoute } from "astro";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  createAdminToken,
} from "@/lib/adminAuth";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
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

    if (username !== adminUsername || password !== adminPassword) {
      return new Response(
        JSON.stringify({ message: "Benutzername oder Kennwort ist falsch." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const token = createAdminToken(username);

    cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
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
