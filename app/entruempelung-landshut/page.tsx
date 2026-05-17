import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Entrümpelung Landshut | Umzüge LAF – Wohnung, Keller & Sperrmüll",
  description:
    "Entrümpelung in Landshut mit Umzüge LAF: Wohnungsentrümpelung, Keller, Dachboden, Garage, Büro, Haushaltsauflösung und Sperrmüllentsorgung.",
  path: "/entruempelung-landshut",
  keywords: [
    "Entrümpelung Landshut",
    "Entrümpelungsfirma Landshut",
    "Wohnungsentrümpelung Landshut",
    "Haushaltsauflösung Landshut",
    "Sperrmüllentsorgung Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/entruempelung.jpg",
});

export default function EntruempelungLandshutPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Entrümpelung Landshut"
      path="/entruempelung-landshut"
      serviceName="Entrümpelung Landshut"
      serviceType="Entrümpelung"
      serviceDescription="Entrümpelung in Landshut mit Umzüge LAF: Wohnung, Keller, Dachboden, Garage, Büro, Haushaltsauflösung und Sperrmüllentsorgung."
      badge="Entrümpelung in Landshut & Umgebung"
      h1Top="Entrümpelung Landshut."
      h1Highlight="Sauber räumen."
      h1Bottom="Fair planen."
      intro="Umzüge LAF übernimmt Entrümpelungen in Landshut für Wohnungen, Keller, Dachböden, Garagen, Büros und Haushaltsauflösungen."
      image="/images/services/entruempelung.jpg"
      imageAlt="Entrümpelung Landshut mit Umzüge LAF"
      sectionKicker="Entrümpelung"
      sectionTitle="Wohnung, Keller, Garage oder Büro zuverlässig räumen lassen."
      sectionText="Ob einzelne Räume, komplette Wohnung oder größere Haushaltsauflösung: Wir klären Umfang, Zugang, Tragewege, Entsorgung und Termin vorab und planen die Entrümpelung transparent."
      benefits={[
        "Wohnungsentrümpelung",
        "Kellerentrümpelung",
        "Dachbodenentrümpelung",
        "Garagenentrümpelung",
        "Büroentrümpelung",
        "Sperrmüllentsorgung",
      ]}
      steps={[
        { title: "Anfrage senden", text: "Sie beschreiben Räume, Umfang, Adresse und gewünschten Termin." },
        { title: "Umfang einschätzen", text: "Wir klären Menge, Zugang, Etagen und mögliche Entsorgung." },
        { title: "Räumung planen", text: "Der Ablauf wird mit Ihnen transparent abgestimmt." },
        { title: "Sauber räumen", text: "Unser Team räumt zuverlässig und übergibt nach Absprache sauber." },
      ]}
      relatedServices={[
        { title: "Wohnungsauflösung Landshut", text: "Komplette Wohnung oder Haus zuverlässig auflösen lassen.", href: "/wohnungsaufloesung-landshut" },
        { title: "Sperrmüllentsorgung Landshut", text: "Sperrige Gegenstände und alte Möbel abholen lassen.", href: "/entruempelung/sperrmuellentsorgung" },
        { title: "Umzug Landshut", text: "Umzug und Entrümpelung bei Bedarf kombinieren.", href: "/umzug-landshut" },
      ]}
      faqs={[
        { q: "Was kostet eine Entrümpelung in Landshut?", a: "Die Kosten hängen von Umfang, Menge, Etage, Zugang, Entsorgung und Zeitaufwand ab. Nach Klärung der wichtigsten Daten kann Umzüge LAF ein Angebot erstellen." },
        { q: "Übernimmt Umzüge LAF auch Keller und Dachboden?", a: "Ja, Keller, Dachboden, Garage, Wohnung und Büro können entrümpelt werden." },
        { q: "Kann Entrümpelung mit Umzug kombiniert werden?", a: "Ja, Umzug und Entrümpelung können in einem Ablauf kombiniert werden." },
        { q: "Wird auch Sperrmüll entsorgt?", a: "Ja, Sperrmüllentsorgung und Abtransport sperriger Gegenstände sind möglich." },
      ]}
    />
  );
}
