import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    href: "/umzuege/privatumzug",
    number: "01",
    image: "/images/services/privatumzug.jpg",
  },
  {
    title: "Firmenumzug",
    label: "Gewerbe",
    text: "Strukturierte Betriebsumzüge mit minimaler Ausfallzeit und klarer Organisation.",
    href: "/umzuege/firmenumzug",
    number: "02",
    image: "/images/services/firmenumzug.jpg",
  },
  {
    title: "Entrümpelung",
    label: "Räumung",
    text: "Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen sauber entrümpeln.",
    href: "/entruempelung",
    number: "03",
    image: "/images/services/entruempelung.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-20" />
        <div className="laf-noise absolute inset-0 opacity-[0.05]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      <section className="relative z-10 min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Hero.jpg"
            alt="Umzüge LAF Hero Bild"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.22),transparent_28%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/30 bg-[#f6c21a]/10 px-4 py-2 text-sm font-bold text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.12)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Premium Umzugsservice in Landshut
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Umzug.
              <span className="gradient-text block">Ohne Stress.</span>
              Mit LAF.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Von der Planung bis zum letzten Möbelstück: Umzüge LAF übernimmt
              Privatumzüge, Firmenumzüge, Entrümpelungen, Möbelmontage und
              Einpackservice — zuverlässig, sauber und persönlich.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center text-base font-black text-black"
              >
                Kostenlos anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-center text-base font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="premium-border rounded-3xl bg-black/35 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-[#f6c21a]">100%</p>
                <p className="mt-1 text-xs leading-5 text-white/65">
                  persönlich geplant
                </p>
              </div>

              <div className="premium-border rounded-3xl bg-black/35 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-[#f6c21a]">Fair</p>
                <p className="mt-1 text-xs leading-5 text-white/65">
                  transparente Preise
                </p>
              </div>

              <div className="premium-border rounded-3xl bg-black/35 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-[#f6c21a]">LAF</p>
                <p className="mt-1 text-xs leading-5 text-white/65">
                  Team aus Landshut
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-5 pb-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/45 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:grid-cols-3 md:p-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Schnell
              </p>
              <p className="mt-2 text-lg font-black">Schnelle Rückmeldung</p>
              <p className="mt-1 text-sm text-white/60">
                Kurze Wege, klare Kommunikation und strukturierte Planung.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Sauber
              </p>
              <p className="mt-2 text-lg font-black">Saubere Ausführung</p>
              <p className="mt-1 text-sm text-white/60">
                Sorgfältiger Umgang mit Möbeln, Räumen und Transport.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Persönlich
              </p>
              <p className="mt-2 text-lg font-black">Direkter Ansprechpartner</p>
              <p className="mt-1 text-sm text-white/60">
                Ein Umzugspartner, der erreichbar ist und mitdenkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[0.28em] text-[#b28a00]">
                Leistungen
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Umzug, Entrümpelung und Service aus einer Hand.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/65">
                Klare Abläufe, sorgfältige Arbeit und ein zuverlässiges Team:
                Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in
                Landshut und Umgebung.
              </p>
            </div>

            <Link
              href="/leistungen"
              className="w-fit rounded-full bg-black px-7 py-4 font-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:bg-[#f6c21a] hover:text-black"
            >
              Alle Leistungen ansehen
            </Link>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-[2.2rem] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(0,0,0,0.28)]"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.22),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a] backdrop-blur-xl">
                    {service.label}
                  </div>

                  <div className="absolute right-5 top-5 text-6xl font-black text-white/15 transition group-hover:text-[#f6c21a]/35">
                    {service.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                      <h3 className="text-2xl font-black text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[84px] leading-7 text-white/65">
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

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Kostenlose Anfrage",
              "Faire Planung",
              "Saubere Ausführung",
              "Landshut & Umgebung",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl"
              >
                <p className="text-sm font-black text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-28 lg:px-8">
  <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f6c21a]/15 blur-3xl" />
  <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
    <div>
      <p className="font-black uppercase tracking-[0.28em] text-[#f6c21a]">
        Anfrage starten
      </p>

      <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
        Ein guter Umzug beginnt mit einem klaren Plan.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
        Teilen Sie uns kurz mit, worum es geht. Ob Privatumzug,
        Firmenumzug, Entrümpelung oder Möbelmontage — Umzüge LAF meldet sich
        schnell und plant den Ablauf transparent mit Ihnen.
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
            className="premium-border rounded-3xl bg-white/[0.045] p-5 backdrop-blur-xl"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
              ✓
            </div>
            <p className="font-black text-white">{item}</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Schnell, unkompliziert und zuverlässig abgestimmt.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href={phoneHref}
          className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
        >
          Jetzt anrufen
        </a>

        <a
          href={`mailto:${email}`}
          className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
        >
          E-Mail schreiben
        </a>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-[#f6c21a]/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.18),transparent_35%)]" />

        <div className="relative">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Schnellformular
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Was möchten Sie anfragen?
              </h3>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black sm:flex">
              →
            </div>
          </div>

          <div className="grid gap-3">
            {[
              "Privatumzug",
              "Firmenumzug",
              "Entrümpelung",
              "Möbelmontage",
              "Einpackservice",
            ].map((item) => (
              <a
                key={item}
                href={`mailto:${email}?subject=Anfrage: ${encodeURIComponent(
                  item
                )}&body=Hallo Umzüge LAF,%0D%0A%0D%0Aich möchte eine Anfrage stellen für: ${encodeURIComponent(
                  item
                )}.%0D%0A%0D%0AOrt:%0D%0ADatum:%0D%0AKurze Beschreibung:%0D%0A%0D%0AMit freundlichen Grüßen`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-5 py-4 transition hover:border-[#f6c21a]/50 hover:bg-[#f6c21a]/10"
              >
                <span className="font-black text-white group-hover:text-[#f6c21a]">
                  {item}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-[#f6c21a] group-hover:text-black">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-7 rounded-[1.5rem] border border-[#f6c21a]/25 bg-[#f6c21a]/10 p-5">
            <p className="font-black text-[#f6c21a]">
              Tipp für eine schnelle Einschätzung
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Nennen Sie bitte Startadresse, Zieladresse, Etage, gewünschtes
              Datum und ob Möbelmontage oder Verpackung gewünscht ist.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={phoneHref}
              className="rounded-full bg-[#f6c21a] px-6 py-4 text-center font-black text-black transition hover:bg-white"
            >
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="rounded-full border border-white/15 px-6 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}
