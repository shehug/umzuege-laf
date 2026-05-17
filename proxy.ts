import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "umzuegelandshut.de";

const REDIRECT_HOSTS = new Set([
  "www.umzuegelandshut.de",
  "umzuege-laf.de",
  "www.umzuege-laf.de",
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0] ?? "";

  if (!REDIRECT_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = PRIMARY_HOST;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/:path*",
};
