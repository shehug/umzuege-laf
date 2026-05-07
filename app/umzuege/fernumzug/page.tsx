import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { createSeoMetadata, seoPages } from "../../seo";
import ServiceJsonLd from "../../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";


export const metadata = createSeoMetadata(seoPages.fernumzug);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const benefits = [
  {
    title: "Sichere Langstreckenplanung",
    text: "Bei größeren Entfernungen zählt ein klarer Ablauf. Wir planen Strecke, Zeitfenster und Transport sorgfältig.",
  },
  {
    title: "Zuverlässiger Transport",
    text: "Möbel, Kartons und persönliche Gegenstände werden sicher verladen und zuverlässig ans Ziel gebracht.",
  },
  {
    title: "Klare Kommunikation",
    text: "Sie wissen, was geplant ist, wann der Transport startet und wie der Ablauf am Zielort aussieht.",
  },
  {
    title: "Service aus einer Hand",
    text: "Auf Wunsch mit Einpackservice, Möbelmontage, Tragearbeiten und zusätzlicher Unterstützung.",
  },
];

const process = [
  {
    title: "Fernumzug anfragen",
    text: "Sie nennen Startort, Zielort, Terminwunsch und den ungefähren Umfang.",
  },
  {
    title: "Strecke und Umfang klären",
    text: "Wir prüfen Entfernung, Zugang, Etagen, Parkmöglichkeiten und gewünschte Zusatzleistungen.",
  },
  {
    title: "Transport planen",
    text: "Der Ablauf wird klar vorbereitet, damit der Umzugstag möglichst ruhig und strukturiert läuft.",
  },
  {
    title: "Sicher ankommen",
    text: "Ihr Umzugsgut wird zuverlässig transportiert und am Zielort sorgfältig übergeben.",
  },
];

const included = [
  "Umzug über größere Distanz",
  "Transport innerhalb Deutschlands",
  "Möbeltransport",
  "Kartons und Hausrat",
  "Möbelmontage nach Absprache",
  "Einpackservice auf Wunsch",
  "klare Terminabstimmung",
  "persönliche Planung",
];

const checklist = [
  "Startadresse und Zieladresse",
  "gewünschter Umzugstermin",
  "Etage und Aufzug",
  "Parkmöglichkeit vor Ort",
  "Möbelumfang und Kartons",
  "Montage oder Einpackservice gewünscht?",
];

export default function FernumzugPage() {
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
    { name: "Umzüge", path: "/umzuege" },
    { name: "Fernumzug", path: "/umzuege/fernumzug" },
  ]}
/>

<ServiceJsonLd
  name="Fernumzug ab Landshut"
  description="Fernumzug mit Umzüge LAF. Zuverlässige Planung, sicherer Transport und strukturierte Umsetzung für Umzüge über größere Entfernung."
  path="/umzuege/fernumzug"
  serviceType="Fernumzug"
/>

      <section className="relative z-10 min-h-[90vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/Transport.jpg"
            alt="Umzüge LAF Fernumzug"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/58 to-[#050505]/14" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/18 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.30),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Fernumzug mit Umzüge LAF
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Weiter weg.
              <span className="gradient-text block">Sicher geplant.</span>
              Stressfrei ankommen.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84 drop-shadow md:text-xl">
              Ob innerhalb Bayerns oder deutschlandweit: Umzüge LAF plant Ihren
              Fernumzug strukturiert, zuverlässig und mit Blick auf sicheren
              Transport über größere Strecken.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Fernumzug anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Langstrecke", "Transport", "Planung"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-black/35 p-5 backdrop-blur-xl"
                >
                  <p className="text-xl font-black text-[#f6c21a]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    zuverlässig abgestimmt und sicher durchgeführt
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

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Fernumzug
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Ein Umzug über größere Entfernung braucht klare Planung.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Bei einem Fernumzug müssen Zeit, Strecke, Beladung, Entladung und
              Übergabe sauber aufeinander abgestimmt sein. Wir unterstützen Sie
              mit einem strukturierten Ablauf und persönlicher Betreuung.
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

          <div className="relative overflow-hidden rounded-[2.5rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="relative h-[560px]">
              <Image
                src="/images/services/PU1.jpg"
                alt="Fernumzug mit Umzüge LAF"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.24),transparent_36%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/55 p-6 text-white backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Langstrecke
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Sicher transportieren, entspannt ankommen.
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  Wir achten auf sichere Beladung, klare Abstimmung und
                  zuverlässigen Transport.
                </p>
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
              Fernumzug mit Ruhe, Struktur und Überblick.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Je weiter der Umzug, desto wichtiger sind klare Absprachen. Genau
              deshalb setzen wir auf persönliche Planung und saubere Umsetzung.
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
              So läuft Ihr Fernumzug ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Ein Fernumzug soll nicht improvisiert wirken. Deshalb stimmen wir
              die wichtigsten Punkte vorher klar mit Ihnen ab.
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
              Diese Infos helfen bei der Planung.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Bei Fernumzügen sind Entfernungen, Zeitfenster und Zugang am
              Zielort besonders wichtig.
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
                  Hilft uns bei der genauen Planung Ihres Fernumzugs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-black shadow-[0_35px_120px_rgba(0,0,0,0.22)]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[460px]">
              <Image
                src="/images/services/Transport.jpg"
                alt="Fernumzug Landshut mit Umzüge LAF"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/85" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,194,26,0.24),transparent_35%)]" />
            </div>

            <div className="flex flex-col justify-center p-8 text-white md:p-12">
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Angebot sichern
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Planen Sie Ihren Fernumzug mit LAF.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Schreiben Sie kurz, wohin der Umzug gehen soll. Wir melden uns
                schnell zurück und klären den passenden Ablauf.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
                >
                  Fernumzug anfragen
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
