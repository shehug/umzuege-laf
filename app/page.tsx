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
    number: "01",
    image: "/images/services/privatumzug.jpg",
  },
  {
    title: "Firmenumzug",
    label: "Gewerbe",
    text: "Strukturierte Betriebsumzüge mit minimaler Ausfallzeit und klarer Organisation.",
    href: "/firmenumzug-landshut",
    number: "02",
    image: "/images/services/firmenumzug.jpg",
  },
  {
    title: "Entrümpelung",
    label: "Räumung",
    text: "Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen sauber entrümpeln.",
    href: "/entruempelung-landshut",
    number: "03",
    image: "/images/services/entruempelung.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      {/* Background orbs & grids */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-40" />
        <div className="laf-noise absolute inset-0 opacity-[0.03]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Hero.jpg"
            alt="Umzüge LAF Hero Bild"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[58%_center] sm:object-center"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf7] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/85 to-[#fafaf7]/40 sm:to-[#fafaf7]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.15),transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-5 pb-8 pt-24 sm:min-h-[92svh] sm:pb-16 sm:pt-32 lg:min-h-screen lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-xs font-black text-[#b28a00] shadow-sm backdrop-blur-xl sm:mb-7 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Premium Umzugsservice in Landshut
            </div>

            <h1 className="max-w-5xl text-[2.2rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.55rem] sm:text-6xl sm:leading-[1.14] md:text-7xl lg:text-8xl">
              Umzugsunternehmen Landshut.
              <span className="gradient-text block">Umzug ohne Stress.</span>
              Mit LAF.
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-[#18181b]/80 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen in Landshut für Privatumzug,
              Firmenumzug, Entrümpelung, Möbelmontage und Einpackservice.
              Wir planen Ihren Umzug zuverlässig, sauber und persönlich —
              in Landshut, Ergolding, Altdorf, Essenbach und Umgebung.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#direktanfrage"
                className="glow-button rounded-full px-6 py-3.5 text-center text-sm font-black text-black shadow-lg sm:px-8 sm:py-4 sm:text-base"
              >
                Kostenlos anfragen
              </a>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="hidden max-w-2xl grid-cols-3 gap-4 sm:mt-12 sm:grid">
              <div className="premium-border rounded-2xl bg-white p-3 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-4 border border-black/5">
                <p className="text-lg font-black text-[#b28a00] sm:text-2xl">
                  100%
                </p>
                <p className="mt-1 text-[11px] leading-4 text-black/65 sm:text-xs sm:leading-5">
                  persönlich geplant
                </p>
              </div>

              <div className="premium-border rounded-2xl bg-white p-3 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-4 border border-black/5">
                <p className="text-lg font-black text-[#b28a00] sm:text-2xl">
                  Fair
                </p>
                <p className="mt-1 text-[11px] leading-4 text-black/65 sm:text-xs sm:leading-5">
                  transparente Preise
                </p>
              </div>

              <div className="premium-border rounded-2xl bg-white p-3 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-4 border border-black/5">
                <p className="text-lg font-black text-[#b28a00] sm:text-2xl">
                  LAF
                </p>
                <p className="mt-1 text-[11px] leading-4 text-black/65 sm:text-xs sm:leading-5">
                  Team aus Landshut
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="relative z-20 mx-auto mt-0 max-w-7xl px-5 pb-8 sm:-mt-10 lg:px-8">
          <div className="grid gap-3 rounded-xl sm:rounded-[1.4rem] border border-black/5 bg-white p-4 shadow-lg sm:rounded-2xl sm:rounded-[2rem] md:grid-cols-3 md:p-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Schnell
              </p>
              <p className="mt-2 text-lg font-black text-[#18181b]">Schnelle Rückmeldung</p>
              <p className="mt-1 text-sm text-black/60">
                Kurze Wege, klare Kommunikation und strukturierte Planung.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Sauber
              </p>
              <p className="mt-2 text-lg font-black text-[#18181b]">Saubere Ausführung</p>
              <p className="mt-1 text-sm text-black/60">
                Sorgfältiger Umgang mit Möbeln, Räumen und Transport.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Persönlich
              </p>
              <p className="mt-2 text-lg font-black text-[#18181b]">
                Direkter Ansprechpartner
              </p>
              <p className="mt-1 text-sm text-black/60">
                Ein Umzugspartner, der erreichbar ist und mitdenkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 overflow-hidden bg-[#ffffff] px-4 py-14 sm:px-6 sm:py-20 md:py-24 text-black lg:px-8 border-t border-black/5">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[0.28em] text-[#b28a00]">
                Leistungen
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
                Umzug, Entrümpelung und Service aus einer Hand.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#18181b]/70">
                Klare Abläufe, sorgfältige Arbeit und ein zuverlässiges Team:
                Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in
                Landshut und Umgebung.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/umzugsunternehmen-landshut"
                className="w-fit rounded-full bg-black px-7 py-4 font-black text-white shadow-md transition hover:bg-[#f6c21a] hover:text-black"
              >
                Umzugsunternehmen Landshut
              </Link>

              <Link
                href="/leistungen"
                className="w-fit rounded-full border border-black/15 bg-[#fafaf7] px-7 py-4 font-black text-black shadow-sm transition hover:bg-[#f6c21a]"
              >
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl sm:rounded-2xl sm:rounded-[2rem] bg-white shadow-md border border-black/5 transition duration-500 hover:-translate-y-3 hover:shadow-lg"
              >
                <div className="relative h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a] backdrop-blur-xl">
                    {service.label}
                  </div>

                  <div className="absolute right-5 top-5 text-6xl font-black text-white/20">
                    {service.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-xl sm:rounded-[1.4rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md text-white">
                      <h3 className="text-2xl font-black">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[84px] leading-7 text-white/80">
                        {service.text}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="font-black text-[#f6c21a]">
                          Mehr erfahren
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-[-25deg]">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Kostenlose Anfrage",
              "Faire Planung",
              "Saubere Ausführung",
              "Landshut & Umgebung",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm text-center"
              >
                <p className="text-sm font-black text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section id="direktanfrage" className="relative z-10 bg-[#fafaf7] px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8 border-t border-black/5 scroll-mt-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.28em] text-[#b28a00]">
              Anfrage starten
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Ein guter Umzug beginnt mit einem klaren Plan.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#18181b]/70">
              Teilen Sie uns kurz mit, worum es geht. Ob Privatumzug,
              Firmenumzug, Entrümpelung oder Möbelmontage — Umzüge LAF meldet
              sich schnell und plant den Ablauf transparent mit Ihnen.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Kostenlose Ersteinschätzung",
                "Persönliche Beratung",
                "Faire und klare Planung",
                "Landshut & Umgebung",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black shadow-sm">
                    ✓
                  </div>
                  <p className="font-black text-[#18181b]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    Schnell, unkompliziert und zuverlässig abgestimmt.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneHref}
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Jetzt anrufen
              </a>

              <a
                href={`mailto:${email}`}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>

          <div>
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
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
