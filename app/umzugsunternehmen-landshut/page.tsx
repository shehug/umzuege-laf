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
    title: "Entrümpelung Landshut",
    text: "Wohnung, Keller, Garage, Dachboden oder Gewerbefläche zuverlässig räumen und entsorgen lassen.",
    href: "/entruempelung-landshut",
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
    <main className="min-h-screen bg-white text-slate-900">
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

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/hero/hero-umzug-landshut.jpg"
            alt="Umzugsunternehmen Landshut - Umzüge LAF"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30 sm:to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span>★ 4.9 / 5 Sterne ·</span>
              <span>Umzugsunternehmen Landshut</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Umzugsunternehmen Landshut.<br />
              <span className="text-amber-400">Zuverlässig umziehen mit LAF.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in Landshut
              mit klarer Planung, sicherem Transport, Möbelmontage, Einpackservice,
              Entrümpelung und persönlicher Festpreis-Beratung.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#f59e0b] px-7 py-4 text-center text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Direkt anrufen: {phone}</span>
              </a>

              <a
                href="#anfrage-formular"
                className="flex items-center justify-center rounded-full border-2 border-slate-600 bg-slate-800/80 px-7 py-4 text-center text-base font-bold text-white transition hover:border-slate-400 hover:bg-slate-700 active:scale-98"
              >
                Kostenlos anfragen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST SECTION ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Umzüge in Landshut
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Ihr Partner für Privat-, Firmen- und Objektumzüge
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Ein Umzug in Landshut soll gut geplant, sauber ausgeführt und zuverlässig
              abgeschlossen werden. Genau darauf ist Umzüge LAF ausgerichtet.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#b45309]">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.text}
                </p>
                <p className="mt-4 text-xs font-extrabold text-[#b45309]">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS SECTION ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Einsatzgebiet
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Lokal in Landshut und Umgebung unterwegs
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Kurze Wege, persönliche Abstimmung und beste Ortskenntnis helfen bei der
              Planung. Wir unterstützen Umzüge in Landshut und im gesamten Umland.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-sm"
              >
                <span className="text-amber-500 font-black">✓</span> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ & ANFRAGE SEKTION ── */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-black uppercase tracking-widest text-amber-400">
              Häufige Fragen
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
              Fragen zum Umzugsunternehmen in Landshut
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-black text-white">{item.q}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="anfrage-formular" className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center scroll-mt-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                <span>📍</span>
                <span>Standort: Ergoldinger Str. 15, 84030 Landshut</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                Umzug in Landshut geplant?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
                Umfang, Termin und Ablauf persönlich mit Ihnen.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Telefonische Beratung
                </p>
                <a
                  href={phoneHref}
                  className="mt-1 inline-flex items-center gap-2 text-xl font-black text-white hover:text-amber-400 transition"
                >
                  <span>📞</span>
                  <span>{phone}</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-black text-slate-900">
                Kostenloses Angebot anfordern
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                In 2 Minuten ausgefüllt – 100% unverbindlich.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
