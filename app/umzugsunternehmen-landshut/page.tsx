import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ServiceJsonLd from "../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import ContactForm from "../../components/ContactForm";
import { createSeoMetadata } from "../seo";

export const metadata = createSeoMetadata({
  title: "Umzugsunternehmen Landshut | Umzüge LAF – Umzug & Entrümpelung",
  description:
    "Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Privatumzug, Firmenumzug, Möbelmontage, Einpackservice, Entrümpelung und Sperrmüllentsorgung.",
  path: "/umzugsunternehmen-landshut",
  keywords: [
    "Umzugsunternehmen Landshut",
    "Umzugsfirma Landshut",
    "Umzüge Landshut",
    "Umzug Landshut",
    "Privatumzug Landshut",
    "Firmenumzug Landshut",
    "Entrümpelung Landshut",
  ],
  image: "https://umzuegelandshut.de/images/hero/hero-umzug-landshut.jpg",
});

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const services = [
  {
    title: "Privatumzug Landshut",
    text: "Wohnungsumzug, Hausumzug, Möbeltransport, Tragearbeiten und Möbelmontage für private Haushalte.",
    href: "/privatumzug-landshut",
  },
  {
    title: "Firmenumzug Landshut",
    text: "Büroumzug, Praxisumzug und Gewerbeumzug mit klarer Planung und möglichst kurzer Ausfallzeit.",
    href: "/firmenumzug-landshut",
  },
  {
    title: "Entrümpelung Landshut",
    text: "Wohnung, Keller, Garage, Dachboden oder Gewerbefläche zuverlässig räumen und entsorgen lassen.",
    href: "/entruempelung-landshut",
  },
  {
    title: "Möbelmontage Landshut",
    text: "Möbel abbauen, sicher transportieren und am Zielort fachgerecht wieder aufbauen lassen.",
    href: "/umzuege/moebelmontage",
  },
  {
    title: "Einpackservice Landshut",
    text: "Kartons, Geschirr, Bücher, Kleidung und empfindliche Gegenstände sorgfältig verpacken lassen.",
    href: "/umzuege/einpackservice",
  },
  {
    title: "Sperrmüllentsorgung Landshut",
    text: "Alte Möbel, Matratzen, Regale und sperrige Gegenstände zuverlässig abholen lassen.",
    href: "/entruempelung/sperrmuellentsorgung",
  },
];

const areas = [
  "Landshut",
  "Ergolding",
  "Altdorf",
  "Essenbach",
  "Kumhausen",
  "Vilsbiburg",
  "Moosburg",
  "Landkreis Landshut",
];

const faqs = [
  {
    q: "Was kostet ein Umzugsunternehmen in Landshut?",
    a: "Die Kosten hängen von Umfang, Etage, Entfernung, Möbelmontage, Kartonanzahl und Zusatzleistungen ab. Umzüge LAF erstellt nach Klärung der wichtigsten Daten ein transparentes Angebot.",
  },
  {
    q: "Bietet Umzüge LAF auch kurzfristige Umzüge an?",
    a: "Ja, kurzfristige Umzüge sind je nach Verfügbarkeit möglich. Am besten rufen Sie direkt an und nennen Startadresse, Zieladresse, Etage und gewünschten Termin.",
  },
  {
    q: "Übernimmt Umzüge LAF auch Möbelmontage?",
    a: "Ja, auf Wunsch übernehmen wir Demontage, Transport und Aufbau von Möbeln im Rahmen Ihres Umzugs.",
  },
  {
    q: "Ist auch Entrümpelung in Landshut möglich?",
    a: "Ja, Umzüge LAF übernimmt neben Umzügen auch Entrümpelungen, Haushaltsauflösungen und Sperrmüllentsorgung in Landshut und Umgebung.",
  },
];

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function UmzugsunternehmenLandshutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      {/* Background orbs and grids */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-40" />
        <div className="laf-noise absolute inset-0 opacity-[0.03]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Umzugsunternehmen Landshut", path: "/umzugsunternehmen-landshut" },
        ]}
      />

      <ServiceJsonLd
        name="Umzugsunternehmen Landshut"
        description="Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Privatumzug, Firmenumzug, Möbelmontage, Einpackservice, Entrümpelung und Sperrmüllentsorgung."
        path="/umzugsunternehmen-landshut"
        serviceType="Umzugsunternehmen"
      />

      <FaqJsonLd />

      {/* Hero Section */}
      <section className="relative min-h-[auto] overflow-hidden px-5 pb-12 pt-28 sm:min-h-[88vh] sm:pb-20 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-umzug-landshut.jpg"
            alt="Umzugsunternehmen Landshut - Umzüge LAF"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/70 to-[#fafaf7]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center sm:min-h-[70vh]">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-sm font-black text-[#b28a00] shadow-sm">
              Umzüge LAF · Umzugsunternehmen in Landshut
            </p>

            <h1 className="text-[2.35rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-5xl min-[390px]:leading-[1.14] md:text-7xl lg:text-8xl">
              Umzugsunternehmen Landshut.
              <span className="gradient-text block">Zuverlässig umziehen.</span>
              Mit LAF.
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-6 text-[#18181b]/80 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in Landshut
              mit klarer Planung, sicherem Transport, Möbelmontage, Einpackservice,
              Entrümpelung und persönlicher Beratung.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button rounded-full px-6 py-3.5 text-center text-sm font-black text-black sm:px-8 sm:py-4 sm:text-base shadow-lg"
              >
                Kostenloses Angebot anfragen
              </a>
              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-center text-sm font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:px-8 sm:py-4 sm:text-base shadow-sm"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-14 md:py-16 sm:py-24 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Umzüge in Landshut
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
            Ihr Umzugspartner für Privat-, Firmen- und Objektumzüge.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-black/60">
            Ein Umzug in Landshut soll gut geplant, sauber ausgeführt und zuverlässig
            abgeschlossen werden. Genau darauf ist Umzüge LAF ausgerichtet. Wir
            besprechen vorab Umfang, Etagen, Zugang, Parkmöglichkeiten, Möbelmontage
            und besondere Gegenstände. So entsteht ein Ablauf, der zu Ihrem Umzug passt.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl sm:rounded-[2rem] border border-black/5 bg-white p-4.5 sm:p-7 shadow-sm transition duration-300 hover:shadow-md"
              >
                <h3 className="text-2xl font-black text-[#18181b]">{service.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{service.text}</p>
                <p className="mt-6 font-black text-[#b28a00]">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="bg-[#fafaf7] px-4 py-10 sm:px-6 sm:py-14 md:py-16 sm:py-24 lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Region
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Lokal in Landshut und Umgebung unterwegs.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#18181b]/70">
              Kurze Wege, persönliche Abstimmung und Ortskenntnis helfen bei der
              Planung. Wir unterstützen Umzüge in Landshut und im Umland.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-3xl border border-black/5 bg-white p-5 font-black text-black shadow-sm"
              >
                ✓ {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs and Contact Form Section */}
      <section className="bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-14 md:py-16 sm:py-24 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Häufige Fragen
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
            Fragen zum Umzugsunternehmen in Landshut.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl sm:rounded-[2rem] border border-black/5 bg-[#fafaf7] p-4.5 sm:p-7 shadow-sm">
                <h3 className="text-xl font-black text-[#18181b]">{item.q}</h3>
                <p className="mt-4 leading-7 text-black/60">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black text-[#18181b]">Umzug in Landshut geplant?</h2>
              <p className="mt-4 leading-7 text-black/60">
                Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
                Umfang, Termin und Ablauf persönlich mit Ihnen.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={phoneHref}
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
                >
                  Jetzt anrufen: {phone}
                </a>

                <a
                  href={`mailto:${email}`}
                  className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>

            <div id="anfrage-formular" className="scroll-mt-24">
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Direktanfrage
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#18181b]">
                  Kostenloses Angebot anfordern
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
