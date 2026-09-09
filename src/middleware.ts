import { defineMiddleware } from "astro:middleware";

const PRIMARY_ORIGIN = "https://umzuegelandshut.de";

const REDIRECT_HOSTS = new Set([
  "www.umzuegelandshut.de",
  "umzuege-laf.de",
  "www.umzuege-laf.de",
]);

export const onRequest = defineMiddleware(async (context, next) => {
  const host = context.request.headers.get("host")?.toLowerCase().split(":")[0] ?? "";

  if (REDIRECT_HOSTS.has(host)) {
    const redirectUrl = new URL(
      context.url.pathname + context.url.search,
      PRIMARY_ORIGIN
    );
    return context.redirect(redirectUrl.toString(), 301);
  }

  const response = await next();

  // Security Headers
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self)"
  );

  return response;
});
