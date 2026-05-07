import fs from "fs/promises";
import path from "path";

export type SiteContent = {
  homeHeroTitle: string;
  homeHeroText: string;
  homeCtaText: string;
  phone: string;
  email: string;
};

const defaultContent: SiteContent = {
  homeHeroTitle: "Umzüge LAF – Ihr Umzugsunternehmen in Landshut",
  homeHeroText:
    "Zuverlässige Umzüge, Entrümpelungen, Möbelmontage und Einpackservice in Landshut und Umgebung.",
  homeCtaText: "Kostenlose Anfrage stellen",
  phone: "0162 900 75 65",
  email: "info@umzuege-laf.de",
};

const contentPath = path.join(process.cwd(), "data", "siteContent.json");

export async function readSiteContent(): Promise<SiteContent> {
  try {
    const file = await fs.readFile(contentPath, "utf8");
    return {
      ...defaultContent,
      ...JSON.parse(file),
    };
  } catch {
    return defaultContent;
  }
}

export async function writeSiteContent(content: SiteContent) {
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, JSON.stringify(content, null, 2), "utf8");
}
