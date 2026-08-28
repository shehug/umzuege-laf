import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ContactForm from "../../components/ContactForm";
import Breadcrumbs from "../../components/Breadcrumbs";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.umzuege);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const moveServices = [
  {
    title: "Privatumzug",
    text: "Für Wohnungen, Häuser und private Haushalte — sauber geplant und zuverlässig durchgeführt.",
    href: "/privatumzug-landshut",
  },
  {
    title: "Firmenumzug",
    text: "Büros, Praxen und Gewerbeflächen mit klarer Organisation und minimaler Ausfallzeit.",
    href: "/firmenumzug-landshut",
  },
  {
    title: "Möbelmontage",
    text: "Fachgerechter Abbau, Transport und stabiler Wiederaufbau Ihrer Möbel.",
    href: "/umzuege/moebelmontage",
  },
  {
    title: "Einpackservice",
    text: "Sorgfältiges Verpacken von Geschirr, Kleidung und Hausrat durch unser Team.",
    href: "/umzuege/einpackservice",
  },
  {
    title: "Fernumzug",
    text: "Sichere Umzüge über größere Strecken in ganz Bayern und Deutschland.",
    href: "/umzuege/fernumzug",
  },
  {
    title: "Expressumzug",
    text: "Wenn es schnell gehen muss: kurzfristige Umzugshilfe mit schneller Verfügbarkeit.",
    href: "/umzuege/expressumzug",
  },
  {
    title: "Lagerung",
    text: "Sichere, trockene Zwischenlagerung für Möbel, Kartons und Hausrat.",
    href: "/umzuege/lagerung",
  },
];

const benefits = [
  "Persönliche Beratung & Vor-Ort-Termin",
  "Transparente Festpreise ohne Nachforderungen",
  "Vollständige Transportversicherung",
  "Geschultes & freundliches Personal",
  "Eigenes Fuhrpark & moderne Ausrüstung",
  "Einsatz in Landshut & ganz Bayern",
];

export default function UmzuegePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/hero/hero-umzug-landshut.jpg"
            alt="Umzüge in Landshut mit Umzüge LAF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30 sm:to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Umzüge" }]} />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span>★ 4.9 / 5 Sterne Bewertung ·</span>
              <span>Umzüge in Landshut & Umgebung</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Umzüge in Landshut.<br />
              <span className="text-amber-400">Pünktlich, sauber & zum Festpreis.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Privatumzug, Firmenumzug, Montage oder Ferntransport: Umzüge LAF
              begleitet Ihren Umzug von der ersten Kiste bis zum fertigen Aufbau
              mit Erfahrung und Sorgfalt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#f59e0b] px-7 py-4 text-center text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

      {/* ── UMZUGSSERVICES ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Service-Übersicht
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Alle Umzugsdienstleistungen im Überblick
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moveServices.map((service) => (
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

      {/* ── VORTEILE ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Ihre Vorteile
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Sorglos umziehen mit Umzüge LAF
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-black text-amber-800">
                  ✓
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANFRAGE SEKTION ── */}
      <section id="anfrage-formular" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                <span>📍</span>
                <span>Standort: Ergoldinger Str. 15, 84030 Landshut</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                Kostenloses Umzugsangebot erhalten
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Rufen Sie uns direkt an oder fordern Sie online ein Festpreis-Angebot
                an. Wir antworten zügig und unverbindlich.
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
                Online-Anfrage starten
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
