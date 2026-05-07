import type { Metadata } from "next";

const siteUrl = "https://umzuegelandshut.de";

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  keywords?: ReadonlyArray<string>;
  image?: string;
  noIndex?: boolean;
};

const defaultKeywords: ReadonlyArray<string> = [
  "Umzüge LAF",
  "Umzugsunternehmen Landshut",
  "Umzug Landshut",
  "Umzüge Landshut",
  "Umzugsfirma Landshut",
  "Entrümpelung Landshut",
  "Landshut und Umgebung",
];

const defaultImage = `${siteUrl}/images/logo/laf-logo.png`;

export function createSeoMetadata(page: SeoPage): Metadata {
  const canonicalUrl = `${siteUrl}${page.path}`;
  const imageUrl = page.image ?? defaultImage;

  return {
    title: {
      absolute: page.title,
    },

    description: page.description,

    keywords: [...defaultKeywords, ...(page.keywords ?? [])],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "de_DE",
      url: canonicalUrl,
      siteName: "Umzüge LAF",
      title: page.title,
      description: page.description,
      images: [
        {
          url: imageUrl,
          alt: page.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },

    robots: {
      index: !page.noIndex,
      follow: !page.noIndex,
      googleBot: {
        index: !page.noIndex,
        follow: !page.noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const seoPages = {
  home: {
    title: "Umzüge LAF | Umzugsunternehmen & Entrümpelung in Landshut",
    description:
      "Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Privatumzug, Firmenumzug, Entrümpelung, Haushaltsauflösung, Möbelmontage und Sperrmüllentsorgung.",
    path: "/",
    keywords: [
      "Umzugsunternehmen Landshut",
      "Umzug Landshut",
      "Entrümpelung Landshut",
      "Haushaltsauflösung Landshut",
    ],
  },

  leistungen: {
    title: "Leistungen | Umzüge, Entrümpelung & Montage in Landshut",
    description:
      "Alle Leistungen von Umzüge LAF: Umzüge, Entrümpelung, Haushaltsauflösung, Möbelmontage, Einpackservice, Lagerung und Sperrmüllentsorgung in Landshut.",
    path: "/leistungen",
    keywords: [
      "Umzugsleistungen Landshut",
      "Entrümpelungsfirma Landshut",
      "Möbelmontage Landshut",
    ],
  },

  umzuege: {
    title: "Umzüge Landshut | Privatumzug, Firmenumzug & Fernumzug",
    description:
      "Umzüge LAF plant und realisiert Umzüge in Landshut und Umgebung: Privatumzug, Firmenumzug, Fernumzug, Expressumzug, Einpackservice und Möbelmontage.",
    path: "/umzuege",
    keywords: [
      "Umzüge Landshut",
      "Umzug Landshut",
      "Umzugsfirma Landshut",
      "Umzugsunternehmen Landshut",
    ],
  },

  privatumzug: {
    title: "Privatumzug Landshut | Umzüge LAF",
    description:
      "Privatumzug in Landshut mit Umzüge LAF: zuverlässige Planung, sicherer Transport, Möbelmontage und saubere Umsetzung für Ihren Wohnungsumzug.",
    path: "/umzuege/privatumzug",
    keywords: [
      "Privatumzug Landshut",
      "Wohnungsumzug Landshut",
      "Umzug Wohnung Landshut",
    ],
    image: `${siteUrl}/images/services/PU1.jpg`,
  },

  firmenumzug: {
    title: "Firmenumzug Landshut | Büro & Gewerbe umziehen",
    description:
      "Firmenumzug in Landshut mit Umzüge LAF: strukturierte Planung für Büro, Praxis, Gewerbefläche, Arbeitsplätze, Möbel und Technik.",
    path: "/umzuege/firmenumzug",
    keywords: [
      "Firmenumzug Landshut",
      "Büroumzug Landshut",
      "Gewerbeumzug Landshut",
      "Praxisumzug Landshut",
    ],
    image: `${siteUrl}/images/services/GU1.jpg`,
  },

  fernumzug: {
    title: "Fernumzug Landshut | Umzüge über größere Entfernung",
    description:
      "Fernumzug mit Umzüge LAF: zuverlässige Planung, sicherer Transport und strukturierte Umsetzung für Umzüge ab Landshut über größere Entfernung.",
    path: "/umzuege/fernumzug",
    keywords: [
      "Fernumzug Landshut",
      "Umzug deutschlandweit",
      "Umzug Bayern",
      "Umzug lange Strecke",
    ],
  },

  expressumzug: {
    title: "Expressumzug Landshut | Kurzfristig umziehen mit LAF",
    description:
      "Expressumzug in Landshut: Umzüge LAF unterstützt bei kurzfristigen Umzügen, schnellen Transporten und eiligen Umzugssituationen.",
    path: "/umzuege/expressumzug",
    keywords: [
      "Expressumzug Landshut",
      "kurzfristiger Umzug Landshut",
      "schneller Umzug Landshut",
    ],
    image: `${siteUrl}/images/services/Express.jpg`,
  },

  einpackservice: {
    title: "Einpackservice Landshut | Verpackungsservice für Umzüge",
    description:
      "Einpackservice in Landshut mit Umzüge LAF: fachgerechtes Verpacken von Geschirr, Kleidung, Büchern, Deko und empfindlichen Gegenständen.",
    path: "/umzuege/einpackservice",
    keywords: [
      "Einpackservice Landshut",
      "Verpackungsservice Landshut",
      "Umzugskartons packen lassen",
    ],
    image: `${siteUrl}/images/services/Verpacken.jpg`,
  },

  moebelmontage: {
    title: "Möbelmontage Landshut | Demontage & Aufbau beim Umzug",
    description:
      "Möbelmontage in Landshut mit Umzüge LAF: fachgerechte Demontage und Montage von Schränken, Betten, Regalen und Möbeln beim Umzug.",
    path: "/umzuege/moebelmontage",
    keywords: [
      "Möbelmontage Landshut",
      "Möbel demontieren Landshut",
      "Schrank aufbauen Landshut",
    ],
    image: `${siteUrl}/images/services/Montage.jpg`,
  },

  lagerung: {
    title: "Lagerung Landshut | Möbel & Kartons zwischenlagern",
    description:
      "Lagerung und Zwischenlagerung in Landshut mit Umzüge LAF: Möbel, Kartons und Hausrat flexibel einlagern und später wieder liefern lassen.",
    path: "/umzuege/lagerung",
    keywords: [
      "Lagerung Landshut",
      "Möbel einlagern Landshut",
      "Zwischenlagerung Landshut",
    ],
    image: `${siteUrl}/images/services/Lagerung.jpg`,
  },

  entruempelung: {
    title: "Entrümpelung Landshut | Wohnung, Keller, Garage & Sperrmüll",
    description:
      "Entrümpelung in Landshut mit Umzüge LAF: Wohnungsentrümpelung, Haushaltsauflösung, Keller, Dachboden, Garage, Büro und Sperrmüllentsorgung.",
    path: "/entruempelung",
    keywords: [
      "Entrümpelung Landshut",
      "Entrümpelungsfirma Landshut",
      "Wohnung entrümpeln Landshut",
    ],
  },

  wohnungsentruempelung: {
    title: "Wohnungsentrümpelung Landshut | Wohnung räumen lassen",
    description:
      "Wohnungsentrümpelung in Landshut mit Umzüge LAF: Wohnung zuverlässig räumen, Möbel abtransportieren und Räume nach Absprache sauber übergeben.",
    path: "/entruempelung/wohnungsentruempelung",
    keywords: [
      "Wohnungsentrümpelung Landshut",
      "Wohnung räumen Landshut",
      "Wohnung entrümpeln Landshut",
    ],
    image: `${siteUrl}/images/services/ent3.jpg`,
  },

  haushaltsaufloesung: {
    title: "Haushaltsauflösung Landshut | Wohnung & Haus auflösen",
    description:
      "Haushaltsauflösung in Landshut mit Umzüge LAF: komplette Haushalte, Wohnungen, Häuser, Keller und Nebenräume zuverlässig räumen lassen.",
    path: "/entruempelung/haushaltsaufloesung",
    keywords: [
      "Haushaltsauflösung Landshut",
      "Nachlassauflösung Landshut",
      "Haus räumen Landshut",
      "Wohnung auflösen Landshut",
    ],
    image: `${siteUrl}/images/services/ent4.jpg`,
  },

  kellerentruempelung: {
    title: "Kellerentrümpelung Landshut | Keller räumen lassen",
    description:
      "Kellerentrümpelung in Landshut mit Umzüge LAF: Keller, Kellerabteile, Kartons, Regale und sperrige Gegenstände zuverlässig räumen lassen.",
    path: "/entruempelung/kellerentruempelung",
    keywords: [
      "Kellerentrümpelung Landshut",
      "Keller räumen Landshut",
      "Kellerabteil entrümpeln",
    ],
    image: `${siteUrl}/images/services/ent2.jpg`,
  },

  dachbodenentruempelung: {
    title: "Dachbodenentrümpelung Landshut | Dachboden räumen",
    description:
      "Dachbodenentrümpelung in Landshut mit Umzüge LAF: Kartons, Kisten, alte Möbel und Altbestände unter dem Dach zuverlässig räumen lassen.",
    path: "/entruempelung/dachbodenentruempelung",
    keywords: [
      "Dachbodenentrümpelung Landshut",
      "Dachboden räumen Landshut",
      "Dachboden entrümpeln",
    ],
  },

  garagenentruempelung: {
    title: "Garagenentrümpelung Landshut | Garage räumen lassen",
    description:
      "Garagenentrümpelung in Landshut mit Umzüge LAF: Reifen, Werkzeug, Regale, Kisten und Altbestände aus der Garage zuverlässig entfernen lassen.",
    path: "/entruempelung/garagenentruempelung",
    keywords: [
      "Garagenentrümpelung Landshut",
      "Garage räumen Landshut",
      "Garage entrümpeln",
    ],
  },

  bueroentruempelung: {
    title: "Büroentrümpelung Landshut | Büro & Gewerbe räumen",
    description:
      "Büroentrümpelung in Landshut mit Umzüge LAF: Büromöbel, Akten, Kartons, Technik und Gewerbeflächen strukturiert räumen lassen.",
    path: "/entruempelung/bueroentruempelung",
    keywords: [
      "Büroentrümpelung Landshut",
      "Büro räumen Landshut",
      "Gewerbefläche entrümpeln Landshut",
    ],
    image: `${siteUrl}/images/services/ent3.jpg`,
  },

  sperrmuellentsorgung: {
    title: "Sperrmüllentsorgung Landshut | Sperrmüll abholen lassen",
    description:
      "Sperrmüllentsorgung in Landshut mit Umzüge LAF: alte Möbel, Matratzen, Regale und sperrige Gegenstände zuverlässig abholen lassen.",
    path: "/entruempelung/sperrmuellentsorgung",
    keywords: [
      "Sperrmüllentsorgung Landshut",
      "Sperrmüll abholen Landshut",
      "Möbel entsorgen Landshut",
    ],
  },

  faq: {
    title: "FAQ | Fragen zu Umzug & Entrümpelung in Landshut",
    description:
      "Häufige Fragen zu Umzügen, Entrümpelung, Haushaltsauflösung, Möbelmontage, Einpackservice und Sperrmüllentsorgung mit Umzüge LAF.",
    path: "/faq",
    keywords: [
      "Umzug Fragen Landshut",
      "Entrümpelung Fragen",
      "Umzüge LAF FAQ",
    ],
  },

  ueberUns: {
    title: "Über uns | Umzüge LAF Landshut",
    description:
      "Erfahren Sie mehr über Umzüge LAF aus Landshut: Ihr zuverlässiger Ansprechpartner für Umzüge, Entrümpelungen und Haushaltsauflösungen.",
    path: "/ueber-uns",
    keywords: [
      "Umzüge LAF",
      "Umzugsunternehmen Landshut",
      "Entrümpelung Landshut",
    ],
  },

  kontakt: {
    title: "Kontakt | Umzüge LAF in Landshut anfragen",
    description:
      "Kontaktieren Sie Umzüge LAF in Landshut für Umzug, Entrümpelung, Haushaltsauflösung, Möbelmontage, Einpackservice oder Sperrmüllentsorgung.",
    path: "/kontakt",
    keywords: [
      "Umzug Angebot Landshut",
      "Entrümpelung Angebot Landshut",
      "Umzüge LAF Kontakt",
    ],
  },

  impressum: {
    title: "Impressum | Umzüge LAF Landshut",
    description:
      "Impressum von Umzüge LAF, Ihrem Umzugsunternehmen und Entrümpelungsservice in Landshut.",
    path: "/impressum",
    keywords: ["Impressum Umzüge LAF"],
  },

  datenschutz: {
    title: "Datenschutz | Umzüge LAF Landshut",
    description:
      "Datenschutzerklärung von Umzüge LAF für die Website umzuegelandshut.de.",
    path: "/datenschutz",
    keywords: ["Datenschutz Umzüge LAF"],
  },
} satisfies Record<string, SeoPage>;
