import { company } from "../data/company";

const siteUrl = "https://umzuegelandshut.de";

const companyName = company.name;
const legalName = company.owner;
const phone = company.phone;
const email = company.email;

const address = {
  "@type": "PostalAddress",
  streetAddress: company.street,
  postalCode: company.zip,
  addressLocality: company.city,
  addressCountry: company.country,
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: company.geo.latitude,
  longitude: company.geo.longitude,
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

const areaServed = [
  "Landshut",
  "Ergolding",
  "Altdorf",
  "Kumhausen",
  "Essenbach",
  "Vilsbiburg",
  "Moosburg an der Isar",
  "Dingolfing",
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
    url: `${siteUrl}/halteverbotszone-landshut`,
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

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoJsonLdProps {
  currentUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  faqs?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
}

export default function SeoJsonLd({
  currentUrl = siteUrl,
  pageTitle = "Umzüge Landshut » Umzugsunternehmen & Umzugsfirma | LAF",
  pageDescription = "★ 5.0 Sterne Umzugsunternehmen & Umzugsfirma in Landshut: Privatumzug, Firmenumzug, Montage & Entrümpelung zum Festpreis. Angebot in 4 Std. anfordern!",
  pageImage = `${siteUrl}/images/hero/hero-umzug-landshut.webp`,
  faqs = [],
  breadcrumbs = [],
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
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael B.",
        },
        datePublished: "2026-08-15",
        reviewBody:
          "Absolut spitzenmäßige Arbeit! Das Team von Umzüge LAF war überpünktlich, extrem freundlich und hat all unsere Möbel und empfindlichen Gläser vorsichtig transportiert. Der vereinbarte Festpreis wurde centgenau eingehalten.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sabine W.",
        },
        datePublished: "2026-08-28",
        reviewBody:
          "Sehr schneller und unkomplizierter Kontakt. Der gesamte 3-Zimmer-Umzug inklusive Küchen- und Schrankmontage war an einem Vormittag erledigt. Tolle Truppe, kann ich jedem in Landshut nur wärmstens empfehlen!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Thomas K.",
        },
        datePublished: "2026-09-05",
        reviewBody:
          "Wir haben unseren Gewerbeumzug und die Entrümpelung der alten Räume mit Umzüge LAF gemacht. Strukturierte Planung, keine Ausfallzeiten und besenreine Übergabe. Großes Lob an Herrn Kalludra und sein Team.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
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
    sameAs: company.sameAs,
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

  if (breadcrumbs && breadcrumbs.length > 0) {
    graphNodes.push({
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path.startsWith("http") ? item.path : `${siteUrl}${item.path}`,
      })),
    });
  }

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
