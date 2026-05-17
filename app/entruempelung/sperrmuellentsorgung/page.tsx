import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LocalSeoLinks from "../../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../../seo";
import ServiceJsonLd from "../../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata = createSeoMetadata(seoPages.sperrmuellentsorgung);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const benefits = [
  {
    title: "Sperrige Sachen weg",
    text: "Wir kümmern uns um Möbel, Matratzen, Regale, alte Gegenstände und sperrige Teile, die Platz blockieren.",
  },
  {
    title: "Kein Schleppen",
    text: "Sie müssen schwere oder unhandliche Gegenstände nicht selbst aus Wohnung, Keller, Garage oder Dachboden tragen.",
  },
  {
    title: "Schnelle Entlastung",
    text: "Ideal, wenn kurzfristig Platz geschaffen werden soll — vor Umzug, Übergabe, Renovierung oder Entrümpelung.",
  },
  {
    title: "Sauber organisiert",
    text: "Wir planen Abholung, Tragewege und Abtransport so, dass der Ablauf zügig und ordentlich funktioniert.",
  },
];

const process = [
  {
    title: "Anfrage stellen",
    text: "Sie nennen uns Adresse, Art und Menge des Sperrmülls sowie den gewünschten Zeitraum.",
  },
  {
    title: "Umfang klären",
    text: "Wir besprechen, welche Gegenstände abgeholt werden sollen und wie der Zugang vor Ort ist.",
  },
  {
    title: "Abholung planen",
    text: "Wir stimmen Teamgröße, Tragewege und Abtransport passend auf den Umfang ab.",
  },
  {
    title: "Sperrmüll abholen",
    text: "Unser Team trägt die Gegenstände raus und übernimmt den Abtransport zuverlässig.",
  },
];

const included = [
  "Sperrmüllentsorgung",
  "alte Möbel",
  "Matratzen & Betten",
  "Regale & Schränke",
  "Keller & Garage",
  "Dachboden",
  "Abholung vor Ort",
  "schnelle Terminabsprache",
];

const checklist = [
  "Adresse der Abholung",
  "Was soll abgeholt werden?",
  "ungefähre Menge",
  "Etage, Aufzug und Zugang",
  "sperrige oder schwere Teile?",
  "gewünschter Termin",
];

const wasteItems = [
  "alte Möbel & Regale",
  "Matratzen & Betten",
  "Kartons & sperrige Teile",
  "Keller-, Dachboden- oder Garagenfunde",
];

function SperrmuellVisual() {
  return (
    <div className="premium-border relative overflow-hidden rounded-[2.5rem] bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.16),transparent_32%),linear-gradient(180deg,#171717_0%,#080808_100%)] p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[10%] right-[10%] top-[72px] h-[2px] bg-[#f6c21a]/25" />
          <div className="absolute bottom-[80px] left-[12%] right-[12%] h-[2px] bg-white/10" />
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/[0.04]" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-full border border-[#f6c21a]/30 bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a]">
              Sperrmüll
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/70">
              Schnell weg
            </div>
          </div>

          <div className="mb-6 rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Typische Gegenstände
            </p>

            <div className="mt-5 grid gap-3">
              {wasteItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f6c21a] text-sm font-black text-black">
                    ✓
                  </div>
                  <p className="text-sm font-black text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Abholung
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Wohnung, Keller, Garage oder Dachboden — wir holen sperrige
                Gegenstände dort ab, wo sie stehen.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Ziel
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Schnell Platz schaffen, schwere Dinge loswerden und Räume
                wieder frei nutzen.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Möbel", "Matratzen", "Regale"].map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-[#f6c21a]/20 bg-[#c9893b] p-4 text-black shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="h-2 w-10 rounded-full bg-black/20" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-black/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
          Sperrige Gegenstände
        </p>
        <h3 className="mt-3 text-2xl font-black text-white">
          Alte Möbel, Matratzen und große Gegenstände holen wir zuverlässig ab.
        </h3>
        <p className="mt-3 leading-7 text-white/60">
          Wir schaffen Platz, übernehmen das Tragen und organisieren den
          Abtransport sauber und zuverlässig.
        </p>
      </div>
    </div>
  );
}

export default function SperrmuellentsorgungPage() {
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

<BreadcrumbJsonLd
  items={[
    { name: "Startseite", path: "/" },
    { name: "Entrümpelung", path: "/entruempelung" },
    {
      name: "Sperrmüllentsorgung",
      path: "/entruempelung/sperrmuellentsorgung",
    },
  ]}
/>

<ServiceJsonLd
  name="Sperrmüllentsorgung Landshut"
  description="Sperrmüllentsorgung in Landshut mit Umzüge LAF. Alte Möbel, Matratzen, Regale und sperrige Gegenstände zuverlässig abholen lassen."
  path="/entruempelung/sperrmuellentsorgung"
  serviceType="Sperrmüllentsorgung"
/>

      <section className="relative z-10 overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Sperrmüllentsorgung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Sperrmüll weg.
              <span className="gradient-text block">Platz zurück.</span>
              Schnell entlastet.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84 drop-shadow md:text-xl">
              Ob alte Möbel, Matratzen, Regale oder sperrige Gegenstände:
              Umzüge LAF übernimmt die Sperrmüllabholung zuverlässig,
              organisiert und ohne unnötigen Aufwand für Sie.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Sperrmüll anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Abholen", "Tragen", "Platz schaffen"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-black/35 p-5 backdrop-blur-xl"
                >
                  <p className="text-xl font-black text-[#f6c21a]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    organisiert geplant und sauber umgesetzt
                  </p>
                </div>
              ))}
            </div>
          </div>

          <SperrmuellVisual />
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Sperrmüllentsorgung
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Wenn sperrige Dinge schnell und sauber verschwinden sollen.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Sperrmüll blockiert oft Platz in Wohnung, Keller, Garage oder
              Dachboden. Wir übernehmen das Tragen und den Abtransport, damit
              Sie sich nicht selbst mit schweren oder unhandlichen Gegenständen
              beschäftigen müssen.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
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

          <div className="premium-border rounded-[2.5rem] bg-black p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#0d0d0d_0%,#151515_100%)] p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Typische Herausforderung
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Große Möbel, schwere Teile und wenig Zeit.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Sperrmüll ist oft unhandlich, schwer und schlecht zu
                transportieren. Mit einem eingespielten Team wird die Abholung
                deutlich einfacher und schneller.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Sperrige Möbelstücke",
                    text: "Schränke, Regale, Betten oder Tische lassen sich oft nicht alleine bewegen.",
                  },
                  {
                    title: "Abholung aus verschiedenen Bereichen",
                    text: "Wir holen Gegenstände aus Wohnung, Keller, Garage, Dachboden oder Nebenräumen.",
                  },
                  {
                    title: "Schnell Platz schaffen",
                    text: "Ideal vor Umzug, Renovierung, Wohnungsübergabe oder Entrümpelung.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-5"
                  >
                    <p className="text-lg font-black">{item.title}</p>
                    <p className="mt-2 leading-7 text-white/60">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050505] px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Vorteile
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Sperrmüllentsorgung ohne Schleppen und ohne Chaos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Wir helfen Ihnen, schwere und sperrige Gegenstände schnell
              loszuwerden und wieder Platz zu schaffen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="premium-border group rounded-[2rem] bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black text-white">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Ablauf
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              So läuft Ihre Sperrmüllentsorgung ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Wir stimmen Menge, Gegenstände, Zugang und Termin passend zu Ihrer
              Situation ab.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-2 leading-7 text-black/60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050505] px-5 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Anfrage vorbereiten
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Diese Informationen helfen für ein schnelles Angebot.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Je genauer Ihre Angaben sind, desto besser können wir Aufwand,
              Teamgröße und Zeitbedarf einschätzen.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Kontaktformular öffnen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="premium-border rounded-[2rem] bg-white/[0.045] p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  ✓
                </div>

                <p className="text-lg font-black text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Hilft uns bei der genauen Planung Ihrer Sperrmüllentsorgung.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-black shadow-[0_35px_120px_rgba(0,0,0,0.22)]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="flex min-h-[460px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(246,194,26,0.16),transparent_32%),linear-gradient(180deg,#111111_0%,#060606_100%)] p-8">
              <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-white backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Mehr Platz
                </p>
                <h3 className="mt-4 text-3xl font-black">
                  Sperrige Gegenstände raus, freie Fläche zurück.
                </h3>
                <p className="mt-4 leading-7 text-white/65">
                  Wir helfen dabei, alte Möbel und große Gegenstände schnell
                  loszuwerden und Räume wieder nutzbar zu machen.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "weniger Ballast",
                    "freie Räume",
                    "schnelle Entlastung",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 text-white md:p-12">
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Angebot sichern
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Lassen Sie Sperrmüll einfach abholen.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Schreiben Sie kurz, was abgeholt werden soll und wann der Termin
                gewünscht ist. Wir melden uns schnell zurück und klären den
                passenden Ablauf.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
                >
                  Sperrmüll anfragen
                </Link>

                <a
                  href={`mailto:${email}`}
                  className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
                >
                  E-Mail schreiben
                </a>
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
