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
    href: "/umzuege/privatumzug",
    image: "/images/services/privatumzug.jpg",
    tag: "Privat",
  },
  {
    title: "Firmenumzug",
    text: "Strukturierte Gewerbe- und Büroumzüge mit klarer Planung, kurzen Ausfallzeiten und sauberer Umsetzung.",
    href: "/umzuege/firmenumzug",
    image: "/images/services/firmenumzug.jpg",
    tag: "Gewerbe",
  },
  {
    title: "Entrümpelung",
    text: "Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen werden sauber geräumt und besenrein übergeben.",
    href: "/entruempelung",
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
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-20" />
        <div className="laf-noise absolute inset-0 opacity-[0.04]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
      </div>

      <Header />

      <section className="relative z-10 min-h-[82vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/umzuege-laf-1.jpg"
            alt="Umzüge LAF Leistungen"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/78 via-[#050505]/42 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.30),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/15 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Leistungen von Umzüge LAF
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl">
              Umzüge, Entrümpelung und Service aus einer Hand.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 drop-shadow md:text-xl">
              Umzüge LAF unterstützt Sie in Landshut und Umgebung mit
              zuverlässiger Planung, sauberer Ausführung und persönlicher
              Betreuung.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Kostenlos anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Hauptleistungen
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
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
                className="group relative overflow-hidden rounded-[2.2rem] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(0,0,0,0.28)]"
              >
                <div className="relative h-[430px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.22),transparent_35%)] opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a] backdrop-blur-xl">
                    {service.tag}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
                      <h3 className="text-2xl font-black text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[112px] leading-7 text-white/65">
                        {service.text}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="font-black text-[#f6c21a]">
                          Mehr erfahren
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-[-25deg] group-hover:scale-110">
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

      <section className="relative z-10 bg-[#050505] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Zusatzservice
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Mehr Service, weniger Stress.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Neben klassischen Umzügen übernimmt Umzüge LAF auch Verpackung,
                Montage, Lagerung, Expressumzüge und Entsorgung.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {additionalServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="premium-border group rounded-[2rem] bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                    →
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {service.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Ablauf
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
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
                  className="flex items-center gap-5 rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{step}</h3>
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

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-24 lg:px-8">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f6c21a]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Angebot
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Welche Leistung brauchen Sie?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Schreiben Sie kurz, worum es geht. Wir melden uns schnell zurück
              und klären den passenden Ablauf.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={phoneHref}
              className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
            >
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
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
