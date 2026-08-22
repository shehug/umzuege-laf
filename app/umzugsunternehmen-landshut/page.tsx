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
  title: "Umzugsunternehmen Landshut » Schnell & Fair | Umzüge LAF",
  description:
    "★ 4.9 Sterne Umzugsunternehmen in Landshut für Privatumzug, Firmenumzug, Möbelmontage, Einpackservice & Entrümpelung. Jetzt kostenloses Angebot anfordern!",
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
    a: "Die Kosten hängen von Umfang, Etage, Entfernung, Möbelmontage, Kartonanzahl und Zusatzleistungen ab. Umzüge LAF erstellt nach Klärung der wichtigsten Daten ein transparentes Festpreis-Angebot.",
  },
  {
    q: "Bietet Umzüge LAF auch kurzfristige Umzüge an?",
    a: "Ja, kurzfristige Express-Umzüge sind je nach Verfügbarkeit möglich. Rufen Sie uns direkt an, um Ihren Wunschtermin abzustimmen.",
  },
  {
    q: "Übernimmt Umzüge LAF auch Möbelmontage?",
    a: "Ja, auf Wunsch übernehmen wir die fachgerechte Demontage, den sicheren Transport und den Wiederaufbau Ihrer Möbel.",
  },
  {
    q: "Ist auch Entrümpelung in Landshut möglich?",
    a: "Ja, wir übernehmen neben Umzügen auch komplette Entrümpelungen, Wohnungsauflösungen und Sperrmüllentsorgung in Landshut und Umgebung.",
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
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-30" />
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
      <section className="relative min-h-[auto] overflow-hidden px-4 pb-12 pt-28 sm:min-h-[85vh] sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/85 to-[#fafaf7]/30 sm:to-[#fafaf7]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf7]/60 via-transparent to-[#fafaf7]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center sm:min-h-[65vh]">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-3.5 py-1.5 text-xs font-black text-[#b28a00] shadow-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f6c21a]" />
              </span>
              Umzüge LAF · Umzugsunternehmen Landshut
            </div>

            <h1 className="text-[1.95rem] font-black leading-[1.12] tracking-tight text-[#18181b] min-[380px]:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl">
              Umzugsunternehmen Landshut.
              <span className="gradient-text block">Zuverlässig umziehen.</span>
              Mit LAF.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#18181b]/80 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in Landshut
              mit klarer Planung, sicherem Transport, Möbelmontage, Einpackservice,
              Entrümpelung und persönlicher Beratung.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button w-full rounded-full px-5 py-3.5 text-center text-sm font-black text-black shadow-md sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Kostenlos anfragen
              </a>
              <a
                href={phoneHref}
                className="w-full rounded-full border border-black/15 bg-white px-5 py-3.5 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="border-t border-black/5 bg-[#ffffff] px-4 py-14 text-black sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00] sm:text-sm">
            Umzüge in Landshut
          </p>
          <h2 className="mt-3 max-w-4xl text-2xl font-black tracking-tight text-[#18181b] sm:text-4xl md:text-5xl">
            Ihr Umzugspartner für Privat-, Firmen- und Objektumzüge.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-black/60 sm:mt-6 sm:text-base sm:leading-8">
            Ein Umzug in Landshut soll gut geplant, sauber ausgeführt und zuverlässig
            abgeschlossen werden. Genau darauf ist Umzüge LAF ausgerichtet. Wir
            besprechen vorab Umfang, Etagen, Zugang, Parkmöglichkeiten, Möbelmontage
            und besondere Gegenstände.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm transition duration-300 hover:shadow-md sm:rounded-3xl sm:p-7"
              >
                <h3 className="text-lg font-black text-[#18181b] sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60 sm:mt-3">{service.text}</p>
                <p className="mt-4 text-sm font-black text-[#b28a00] sm:mt-6">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="border-t border-black/5 bg-[#fafaf7] px-4 py-14 lg:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00] sm:text-sm">
              Einsatzgebiet
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:text-4xl">
              Lokal in Landshut und Umgebung unterwegs.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#18181b]/70 sm:mt-4 sm:text-base sm:leading-7">
              Kurze Wege, persönliche Abstimmung und Ortskenntnis helfen bei der
              Planung. Wir unterstützen Umzüge in Landshut und im gesamten Umland.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-black/5 bg-white p-3.5 text-xs font-black text-black shadow-sm sm:rounded-3xl sm:p-5 sm:text-sm"
              >
                ✓ {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs and Contact Form Section */}
      <section className="border-t border-black/5 bg-[#ffffff] px-4 py-14 text-black sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00] sm:text-sm">
            Häufige Fragen
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:text-4xl">
            Fragen zum Umzugsunternehmen in Landshut.
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm sm:rounded-3xl sm:p-7">
                <h3 className="text-base font-black text-[#18181b] sm:text-lg">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60 sm:mt-3">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-black text-[#18181b] sm:text-3xl">Umzug in Landshut geplant?</h2>
              <p className="mt-3 text-sm leading-6 text-black/60 sm:mt-4 sm:text-base sm:leading-7">
                Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
                Umfang, Termin und Ablauf persönlich mit Ihnen.
              </p>
              
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href={phoneHref}
                  className="glow-button w-full rounded-full px-6 py-3.5 text-center text-sm font-black text-black shadow-md sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Jetzt anrufen: {phone}
                </a>

                <a
                  href={`mailto:${email}`}
                  className="w-full rounded-full border border-black/15 bg-white px-6 py-3.5 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>

            <div id="anfrage-formular" className="scroll-mt-24">
              <div className="mb-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm">
                  Direktanfrage
                </p>
                <h3 className="mt-1 text-xl font-black text-[#18181b] sm:text-2xl">
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
