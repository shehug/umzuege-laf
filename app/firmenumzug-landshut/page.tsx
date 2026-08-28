import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import { createSeoMetadata } from "../seo";
import ServiceJsonLd from "../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactForm from "../../components/ContactForm";

export const metadata = createSeoMetadata({
  title: "Firmenumzug Landshut » Büro- & Betriebsumzug | Umzüge LAF",
  description:
    "Firmenumzug in Landshut mit Umzüge LAF: strukturierte Planung für Büro, Praxis, Gewerbe, Arbeitsplätze, Möbel und Technik. Minimale Ausfallzeit & Festpreis.",
  path: "/firmenumzug-landshut",
  keywords: [
    "Firmenumzug Landshut",
    "Büroumzug Landshut",
    "Gewerbeumzug Landshut",
    "Praxisumzug Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/GU1.jpg",
});

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const benefits = [
  {
    title: "Minimale Ausfallzeit",
    text: "Wir planen den Firmenumzug so, dass Ihr Geschäftsbetrieb nahtlos weiterlaufen kann.",
  },
  {
    title: "Strukturierte Planung",
    text: "Büromöbel, Technik, Akten und Arbeitsplätze werden im Ablauf klar und systematisch erfasst.",
  },
  {
    title: "Erfahrenes Team",
    text: "Geschulte Mitarbeiter für schweren Möbeltransport, IT-Arbeitsplätze und Montagearbeiten.",
  },
  {
    title: "Feste Ansprechpartner",
    text: "Ein dedizierter Projektleiter koordiniert Ihren Gewerbeumzug von A bis Z.",
  },
];

const process = [
  {
    title: "Erstberatung & Aufnahme",
    text: "Wir erfassen Arbeitsplätze, Möbel, IT, Etagen und Ihr gewünschtes Zeitfenster.",
  },
  {
    title: "Ablaufplan & Festpreis",
    text: "Sie erhalten einen verbindlichen Ablaufplan und eine transparente Festpreis-Kalkulation.",
  },
  {
    title: "Pünktliche Umsetzung",
    text: "Transport, Montage und Platzierung der Arbeitsplätze nach Plan – auf Wunsch auch am Wochenende.",
  },
];

const included = [
  "Büroumzug & Praxisumzug",
  "Gewerbe- & Objektumzug",
  "Möbeltransport & IT-Arbeitsplätze",
  "Fachgerechte Möbelmontage",
  "Wochenendumzüge nach Absprache",
  "Vollständige Transportversicherung",
];

export default function FirmenumzugLandshutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Firmenumzug Landshut", path: "/firmenumzug-landshut" },
        ]}
      />

      <ServiceJsonLd
        name="Firmenumzug Landshut"
        description="Firmenumzug in Landshut mit Umzüge LAF: strukturierte Planung für Büro, Praxis, Gewerbefläche, Arbeitsplätze, Möbel und Technik."
        path="/firmenumzug-landshut"
        serviceType="Firmenumzug"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/services/GU1.jpg"
            alt="Umzüge LAF Firmenumzug und Büroumzug Landshut"
            fill
            priority
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30 sm:to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Leistungen", href: "/leistungen" },
                { label: "Firmenumzug Landshut" },
              ]}
            />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span>★ Gewerbeservice ·</span>
              <span>Firmenumzug Landshut & Umgebung</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Firmenumzug in Landshut.<br />
              <span className="text-amber-400">Präzise, schnell & ohne Ausfall.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Strukturierte Büroumzüge, Praxisumzüge und Gewerbeumzüge in Landshut.
              Wir sorgen für reibungslose Abläufe und minimale Unterbrechungen Ihres Betriebs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#f59e0b] px-7 py-4 text-center text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Gewerbeberatung: {phone}</span>
              </a>

              <a
                href="#anfrage-formular"
                className="flex items-center justify-center rounded-full border-2 border-slate-600 bg-slate-800/80 px-7 py-4 text-center text-base font-bold text-white transition hover:border-slate-400 hover:bg-slate-700 active:scale-98"
              >
                Angebot anfordern →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VORTEILE ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Ihre Vorteile
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Gewerbeumzüge mit klarem Zeitplan
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-sm font-black text-amber-800">
                  ✓
                </div>
                <h3 className="mt-4 text-base font-black text-slate-900">{b.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN & ABLAUF ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Leistungsumfang
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Gewerbeumzüge jeder Größenordnung
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Vom Einzelbüro bis zum kompletten Firmenstandort: Wir stimmen den
              Umzug auf Ihre Öffnungszeiten und Arbeitsabläufe ab.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
                  <span className="text-amber-500 font-black">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-900">
              Ablauf für Firmenkunden
            </h3>
            <div className="mt-6 grid gap-4">
              {process.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-black text-amber-800">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{p.title}</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANFRAGE SEKTION ── */}
      <section id="anfrage-formular" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                <span>🏢</span>
                <span>Gewerbeberatung Landshut</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                Firmenumzug unverbindlich anfragen
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Kontaktieren Sie uns direkt für ein Vorgespräch oder senden Sie uns Ihre Eckdaten.
                Wir erstellen Ihnen ein maßgeschneidertes Firmen-Angebot.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Direkter Firmenkontakt
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
                Online-Anfrage für Firmenumzug
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Schnell & unverbindlich.
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
