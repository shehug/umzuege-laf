const siteUrl = "https://umzuegelandshut.de";

const companyName = "Umzüge LAF";
const legalName = "Fahri Kalludra";
const phone = "+491629007565";
const email = "info@umzuege-laf.de";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Ergoldinger Str. 15",
  postalCode: "84030",
  addressLocality: "Landshut",
  addressRegion: "Bayern",
  addressCountry: "DE",
};

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
      "https://schema.org/Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
];

const services = [
  {
    name: "Privatumzug",
    url: `${siteUrl}/umzuege/privatumzug`,
    description: "Privatumzug in Landshut und Umgebung mit Umzüge LAF.",
  },
  {
    name: "Firmenumzug",
    url: `${siteUrl}/umzuege/firmenumzug`,
    description: "Strukturierter Firmenumzug in Landshut und Umgebung.",
  },
  {
    name: "Fernumzug",
    url: `${siteUrl}/umzuege/fernumzug`,
    description: "Fernumzug mit Planung, Transport und zuverlässiger Umsetzung.",
  },
  {
    name: "Expressumzug",
    url: `${siteUrl}/umzuege/expressumzug`,
    description: "Kurzfristige Expressumzüge in Landshut und Umgebung.",
  },
  {
    name: "Einpackservice",
    url: `${siteUrl}/umzuege/einpackservice`,
    description: "Einpackservice und Verpackungsservice für sichere Umzüge.",
  },
  {
    name: "Möbelmontage",
    url: `${siteUrl}/umzuege/moebelmontage`,
    description: "Möbelmontage und Demontage im Rahmen Ihres Umzugs.",
  },
  {
    name: "Lagerung",
    url: `${siteUrl}/umzuege/lagerung`,
    description: "Flexible Lagerung und Zwischenlagerung für Möbel und Kartons.",
  },
  {
    name: "Entrümpelung",
    url: `${siteUrl}/entruempelung`,
    description: "Entrümpelung in Landshut und Umgebung durch Umzüge LAF.",
  },
  {
    name: "Wohnungsentrümpelung",
    url: `${siteUrl}/entruempelung/wohnungsentruempelung`,
    description: "Wohnungsentrümpelung in Landshut und Umgebung.",
  },
  {
    name: "Haushaltsauflösung",
    url: `${siteUrl}/entruempelung/haushaltsaufloesung`,
    description: "Haushaltsauflösung für Wohnungen, Häuser und Nachlässe.",
  },
  {
    name: "Kellerentrümpelung",
    url: `${siteUrl}/entruempelung/kellerentruempelung`,
    description: "Kellerentrümpelung für Keller, Kellerabteile und Lagerräume.",
  },
  {
    name: "Dachbodenentrümpelung",
    url: `${siteUrl}/entruempelung/dachbodenentruempelung`,
    description: "Dachbodenentrümpelung für Dachböden, Kisten und Altbestände.",
  },
  {
    name: "Garagenentrümpelung",
    url: `${siteUrl}/entruempelung/garagenentruempelung`,
    description:
      "Garagenentrümpelung für Garagen, Regale, Reifen und Altbestände.",
  },
  {
    name: "Büroentrümpelung",
    url: `${siteUrl}/entruempelung/bueroentruempelung`,
    description: "Büroentrümpelung für Büroflächen, Praxen und Gewerberäume.",
  },
  {
    name: "Sperrmüllentsorgung",
    url: `${siteUrl}/entruempelung/sperrmuellentsorgung`,
    description: "Sperrmüllentsorgung und Abholung sperriger Gegenstände.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${siteUrl}/#localbusiness`,
      name: companyName,
      legalName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo/laf-logo.png`,
      image: `${siteUrl}/images/logo/laf-logo.png`,
      description:
        "Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen in Landshut für Privatumzüge, Firmenumzüge, Fernumzüge, Expressumzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage, Einpackservice, Lagerung und Sperrmüllentsorgung.",
      telephone: phone,
      email,
      vatID: "DE364728600",
      priceRange: "$$",
      openingHours: "Mo-Sa 08:00-18:00",
      openingHoursSpecification,
      address,
      areaServed: [
        {
          "@type": "City",
          name: "Landshut",
        },
        {
          "@type": "AdministrativeArea",
          name: "Landshut und Umgebung",
        },
        {
          "@type": "State",
          name: "Bayern",
        },
      ],
      serviceArea: {
        "@type": "AdministrativeArea",
        name: "Landshut und Umgebung",
      },
      founder: {
        "@type": "Person",
        name: legalName,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phone,
          email,
          contactType: "customer service",
          areaServed: "DE-BY",
          availableLanguage: ["de"],
          hoursAvailable: openingHoursSpecification,
        },
      ],
      sameAs: [
        "https://umzuege-laf.de",
        "https://www.facebook.com/61561388244118/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen von Umzüge LAF",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: service.url,
            description: service.description,
            provider: {
              "@id": `${siteUrl}/#localbusiness`,
            },
            areaServed: {
              "@type": "City",
              name: "Landshut",
            },
          },
        })),
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: companyName,
      legalName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo/laf-logo.png`,
      email,
      telephone: phone,
      vatID: "DE364728600",
      address,
      founder: {
        "@type": "Person",
        name: legalName,
      },
      sameAs: [
        "https://umzuege-laf.de",
        "https://www.facebook.com/61561388244118/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Umzüge LAF | Landshut",
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Umzüge LAF | Umzugsunternehmen & Entrümpelung in Landshut",
      description:
        "Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen in Landshut für Umzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage, Einpackservice und Sperrmüllentsorgung.",
      inLanguage: "de-DE",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Leistungen",
          item: `${siteUrl}/leistungen`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Umzüge",
          item: `${siteUrl}/umzuege`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Entrümpelung",
          item: `${siteUrl}/entruempelung`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Kontakt",
          item: `${siteUrl}/kontakt`,
        },
      ],
    },
  ],
};

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
