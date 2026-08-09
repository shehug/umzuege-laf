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
  title: "Entrümpelung Landshut | Wohnung, Keller & Sperrmüll",
  description:
    "Entrümpelung in Landshut mit Umzüge LAF: Wohnungsentrümpelung, Keller, Dachboden, Garage, Büro, Haushaltsauflösung und Sperrmüllentsorgung.",
  path: "/entruempelung-landshut",
  keywords: [
    "Entrümpelung Landshut",
    "Entrümpelungsfirma Landshut",
    "Wohnungsentrümpelung Landshut",
    "Haushaltsauflösung Landshut",
    "Sperrmüllentsorgung Landshut",
  ],
  image: "https://umzuegelandshut.de/images/services/entruempelung.jpg",
});

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

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

export default function EntruempelungLandshutPage() {
  return (
    <main className="min-h-screen bg-[#fafaf7] text-[#18181b] overflow-hidden">
      <Header />

      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Entrümpelung Landshut", path: "/entruempelung-landshut" },
        ]}
      />

      <ServiceJsonLd
        name="Entrümpelung Landshut"
        description="Entrümpelung in Landshut mit Umzüge LAF: Wohnung, Keller, Dachboden, Garage, Büro, Haushaltsauflösung und Sperrmüllentsorgung."
        path="/entruempelung-landshut"
        serviceType="Entrümpelung"
      />

      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/entruempelung1.jpg"
            alt="Umzüge LAF Entrümpelung in Landshut"
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
              Entrümpelung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-[2.5rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              Raum schaffen.
              <span className="gradient-text block">Sauber gelöst.</span>
              Mit LAF.
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Ob Wohnung, Keller, Dachboden, Garage oder Büro: Umzüge LAF
              übernimmt Entrümpelungen zuverlässig, diskret und sauber — von
              der ersten Anfrage bis zur besenreinen Übergabe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Entrümpelung anfragen
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Entrümpelungsservice
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
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
                className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md"
              >
                <div className="absolute right-6 top-6 text-7xl font-black text-black/[0.04]">
                  {service.number}
                </div>

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black">
                  →
                </div>

                <h3 className="relative text-2xl font-black text-black">
                  {service.title}
                </h3>

                <p className="relative mt-3 min-h-[80px] leading-7 text-black/60">
                  {service.text}
                </p>

                <p className="relative mt-6 font-black text-black transition group-hover:text-[#b28a00]">
                  Mehr erfahren
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Ablauf
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Entrümpelung ohne Chaos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Eine gute Entrümpelung braucht klare Absprache und saubere
              Durchführung. Deshalb planen wir den Ablauf verständlich und
              halten Sie auf dem Laufenden.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#18181b]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-black/60">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Vorteile
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
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

          <div id="anfrage-formular" className="scroll-mt-24">
            <div className="mb-5">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Direktanfrage
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#18181b]">
                Angebot für Entrümpelung anfordern
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
