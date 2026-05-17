import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Firmenumzug Landshut | Umzüge LAF – Büro, Praxis & Gewerbe",
  description:
    "Firmenumzug in Landshut mit Umzüge LAF: Büroumzug, Praxisumzug, Gewerbeumzug, Möbeltransport, Arbeitsplatzumzug und strukturierte Planung.",
  path: "/firmenumzug-landshut",
  keywords: [
    "Firmenumzug Landshut",
    "Büroumzug Landshut",
    "Praxisumzug Landshut",
    "Gewerbeumzug Landshut",
    "Umzugsunternehmen Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/GU1.jpg",
});

export default function FirmenumzugLandshutPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Firmenumzug Landshut"
      path="/firmenumzug-landshut"
      serviceName="Firmenumzug Landshut"
      serviceType="Firmenumzug"
      serviceDescription="Firmenumzug in Landshut mit Umzüge LAF: Büroumzug, Praxisumzug, Gewerbeumzug, Möbeltransport und strukturierte Planung."
      badge="Firmenumzug in Landshut & Umgebung"
      h1Top="Firmenumzug Landshut."
      h1Highlight="Strukturiert geplant."
      h1Bottom="Schnell weiterarbeiten."
      intro="Umzüge LAF unterstützt Firmen, Praxen, Büros und Gewerbeflächen in Landshut mit organisierter Planung und zuverlässiger Umsetzung."
      image="/images/services/GU1.jpg"
      imageAlt="Firmenumzug Landshut mit Umzüge LAF"
      sectionKicker="Firmenumzug"
      sectionTitle="Wenn Ihr Unternehmen umzieht, muss der Ablauf sitzen."
      sectionText="Ein Firmenumzug braucht klare Reihenfolge, kurze Ausfallzeiten und saubere Koordination. Wir berücksichtigen Möbel, Arbeitsplätze, Technik, Akten, Etagen, Zugang und Zeitfenster."
      benefits={[
        "Büroumzug",
        "Praxisumzug",
        "Gewerbeumzug",
        "Arbeitsplatzumzug",
        "Möbelmontage",
        "Planung nach Zeitfenster",
      ]}
      steps={[
        { title: "Anfrage stellen", text: "Sie nennen Standort, Zieladresse, Zeitraum und ungefähren Umfang." },
        { title: "Betriebsablauf klären", text: "Wir besprechen Möbel, Technik, Arbeitsplätze, Etagen und Zugang." },
        { title: "Umzug strukturieren", text: "Transport, Montage und Einrichtung werden logisch geplant." },
        { title: "Gewerbeumzug durchführen", text: "Unser Team setzt den Umzug sauber und organisiert um." },
      ]}
      relatedServices={[
        { title: "Umzugsunternehmen Landshut", text: "Zentrale Leistungsseite für Umzüge, Montage und Entrümpelung.", href: "/umzugsunternehmen-landshut" },
        { title: "Möbelmontage Landshut", text: "Demontage und Aufbau von Büromöbeln und Einrichtung.", href: "/umzuege/moebelmontage" },
        { title: "Entrümpelung Landshut", text: "Alte Möbel, Akten, Lagerflächen oder Nebenräume räumen lassen.", href: "/entruempelung-landshut" },
      ]}
      faqs={[
        { q: "Was kostet ein Firmenumzug in Landshut?", a: "Die Kosten hängen von Umfang, Arbeitsplätzen, Möbeln, Technik, Etagen, Entfernung und Zeitfenster ab. Nach Klärung der Daten kann Umzüge LAF ein Angebot erstellen." },
        { q: "Kann der Firmenumzug außerhalb der Arbeitszeit stattfinden?", a: "Je nach Verfügbarkeit und Umfang kann ein passendes Zeitfenster abgestimmt werden." },
        { q: "Übernimmt Umzüge LAF auch Büromöbel?", a: "Ja, Büromöbel können abgebaut, transportiert und am neuen Standort wieder aufgebaut werden." },
        { q: "Sind auch Praxis- oder Gewerbeumzüge möglich?", a: "Ja, neben Büros unterstützt Umzüge LAF auch Praxen, Ladenflächen und Gewerberäume." },
      ]}
    />
  );
}
