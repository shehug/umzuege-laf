import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ContactForm from "../../components/ContactForm";
import GoogleReviews from "../../components/GoogleReviews";
import Breadcrumbs from "../../components/Breadcrumbs";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.ueberUns);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const values = [
  {
    icon: "🤝",
    title: "Zuverlässigkeit",
    text: "Wir arbeiten mit klarer Absprache, pünktlicher Planung und sauberer Umsetzung.",
  },
  {
    icon: "🛡️",
    title: "Sorgfalt & Schutz",
    text: "Möbel, Räume und persönliche Gegenstände werden respektvoll und vorsichtig behandelt.",
  },
  {
    icon: "👤",
    title: "Persönlicher Kontakt",
    text: "Bei Umzüge LAF haben Sie einen direkten Ansprechpartner vor Ort und keine anonyme Callcenter-Abwicklung.",
  },
  {
    icon: "💶",
    title: "Transparente Festpreise",
    text: "Wir erklären den Ablauf verständlich und planen fair, verbindlich und ohne böse Überraschungen.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/services/umzuege-laf-1.jpg"
            alt="Umzüge LAF Team und Service Landshut"
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
            <Breadcrumbs items={[{ label: "Über uns" }]} />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span>★ Über Umzüge LAF · Landshut</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Persönlich. Zuverlässig.<br />
              <span className="text-amber-400">Ihr Umzugsteam aus Landshut.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Umzüge LAF steht für saubere Handwerksqualität, persönliche Betreuung
              und faire Preise. Wir sind kein anonymer Großkonzern, sondern ein engagiertes
              Team direkt vor Ort in Landshut.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#f59e0b] px-7 py-4 text-center text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
              >
                <span>📞 Direkt anrufen: {phone}</span>
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

      {/* ── WERTE ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#b45309]">
              Über uns
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Werte, auf die Sie sich verlassen können
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-4 text-base font-black text-slate-900">{v.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KUNDENSTIMMEN ── */}
      <GoogleReviews />

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
                Lernen Sie uns kennen
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Rufen Sie uns unverbindlich an oder fordern Sie online ein Festpreis-Angebot
                für Ihren nächsten Umzug an. Rückmeldung garantiert innerhalb von 4 Stunden.
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
                <p className="mt-2 text-xs text-slate-400">
                  Ergoldinger Str. 15, 84030 Landshut · Mo–Sa: 08:00 – 18:00 Uhr
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-black text-slate-900">
                Online-Anfrage starten
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                In 2 Minuten ausgefüllt – Antwort innerhalb von 4 Stunden.
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
