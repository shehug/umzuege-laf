import { defineMiddleware } from "astro:middleware";

const PRIMARY_ORIGIN = "https://umzuegelandshut.de";

const REDIRECT_HOSTS = new Set([
  "www.umzuegelandshut.de",
  "umzuege-laf.de",
  "www.umzuege-laf.de",
]);

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host")?.toLowerCase().split(":")[0] ?? "";

  if (REDIRECT_HOSTS.has(host)) {
    const redirectUrl = new URL(
      context.url.pathname + context.url.search,
      PRIMARY_ORIGIN
    );
    return context.redirect(redirectUrl.toString(), 301);
  }

  return next();
});
