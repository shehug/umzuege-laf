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

const geo = {
  "@type": "GeoCoordinates",
  latitude: 48.5529,
  longitude: 12.1648,
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
  { "@type": "AdministrativeArea", name: "Landshut Altstadt" },
  { "@type": "AdministrativeArea", name: "Landshut Nikola" },
  { "@type": "AdministrativeArea", name: "Landshut Wolfgang" },
  { "@type": "AdministrativeArea", name: "Landshut Achdorf" },
  { "@type": "AdministrativeArea", name: "Landshut Münchnerau" },
  { "@type": "AdministrativeArea", name: "Landshut Schönbrunn" },
  { "@type": "AdministrativeArea", name: "Landshut Peter & Paul" },
  { "@type": "City", name: "Ergolding" },
  { "@type": "City", name: "Altdorf" },
  { "@type": "City", name: "Essenbach" },
  { "@type": "City", name: "Kumhausen" },
  { "@type": "City", name: "Vilsbiburg" },
  { "@type": "City", name: "Moosburg an der Isar" },
  { "@type": "AdministrativeArea", name: "Landkreis Landshut" },
  { "@type": "State", name: "Bayern" }
];

const services = [
  {
    name: "Umzugsunternehmen Landshut",
    url: `${siteUrl}/umzugsunternehmen-landshut`,
    description: "Professionelle Umzüge in Landshut und Umgebung mit Umzüge LAF."
  },
  {
    name: "Privatumzug Landshut",
    url: `${siteUrl}/privatumzug-landshut`,
    description: "Privatumzug, Wohnungsumzug und Möbeltransport in Landshut."
  },
  {
    name: "Firmenumzug Landshut",
    url: `${siteUrl}/firmenumzug-landshut`,
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
    url: `${siteUrl}/entruempelung-landshut`,
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

const baseStructuredData = {
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
      geo,
      hasMap: "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut",
      areaServed,
      serviceArea: areaServed,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1"
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michael B." },
          datePublished: "2024-03-15",
          reviewBody: "Absolut spitzenmäßige Arbeit! Das Team von Umzüge LAF war überpünktlich, extrem freundlich und hat all unsere Möbel und empfindlichen Gläser vorsichtig transportiert. Der vereinbarte Festpreis wurde centgenau eingehalten.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sabine W." },
          datePublished: "2024-02-28",
          reviewBody: "Sehr schneller und unkomplizierter Kontakt. Der gesamte 3-Zimmer-Umzug inklusive Küchen- und Schrankmontage war an einem Vormittag erledigt. Tolle Truppe, kann ich jedem in Landshut nur wärmstens empfehlen!",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Thomas K." },
          datePublished: "2024-01-20",
          reviewBody: "Wir haben unseren Gewerbeumzug und die Entrümpelung der alten Räume mit Umzüge LAF gemacht. Strukturierte Planung, keine Ausfallzeiten und besenreine Übergabe. Großes Lob an Herrn Kalludra und sein Team.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
        }
      ],
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
        "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut",
        "https://www.umzuege-laf.de",
        "https://umzuege-laf.de",
        "https://www.facebook.com/61561388244118/",
        "https://www.gelbeseiten.de/gsbiz/aece8f96-e961-4a60-b646-a30f2f40f9af",
        "https://www.dasoertliche.de/Themen/LAF-Umz%C3%BCge-Landshut-Industriegebiet-Ergoldinger-Str",
        "https://www.11880.com/branchenbuch/landshut-isar/060441364B113012317/laf-umzuege-kurierdienst.html",
        "https://www.cylex.de/firma-home/umzuege-laf-16102146.html"
      ],
      knowsAbout: [
        "Umzüge Landshut",
        "Umzugsunternehmen Landshut",
        "Umzugsfirma Landshut",
        "Umzug Landshut",
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
      alternateName: ["LAF Umzüge", "Umzüge LAF"],
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
        "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut",
        "https://www.umzuege-laf.de",
        "https://umzuege-laf.de",
        "https://www.facebook.com/61561388244118/",
        "https://www.gelbeseiten.de/gsbiz/aece8f96-e961-4a60-b646-a30f2f40f9af",
        "https://www.dasoertliche.de/Themen/LAF-Umz%C3%BCge-Landshut-Industriegebiet-Ergoldinger-Str",
        "https://www.11880.com/branchenbuch/landshut-isar/060441364B113012317/laf-umzuege-kurierdienst.html",
        "https://www.cylex.de/firma-home/umzuege-laf-16102146.html"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Umzüge LAF Landshut",
      alternateName: [
        "LAF Umzüge",
        "Umzüge LAF",
        "Umzugsunternehmen Landshut",
        "Umzüge Landshut"
      ],
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
};

export interface SeoJsonLdProps {
  currentUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
}

export default function SeoJsonLd({
  currentUrl = siteUrl,
  pageTitle = "Umzüge Landshut | Umzugsunternehmen & Umzugsfirma » LAF",
  pageDescription = "Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen und Ihre Umzugsfirma in Landshut für Privatumzug, Firmenumzug, Möbelmontage und Entrümpelung zum Festpreis.",
  pageImage = `${siteUrl}/images/hero/hero-umzug-landshut.jpg`,
}: SeoJsonLdProps = {}) {
  const pageId = `${currentUrl}#webpage`;
  const dynamicGraph = [
    ...baseStructuredData["@graph"],
    {
      "@type": "WebPage",
      "@id": pageId,
      url: currentUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "de-DE",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: pageImage,
      },
    },
  ];

  const fullData = {
    "@context": "https://schema.org",
    "@graph": dynamicGraph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(fullData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
