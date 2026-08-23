import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.garagenentruempelung);

export default function GaragenentruempelungPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Garagenentrümpelung Landshut"
      path="/entruempelung/garagenentruempelung"
      serviceName="Garagenentrümpelung Landshut"
      serviceType="Garagenentrümpelung"
      serviceDescription="Garagenentrümpelung in Landshut mit Umzüge LAF. Schnelle und besenreine Räumung von Garagen, Schuppen und Abstellräumen."
      badge="Platz fürs Auto"
      h1Top="Garagenentrümpelung Landshut."
      h1Highlight="Schnell frei & sauber übergeben."
      h1Bottom="Wieder Platz in der Garage."
      intro="Garage voller alter Reifen, Werkzeuge, Kisten und Möbel? Umzüge LAF räumt Ihre Garage in Landshut zügig leer, entsorgt alles fachgerecht und schafft wieder Platz fürs Auto."
      image="/images/services/entruempelung.jpg"
      imageAlt="Garagenentrümpelung von Umzüge LAF in Landshut"
      sectionKicker="Garagenräumung"
      sectionTitle="Schnell wieder Platz und Ordnung."
      sectionText="Garagen werden schnell zur Rumpelkammer. Wir sortieren, tragen alte Reifen, Fahrräder, Werkbänke und Schrott nach draußen und übergeben die Garage besenrein."
      benefits={[
        "Schnelle & gründliche Garagenräumung",
        "Abtransport von Altreifen, Metall & Sperrmüll",
        "Besenreine Übergabe der Garagenfläche",
        "Transparente Festpreise ohne versteckte Kosten",
        "Kurzfristige Termine in ganz Landshut",
        "Kombinierbar mit Hausräumungen",
      ]}
      steps={[
        { title: "Garage anfragen", text: "Sie beschreiben kurz den Inhalt und den gewünschten Räumungstermin." },
        { title: "Festpreis erhalten", text: "Wir nennen Ihnen einen garantierten Festpreis inklusive Entsorgung." },
        { title: "Zügige Räumung", text: "Unser Team räumt alle Gegenstände aus und verlädt sie direkt." },
        { title: "Besenrein übergeben", text: "Die Garage wird sauber ausgefegt und leer an Sie übergeben." },
      ]}
      relatedServices={[
        { title: "Entrümpelung Landshut", text: "Hauptseite für alle Räumungsleistungen.", href: "/entruempelung-landshut" },
        { title: "Kellerentrümpelung", text: "Kellerräume und Abteile sauber räumen lassen.", href: "/entruempelung/kellerentruempelung" },
        { title: "Sperrmüllentsorgung", text: "Fachgerechte Abholung von Sperrmüll.", href: "/entruempelung/sperrmuellentsorgung" },
      ]}
      faqs={[
        { q: "Entsorgen Sie auch Altreifen und Autobatterien?", a: "Ja, wir entsorgen Reifen, Altmetall und Werkzeuge vorschriftsmäßig über zertifizierte Entsorger." },
        { q: "Muss ich während der Räumung anwesend sein?", a: "Es reicht, wenn Sie uns vor Beginn den Zugang öffnen und am Ende zur Übergabe da sind." },
        { q: "Wie schnell ist die Garage leer?", a: "Meistens innerhalb von 1–3 Stunden ist die gesamte Garage komplett leer und besenrein." },
      ]}
    />
  );
}
