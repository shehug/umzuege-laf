import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.kellerentruempelung);

export default function KellerentruempelungPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Kellerentrümpelung Landshut"
      path="/entruempelung/kellerentruempelung"
      serviceName="Kellerentrümpelung Landshut"
      serviceType="Kellerentrümpelung"
      serviceDescription="Kellerentrümpelung in Landshut mit Umzüge LAF. Schnelle und saubere Räumung von Kellern, Speicherabteilen und Lagerräumen."
      badge="Besenreine Kellerräumung"
      h1Top="Kellerentrümpelung Landshut."
      h1Highlight="Schnell, gründlich & besenrein."
      h1Bottom="Wieder Platz schaffen."
      intro="Voller Keller oder altes Speicherabteil? Umzüge LAF räumt Ihren Keller in Landshut zuverlässig leer, transportiert alles ab und übergibt die Fläche besenrein."
      image="/images/services/ent3.jpg"
      imageAlt="Kellerentrümpelung von Umzüge LAF in Landshut"
      sectionKicker="Kellerräumung"
      sectionTitle="Platz und Ordnung im Untergeschoss."
      sectionText="Über die Jahre sammeln sich in Kellern schwere Möbel, alte Kartons, Elektrogeräte und Sperrmüll an. Wir packen an, tragen alles auch über enge Kellertreppen nach oben und entsorgen alles fachgerecht."
      benefits={[
        "Schnelle & besenreine Kellerräumung",
        "Tragen auch über schmale Treppen",
        "Fachgerechte & zertifizierte Entsorgung",
        "Transparente Festpreise ohne Nachforderungen",
        "Kombinierbar mit jedem Umzug",
        "Kurzfristige Termine in Landshut",
      ]}
      steps={[
        { title: "Anfrage senden", text: "Sie nennen uns Kellergröße, Adresse und den gewünschten Räumungstermin." },
        { title: "Festpreis erhalten", text: "Sie erhalten ein verbindliches Angebot inklusive aller Entsorgungskosten." },
        { title: "Räumung & Abtransport", text: "Unser Team räumt den Keller komplett leer und verlädt alle Gegenstände." },
        { title: "Besenreine Übergabe", text: "Wir kehren den Keller aus und übergeben ihn sauber und leer." },
      ]}
      relatedServices={[
        { title: "Entrümpelung Landshut", text: "Hauptseite für alle Entrümpelungsdienste in Landshut.", href: "/entruempelung-landshut" },
        { title: "Sperrmüllentsorgung", text: "Fachgerechte Abholung von Einzelmöbeln & Sperrgut.", href: "/entruempelung/sperrmuellentsorgung" },
        { title: "Wohnungsentrümpelung", text: "Komplette Wohnungsräumungen & Haushaltsauflösungen.", href: "/entruempelung/wohnungsentruempelung" },
      ]}
      faqs={[
        { q: "Muss ich vorher selbst sortieren?", a: "Nein, wir können den Keller komplett so übernehmen, wie er ist, und trennen alle Materialien fachgerecht." },
        { q: "Was kostet eine Kellerentrümpelung?", a: "Die Kosten richten sich nach Kellergröße und Füllmenge. Wir vereinbaren vorab einen garantierten Festpreis." },
        { q: "Werden auch alte Regale und Schränke demontiert?", a: "Ja, fest montierte Regale oder alte Holzschränke im Keller bauen wir vor Ort fachgerecht ab." },
      ]}
    />
  );
}
