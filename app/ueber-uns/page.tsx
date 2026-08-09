import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.ueberUns);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const values = [
  {
    title: "Zuverlässigkeit",
    text: "Wir arbeiten mit klarer Absprache, pünktlicher Planung und sauberer Umsetzung.",
  },
  {
    title: "Sorgfalt",
    text: "Möbel, Räume und persönliche Gegenstände werden respektvoll und vorsichtig behandelt.",
  },
  {
    title: "Persönlichkeit",
    text: "Bei Umzüge LAF haben Sie einen direkten Ansprechpartner und keine anonyme Abwicklung.",
  },
  {
    title: "Transparenz",
    text: "Wir erklären den Ablauf verständlich und planen fair, klar und nachvollziehbar.",
  },
];

const facts = [
  "Umzüge in Landshut & Umgebung",
  "Privatumzüge und Firmenumzüge",
  "Entrümpelung und Haushaltsauflösung",
  "Möbelmontage und Einpackservice",
];

const steps = [
  {
    title: "Zuhören",
    text: "Wir klären zuerst, was wirklich gebraucht wird: Umfang, Termin, Strecke, Etagen und Besonderheiten.",
  },
  {
    title: "Planen",
    text: "Danach entsteht ein klarer Ablauf, damit am Umzugstag jeder Schritt sitzt.",
  },
  {
    title: "Umsetzen",
    text: "Unser Team arbeitet strukturiert, sorgfältig und lösungsorientiert.",
  },
];

export default function UeberUnsPage() {
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

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/umzuege-laf-1.jpg"
            alt="Umzüge LAF Team und Service"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/90 to-[#fafaf7]/40 sm:to-[#fafaf7]/16" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.15),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#b28a00] sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Über Umzüge LAF
            </div>

            <h1 className="max-w-5xl text-[2.5rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              Persönlich.
              <span className="gradient-text block">Zuverlässig.</span>
              Aus Landshut.
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Umzüge LAF steht für klare Planung, saubere Arbeit und direkten
              Kontakt. Wir unterstützen Privatkunden, Firmen und Haushalte bei
              Umzügen, Entrümpelungen, Möbelmontage und Einpackservice.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Anfrage starten
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Landshut", "Persönlich", "Sorgfältig"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm backdrop-blur-xl"
                >
                  <p className="text-xl font-black text-[#b28a00]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    klare Abläufe und zuverlässiger Service
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Unsere Haltung
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Ein Umzug ist Vertrauenssache.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Deshalb setzen wir auf persönliche Beratung, klare Kommunikation
              und sorgfältige Umsetzung. Uns ist wichtig, dass Sie nicht nur
              einen Transport bekommen, sondern einen verlässlichen Partner an
              Ihrer Seite haben.
            </p>

            <div className="mt-8 grid gap-4">
              {facts.map((fact) => (
                <div
                  key={fact}
                  className="flex items-center gap-4 rounded-3xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
                    ✓
                  </div>
                  <p className="font-black text-[#18181b]">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-black/5">
            <div className="relative h-[560px]">
              <Image
                src="/images/hero/hero-umzug-landshut.jpg"
                alt="Umzüge LAF Umzug in Landshut"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/50 p-6 text-white backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  LAF Service
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  Saubere Arbeit beginnt mit guter Planung.
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Von der ersten Anfrage bis zur Übergabe behalten wir den
                  Überblick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Werte
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Was uns wichtig ist.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Gute Arbeit erkennt man nicht nur am Ergebnis, sondern auch am
              Weg dorthin. Diese Grundsätze prägen unsere Arbeit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black text-[#18181b]">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-black/65">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work steps */}
      <section className="relative z-10 bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Arbeitsweise
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Klarer Ablauf statt Stress.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Jeder Auftrag ist anders. Deshalb hören wir genau zu, planen
              nachvollziehbar und setzen strukturiert um.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-black/5 bg-[#fafaf7] p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#18181b]">{step.title}</h3>
                  <p className="mt-2 leading-7 text-black/60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative z-10 overflow-hidden bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Kontakt
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Lernen Sie unseren Service kennen.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Schreiben Sie kurz, worum es geht. Wir melden uns schnell zurück
              und klären den passenden Ablauf.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={phoneHref}
              className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
            >
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
