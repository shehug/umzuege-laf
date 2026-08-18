import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocalSeoLinks from "../components/LocalSeoLinks";
import ContactForm from "../components/ContactForm";
import { createSeoMetadata, seoPages } from "./seo";

export const metadata = createSeoMetadata(seoPages.home);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const services = [
  {
    title: "Privatumzug",
    label: "Umzüge",
    text: "Stressfrei umziehen mit sauberer Planung, sicherem Transport und zuverlässigem Team.",
    href: "/privatumzug-landshut",
    image: "/images/services/privatumzug.jpg",
  },
  {
    title: "Firmenumzug",
    label: "Gewerbe",
    text: "Strukturierte Betriebsumzüge mit minimaler Ausfallzeit und klarer Organisation.",
    href: "/firmenumzug-landshut",
    image: "/images/services/firmenumzug.jpg",
  },
  {
    title: "Entrümpelung",
    label: "Räumung",
    text: "Wohnungen, Keller, Dachböden und Garagen sauber und zuverlässig entrümpeln.",
    href: "/entruempelung-landshut",
    image: "/images/services/entruempelung.jpg",
  },
];

const trustItems = [
  { icon: "📍", label: "Lokal aus Landshut" },
  { icon: "📞", label: "Persönlich erreichbar" },
  { icon: "✓", label: "Klare, faire Preise" },
  { icon: "🚚", label: "Pünktlich & zuverlässig" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      {/* Subtle background grid only */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-30" />
      </div>

      <Header />

      {/* ── HERO ── */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Hero.jpg"
            alt="Umzüge LAF – Ihr Umzugsunternehmen in Landshut"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[58%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/80 to-[#fafaf7]/20 sm:to-[#fafaf7]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf7] via-transparent to-[#fafaf7]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-5 pb-10 pt-24 sm:min-h-[90svh] sm:pb-16 sm:pt-32 lg:px-8">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f6c21a]/60 bg-[#f6c21a]/10 px-4 py-1.5 text-xs font-black text-[#b28a00]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f6c21a]" />
              </span>
              Umzugsunternehmen · Landshut
            </div>

            <h1 className="text-[2.1rem] font-black leading-[1.12] tracking-tight text-[#18181b] min-[390px]:text-[2.4rem] sm:text-5xl lg:text-6xl">
              Umzug in Landshut —<br />
              <span className="gradient-text">persönlich, fair und zuverlässig.</span>
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#18181b]/70 sm:text-lg sm:leading-8">
              Umzüge LAF übernimmt Ihren Privatumzug, Firmenumzug oder Ihre Entrümpelung in
              Landshut und Umgebung. Direkt, unkompliziert, mit persönlichem Ansprechpartner.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#direktanfrage"
                className="glow-button w-full rounded-full px-7 py-4 text-center font-black text-black shadow-lg sm:w-auto"
              >
                Kostenlos anfragen
              </a>
              <a
                href={phoneHref}
                className="w-full rounded-full border border-black/20 bg-white px-7 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:w-auto"
              >
                {phone}
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              {trustItems.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-1.5 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-xs font-bold text-black/70 shadow-sm backdrop-blur-sm"
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="relative z-10 border-t border-black/5 bg-white px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b28a00]">
              Unsere Leistungen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b] sm:text-4xl lg:text-5xl">
              Umzug, Entrümpelung & Service aus einer Hand.
            </h2>
            <p className="mt-4 text-base leading-7 text-black/60 sm:text-lg">
              Klare Abläufe und ein zuverlässiges Team — für Privatkunden, Firmen und Haushalte
              in Landshut und Umgebung.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-[#fafaf7] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-md sm:rounded-3xl"
              >
                <div className="relative h-[240px] overflow-hidden sm:h-[280px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#f6c21a] backdrop-blur-sm">
                    {service.label}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-black text-[#18181b]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{service.text}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#b28a00]">
                    <span>Mehr erfahren</span>
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-black text-black shadow-sm transition hover:bg-[#f6c21a]"
            >
              Alle Leistungen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WARUM LAF ── */}
      <section className="relative z-10 border-t border-black/5 bg-[#fafaf7] px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b28a00]">
                Warum Umzüge LAF?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b] sm:text-4xl">
                Ein lokales Unternehmen, das mitdenkt.
              </h2>
              <p className="mt-4 text-base leading-7 text-black/60">
                Wir sind kein anonymer Großbetrieb. Bei Umzüge LAF haben Sie einen direkten
                Ansprechpartner aus Landshut — der Ihren Umzug von Anfang bis Ende persönlich
                begleitet.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Persönliche Planung", text: "Kein Call-Center. Sie sprechen direkt mit uns." },
                  { title: "Faire Preise", text: "Transparente Kalkulation ohne versteckte Kosten." },
                  { title: "Pünktlich & sauber", text: "Wir halten, was wir versprechen." },
                  { title: "Aus Landshut", text: "Kurze Wege, schnelle Reaktion, lokale Erfahrung." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                    <div className="mb-2 h-8 w-8 rounded-xl bg-[#f6c21a] flex items-center justify-center text-base font-black text-black">
                      ✓
                    </div>
                    <p className="font-black text-[#18181b]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-black/55">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA block */}
            <div className="rounded-2xl border border-black/8 bg-white p-7 shadow-sm sm:rounded-3xl sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Direktanfrage
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#18181b] sm:text-3xl">
                Kostenloses Angebot anfordern
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                Teilen Sie uns kurz mit, worum es geht — wir melden uns schnell und unkompliziert.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANFRAGE SEKTION anchor ── */}
      <div id="direktanfrage" className="scroll-mt-24" />

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
