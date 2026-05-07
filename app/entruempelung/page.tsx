import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.entruempelung);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const clearingServices = [
  {
    title: "Wohnungsentrümpelung",
    text: "Komplette Wohnungen sauber räumen lassen — zuverlässig, diskret und besenrein.",
    href: "/entruempelung/wohnungsentruempelung",
    number: "01",
  },
  {
    title: "Haushaltsauflösung",
    text: "Strukturierte Haushaltsauflösungen mit Planung, Räumung und fachgerechter Entsorgung.",
    href: "/entruempelung/haushaltsaufloesung",
    number: "02",
  },
  {
    title: "Kellerentrümpelung",
    text: "Kellerflächen schnell und sauber freiräumen — auch bei schwer zugänglichen Bereichen.",
    href: "/entruempelung/kellerentruempelung",
    number: "03",
  },
  {
    title: "Dachbodenentrümpelung",
    text: "Dachböden professionell räumen lassen, inklusive Sortierung und Abtransport.",
    href: "/entruempelung/dachbodenentruempelung",
    number: "04",
  },
  {
    title: "Garagenentrümpelung",
    text: "Garagen, Schuppen und Abstellflächen wieder nutzbar machen — sauber und effizient.",
    href: "/entruempelung/garagenentruempelung",
    number: "05",
  },
  {
    title: "Büroentrümpelung",
    text: "Büros, Lagerflächen und Gewerberäume strukturiert räumen und übergeben.",
    href: "/entruempelung/bueroentruempelung",
    number: "06",
  },
  {
    title: "Sperrmüllentsorgung",
    text: "Sperrmüll fachgerecht abtransportieren und entsorgen lassen.",
    href: "/entruempelung/sperrmuellentsorgung",
    number: "07",
  },
];

const process = [
  {
    title: "Anfrage",
    text: "Sie beschreiben kurz, welche Räume oder Flächen entrümpelt werden sollen.",
  },
  {
    title: "Einschätzung",
    text: "Wir klären Umfang, Zugang, Etage, Parkmöglichkeit und gewünschtes Datum.",
  },
  {
    title: "Räumung",
    text: "Unser Team räumt strukturiert, sorgfältig und zuverlässig.",
  },
  {
    title: "Übergabe",
    text: "Nach der Entrümpelung wird die Fläche sauber und besenrein übergeben.",
  },
];

const benefits = [
  "Besenreine Übergabe",
  "Schnelle Terminabstimmung",
  "Saubere Räumung",
  "Fachgerechte Entsorgung",
  "Persönliche Beratung",
  "Landshut & Umgebung",
];

export default function EntruempelungPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-25" />
        <div className="laf-noise absolute inset-0 opacity-[0.05]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      <section className="relative z-10 min-h-[88vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/entruempelung1.jpg"
            alt="Umzüge LAF Entrümpelung in Landshut"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/88 via-[#050505]/58 to-[#050505]/14" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/18 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.30),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Entrümpelung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Raum schaffen.
              <span className="gradient-text block">Sauber gelöst.</span>
              Mit LAF.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84 drop-shadow md:text-xl">
              Ob Wohnung, Keller, Dachboden, Garage oder Büro: Umzüge LAF
              übernimmt Entrümpelungen zuverlässig, diskret und sauber — von
              der Planung bis zur besenreinen Übergabe.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Entrümpelung anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Besenrein", "Diskret", "Zuverlässig"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-black/35 p-5 backdrop-blur-xl"
                >
                  <p className="text-xl font-black text-[#f6c21a]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    sauber geplant und professionell umgesetzt
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Entrümpelungsservice
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Für jede Räumung die passende Lösung.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-black/60">
              Von kleinen Kellern bis zu kompletten Haushaltsauflösungen:
              Wir räumen strukturiert, sauber und zuverlässig.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clearingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.16)]"
              >
                <div className="absolute right-6 top-6 text-7xl font-black text-black/[0.04] transition group-hover:text-[#f6c21a]/25">
                  {service.number}
                </div>

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                  →
                </div>

                <h3 className="relative text-2xl font-black text-black">
                  {service.title}
                </h3>

                <p className="relative mt-4 min-h-[96px] leading-7 text-black/60">
                  {service.text}
                </p>

                <p className="relative mt-7 font-black text-black transition group-hover:text-[#b28a00]">
                  Mehr erfahren
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050505] px-5 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Ablauf
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Entrümpelung ohne Chaos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Eine gute Entrümpelung braucht klare Absprache und saubere
              Durchführung. Deshalb planen wir den Ablauf verständlich und
              halten Sie auf dem Laufenden.
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
                className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="premium-border group rounded-[2rem] bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-white/60">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="relative h-[520px]">
              <Image
                src="/images/services/entruempelung1.jpg"
                alt="Umzüge LAF Entrümpelungsservice"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.24),transparent_36%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/55 p-6 text-white backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Besenrein
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Räume wieder frei nutzbar machen.
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  Wir übernehmen Räumung, Abtransport und Übergabe sauber und
                  zuverlässig.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Vorteile
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Sauber, schnell und persönlich betreut.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Entrümpelungen sind oft mit Zeitdruck, Organisation und Aufwand
              verbunden. Wir nehmen Ihnen die Arbeit ab und sorgen für einen
              klaren Ablauf.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
                    ✓
                  </div>
                  <p className="font-black">{item}</p>
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
              Entrümpelung anfragen
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Bereit für mehr Platz?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Schreiben Sie kurz, welche Räume entrümpelt werden sollen. Wir
              melden uns schnell zurück und klären den passenden Ablauf.
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

      <Footer />
    </main>
  );
}
