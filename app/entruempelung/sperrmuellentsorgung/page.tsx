import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.sperrmuellentsorgung);

export default function SperrmuellentsorgungPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Sperrmüllentsorgung Landshut"
      path="/entruempelung/sperrmuellentsorgung"
      serviceName="Sperrmüllentsorgung Landshut"
      serviceType="Sperrmüllentsorgung"
      serviceDescription="Sperrmüllentsorgung in Landshut mit Umzüge LAF. Schnelle Abholung von alten Möbeln, Matratzen, Elektrogeräten und Sperrgut."
      badge="Schnelle Abholung"
      h1Top="Sperrmüllentsorgung Landshut."
      h1Highlight="Schnell abgeholt & fachgerecht entsorgt."
      h1Bottom="Direkt ab Wohnung."
      intro="Alte Möbel, Matratzen, defekte Elektrogeräte oder sperriger Hausrat? Umzüge LAF holt Ihren Sperrmüll in Landshut direkt aus Wohnung, Keller oder Garten ab und entsorgt alles vorschriftsmäßig."
      image="/images/services/entruempelung.jpg"
      imageAlt="Sperrmüllentsorgung von Umzüge LAF in Landshut"
      sectionKicker="Sperrmüllabholung"
      sectionTitle="Kein schweres Schleppen – wir holen alles ab."
      sectionText="Sie müssen schwere Schränke oder sperrige Gegenstände nicht an die Straße stellen. Unser Team trägt alles direkt aus Ihrer Wohnung oder Ihrem Keller nach draußen, verlädt es in unsere Transporter und fährt zum Wertstoffhof."
      benefits={[
        "Abholung direkt aus der Wohnung oder dem Keller",
        "Kein Herausstellen an die Straße nötig",
        "Demontage sperriger Möbel vor Ort",
        "Fachgerechte & zertifizierte Entsorgung",
        "Kurzfristige Termine möglich",
        "Transparente Festpreise",
      ]}
      steps={[
        { title: "Sperrmüll mitteilen", text: "Sie beschreiben kurz, welche Gegenstände abgeholt werden sollen." },
        { title: "Festpreis abstimmen", text: "Sie erhalten einen verbindlichen Pauschalpreis inklusive Lohn und Entsorgungsgebühr." },
        { title: "Abholung vor Ort", text: "Unser Team trägt alle Gegenstände vorsichtig und zügig nach draußen." },
        { title: "Ordnungsgemäße Entsorgung", text: "Alles wird umweltgerecht über offizielle Recyclingstellen entsorgt." },
      ]}
      relatedServices={[
        { title: "Entrümpelung Landshut", text: "Komplette Wohnungs- & Hausentrümpelungen.", href: "/entruempelung-landshut" },
        { title: "Kellerentrümpelung", text: "Kellerräume und Abteile sauber räumen lassen.", href: "/entruempelung/kellerentruempelung" },
        { title: "Privatumzug Landshut", text: "Wohnungsumzug mit Möbelmontage und Transport.", href: "/privatumzug-landshut" },
      ]}
      faqs={[
        { q: "Muss der Sperrmüll am Straßenrand stehen?", a: "Nein, wir holen alle Möbel und Gegenstände direkt aus Ihren Räumen ab." },
        { q: "Welche Gegenstände nehmen Sie mit?", a: "Möbel, Matratzen, Teppiche, Regale, Elektrogeräte, Fahrräder und allgemeinen Sperrmüll." },
        { q: "Wie schnell kann die Abholung erfolgen?", a: "Oft innerhalb von 24–48 Stunden nach Ihrer telefonischen oder schriftlichen Anfrage." },
      ]}
    />
  );
}
