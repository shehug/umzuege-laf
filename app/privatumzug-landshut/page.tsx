import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Privatumzug Landshut | Umzüge LAF – Wohnungsumzug & Hausumzug",
  description:
    "Privatumzug in Landshut mit Umzüge LAF: Wohnungsumzug, Hausumzug, Möbeltransport, Möbelmontage, Einpackservice und persönliche Planung.",
  path: "/privatumzug-landshut",
  keywords: [
    "Privatumzug Landshut",
    "Wohnungsumzug Landshut",
    "Hausumzug Landshut",
    "Umzug Wohnung Landshut",
    "Umzugsunternehmen Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/PU1.jpg",
});

export default function PrivatumzugLandshutPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Privatumzug Landshut"
      path="/privatumzug-landshut"
      serviceName="Privatumzug Landshut"
      serviceType="Privatumzug"
      serviceDescription="Privatumzug in Landshut mit Umzüge LAF: Wohnungsumzug, Hausumzug, Möbeltransport, Möbelmontage und Einpackservice."
      badge="Privatumzug in Landshut & Umgebung"
      h1Top="Privatumzug Landshut."
      h1Highlight="Wohnung oder Haus."
      h1Bottom="Stressfrei umziehen."
      intro="Umzüge LAF unterstützt Ihren Privatumzug in Landshut mit klarer Planung, sicherem Transport, Möbelmontage und persönlicher Betreuung."
      image="/images/services/PU1.jpg"
      imageAlt="Privatumzug Landshut mit Umzüge LAF"
      sectionKicker="Privatumzug"
      sectionTitle="Ihr Zuhause zieht um — wir kümmern uns um den Ablauf."
      sectionText="Ein privater Umzug bedeutet Organisation, Zeitdruck und viele Details. Wir klären Etagen, Zugang, Möbelmontage, Kartons und Transport vorab, damit Ihr Wohnungsumzug oder Hausumzug in Landshut sauber geplant ist."
      benefits={[
        "Wohnungsumzug",
        "Hausumzug",
        "Möbeltransport",
        "Möbelmontage",
        "Einpackservice",
        "Landshut & Umgebung",
      ]}
      steps={[
        { title: "Anfrage senden", text: "Sie nennen Startadresse, Zieladresse, Termin und ungefähren Umfang." },
        { title: "Umfang klären", text: "Wir besprechen Etage, Aufzug, Kartons, Möbelmontage und besondere Gegenstände." },
        { title: "Umzug planen", text: "Der Ablauf wird passend zu Ihrem Haushalt und Zeitfenster abgestimmt." },
        { title: "Sicher umziehen", text: "Unser Team transportiert Möbel und Kartons zuverlässig an den neuen Wohnort." },
      ]}
      relatedServices={[
        { title: "Umzug Landshut", text: "Allgemeine Umzugsleistungen für private und gewerbliche Kunden.", href: "/umzug-landshut" },
        { title: "Möbelmontage Landshut", text: "Möbel abbauen, transportieren und fachgerecht wieder aufbauen lassen.", href: "/umzuege/moebelmontage" },
        { title: "Einpackservice Landshut", text: "Kartons und empfindliche Gegenstände sorgfältig verpacken lassen.", href: "/umzuege/einpackservice" },
      ]}
      faqs={[
        { q: "Was kostet ein Privatumzug in Landshut?", a: "Die Kosten hängen von Umfang, Etage, Entfernung, Kartonanzahl, Möbelmontage und Zusatzleistungen ab. Nach den wichtigsten Angaben kann Umzüge LAF ein transparentes Angebot erstellen." },
        { q: "Hilft Umzüge LAF auch bei Möbelmontage?", a: "Ja, Möbel können auf Wunsch abgebaut, transportiert und am Zielort wieder aufgebaut werden." },
        { q: "Kann ich nur einzelne Möbel transportieren lassen?", a: "Ja, auch einzelne Möbeltransporte sind nach Absprache möglich." },
        { q: "Wann sollte ich meinen Privatumzug anfragen?", a: "Je früher, desto besser. Kurzfristige Termine sind je nach Verfügbarkeit ebenfalls möglich." },
      ]}
    />
  );
}
