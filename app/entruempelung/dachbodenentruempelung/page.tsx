import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { createSeoMetadata, seoPages } from "../../seo";
import ServiceJsonLd from "../../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata = createSeoMetadata(seoPages.dachbodenentruempelung);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const benefits = [
  {
    title: "Schwer zugängliche Bereiche",
    text: "Dachböden sind oft eng, verwinkelt oder nur über schmale Treppen erreichbar. Wir planen den Ablauf passend zur Situation.",
  },
  {
    title: "Alte Gegenstände sicher raus",
    text: "Kartons, Möbel, Deko, Kisten und gelagerte Altbestände werden strukturiert geräumt und sicher bewegt.",
  },
  {
    title: "Mehr Platz unterm Dach",
    text: "Durch eine Dachbodenentrümpelung gewinnen Sie wieder nutzbaren Raum und bringen Ordnung in lange ungenutzte Bereiche.",
  },
  {
    title: "Ideal vor Verkauf oder Umzug",
    text: "Vor einem Umzug, einer Renovierung oder einer Immobilienübergabe ist ein leerer Dachboden ein großer Vorteil.",
  },
];

const process = [
  {
    title: "Anfrage stellen",
    text: "Sie nennen uns Adresse, Dachbodenbereich und den gewünschten Zeitraum.",
  },
  {
    title: "Umfang klären",
    text: "Wir besprechen Zugang, Treppen, gelagerte Gegenstände und mögliche Besonderheiten vor Ort.",
  },
  {
    title: "Entrümpelung planen",
    text: "Wir stimmen Tragewege, Arbeitsaufwand und Ablauf sinnvoll aufeinander ab.",
  },
  {
    title: "Dachboden räumen",
    text: "Unser Team entrümpelt den Dachboden zuverlässig, organisiert und nach Absprache ordentlich.",
  },
];

const included = [
  "Dachbodenentrümpelung",
  "Kartons & Kisten räumen",
  "alte Möbel entfernen",
  "Deko & Altbestände",
  "schwere Gegenstände tragen",
  "enge Zugänge berücksichtigen",
  "ideal vor Umzug",
  "besenreine Übergabe",
];

const checklist = [
  "Adresse des Objekts",
  "Wie groß ist der Dachboden?",
  "Wie ist der Zugang?",
  "Treppen, Leiter oder Luke?",
  "Welche Gegenstände lagern dort?",
  "gewünschter Termin",
];

const atticItems = [
  "Kartons & Kisten",
  "alte Möbelstücke",
  "Dekoration & Saisonartikel",
  "Werkzeug, Geräte, Restbestände",
];

function DachbodenVisual() {
  return (
    <div className="premium-border relative overflow-hidden rounded-[2.5rem] bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.16),transparent_32%),linear-gradient(180deg,#171717_0%,#080808_100%)] p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-10 h-[2px] w-[78%] -translate-x-1/2 rotate-[26deg] bg-[#f6c21a]/45" />
          <div className="absolute left-1/2 top-10 h-[2px] w-[78%] -translate-x-1/2 -rotate-[26deg] bg-[#f6c21a]/45" />
          <div className="absolute left-[13%] right-[13%] top-[82px] h-[2px] bg-[#f6c21a]/25" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-full border border-[#f6c21a]/30 bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f6c21a]">
              Dachboden
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/70">
              Ordnung statt Chaos
            </div>
          </div>

          <div className="mb-6 rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Typische Inhalte
            </p>

            <div className="mt-5 grid gap-3">
              {atticItems.map((item) => (
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
                Zugang
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Treppe, enge Wege, Dachschräge oder Luke — wir planen den
                Ablauf passend zur Situation vor Ort.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Ziel
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Mehr Platz, bessere Übersicht und ein wieder nutzbarer
                Dachboden.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Kisten", "Deko", "Altbestand"].map((item) => (
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
          Unter dem Dach
        </p>
        <h3 className="mt-3 text-2xl font-black text-white">
          Auch volle, enge oder lange ungenutzte Dachböden räumen wir
          strukturiert frei.
        </h3>
        <p className="mt-3 leading-7 text-white/60">
          Wir bringen Ordnung in gelagerte Kartons, alte Möbel, Dekoration und
          sperrige Gegenstände.
        </p>
      </div>
    </div>
  );
}

export default function DachbodenentruempelungPage() {
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
      name: "Dachbodenentrümpelung",
      path: "/entruempelung/dachbodenentruempelung",
    },
  ]}
/>

<ServiceJsonLd
  name="Dachbodenentrümpelung Landshut"
  description="Dachbodenentrümpelung in Landshut mit Umzüge LAF. Kartons, Kisten, alte Möbel und Altbestände unter dem Dach zuverlässig räumen lassen."
  path="/entruempelung/dachbodenentruempelung"
  serviceType="Dachbodenentrümpelung"
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
              Dachbodenentrümpelung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Dachboden räumen.
              <span className="gradient-text block">Platz zurückholen.</span>
              Ordnung schaffen.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84 drop-shadow md:text-xl">
              Ob alte Kartons, ungenutzte Möbel, Dekoration oder jahrelang
              gelagerte Dinge: Umzüge LAF übernimmt Ihre
              Dachbodenentrümpelung zuverlässig, strukturiert und mit einem
              sauberen Ablauf.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Dachbodenentrümpelung anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Sichten", "Räumen", "Freilegen"].map((item) => (
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

          <DachbodenVisual />
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Dachbodenentrümpelung
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Wenn oben unter dem Dach wieder Platz entstehen soll.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Dachböden dienen oft über Jahre als Lagerfläche. Mit der Zeit
              sammeln sich dort Kartons, Möbel, Deko, Geräte und alte Dinge,
              die kaum noch genutzt werden. Wir helfen dabei, den Bereich
              geordnet zu räumen und wieder sinnvoll nutzbar zu machen.
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
                Schrägen, enge Zugänge und lange gelagerte Gegenstände.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Gerade beim Dachboden kommt es auf einen sinnvollen Ablauf an.
                Nicht nur das Tragen, sondern auch der Zugang und die Struktur
                vor Ort spielen eine große Rolle.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Dachschrägen & verwinkelte Flächen",
                    text: "Nicht jeder Bereich ist gut zugänglich — wir planen den Ablauf entsprechend.",
                  },
                  {
                    title: "Kartons, Kisten & Altbestände",
                    text: "Viele Dachböden enthalten gelagerte Dinge aus vielen Jahren, die systematisch geräumt werden müssen.",
                  },
                  {
                    title: "Treppen & enge Wege",
                    text: "Wir achten auf sichere Tragewege und geordnetes Arbeiten auch bei wenig Platz.",
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
              Dachbodenentrümpelung mit System statt Schleppen auf eigene Faust.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Gerade auf Dachböden ist ein strukturierter Ablauf wichtig. Wir
              unterstützen Sie zuverlässig und sorgen dafür, dass der Bereich
              wieder frei und nutzbar wird.
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
              So läuft Ihre Dachbodenentrümpelung ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Wir stimmen Zugang, Umfang, Gegenstände und Arbeitsaufwand
              passend zu Ihrer Situation ab.
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
              Zugang, Tragewege und Zeitbedarf einschätzen.
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
                  Hilft uns bei der genauen Planung Ihrer
                  Dachbodenentrümpelung.
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
                  Freier Raum
                </p>
                <h3 className="mt-4 text-3xl font-black">
                  Aus vollem Dachboden wird wieder nutzbarer Platz.
                </h3>
                <p className="mt-4 leading-7 text-white/65">
                  Wir helfen dabei, lange ungenutzte Bereiche zu leeren,
                  Altbestände zu entfernen und wieder Struktur unter dem Dach
                  zu schaffen.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "mehr Übersicht",
                    "besser nutzbare Fläche",
                    "weniger Ballast",
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
                Räumen Sie Ihren Dachboden mit LAF.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Schreiben Sie kurz, welcher Dachboden geräumt werden soll und
                wann der Termin gewünscht ist. Wir melden uns schnell zurück
                und klären den passenden Ablauf.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
                >
                  Dachbodenentrümpelung anfragen
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

      <Footer />
    </main>
  );
}
