import { defineMiddleware } from "astro:middleware";

const PRIMARY_ORIGIN = "https://umzuegelandshut.de";

const REDIRECT_HOSTS = new Set([
  "www.umzuegelandshut.de",
  "umzuege-laf.de",
  "www.umzuege-laf.de",
]);

// Content-Security-Policy:
// - 'unsafe-inline' scripts are required by Google Tag Manager (inline event handlers + dynamic script injection)
// - googletagmanager.com, google-analytics.com, doubleclick.net for GTM/Ads/GA
// - maps.googleapis.com / maps.gstatic.com for Google Maps embeds
// - wa.me / api.whatsapp.com for the WhatsApp float button
// - app.cal.com for the Cal.com booking widget
// - fonts.googleapis.com / fonts.gstatic.com for Google Fonts if used by any dependency
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://app.cal.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com",
  "frame-src https://www.googletagmanager.com https://app.cal.com https://maps.google.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://app.cal.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

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
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self)"
  );
  response.headers.set("Content-Security-Policy", CSP);

  return response;
});

