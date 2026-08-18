import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LocalSeoLinks from "../../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../../seo";
import ServiceJsonLd from "../../../components/ServiceJsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata = createSeoMetadata(seoPages.lagerung);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const benefits = [
  {
    title: "Flexible Lagerung",
    text: "Ideal, wenn zwischen Auszug und Einzug Zeit überbrückt werden muss oder Möbel vorübergehend keinen Platz haben.",
  },
  {
    title: "Sicher vorbereitet",
    text: "Möbel, Kartons und Gegenstände werden sauber verpackt und für die Lagerung ordentlich vorbereitet.",
  },
  {
    title: "Mehr Freiraum",
    text: "Schaffen Sie Platz in Wohnung, Haus, Keller, Garage oder Büro — ohne sich sofort von Dingen trennen zu müssen.",
  },
  {
    title: "Umzug & Lagerung kombiniert",
    text: "Transport, Einlagerung und spätere Anlieferung können sinnvoll miteinander abgestimmt werden.",
  },
];

const process = [
  {
    title: "Anfrage stellen",
    text: "Sie sagen uns, was eingelagert werden soll und wie lange die Lagerung ungefähr geplant ist.",
  },
  {
    title: "Umfang klären",
    text: "Wir besprechen Möbel, Kartons, Menge, Abholadresse, Zugang und gewünschte Zeitfenster.",
  },
  {
    title: "Abholung vorbereiten",
    text: "Ihre Gegenstände werden transportbereit gemacht und bei Bedarf geschützt oder verpackt.",
  },
  {
    title: "Einlagern & später liefern",
    text: "Wir organisieren die Lagerung und bringen Ihre Gegenstände auf Wunsch später wieder zum Zielort.",
  },
];

const included = [
  "Zwischenlagerung",
  "Möbellagerung",
  "Kartons einlagern",
  "Haushaltsgegenstände",
  "Abholung möglich",
  "Anlieferung möglich",
  "Verpackung auf Wunsch",
  "Lagerung beim Umzug",
];

const checklist = [
  "Was soll eingelagert werden?",
  "ungefähre Menge",
  "gewünschte Lagerdauer",
  "Abholadresse",
  "Etage, Aufzug und Zugang",
  "spätere Lieferadresse bekannt?",
];

export default function LagerungPage() {
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
    { name: "Umzüge", path: "/umzuege" },
    { name: "Lagerung", path: "/umzuege/lagerung" },
  ]}
/>

<ServiceJsonLd
  name="Lagerung Landshut"
  description="Lagerung und Zwischenlagerung in Landshut mit Umzüge LAF. Möbel, Kartons und Hausrat flexibel einlagern und später wieder liefern lassen."
  path="/umzuege/lagerung"
  serviceType="Lagerung"
/>

      <section className="relative z-10 min-h-[90vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/Lagerung.jpg"
            alt="Lagerung von Möbeln und Umzugskartons mit Umzüge LAF in Landshut"
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
              Lagerung in Landshut & Umgebung
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.12] tracking-[-0.06em] text-[#18181b] md:text-7xl lg:text-8xl">
              Möbel lagern.
              <span className="gradient-text block">Platz schaffen.</span>
              Flexibel bleiben.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/75 drop-shadow md:text-xl">
              Wenn zwischen Auszug und Einzug Zeit liegt oder Möbel
              vorübergehend keinen Platz haben, unterstützt Umzüge LAF mit
              organisierter Lagerung, sicherer Vorbereitung und passendem
              Transport.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button w-full rounded-full px-8 py-4 text-center font-black text-black sm:w-auto"
              >
                Lagerung anfragen
              </Link>

              <a
                href={phoneHref}
                className="w-full rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 hover:text-[#b28a00] sm:w-auto"
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Abholen", "Einlagern", "Anliefern"].map((item) => (
                <div
                  key={item}
                  className="premium-border rounded-3xl bg-white border border-black/5 p-5 shadow-sm"
                >
                  <p className="text-xl font-black text-[#b28a00]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    organisiert geplant und zuverlässig umgesetzt
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
              Lagerung
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Wenn nicht alles sofort mit in die neue Wohnung kann.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Manchmal passt der Zeitplan nicht perfekt: Die neue Wohnung ist
              noch nicht frei, Möbel müssen zwischengeparkt werden oder im Haus
              soll erst Platz entstehen. Genau dafür ist eine gut organisierte
              Lagerung sinnvoll.
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
                src="/images/services/Lagerung.jpg"
                alt="Möbel und Kartons einlagern mit Umzüge LAF"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.24),transparent_36%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl sm:rounded-xl sm:rounded-[1.4rem] border border-black/5 bg-black/55 p-6 text-white backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                  Ordentlich geplant
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Möbel, Kartons und Hausrat sicher vorbereiten.
                </h3>
                <p className="mt-3 leading-7 text-white/80">
                  Wir helfen beim Verpacken, Tragen, Transportieren und bei der
                  organisierten Zwischenlagerung Ihrer Gegenstände.
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
              Lagerung, die zum Umzug passt.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Besonders bei Terminverschiebungen, Renovierungen oder kleineren
              Übergangslösungen ist eine flexible Lagerung eine große
              Entlastung.
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
              So läuft Ihre Lagerung ab.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Wir stimmen Abholung, Transport, Lagerdauer und spätere
              Anlieferung passend zu Ihrer Situation ab.
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
              Je genauer wir wissen, was eingelagert werden soll, desto besser
              können wir Transport, Platzbedarf und Ablauf einschätzen.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button w-full rounded-full px-8 py-4 text-center font-black text-black sm:w-auto"
              >
                Kontaktformular öffnen
              </Link>

              <a
                href={phoneHref}
                className="w-full rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:text-[#b28a00] sm:w-auto"
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
                  Hilft uns bei der genauen Planung Ihrer Lagerung.
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
                src="/images/services/Lagerung.jpg"
                alt="Lagerung Landshut mit Umzüge LAF"
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
                Lagern Sie Möbel und Kartons unkompliziert ein.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/60">
                Schreiben Sie kurz, was eingelagert werden soll und für welchen
                Zeitraum Sie planen. Wir melden uns schnell zurück und klären
                den passenden Ablauf.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="glow-button w-full rounded-full px-8 py-4 text-center font-black text-black sm:w-auto"
                >
                  Lagerung anfragen
                </Link>

                <a
                  href={`mailto:${email}`}
                  className="w-full rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:text-[#b28a00] sm:w-auto"
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
