import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Umzug Landshut | Umzüge LAF – privat & gewerblich umziehen",
  description:
    "Umzug in Landshut geplant? Umzüge LAF unterstützt bei Privatumzug, Firmenumzug, Möbelmontage, Einpackservice, Transport und Entrümpelung.",
  path: "/umzug-landshut",
  keywords: [
    "Umzug Landshut",
    "Umzüge Landshut",
    "Umzugsunternehmen Landshut",
    "Umzugsfirma Landshut",
    "Wohnungsumzug Landshut",
    "Firmenumzug Landshut",
    "Möbeltransport Landshut",
  ],
  image: "https://umzuegelandshut.de/images/hero/hero-umzug-landshut.jpg",
});

export default function UmzugLandshutPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Umzug Landshut"
      path="/umzug-landshut"
      serviceName="Umzug Landshut"
      serviceType="Umzug"
      serviceDescription="Umzüge LAF unterstützt private und gewerbliche Umzüge in Landshut mit Planung, Transport, Möbelmontage, Einpackservice und Entrümpelung."
      badge="Umzug in Landshut & Umgebung"
      h1Top="Umzug Landshut."
      h1Highlight="Klar geplant."
      h1Bottom="Sicher umgesetzt."
      intro="Ob Wohnungsumzug, Hausumzug, Firmenumzug oder Möbeltransport: Umzüge LAF plant und begleitet Ihren Umzug in Landshut zuverlässig, persönlich und sauber."
      image="/images/hero/hero-umzug-landshut.jpg"
      imageAlt="Umzug Landshut mit Umzüge LAF"
      sectionKicker="Umzug planen"
      sectionTitle="Ein guter Umzug beginnt mit klarer Vorbereitung."
      sectionText="Ein Umzug in Landshut bringt viele Fragen mit sich: Wie viele Kartons werden benötigt? Muss ein Schrank demontiert werden? Gibt es einen Aufzug? Wo kann der Transporter stehen? Umzüge LAF klärt diese Punkte vorab und plant den Ablauf passend zu Ihrem Bedarf."
      benefits={[
        "Persönliche Planung",
        "Privat- und Firmenumzüge",
        "Möbelmontage möglich",
        "Einpackservice auf Wunsch",
        "Entrümpelung kombinierbar",
        "Landshut & Umgebung",
      ]}
      steps={[
        { title: "Anfrage stellen", text: "Sie nennen Startadresse, Zieladresse, Terminwunsch, Etage und Umfang." },
        { title: "Umzug planen", text: "Wir klären Zugang, Parkmöglichkeiten, Möbelmontage, Kartons und besondere Gegenstände." },
        { title: "Sicher transportieren", text: "Unser Team transportiert Möbel, Kartons und Hausrat sorgfältig zum Zielort." },
        { title: "Sauber abschließen", text: "Auf Wunsch mit Möbelaufbau, Entsorgung, Entrümpelung oder weiteren Zusatzleistungen." },
      ]}
      relatedServices={[
        { title: "Umzugsunternehmen Landshut", text: "Zentrale Leistungsseite für Umzug, Transport, Montage und Entrümpelung.", href: "/umzugsunternehmen-landshut" },
        { title: "Privatumzug Landshut", text: "Wohnungsumzug oder Hausumzug in Landshut zuverlässig planen lassen.", href: "/privatumzug-landshut" },
        { title: "Firmenumzug Landshut", text: "Büro, Praxis oder Gewerbefläche strukturiert umziehen.", href: "/firmenumzug-landshut" },
        { title: "Entrümpelung Landshut", text: "Umzug und Entrümpelung bei Bedarf kombinieren.", href: "/entruempelung-landshut" },
      ]}
      faqs={[
        { q: "Was kostet ein Umzug in Landshut?", a: "Die Kosten hängen von Umfang, Entfernung, Etage, Kartonanzahl, Möbelmontage und Zusatzleistungen ab. Nach den wichtigsten Angaben kann Umzüge LAF ein transparentes Angebot erstellen." },
        { q: "Kann ich kurzfristig einen Umzug in Landshut anfragen?", a: "Ja, kurzfristige Umzüge sind je nach Verfügbarkeit möglich. Am schnellsten geht es telefonisch mit Startadresse, Zieladresse, Etage und gewünschtem Termin." },
        { q: "Übernimmt Umzüge LAF auch Möbelmontage?", a: "Ja, Möbel können auf Wunsch abgebaut, transportiert und am Zielort wieder aufgebaut werden." },
        { q: "Kann ein Umzug mit Entrümpelung kombiniert werden?", a: "Ja, Umzug und Entrümpelung können kombiniert werden, zum Beispiel bei Wohnungswechsel, Haushaltsauflösung oder Sperrmüllentsorgung." },
      ]}
    />
  );
}
