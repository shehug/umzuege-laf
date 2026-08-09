import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalSeoLinks from "@/components/LocalSeoLinks";
import { createSeoMetadata } from "../seo";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata = createSeoMetadata({
  title: "Privatumzug Landshut | Umzüge LAF – Wohnungsumzug & Hausumzug",
  description:
    "Privatumzug in Landshut mit Umzüge LAF: Wohnungsumzug, Hausumzug, Möbeltransport, Möbelmontage, Einpackservice und persönliche Planung.",
  path: "/privatumzug-landshut",
  keywords: [
    "Privatumzug Landshut",
    "Wohnungsumzug Landshut",
    "Hausumzug Landshut",
    "Umzug Wohnung Landshut",
    "Umzugsunternehmen Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/PU1.jpg",
});

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const benefits = [
  {
    title: "Sorgfältiger Transport",
    text: "Möbel, Kartons and persönliche Gegenstände werden sicher und vorsichtig bewegt.",
  },
  {
    title: "Klare Planung",
    text: "Wir klären Etagen, Strecke, Umfang, Montage und Zeitfenster vorab sauber ab.",
  },
  {
    title: "Persönlicher Kontakt",
    text: "Sie haben einen direkten Ansprechpartner und keine anonyme Abwicklung.",
  },
  {
    title: "Flexible Unterstützung",
    text: "Auf Wunsch mit Einpackservice, Möbelmontage, Tragehilfe und Entsorgung.",
  },
];

const process = [
  {
    title: "Anfrage senden",
    text: "Sie teilen uns Startort, Zielort, Terminwunsch und den ungefähren Umfang mit.",
  },
  {
    title: "Umfang klären",
    text: "Wir besprechen Etage, Aufzug, Parkmöglichkeiten, Möbelmontage und besondere Gegenstände.",
  },
  {
    title: "Umzug planen",
    text: "Sie erhalten eine klare Einschätzung und wir stimmen den Ablauf mit Ihnen ab.",
  },
  {
    title: "Sicher umziehen",
    text: "Unser Team transportiert Ihre Möbel und Kartons zuverlässig an den neuen Wohnort.",
  },
];

const included = [
  "Wohnungsumzug",
  "Hausumzug",
  "Möbeltransport",
  "Tragearbeiten",
  "Möbelmontage",
  "Einpackservice",
  "Kartons & Verpackung",
  "Kurzfristige Umzüge nach Absprache",
];

const checklist = [
  "Startadresse und Zieladresse",
  "Etage und Aufzug vorhanden?",
  "gewünschter Umzugstermin",
  "ungefähre Anzahl der Kartons",
  "größere Möbelstücke",
  "Möbelmontage gewünscht?",
];

export default function PrivatumzugLandshutPage() {
  return (
    <main className="min-h-screen bg-[#fafaf7] text-[#18181b] overflow-hidden">
      <Header />

      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Privatumzug Landshut", path: "/privatumzug-landshut" },
        ]}
      />

      <ServiceJsonLd
        name="Privatumzug Landshut"
        description="Privatumzug in Landshut mit Umzüge LAF. Zuverlässige Planung, sicherer Transport, Möbelmontage und saubere Umsetzung für Ihren Wohnungsumzug."
        path="/privatumzug-landshut"
        serviceType="Privatumzug"
      />

      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/PU1.jpg"
            alt="Umzüge LAF Privatumzug in Landshut"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/90 to-[#fafaf7]/40 sm:to-[#fafaf7]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#b28a00] sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Privatumzug in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-[2.5rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              Privat umziehen.
              <span className="gradient-text block">Ohne Stress.</span>
              Mit LAF.
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Ob Wohnung, Haus oder einzelner Möbeltransport: Umzüge LAF plant
              Ihren Privatumzug zuverlässig, sorgfältig und persönlich — von
              der ersten Anfrage bis zum letzten Möbelstück.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Privatumzug anfragen
              </a>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Privatumzug
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Ihr Zuhause zieht um — wir kümmern uns um den Ablauf.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Ein privater Umzug bedeutet Organisation, Zeitdruck und viele
              kleine Details. Wir helfen Ihnen dabei, den Überblick zu behalten:
              mit klarer Planung, zuverlässigem Team und sorgfältigem Transport.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
                    ✓
                  </div>
                  <p className="font-black text-[#18181b]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-black/5">
            <div className="relative h-[480px]">
              <Image
                src="/images/services/PU1.jpg"
                alt="Privatumzug mit Umzüge LAF"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/50 p-6 text-white backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Sorgfältig
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  Möbel und Kartons in guten Händen.
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Wir achten auf sicheren Transport, saubere Kommunikation und
                  zuverlässige Durchführung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Vorteile
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Warum Ihren Privatumzug mit LAF planen?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Wir verbinden persönliche Betreuung mit strukturierter
              Umsetzung. So wird Ihr Umzug planbarer, ruhiger und sauberer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black transition group-hover:rotate-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black text-[#18181b]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-black/65">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Ablauf
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              So läuft Ihr Privatumzug ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Ein guter Umzug beginnt nicht am Umzugstag, sondern bei der
              richtigen Vorbereitung. Deshalb stimmen wir die wichtigsten Punkte
              vorher mit Ihnen ab.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
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

      <section className="relative bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Anfrage vorbereiten
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Diese Infos helfen für eine schnelle Einschätzung.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#18181b]/70">
              Je genauer die Anfrage ist, desto schneller können wir den Umfang
              einschätzen und den passenden Ablauf planen.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                    ✓
                  </div>

                  <p className="text-lg font-black text-[#18181b]">{item}</p>
                  <p className="mt-1 text-sm leading-6 text-black/55">
                    Hilft uns bei der genauen Planung Ihres Umzugs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="anfrage-formular" className="scroll-mt-24">
            <div className="mb-5">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Direktanfrage
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#18181b]">
                Kostenloses Angebot anfordern
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
