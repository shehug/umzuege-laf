import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/adminAuth";
import { readSiteContent, writeSiteContent, SiteContent } from "@/lib/siteContent";

export const runtime = "nodejs";

function isValidContent(content: Partial<SiteContent>) {
  return (
    typeof content.homeHeroTitle === "string" &&
    typeof content.homeHeroText === "string" &&
    typeof content.homeCtaText === "string" &&
    typeof content.phone === "string" &&
    typeof content.email === "string"
  );
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    return NextResponse.json({ message: "Nicht angemeldet." }, { status: 401 });
  }

  const content = await readSiteContent();

  return NextResponse.json(content);
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    return NextResponse.json({ message: "Nicht angemeldet." }, { status: 401 });
  }

  const content = await request.json();

  if (!isValidContent(content)) {
    return NextResponse.json(
      { message: "Ungültige Inhalte." },
      { status: 400 }
    );
  }

  await writeSiteContent(content);

  return NextResponse.json({
    success: true,
    message: "Inhalte wurden gespeichert.",
  });
}
