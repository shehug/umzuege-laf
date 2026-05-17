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
      "https://schema.org/Saturday"
    ],
    opens: "08:00",
    closes: "18:00"
  }
];

const areaServed = [
  { "@type": "City", name: "Landshut" },
  { "@type": "City", name: "Ergolding" },
  { "@type": "City", name: "Altdorf" },
  { "@type": "City", name: "Essenbach" },
  { "@type": "City", name: "Kumhausen" },
  { "@type": "City", name: "Vilsbiburg" },
  { "@type": "City", name: "Moosburg" },
  { "@type": "AdministrativeArea", name: "Landkreis Landshut" },
  { "@type": "State", name: "Bayern" }
];

const services = [
  {
    name: "Umzugsunternehmen Landshut",
    url: `${siteUrl}/umzuege`,
    description: "Professionelle Umzüge in Landshut und Umgebung mit Umzüge LAF."
  },
  {
    name: "Privatumzug Landshut",
    url: `${siteUrl}/umzuege/privatumzug`,
    description: "Privatumzug, Wohnungsumzug und Möbeltransport in Landshut."
  },
  {
    name: "Firmenumzug Landshut",
    url: `${siteUrl}/umzuege/firmenumzug`,
    description: "Firmenumzug, Büroumzug und Gewerbeumzug in Landshut."
  },
  {
    name: "Fernumzug Landshut",
    url: `${siteUrl}/umzuege/fernumzug`,
    description: "Fernumzug ab Landshut mit Planung, Transport und Möbelmontage."
  },
  {
    name: "Expressumzug Landshut",
    url: `${siteUrl}/umzuege/expressumzug`,
    description: "Kurzfristige Umzüge und schnelle Umzugshilfe in Landshut."
  },
  {
    name: "Einpackservice Landshut",
    url: `${siteUrl}/umzuege/einpackservice`,
    description: "Einpackservice und Verpackungsservice für Umzüge in Landshut."
  },
  {
    name: "Möbelmontage Landshut",
    url: `${siteUrl}/umzuege/moebelmontage`,
    description: "Möbel demontieren, transportieren und fachgerecht aufbauen lassen."
  },
  {
    name: "Entrümpelung Landshut",
    url: `${siteUrl}/entruempelung`,
    description: "Entrümpelung, Haushaltsauflösung und Sperrmüllentsorgung in Landshut."
  },
  {
    name: "Haushaltsauflösung Landshut",
    url: `${siteUrl}/entruempelung/haushaltsaufloesung`,
    description: "Haushaltsauflösung für Wohnung, Haus, Keller und Nachlass in Landshut."
  },
  {
    name: "Sperrmüllentsorgung Landshut",
    url: `${siteUrl}/entruempelung/sperrmuellentsorgung`,
    description: "Sperrmüll, Möbel und sperrige Gegenstände in Landshut abholen lassen."
  }
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
      image: `${siteUrl}/images/hero/hero-umzug-landshut.jpg`,
      description:
        "Umzüge LAF ist ein Umzugsunternehmen in Landshut für Privatumzüge, Firmenumzüge, Fernumzüge, Expressumzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage, Einpackservice, Lagerung und Sperrmüllentsorgung.",
      telephone: phone,
      email,
      vatID: "DE364728600",
      priceRange: "€€",
      openingHours: "Mo-Sa 08:00-18:00",
      openingHoursSpecification,
      address,
      areaServed,
      serviceArea: areaServed,
      founder: {
        "@type": "Person",
        name: legalName
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phone,
          email,
          contactType: "customer service",
          areaServed: "DE-BY",
          availableLanguage: ["de-DE"],
          hoursAvailable: openingHoursSpecification
        }
      ],
      sameAs: [
        "https://www.facebook.com/61561388244118/"
      ],
      knowsAbout: [
        "Umzugsunternehmen Landshut",
        "Umzug Landshut",
        "Umzüge Landshut",
        "Privatumzug Landshut",
        "Firmenumzug Landshut",
        "Entrümpelung Landshut",
        "Haushaltsauflösung Landshut",
        "Möbelmontage Landshut",
        "Sperrmüllentsorgung Landshut"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Umzugs- und Entrümpelungsleistungen in Landshut",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: service.url,
            description: service.description,
            provider: {
              "@id": `${siteUrl}/#localbusiness`
            },
            areaServed
          }
        }))
      }
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
        name: legalName
      },
      sameAs: [
        "https://www.facebook.com/61561388244118/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Umzüge LAF Landshut",
      alternateName: [
        "Umzüge LAF",
        "Umzugsunternehmen Landshut",
        "Umzüge Landshut"
      ],
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Umzugsunternehmen Landshut | Umzüge LAF",
      description:
        "Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Umzug, Privatumzug, Firmenumzug, Entrümpelung, Haushaltsauflösung, Möbelmontage und Sperrmüllentsorgung.",
      inLanguage: "de-DE",
      isPartOf: {
        "@id": `${siteUrl}/#website`
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/hero/hero-umzug-landshut.jpg`
      }
    }
  ]
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
