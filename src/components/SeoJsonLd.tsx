const siteUrl = "https://umzuegelandshut.de";

const companyName = "Umzüge LAF";
const legalName = "Fahri Kalludra";
const phone = "+491629007565";
const email = "info@umzuegelandshut.de";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Ergoldinger Str. 15",
  postalCode: "84030",
  addressLocality: "Landshut",
  addressRegion: "BY",
  addressCountry: "DE",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 48.5674,
  longitude: 12.1604,
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
    ],
    opens: "08:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["https://schema.org/Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
];

const postalCodes = ["84028", "84030", "84032", "84034", "84036", "84003"];
const coreCities = [
  "Landshut",
  "Ergolding",
  "Altdorf",
  "Kumhausen",
  "Essenbach",
  "Vilsbiburg",
  "Moosburg an der Isar",
  "Bruckberg",
];

const areaServed = [
  ...postalCodes.map((code) => ({
    "@type": "PostalAddress",
    postalCode: code,
    addressCountry: "DE",
  })),
  ...coreCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  { "@type": "AdministrativeArea", name: "Landkreis Landshut" },
  { "@type": "State", name: "Bayern" },
];

const catalogServices = [
  {
    name: "Privatumzug Landshut",
    url: `${siteUrl}/privatumzug-landshut`,
    description: "Wohnungsumzug, Hausumzug, Möbeltransport, Tragearbeiten und Einpackservice in Landshut.",
  },
  {
    name: "Firmenumzug Landshut",
    url: `${siteUrl}/firmenumzug-landshut`,
    description: "Professioneller Firmenumzug, Büroumzug und Gewerbeumzug in Landshut mit minimaler Ausfallzeit.",
  },
  {
    name: "Seniorenumzug Landshut",
    url: `${siteUrl}/seniorenumzug-landshut`,
    description: "Einfühlsamer Seniorenumzug in Landshut mit Rundum-Sorglos-Service und Beratung zur Pflegekasse.",
  },
  {
    name: "Möbelmontage",
    url: `${siteUrl}/umzuege/moebelmontage`,
    description: "Fachgerechte Möbelmontage, Demontage und sicherer Wiederaufbau von Schränken, Betten und Küchen.",
  },
  {
    name: "Entrümpelung Landshut",
    url: `${siteUrl}/entruempelung-landshut`,
    description: "Wohnungsauflösung, Keller- und Hausentrümpelung in Landshut, besenrein zum Festpreis.",
  },
  {
    name: "Halteverbotszone Landshut",
    url: `${siteUrl}/umzuege/halteverbotszone`,
    description: "Amtliche Beantragung und rechtssichere Aufstellung von Halteverbotszonen für Ihren Umzug in Landshut.",
  },
  {
    name: "Kleintransporte Landshut",
    url: `${siteUrl}/kleintransporte-landshut`,
    description: "Schnelle und flexible Kleintransporte, Einzelmöbeltransport und Möbeltaxi in Landshut.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface SeoJsonLdProps {
  currentUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  faqs?: FaqItem[];
}

export default function SeoJsonLd({
  currentUrl = siteUrl,
  pageTitle = "Umzugsunternehmen Landshut » Umzüge zum Festpreis | LAF",
  pageDescription = "Ihr Umzugsunternehmen in Landshut (5,0★ bei 65+ Bewertungen). Privat- & Firmenumzüge, Möbelmontage & Entrümpelung zum 100% Festpreis. Angebot in 4 Std. anfordern!",
  pageImage = `${siteUrl}/images/hero/hero-umzug-landshut.webp`,
  faqs = [],
}: SeoJsonLdProps = {}) {
  const pageId = `${currentUrl}#webpage`;

  const movingCompanyNode: Record<string, unknown> = {
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    legalName,
    alternateName: ["LAF Umzüge", "Umzüge LAF", "Umzugsunternehmen Landshut", "Umzugsfirma Landshut"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo/laf-logo.png`,
    image: `${siteUrl}/images/hero/Hero.webp`,
    description:
      "Umzüge LAF ist Ihr führendes Umzugsunternehmen und Ihre Umzugsfirma in Landshut für Privatumzüge, Firmenumzüge, Seniorenumzüge, Möbelmontage, Entrümpelungen und Halteverbotszonen zum verbindlichen Festpreis.",
    telephone: phone,
    email,
    vatID: "DE364728600",
    priceRange: "€€",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "65",
      bestRating: "5",
      worstRating: "1",
    },
    address,
    geo,
    hasMap: "https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF+Ergoldinger+Str.+15+84030+Landshut",
    areaServed,
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
        availableLanguage: ["de-DE"],
        hoursAvailable: openingHoursSpecification,
      },
    ],
    sameAs: [
      "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut",
      "https://www.facebook.com/61561388244118/",
      "https://www.gelbeseiten.de/gsbiz/aece8f96-e961-4a60-b646-a30f2f40f9af",
      "https://www.dasoertliche.de/Themen/LAF-Umz%C3%BCge-Landshut-Industriegebiet-Ergoldinger-Str",
      "https://www.11880.com/branchenbuch/landshut-isar/060441364B113012317/laf-umzuege-kurierdienst.html",
      "https://www.cylex.de/firma-home/umzuege-laf-16102146.html",
    ],
    knowsAbout: [
      "Umzugsunternehmen Landshut",
      "Umzugsfirma Landshut",
      "Umzug Landshut",
      "Umzüge Landshut",
      "Privatumzug Landshut",
      "Firmenumzug Landshut",
      "Seniorenumzug Landshut",
      "Möbelmontage Landshut",
      "Halteverbotszone Landshut",
      "Entrümpelung Landshut",
      "Haushaltsauflösung Landshut",
      "Umzugskosten Landshut",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Umzugs- und Entrümpelungsleistungen in Landshut",
      itemListElement: catalogServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: service.url,
          description: service.description,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
          areaServed,
        },
      })),
    },
  };

  const graphNodes: Record<string, unknown>[] = [
    movingCompanyNode,
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Umzüge LAF Landshut",
      alternateName: ["LAF Umzüge", "Umzüge LAF", "Umzugsunternehmen Landshut"],
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: pageImage,
      },
    },
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${currentUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  const fullData = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
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
