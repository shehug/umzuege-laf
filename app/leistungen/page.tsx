import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.leistungen);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const mainServices = [
  {
    title: "Privatumzug",
    text: "Wir planen und begleiten Ihren privaten Umzug zuverlässig — vom sicheren Transport bis zur Möbelmontage.",
    href: "/privatumzug-landshut",
    image: "/images/services/privatumzug.jpg",
    tag: "Privat",
  },
  {
    title: "Firmenumzug",
    text: "Strukturierte Gewerbe- und Büroumzüge mit klarer Planung, kurzen Ausfallzeiten und sauberer Umsetzung.",
    href: "/firmenumzug-landshut",
    image: "/images/services/firmenumzug.jpg",
    tag: "Gewerbe",
  },
  {
    title: "Entrümpelung",
    text: "Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen werden sauber geräumt und besenrein übergeben.",
    href: "/entruempelung-landshut",
    image: "/images/services/entruempelung.jpg",
    tag: "Räumung",
  },
];

const additionalServices = [
  {
    title: "Einpackservice",
    text: "Auf Wunsch übernehmen wir das sorgfältige Verpacken Ihrer Gegenstände.",
    href: "/umzuege/einpackservice",
  },
  {
    title: "Möbelmontage",
    text: "Abbau, Transport und Aufbau Ihrer Möbel — sauber und zuverlässig.",
    href: "/umzuege/moebelmontage",
  },
  {
    title: "Fernumzug",
    text: "Umzüge über größere Distanzen mit klarer Planung und sicherem Transport.",
    href: "/umzuege/fernumzug",
  },
  {
    title: "Expressumzug",
    text: "Wenn es schnell gehen muss, unterstützen wir kurzfristig und organisiert.",
    href: "/umzuege/expressumzug",
  },
  {
    title: "Lagerung",
    text: "Zwischenlagerung für Möbel, Kartons oder einzelne Gegenstände.",
    href: "/umzuege/lagerung",
  },
  {
    title: "Sperrmüllentsorgung",
    text: "Fachgerechte Entsorgung von Sperrmüll im Rahmen Ihrer Räumung.",
    href: "/entruempelung/sperrmuellentsorgung",
  },
];

const steps = [
  "Kostenlose Anfrage senden",
  "Bedarf und Umfang klären",
  "Transparentes Angebot erhalten",
  "Termin planen und durchführen",
];

export default function LeistungenPage() {
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
            alt="Umzüge LAF Leistungen"
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
              Leistungen von Umzüge LAF
            </div>

            <h1 className="max-w-5xl text-[2.5rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              Umzüge, Entrümpelung und Service aus einer Hand.
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Umzüge LAF unterstützt Sie in Landshut und Umgebung mit
              zuverlässiger Planung, sauberer Ausführung und persönlicher
              Betreuung.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Kostenlos anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative z-10 bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Hauptleistungen
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
                Die wichtigsten Leistungen auf einen Blick.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-black/60">
              Jede Leistung wird klar geplant, sauber umgesetzt und persönlich
              begleitet.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {mainServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-[2.2rem] bg-white shadow-md border border-black/5 transition duration-500 hover:-translate-y-3 hover:shadow-lg"
              >
                <div className="relative h-[430px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                  
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a] backdrop-blur-xl">
                    {service.tag}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md text-white">
                      <h3 className="text-2xl font-black">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[112px] leading-7 text-white/80">
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
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Zusatzservice
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
                Mehr Service, weniger Stress.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#18181b]/70">
                Neben klassischen Umzügen übernimmt Umzüge LAF auch Verpackung,
                Montage, Lagerung, Expressumzüge und Entsorgung.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {additionalServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6">
                    →
                  </div>

                  <h3 className="text-xl font-black text-[#18181b]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {service.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Ablauf
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
                So einfach läuft Ihre Anfrage.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/65">
                Ein guter Umzug braucht klare Kommunikation. Deshalb ist der
                Ablauf bei Umzüge LAF einfach, transparent und persönlich.
              </p>
            </div>

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-[2rem] border border-black/5 bg-[#fafaf7] p-5 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#18181b]">{step}</h3>
                    <p className="mt-1 text-sm leading-6 text-black/55">
                      Schnell, klar und ohne unnötige Umwege.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative z-10 overflow-hidden bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Angebot
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Welche Leistung brauchen Sie?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#18181b]/70">
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
