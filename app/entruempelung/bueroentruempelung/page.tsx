import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LocalSeoLinks from "../../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../../seo";
import ServiceJsonLd from "../../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata = createSeoMetadata(seoPages.bueroentruempelung);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const benefits = [
  {
    title: "Strukturierte Räumung",
    text: "Büromöbel, Akten, Technik und Arbeitsplätze werden geordnet geräumt und vorbereitet.",
  },
  {
    title: "Weniger Betriebsaufwand",
    text: "Sie müssen sich nicht selbst um Tragen, Sortieren und Abtransport kümmern.",
  },
  {
    title: "Sauberer Ablauf",
    text: "Wir planen die Büroentrümpelung so, dass Räume zügig wieder frei und nutzbar werden.",
  },
  {
    title: "Für Büro & Gewerbe",
    text: "Ob Bürofläche, Praxis, Lagerraum oder Gewerbefläche — wir passen den Ablauf an Ihre Situation an.",
  },
];

const process = [
  {
    title: "Anfrage stellen",
    text: "Sie nennen uns Standort, Umfang und den gewünschten Zeitraum.",
  },
  {
    title: "Büroflächen klären",
    text: "Wir besprechen Möbel, Technik, Akten, Arbeitsplätze, Etagen und Zugang.",
  },
  {
    title: "Ablauf planen",
    text: "Die Büroentrümpelung wird so vorbereitet, dass Räumung und Abtransport sauber ineinandergreifen.",
  },
  {
    title: "Büro entrümpeln",
    text: "Unser Team räumt zuverlässig, organisiert und nach Absprache ordentlich.",
  },
];

const included = [
  "Büroentrümpelung",
  "Büromöbel räumen",
  "Schreibtische & Stühle",
  "Regale & Schränke",
  "Akten & Kartons",
  "Praxisräume",
  "Gewerbeflächen",
  "besenreine Übergabe",
];

const checklist = [
  "Adresse der Bürofläche",
  "Anzahl der Räume",
  "Möbel und Technik",
  "Etage, Aufzug und Zugang",
  "gewünschter Zeitraum",
  "besondere Anforderungen?",
];

export default function BueroentruempelungPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
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
      name: "Büroentrümpelung",
      path: "/entruempelung/bueroentruempelung",
    },
  ]}
/>

<ServiceJsonLd
  name="Büroentrümpelung Landshut"
  description="Büroentrümpelung in Landshut mit Umzüge LAF. Büromöbel, Akten, Kartons, Technik und Gewerbeflächen strukturiert räumen lassen."
  path="/entruempelung/bueroentruempelung"
  serviceType="Büroentrümpelung"
/>

      <section className="relative z-10 min-h-[90vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/ent3.jpg"
            alt="Büroentrümpelung von Umzüge LAF in Landshut"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/92 via-[#fafaf7]/60 to-[#fafaf7]/16" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-[#fafaf7]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.32),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/40 bg-white/20 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Büroentrümpelung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.12] tracking-[-0.06em] text-[#18181b] md:text-7xl lg:text-8xl">
              Büro räumen.
              <span className="gradient-text block">Klar strukturiert.</span>
              Schnell wieder frei.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/75 drop-shadow md:text-xl">
              Ob Bürofläche, Praxisraum oder Gewerbefläche: Umzüge LAF
              übernimmt Ihre Büroentrümpelung zuverlässig, organisiert und mit
              Blick auf einen sauberen Ablauf.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Büroentrümpelung anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 hover:text-[#b28a00]"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Arbeitsplätze", "Möbel", "Räume"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-white border border-black/5 p-5 shadow-sm"
                >
                  <p className="text-xl font-black text-[#b28a00]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    organisiert geplant und sauber umgesetzt
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
              Büroentrümpelung
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Wenn Büroflächen schnell und ordentlich frei werden müssen.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Bei einer Büroentrümpelung geht es nicht nur ums Tragen.
              Büromöbel, Akten, Kartons, Technik und Arbeitsplätze müssen
              sinnvoll geplant werden. Wir sorgen für einen geordneten Ablauf
              und eine saubere Umsetzung.
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

          <div className="relative overflow-hidden rounded-2xl sm:rounded-2xl sm:rounded-2xl sm:rounded-[2rem] bg-white border border-black/5 shadow-md">
            <div className="relative h-[360px] sm:h-[340px] sm:h-[320px] sm:h-[380px] md:h-[420px] md:h-[480px] md:h-[560px]">
              <Image
                src="/images/services/ent2.jpg"
                alt="Büro und Gewerbefläche entrümpeln mit Umzüge LAF"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.24),transparent_36%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl sm:rounded-xl sm:rounded-[1.4rem] border border-black/5 bg-black/55 p-6 text-white backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Gewerbe & Büro
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Möbel, Akten und Arbeitsbereiche strukturiert räumen.
                </h3>
                <p className="mt-3 leading-7 text-white/80">
                  Wir achten auf klare Reihenfolge, sichere Tragewege und eine
                  Übergabe nach Absprache.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#fafaf7] px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Vorteile
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Büroentrümpelung mit Struktur statt Stillstand.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Besonders bei gewerblichen Flächen zählt ein zuverlässiger,
              geordneter und planbarer Ablauf.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="premium-border group rounded-2xl sm:rounded-[2rem] bg-white shadow-sm border border-black/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black text-[#18181b]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-black/60">
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
              So läuft Ihre Büroentrümpelung ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Wir stimmen Umfang, Räume, Möbel, Zugang und gewünschten Zeitraum
              passend zu Ihrer Gewerbefläche ab.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-2xl sm:rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
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

      <section className="relative z-10 bg-[#fafaf7] px-5 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Anfrage vorbereiten
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Diese Informationen helfen für ein schnelles Angebot.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Je genauer Ihre Angaben sind, desto besser können wir Aufwand,
              Teamgröße, Fahrzeuge und Zeitbedarf einschätzen.
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
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:text-[#b28a00]"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="premium-border rounded-2xl sm:rounded-[2rem] bg-white shadow-sm border border-black/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  ✓
                </div>

                <p className="text-lg font-black text-[#18181b]">{item}</p>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  Hilft uns bei der genauen Planung Ihrer Büroentrümpelung.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#f7f7f2] px-5 py-28 text-black lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl sm:rounded-2xl sm:rounded-2xl sm:rounded-2xl sm:rounded-[2rem] bg-white border border-black/5 shadow-lg">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[460px]">
              <Image
                src="/images/services/ent3.jpg"
                alt="Büroentrümpelung Landshut mit Umzüge LAF"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/85" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,194,26,0.24),transparent_35%)]" />
            </div>

            <div className="flex flex-col justify-center p-8 text-[#18181b] md:p-12">
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Angebot sichern
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Räumen Sie Ihre Bürofläche mit LAF.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/60">
                Schreiben Sie kurz, welche Bürofläche geräumt werden soll und
                wann der Termin gewünscht ist. Wir melden uns schnell zurück und
                klären den passenden Ablauf.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
                >
                  Büroentrümpelung anfragen
                </Link>

                <a
                  href={`mailto:${email}`}
                  className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:text-[#b28a00]"
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
