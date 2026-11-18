import { company } from "../data/company";

const siteUrl = "https://umzuegelandshut.de";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export default function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: ServiceJsonLdProps) {
  const url = `${siteUrl}${path}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType,
    url,
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
    provider: {
      "@type": "MovingCompany",
      "@id": `${siteUrl}/#organization`,
      name: "Umzüge LAF Landshut",
      url: siteUrl,
      telephone: "+491629007565",
      email: "info@umzuege-laf.de",
      sameAs: company.sameAs,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ergoldinger Str. 15",
        postalCode: "84030",
        addressLocality: "Landshut",
        addressRegion: "BY",
        addressCountry: "DE",
      },
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "City",
        name: "Landshut",
      },
      seller: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
