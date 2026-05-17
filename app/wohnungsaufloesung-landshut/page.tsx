import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Wohnungsauflösung Landshut | Umzüge LAF – Haushalt auflösen",
  description:
    "Wohnungsauflösung in Landshut mit Umzüge LAF: Wohnung, Haus, Keller, Möbel, Sperrmüll und Haushaltsauflösung zuverlässig räumen lassen.",
  path: "/wohnungsaufloesung-landshut",
  keywords: [
    "Wohnungsauflösung Landshut",
    "Haushaltsauflösung Landshut",
    "Wohnung räumen Landshut",
    "Haus räumen Landshut",
    "Entrümpelung Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/ent4.jpg",
});

export default function WohnungsaufloesungLandshutPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Wohnungsauflösung Landshut"
      path="/wohnungsaufloesung-landshut"
      serviceName="Wohnungsauflösung Landshut"
      serviceType="Wohnungsauflösung"
      serviceDescription="Wohnungsauflösung in Landshut mit Umzüge LAF: Wohnung, Haus, Keller, Möbel und Sperrmüll zuverlässig räumen lassen."
      badge="Wohnungsauflösung in Landshut & Umgebung"
      h1Top="Wohnungsauflösung Landshut."
      h1Highlight="Komplett räumen."
      h1Bottom="Sauber übergeben."
      intro="Umzüge LAF unterstützt bei Wohnungsauflösungen und Haushaltsauflösungen in Landshut — zuverlässig, diskret und strukturiert geplant."
      image="/images/services/ent4.jpg"
      imageAlt="Wohnungsauflösung Landshut mit Umzüge LAF"
      sectionKicker="Wohnungsauflösung"
      sectionTitle="Wohnung oder Haus auflösen lassen — mit klarem Ablauf."
      sectionText="Eine Wohnungsauflösung braucht Vertrauen, Struktur und saubere Planung. Wir klären Räume, Möbel, Keller, Nebenflächen, Sperrmüll und gewünschte Übergabe vorab."
      benefits={[
        "Wohnung räumen",
        "Haus räumen",
        "Keller und Nebenräume",
        "Möbel abtransportieren",
        "Sperrmüllentsorgung",
        "Übergabe nach Absprache",
      ]}
      steps={[
        { title: "Situation schildern", text: "Sie nennen Adresse, Räume, Umfang und gewünschten Zeitraum." },
        { title: "Umfang klären", text: "Wir besprechen Möbel, Keller, Sperrmüll und besondere Anforderungen." },
        { title: "Ablauf planen", text: "Die Räumung wird transparent und passend zur Situation abgestimmt." },
        { title: "Wohnung räumen", text: "Unser Team räumt zuverlässig und übergibt nach Absprache sauber." },
      ]}
      relatedServices={[
        { title: "Entrümpelung Landshut", text: "Wohnung, Keller, Garage oder Büro zuverlässig räumen lassen.", href: "/entruempelung-landshut" },
        { title: "Sperrmüllentsorgung Landshut", text: "Alte Möbel und sperrige Gegenstände abholen lassen.", href: "/entruempelung/sperrmuellentsorgung" },
        { title: "Umzugsunternehmen Landshut", text: "Umzug, Montage und Räumung aus einer Hand.", href: "/umzugsunternehmen-landshut" },
      ]}
      faqs={[
        { q: "Was kostet eine Wohnungsauflösung in Landshut?", a: "Die Kosten hängen von Wohnungsgröße, Menge, Etage, Zugang, Entsorgung und gewünschtem Leistungsumfang ab." },
        { q: "Kann auch ein kompletter Haushalt aufgelöst werden?", a: "Ja, komplette Haushaltsauflösungen für Wohnungen und Häuser sind möglich." },
        { q: "Werden Möbel und Sperrmüll mitgenommen?", a: "Ja, Möbel, sperrige Gegenstände und Sperrmüll können nach Absprache abtransportiert werden." },
        { q: "Ist eine kurzfristige Wohnungsauflösung möglich?", a: "Je nach Verfügbarkeit kann auch kurzfristig ein Termin abgestimmt werden." },
      ]}
    />
  );
}
