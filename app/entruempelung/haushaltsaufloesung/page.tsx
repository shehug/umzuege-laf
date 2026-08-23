import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.haushaltsaufloesung);

export default function HaushaltsaufloesungPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Haushaltsauflösung Landshut"
      path="/entruempelung/haushaltsaufloesung"
      serviceName="Haushaltsauflösung Landshut"
      serviceType="Haushaltsauflösung"
      serviceDescription="Haushaltsauflösung in Landshut mit Umzüge LAF. Diskret, pietätvoll, sauber und besenrein für Wohnungen und Häuser."
      badge="Diskret & Zuverlässig"
      h1Top="Haushaltsauflösung Landshut."
      h1Highlight="Diskret, respektvoll & besenrein."
      h1Bottom="Komplett organisiert."
      intro="Haushaltsauflösung oder Nachlassregelung? Umzüge LAF unterstützt Sie in Landshut mit Feingefühl, transparenter Planung und einer vollständigen, besenreinen Räumung."
      image="/images/services/entruempelung.jpg"
      imageAlt="Haushaltsauflösung von Umzüge LAF in Landshut"
      sectionKicker="Wohnungs- & Hausauflösung"
      sectionTitle="Zuverlässige Entlastung in jeder Lebenslage."
      sectionText="Eine Haushaltsauflösung ist oft mit emotionalen oder zeitlichen Belastungen verbunden. Wir nehmen Ihnen die schwere Arbeit komplett ab: Vom Sortieren und Tragen über den Abtransport bis zur besenreinen Übergabe."
      benefits={[
        "Diskrete & respektvolle Durchführung",
        "Komplette Räumung inkl. Keller & Speicher",
        "Besenreine Übergabe für Eigentümer & Makler",
        "Transparenter Festpreis ohne Überraschungen",
        "Kostenlose Besichtigung vor Ort",
        "Fachgerechte & zertifizierte Entsorgung",
      ]}
      steps={[
        { title: "Kostenlose Besichtigung", text: "Wir besichtigen das Objekt vor Ort in Landshut und besprechen alle Details." },
        { title: "Verbindlicher Festpreis", text: "Sie erhalten ein transparentes Komplettangebot inklusive aller Nebenkosten." },
        { title: "Sorgfältige Räumung", text: "Unser Team räumt Möbel, Hausrat, Textilien und Sperrmüll zügig und sauber aus." },
        { title: "Besenreine Übergabe", text: "Alle Räume werden gründlich ausgefegt und übergabebereit übergeben." },
      ]}
      relatedServices={[
        { title: "Entrümpelung Landshut", text: "Hauptseite für alle Entrümpelungsdienste.", href: "/entruempelung-landshut" },
        { title: "Kellerentrümpelung", text: "Kellerräume und Abteile sauber räumen lassen.", href: "/entruempelung/kellerentruempelung" },
        { title: "Privatumzug Landshut", text: "Umzug in eine neue Wohnung oder Seniorenresidenz.", href: "/privatumzug-landshut" },
      ]}
      faqs={[
        { q: "Wie schnell kann eine Haushaltsauflösung starten?", a: "Nach einer kurzen Vor-Ort-Besichtigung können wir oft innerhalb weniger Tage beginnen." },
        { q: "Werden Wertgegenstände berücksichtigt?", a: "Ja, alle Gegenstände, die Sie behalten oder verkaufen möchten, werden vorab gesichert." },
        { q: "Muss ich am Räumungstag selbst vor Ort sein?", a: "Nein, Sie können uns einfach den Schlüssel übergeben und kommen am Ende zur gemeinsamen Abnahme." },
      ]}
    />
  );
}
