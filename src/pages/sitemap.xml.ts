import type { APIRoute } from "astro";

export const prerender = false;

const baseUrl = "https://umzuegelandshut.de";

const routes = [
  { path: "", priority: "1.0", changeFrequency: "weekly" },
  { path: "/umzug-landshut", priority: "1.0", changeFrequency: "weekly" },
  { path: "/privatumzug-landshut", priority: "0.95", changeFrequency: "weekly" },
  { path: "/firmenumzug-landshut", priority: "0.95", changeFrequency: "weekly" },
  { path: "/entruempelung-landshut", priority: "0.95", changeFrequency: "weekly" },
  { path: "/wohnungsaufloesung-landshut", priority: "0.9", changeFrequency: "weekly" },
  { path: "/umzugsunternehmen-landshut", priority: "1.0", changeFrequency: "weekly" },
  { path: "/leistungen", priority: "0.95", changeFrequency: "monthly" },
  { path: "/umzuege", priority: "0.95", changeFrequency: "monthly" },
  { path: "/umzuege/fernumzug", priority: "0.85", changeFrequency: "monthly" },
  { path: "/umzuege/expressumzug", priority: "0.85", changeFrequency: "monthly" },
  { path: "/umzuege/einpackservice", priority: "0.8", changeFrequency: "monthly" },
  { path: "/umzuege/moebelmontage", priority: "0.8", changeFrequency: "monthly" },
  { path: "/umzuege/lagerung", priority: "0.8", changeFrequency: "monthly" },
  { path: "/entruempelung/wohnungsentruempelung", priority: "0.9", changeFrequency: "monthly" },
  { path: "/entruempelung/kellerentruempelung", priority: "0.85", changeFrequency: "monthly" },
  { path: "/entruempelung/dachbodenentruempelung", priority: "0.85", changeFrequency: "monthly" },
  { path: "/entruempelung/garagenentruempelung", priority: "0.85", changeFrequency: "monthly" },
  { path: "/entruempelung/bueroentruempelung", priority: "0.85", changeFrequency: "monthly" },
  { path: "/entruempelung/sperrmuellentsorgung", priority: "0.85", changeFrequency: "monthly" },
  { path: "/faq", priority: "0.75", changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: "0.7", changeFrequency: "monthly" },
  { path: "/kontakt", priority: "0.9", changeFrequency: "monthly" },
  { path: "/impressum", priority: "0.35", changeFrequency: "yearly" },
  { path: "/datenschutz", priority: "0.35", changeFrequency: "yearly" },
];

export const GET: APIRoute = async () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
