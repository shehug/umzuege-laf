import { createSeoMetadata } from "../seo";
import LocalSeoLanding from "../../components/LocalSeoLanding";

export const metadata = createSeoMetadata({
  title: "Umzug Landshut » Ihre zuverlässige Umzugsfirma | Umzüge LAF",
  description:
    "★ 5.0 Sterne für Ihren Umzug in Landshut: Ihre Umzugsfirma & Ihr Umzugsunternehmen für Privatumzug, Firmenumzug, Montage & Entrümpelung. Jetzt Festpreis-Angebot anfordern!",
  path: "/umzug-landshut",
  keywords: [
    "Umzug Landshut",
    "Umzüge Landshut",
    "Umzugsfirma Landshut",
    "Umzugsunternehmen Landshut",
    "Umzugsservice Landshut",
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
      serviceDescription="Umzüge LAF ist Ihre professionelle Umzugsfirma in Landshut für Privatumzug, Firmenumzug, Möbelmontage, Einpackservice und Entrümpelung."
      badge="Ihre 5.0 Sterne Umzugsfirma"
      h1Top="Umzug Landshut."
      h1Highlight="Ihre erfahrene Umzugsfirma."
      h1Bottom="Stressfrei & zum Festpreis."
      intro="Ob Wohnungsumzug, Hausumzug, Firmenumzug oder Möbeltransport: Als zuverlässige Umzugsfirma in Landshut plant und begleitet Umzüge LAF Ihren Umzug pünktlich, versichert und mit transparenter Festpreis-Garantie."
      image="/images/hero/hero-umzug-landshut.jpg"
      imageAlt="Umzugsfirma für Umzug in Landshut - Umzüge LAF"
      sectionKicker="Umzugsfirma Landshut"
      sectionTitle="Stressfreie Umzüge mit Ihrer lokalen Umzugsfirma."
      sectionText="Ein Umzug in Landshut bringt viele Fragen mit sich: Wie viele Umzugskartons werden benötigt? Müssen Schränke demontiert werden? Wo kann der Transporter halten? Als erfahrene Umzugsfirma und Umzugsunternehmen in Landshut klären wir alle Details vorab und sorgen für einen reibungslosen Ablauf von Haustür zu Haustür."
      benefits={[
        "100% Festpreis-Garantie ohne Überraschungen",
        "Privatumzüge & Firmenumzüge in Landshut & Region",
        "Fachgerechte Möbelmontage & Küchenabbau",
        "Sorgfältiger Einpackservice auf Wunsch",
        "Umzug & Entrümpelung aus einer Hand",
        "Vollkaskoversichert & pünktlich",
      ]}
      steps={[
        { title: "Kostenlose Anfrage stellen", text: "Sie nennen Startadresse, Zieladresse, Terminwunsch, Etage und Umfang." },
        { title: "Festpreis-Angebot erhalten", text: "Wir kalkulieren transparent und verbindlich inklusive aller gewünschten Leistungen." },
        { title: "Sorgfältiger Transport", text: "Unsere geschulten Möbelpacker transportieren Ihre Möbel und Kartons geschützt ins neue Zuhause." },
        { title: "Aufbau & besenreine Übergabe", text: "Auf Wunsch mit Möbelmontage, Lampenanschluss und Entsorgung alter Möbel." },
      ]}
      relatedServices={[
        { title: "Umzugsunternehmen Landshut", text: "Zentrale Leistungsseite für Umzug, Transport, Montage und Entrümpelung.", href: "/umzugsunternehmen-landshut" },
        { title: "Privatumzug Landshut", text: "Wohnungsumzug oder Hausumzug in Landshut zuverlässig planen lassen.", href: "/privatumzug-landshut" },
        { title: "Firmenumzug Landshut", text: "Büro, Praxis oder Gewerbefläche strukturiert umziehen.", href: "/firmenumzug-landshut" },
        { title: "Entrümpelung Landshut", text: "Umzug und Entrümpelung bei Bedarf kombinieren.", href: "/entruempelung-landshut" },
      ]}
      faqs={[
        { q: "Was kostet ein Umzug mit einer Umzugsfirma in Landshut?", a: "Die Kosten hängen von Wohnungsgröße, Etage, Entfernung und Zusatzleistungen wie Möbelmontage ab. Bei Umzüge LAF erhalten Sie nach einer kurzen Besichtigung ein verbindliches Festpreis-Angebot." },
        { q: "Kann ich kurzfristig einen Umzug in Landshut anfragen?", a: "Ja, wir bieten auch Express- und kurzfristige Umzüge an. Rufen Sie uns am besten direkt unter 0162 900 75 65 an." },
        { q: "Sind meine Möbel während des Umzugs versichert?", a: "Ja, alle Transporte und Umzugsarbeiten von Umzüge LAF sind vollständig gewerblich haftpflicht- und transportversichert." },
        { q: "Kann ein Umzug mit Entrümpelung kombiniert werden?", a: "Ja, Umzug und Entrümpelung aus einer Hand ist eine unserer Spezialitäten – ideal bei Haushaltsauflösungen oder Wohnungswechsel." },
      ]}
    />
  );
}
