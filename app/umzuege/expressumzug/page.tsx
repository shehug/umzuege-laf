import { createSeoMetadata, seoPages } from "../../seo";
import LocalSeoLanding from "../../../components/LocalSeoLanding";

export const metadata = createSeoMetadata(seoPages.expressumzug);

export default function ExpressumzugPage() {
  return (
    <LocalSeoLanding
      breadcrumbName="Expressumzug Landshut"
      path="/umzuege/expressumzug"
      serviceName="Expressumzug Landshut"
      serviceType="Expressumzug"
      serviceDescription="Expressumzug und kurzfristige Umzüge in Landshut mit Umzüge LAF. Schnelle Hilfe, flexible Termine und sofortige Einsatzbereitschaft."
      badge="Kurzfristig & Dringend"
      h1Top="Expressumzug Landshut."
      h1Highlight="Schnell & unkompliziert."
      h1Bottom="Sofort einsatzbereit."
      intro="Wenn es schnell gehen muss: Umzüge LAF hilft kurzfristig bei spontanen Umzügen, dringenden Möbeltransporten und Notfällen in Landshut und Umgebung."
      image="/images/services/Express.jpg"
      imageAlt="Expressumzug von Umzüge LAF in Landshut"
      sectionKicker="Soforthilfe"
      sectionTitle="Schnelle Reaktionszeit, volle Zuverlässigkeit."
      sectionText="Manchmal muss ein Umzug oder ein Möbeltransport innerhalb weniger Tage oder sogar von heute auf morgen stattfinden. Durch unsere flexible Teamplanung können wir oft sofort einspringen und Ihren Umzug zügig und sicher abwickeln."
      benefits={[
        "Kurzfristige Termine nach Verfügbarkeit",
        "Schnelle telefonische Zusage & Preisabstimmung",
        "Eingespieltes Team mit eigenem Transporter",
        "Tragehilfe & sicherer Transport",
        "Vollständige Transportversicherung",
        "Transparente Festpreise ohne Notfall-Wucher",
      ]}
      steps={[
        { title: "Direkt anrufen", text: "Rufen Sie uns sofort unter 0162 900 75 65 an und nennen Sie Ihren Wunschtermin." },
        { title: "Verfügbarkeit prüfen", text: "Wir prüfen sofort unsere Teamkapazitäten und nennen Ihnen direkt einen Festpreis." },
        { title: "Sofortiger Einsatz", text: "Unser Team rückt pünktlich an und wickelt den Transport zügig und sorgfältig ab." },
        { title: "Erfolgreicher Einzug", text: "Alles wird sicher am Zielort abgeliefert, damit Sie schnell wieder zur Ruhe kommen." },
      ]}
      relatedServices={[
        { title: "Privatumzug Landshut", text: "Klassischer Wohnungsumzug in Landshut und Umgebung.", href: "/privatumzug-landshut" },
        { title: "Möbelmontage", text: "Schneller Ab- und Aufbau wichtiger Möbel.", href: "/umzuege/moebelmontage" },
        { title: "Entrümpelung Landshut", text: "Kurzfristige Wohnungsräumung und Sperrmüllabholung.", href: "/entruempelung-landshut" },
      ]}
      faqs={[
        { q: "Wie kurzfristig kann ein Expressumzug stattfinden?", a: "Je nach aktueller Auftragslage oft schon am nächsten Werktag oder innerhalb von 24–48 Stunden. Rufen Sie am besten direkt an." },
        { q: "Kostet ein kurzfristiger Umzug extra?", a: "Wir arbeiten mit fairen und transparenten Preisen. Es gibt bei uns keine versteckten Notfall-Aufschläge." },
        { q: "Können auch nur einzelne schwere Möbel transportiert werden?", a: "Ja, wir übernehmen auch den Express-Transport von einzelnen Sofas, Schränken oder Waschmaschinen." },
      ]}
    />
  );
}
