import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "laf_admin_session";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

type AdminPayload = {
  username: string;
  exp: number;
};

function getSecret() {
  const secret = process.env.ADMIN_AUTH_SECRET;

  if (!secret) {
    throw new Error("ADMIN_AUTH_SECRET fehlt in .env.local");
  }

  return secret;
}

function sign(value: string) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(value)
    .digest("base64url");
}

export function createAdminToken(username: string) {
  const payload: AdminPayload = {
    username,
    exp: Date.now() + ADMIN_COOKIE_MAX_AGE * 1000,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminToken(token?: string | null) {
  if (!token) return null;

  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) return null;

  const expectedSignature = sign(encodedPayload);

  const expectedBuffer = Buffer.from(expectedSignature);
  const signatureBuffer = Buffer.from(signature);

  if (expectedBuffer.length !== signatureBuffer.length) return null;

  const validSignature = crypto.timingSafeEqual(
    expectedBuffer,
    signatureBuffer
  );

  if (!validSignature) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    ) as AdminPayload;

    if (!payload.exp || payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
