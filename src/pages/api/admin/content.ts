import type { APIRoute } from "astro";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/adminAuth";
import { readSiteContent, writeSiteContent, type SiteContent } from "@/lib/siteContent";

export const prerender = false;

function isValidContent(content: Partial<SiteContent>) {
  return (
    typeof content.homeHeroTitle === "string" &&
    typeof content.homeHeroText === "string" &&
    typeof content.homeCtaText === "string" &&
    typeof content.phone === "string" &&
    typeof content.email === "string"
  );
}

export const GET: APIRoute = async ({ cookies }) => {
  const token = cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    return new Response(JSON.stringify({ message: "Nicht angemeldet." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const content = await readSiteContent();
  return new Response(JSON.stringify(content), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const token = cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    return new Response(JSON.stringify({ message: "Nicht angemeldet." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const content = await request.json();

  if (!isValidContent(content)) {
    return new Response(JSON.stringify({ message: "Ungültige Inhalte." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await writeSiteContent(content);

  return new Response(
    JSON.stringify({
      success: true,
      message: "Inhalte wurden gespeichert.",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
