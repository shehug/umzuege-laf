import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.umzuege);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const moveServices = [
  {
    title: "Privatumzug",
    text: "Für Wohnungen, Häuser und private Haushalte — sauber geplant und zuverlässig durchgeführt.",
    href: "/umzuege/privatumzug",
    number: "01",
  },
  {
    title: "Firmenumzug",
    text: "Büros, Praxen und Gewerbeflächen mit klarer Organisation und möglichst kurzer Ausfallzeit.",
    href: "/umzuege/firmenumzug",
    number: "02",
  },
  {
    title: "Fernumzug",
    text: "Umzüge über größere Strecken mit sicherem Transport und transparenter Planung.",
    href: "/umzuege/fernumzug",
    number: "03",
  },
  {
    title: "Expressumzug",
    text: "Wenn es kurzfristig gehen muss: schnell, strukturiert und lösungsorientiert.",
    href: "/umzuege/expressumzug",
    number: "04",
  },
  {
    title: "Einpackservice",
    text: "Sorgfältiges Verpacken Ihrer Gegenstände auf Wunsch durch unser Team.",
    href: "/umzuege/einpackservice",
    number: "05",
  },
  {
    title: "Möbelmontage",
    text: "Abbau, Transport und Aufbau Ihrer Möbel — sauber und zuverlässig.",
    href: "/umzuege/moebelmontage",
    number: "06",
  },
  {
    title: "Lagerung",
    text: "Praktische Zwischenlösung, wenn Möbel oder Kartons vorübergehend gelagert werden müssen.",
    href: "/umzuege/lagerung",
    number: "07",
  },
];

const process = [
  {
    title: "Anfrage",
    text: "Sie teilen uns kurz mit, was transportiert werden soll und wann der Umzug geplant ist.",
  },
  {
    title: "Planung",
    text: "Wir klären Umfang, Etagen, Entfernung, Möbelmontage und besondere Anforderungen.",
  },
  {
    title: "Durchführung",
    text: "Unser Team führt den Umzug strukturiert, sorgfältig und zuverlässig durch.",
  },
  {
    title: "Abschluss",
    text: "Nach Transport und Aufbau wird alles sauber übergeben.",
  },
];

export default function UmzuegePage() {
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
            src="/images/services/Transport.jpg"
            alt="Umzüge LAF Umzüge in Landshut"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/92 via-[#050505]/62 to-[#050505]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.28),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Umzüge in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Ihr Umzug.
              <span className="gradient-text block">Klar geplant.</span>
              Sicher bewegt.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 drop-shadow md:text-xl">
              Umzüge LAF begleitet private und gewerbliche Umzüge mit Planung,
              Transport, Möbelmontage, Einpackservice und persönlicher
              Betreuung.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Umzug anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Privatumzug", "Firmenumzug", "Montage"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-black/35 p-5 backdrop-blur-xl"
                >
                  <p className="text-xl font-black text-[#f6c21a]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    zuverlässig geplant und sauber umgesetzt
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
                Umzugsleistungen
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Für jeden Umzug die passende Lösung.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-black/60">
              Ob kleiner Wohnungswechsel oder kompletter Firmenumzug — wir
              planen den Ablauf passend zu Ihrem Bedarf.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moveServices.map((service) => (
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
              Ein guter Umzug braucht Struktur.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Damit am Umzugstag alles klar ist, achten wir auf einfache
              Kommunikation, saubere Planung und zuverlässige Durchführung.
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="relative h-[520px]">
              <Image
                src="/images/services/privatumzug.jpg"
                alt="Umzüge LAF Privatumzug"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.24),transparent_36%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/55 p-6 text-white backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Sorgfältig
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Möbel, Kartons und Räume in guten Händen.
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  Wir achten auf sichere Abläufe und sauberen Umgang mit Ihrem
                  Eigentum.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Warum LAF?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Persönlich, erreichbar und zuverlässig.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Ein Umzug ist Vertrauenssache. Deshalb setzen wir auf klare
              Kommunikation, transparente Planung und ein Team, das sorgfältig
              arbeitet.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Persönlicher Ansprechpartner",
                "Sorgfältiger Transport",
                "Faire Planung ohne Chaos",
                "Umzüge in Landshut & Umgebung",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
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
              Umzug anfragen
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Bereit für Ihren Umzug?
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
