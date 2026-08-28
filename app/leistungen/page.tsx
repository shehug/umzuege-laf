import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ContactForm from "../../components/ContactForm";
import Breadcrumbs from "../../components/Breadcrumbs";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.leistungen);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const mainServices = [
  {
    title: "Privatumzug",
    text: "Wir planen und begleiten Ihren privaten Wohnungsumzug zuverlässig — vom sicheren Transport bis zur Möbelmontage.",
    href: "/privatumzug-landshut",
    image: "/images/services/privatumzug.jpg",
    tag: "Beliebt",
  },
  {
    title: "Firmenumzug",
    text: "Strukturierte Gewerbe- und Büroumzüge mit klarer Planung, kurzen Ausfallzeiten und sauberer Umsetzung.",
    href: "/firmenumzug-landshut",
    image: "/images/services/firmenumzug.jpg",
    tag: "Gewerbe",
  },
  {
    title: "Entrümpelung & Räumung",
    text: "Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen sauber geräumt und besenrein übergeben.",
    href: "/entruempelung-landshut",
    image: "/images/services/entruempelung.jpg",
    tag: "Räumung",
  },
];

const additionalServices = [
  {
    title: "Möbelmontage",
    text: "Fachgerechter Abbau, Transport und sicherer Wiederaufbau Ihrer Schränke & Betten.",
    href: "/umzuege/moebelmontage",
  },
  {
    title: "Einpackservice",
    text: "Sorgfältiges und transportsicheres Verpacken von Geschirr, Kleidung und Hausrat.",
    href: "/umzuege/einpackservice",
  },
  {
    title: "Fernumzug",
    text: "Zuverlässige Umzüge bayern- und deutschlandweit mit garantierter Termintreue.",
    href: "/umzuege/fernumzug",
  },
  {
    title: "Expressumzug",
    text: "Schnelle Umzugshilfe bei kurzfristigen oder dringenden Terminen in Landshut.",
    href: "/umzuege/expressumzug",
  },
  {
    title: "Lagerung",
    text: "Sichere und trockene Zwischenlagerung für Möbel und Kartons nach Bedarf.",
    href: "/umzuege/lagerung",
  },
  {
    title: "Sperrmüllentsorgung",
    text: "Fachgerechte und zertifizierte Entsorgung von Altmöbeln und Sperrgut.",
    href: "/entruempelung/sperrmuellentsorgung",
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/services/umzuege-laf-1.jpg"
            alt="Umzüge LAF Leistungen"
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
            <Breadcrumbs items={[{ label: "Leistungen" }]} />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span>★ Leistungsübersicht ·</span>
              <span>Umzüge LAF Landshut</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Unsere Leistungen für Ihren Umzug.<br />
              <span className="text-amber-400">Alles aus einer Hand.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Von der ersten Kartonlieferung bis zur besenreinen Übergabe: Wir bieten
              Ihnen alle Umzugs-, Montage- und Entrümpelungsleistungen transparent zum Festpreis.
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

      {/* ── HAUPT-LEISTUNGEN ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Kernbereiche
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Unsere Hauptleistungen im Überblick
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-sm">
                    {service.tag}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#b45309] transition">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {service.text}
                  </p>
                  <p className="mt-4 text-xs font-extrabold text-[#b45309]">Mehr erfahren →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZUSATZLEISTUNGEN ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Zusatzservices
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Flexible Bausteine für Ihren Umzug
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-md"
              >
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#b45309]">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {service.text}
                </p>
                <p className="mt-3 text-xs font-black text-[#b45309]">Mehr erfahren →</p>
              </Link>
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
                Unverbindliches Festpreis-Angebot anfordern
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Teilen Sie uns einfach Ihre Umzugsdaten mit. Wir beraten Sie persönlich
                und erstellen ein faires, transparentes Angebot.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Direkter Ansprechpartner
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
                Kostenlos und in 2 Minuten ausgefüllt.
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
