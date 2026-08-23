import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.einpackservice);

export default function EinpackservicePage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Einpackservice Landshut"
      path="/umzuege/einpackservice"
      serviceName="Einpackservice Landshut"
      serviceType="Einpackservice"
      serviceDescription="Einpackservice und Verpackungsservice in Landshut mit Umzüge LAF. Sorgfältiges Einpacken von Geschirr, Kleidung, Hausrat und Technik."
      badge="Transportsicher Verpackt"
      h1Top="Einpackservice Landshut."
      h1Highlight="Sorgfältig & sicher verpackt."
      h1Bottom="Voller Komfort."
      intro="Sparen Sie sich tagelanges Kistenpacken: Umzüge LAF verpackt Ihren gesamten Hausrat, Geschirr, Gläser, Kleidung und sensible Technik fachgerecht und transportsicher."
      image="/images/services/Verpackung.jpg"
      imageAlt="Einpackservice von Umzüge LAF in Landshut"
      sectionKicker="Verpackungsservice"
      sectionTitle="Jedes Stück bestens geschützt."
      sectionText="Das fachgerechte Verpacken ist der wichtigste Schutz vor Transportschäden. Wir bringen professionelle Umzugskartons, Seidenpapier, Luftpolsterfolie und Kleiderboxen mit und verpacken alles systematisch und beschriftet."
      benefits={[
        "Professionelles Verpackungsmaterial inklusive",
        "Systematische Beschriftung aller Kartons",
        "Spezialschutz für Glas & Porzellan",
        "Kleiderboxen für knitterfreien Transport",
        "Vollständige Transportversicherung",
        "Kombinierbar mit jedem Umzug",
      ]}
      steps={[
        { title: "Bedarf erfassen", text: "Wir schätzen die benötigte Menge an Kartons und Schutzmaterialien ab." },
        { title: "Material anliefern", text: "Wir bringen alle Kartons, Folien und Kisten pünktlich zum Wunschtermin mit." },
        { title: "Sorgfältig einpacken", text: "Unser Team verpackt Raum für Raum strukturiert und transportsicher." },
        { title: "Sicher transportieren", text: "Am neuen Wohnort werden die Kartons direkt in die richtigen Räume gestellt." },
      ]}
      relatedServices={[
        { title: "Privatumzug Landshut", text: "Kompletter Wohnungsumzug mit Trageservice und Transport.", href: "/privatumzug-landshut" },
        { title: "Möbelmontage", text: "Fachgerechter Abbau und Aufbau Ihrer Möbel.", href: "/umzuege/moebelmontage" },
        { title: "Lagerung", text: "Sichere Zwischenlagerung von Kartons und Möbeln.", href: "/umzuege/lagerung" },
      ]}
      faqs={[
        { q: "Muss ich Umzugskartons selbst kaufen?", a: "Nein, bei unserem Einpackservice bringen wir alle benötigten Kartons, Seidenpapier, Kleiderboxen und Polstermaterialien direkt mit." },
        { q: "Werden die Kartons beschriftet?", a: "Ja, wir beschriften jeden Karton nach Raum und Inhalt, damit am Zielort alles sofort an den richtigen Platz kommt." },
        { q: "Bieten Sie auch einen Auspackservice an?", a: "Ja, auf Wunsch packen wir am Zielort alle Kartons wieder aus und entsorgen das gebrauchte Verpackungsmaterial." },
      ]}
    />
  );
}
