import type { MetadataRoute } from "next";

const baseUrl = "https://umzuegelandshut.de";

const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/umzug-landshut",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/privatumzug-landshut",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/firmenumzug-landshut",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/entruempelung-landshut",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/wohnungsaufloesung-landshut",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/umzugsunternehmen-landshut",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/leistungen",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege/fernumzug",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege/expressumzug",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege/einpackservice",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege/moebelmontage",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/umzuege/lagerung",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/wohnungsentruempelung",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/kellerentruempelung",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/dachbodenentruempelung",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/garagenentruempelung",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/bueroentruempelung",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/entruempelung/sperrmuellentsorgung",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/faq",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/ueber-uns",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/kontakt",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/impressum",
    priority: 0.35,
    changeFrequency: "yearly",
  },
  {
    path: "/datenschutz",
    priority: 0.35,
    changeFrequency: "yearly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
