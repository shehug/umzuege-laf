import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.faq);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const faqGroupOne = [
  {
    question: "Wie schnell kann ich ein Angebot erhalten?",
    answer:
      "Je genauer Ihre Angaben sind, desto schneller können wir Ihre Anfrage einschätzen. Hilfreich sind Startadresse, Zieladresse, Etage, gewünschtes Datum und der ungefähre Umfang.",
  },
  {
    question: "Macht Umzüge LAF auch kurzfristige Umzüge?",
    answer:
      "Ja, je nach Verfügbarkeit sind auch kurzfristige Umzüge möglich. Am besten rufen Sie direkt an, damit wir schnell prüfen können, was machbar ist.",
  },
  {
    question: "Übernimmt Umzüge LAF auch Möbelmontage?",
    answer:
      "Ja. Auf Wunsch übernehmen wir den Abbau, Transport und Wiederaufbau Ihrer Möbel. Teilen Sie uns einfach mit, welche Möbel betroffen sind.",
  },
  {
    question: "Gibt es auch einen Einpackservice?",
    answer:
      "Ja. Wir unterstützen Sie auf Wunsch beim Verpacken Ihrer Gegenstände. Das spart Zeit und sorgt für einen strukturierten Ablauf.",
  },
  {
    question: "In welchem Gebiet arbeitet Umzüge LAF?",
    answer:
      "Umzüge LAF ist in Landshut und Umgebung tätig. Je nach Auftrag sind auch weitere Strecken und Fernumzüge möglich.",
  },
  {
    question: "Kann ich Bilder zur Einschätzung schicken?",
    answer:
      "Ja, Bilder sind sehr hilfreich. Sie können uns Fotos von Möbeln, Räumen, Kellern, Dachböden oder Sperrmüll per E-Mail schicken.",
  },
];

const faqGroupTwo = [
  {
    question: "Übernimmt Umzüge LAF auch Entrümpelungen?",
    answer:
      "Ja. Wir übernehmen Entrümpelungen von Wohnungen, Kellern, Dachböden, Garagen, Büros und auch Haushaltsauflösungen.",
  },
  {
    question: "Wie läuft eine Entrümpelung ab?",
    answer:
      "Zuerst klären wir Umfang, Räume, Zugang und Termin. Danach erfolgt die strukturierte Räumung, der Abtransport und auf Wunsch die besenreine Übergabe.",
  },
  {
    question: "Kann Sperrmüll mitgenommen werden?",
    answer:
      "Ja. Sperrmüll kann im Rahmen einer Entrümpelung oder Räumung abtransportiert und fachgerecht entsorgt werden.",
  },
  {
    question: "Welche Informationen braucht ihr für eine Anfrage?",
    answer:
      "Wichtig sind Startadresse, Zieladresse, Etage, Aufzug, Parkmöglichkeit, gewünschter Termin, Umfang und ob Zusatzleistungen wie Montage oder Einpackservice gewünscht sind.",
  },
  {
    question: "Ist eine Besichtigung möglich?",
    answer:
      "Ja, je nach Umfang ist eine Besichtigung sinnvoll. Besonders bei größeren Umzügen, Haushaltsauflösungen oder komplexen Entrümpelungen hilft das sehr.",
  },
  {
    question: "Wie kann ich Umzüge LAF kontaktieren?",
    answer:
      "Sie können direkt anrufen, eine E-Mail schreiben oder das Kontaktformular auf der Website nutzen. Für schnelle Rückfragen ist ein Anruf oft am einfachsten.",
  },
];

const quickTopics = [
  "Privatumzug",
  "Firmenumzug",
  "Entrümpelung",
  "Möbelmontage",
  "Einpackservice",
  "Sperrmüll",
];

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      {/* Background orbs and grids */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-40" />
        <div className="laf-noise absolute inset-0 opacity-[0.03]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/faq.jpg"
            alt="Umzüge LAF FAQ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/90 to-[#fafaf7]/40 sm:to-[#fafaf7]/16" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf7]/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.15),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#b28a00] sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Häufige Fragen
            </div>

            <h1 className="max-w-5xl text-[2.5rem] font-black leading-[1.15] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              Fragen?
              <span className="gradient-text block">Hier finden Sie Antworten.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Hier finden Sie die wichtigsten Antworten rund um Umzug,
              Entrümpelung, Möbelmontage, Anfrage und Service von Umzüge LAF.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Anfrage stellen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="relative z-10 bg-[#ffffff] px-5 py-20 text-[#18181b] lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="rounded-[2.4rem] border border-black/5 bg-[#fafaf7] p-8 shadow-sm md:p-10">
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Gut informiert
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-4xl">
                Gut informiert vor der Anfrage.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-black/60">
                Je mehr Informationen wir haben, desto schneller können wir Ihr
                Anliegen einschätzen. Hier finden Sie die häufigsten Fragen
                übersichtlich geordnet.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickTopics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-3xl border border-black/5 bg-[#ffffff] p-5 shadow-sm"
                  >
                    <p className="text-lg font-black text-[#18181b]">{topic}</p>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      Schnell erklärt und direkt beantwortet.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-black/5 bg-white p-8 shadow-md md:p-10">
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Schnellkontakt
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-4xl">
                Lieber direkt fragen?
              </h2>

              <p className="mt-4 text-lg leading-8 text-black/60">
                Wenn Sie keine passende Antwort finden, helfen wir persönlich
                weiter — schnell, direkt und unkompliziert.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={phoneHref}
                  className="group rounded-[1.7rem] border border-black/5 bg-[#fafaf7] p-5 transition hover:-translate-y-1 hover:border-[#f6c21a]/40 hover:bg-[#f6c21a]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black shadow-sm transition group-hover:rotate-6">
                      ☎
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                        Direkt anrufen
                      </p>
                      <p className="mt-1 text-xl font-black text-black">
                        {phone}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/60">
                        Ideal für schnelle Rückfragen und direkte Abstimmung.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="group rounded-[1.7rem] border border-black/5 bg-[#fafaf7] p-5 transition hover:-translate-y-1 hover:border-[#f6c21a]/40 hover:bg-[#f6c21a]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black shadow-sm transition group-hover:rotate-6">
                      ✉
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                        E-Mail schreiben
                      </p>
                      <p className="mt-1 text-xl font-black text-black">
                        {email}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/60">
                        Perfekt für ausführlichere Anfragen und Fotos.
                      </p>
                    </div>
                  </div>
                </a>

                <Link
                  href="/kontakt"
                  className="glow-button rounded-full px-6 py-4 text-center font-black text-black shadow-lg"
                >
                  Direktanfrage senden
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.4rem] border border-black/5 bg-[#fafaf7] p-6 shadow-sm md:p-8">
              <div className="mb-8">
                <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Gruppe 1
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-[#18181b]">
                  Fragen zu Umzug & Service
                </h3>
              </div>

              <div className="grid gap-4">
                {faqGroupOne.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#ffffff] transition shadow-sm hover:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-sm font-black text-black">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <h4 className="text-lg font-black leading-7 text-[#18181b]">
                          {faq.question}
                        </h4>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/5 text-2xl font-light text-black transition group-open:rotate-45 group-open:bg-[#f6c21a]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-black/5 px-5 pb-5 pt-4 bg-[#fafaf7]">
                      <p className="leading-7 text-black/65 sm:pl-[60px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-black/5 bg-[#fafaf7] p-6 shadow-sm md:p-8">
              <div className="mb-8">
                <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Gruppe 2
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-[#18181b]">
                  Fragen zu Anfrage & Entrümpelung
                </h3>
              </div>

              <div className="grid gap-4">
                {faqGroupTwo.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#ffffff] transition shadow-sm hover:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-sm font-black text-black">
                          {String(index + 7).padStart(2, "0")}
                        </div>

                        <h4 className="text-lg font-black leading-7 text-[#18181b]">
                          {faq.question}
                        </h4>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/5 text-2xl font-light text-black transition group-open:rotate-45 group-open:bg-[#f6c21a]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-black/5 px-5 pb-5 pt-4 bg-[#fafaf7]">
                      <p className="leading-7 text-black/65 sm:pl-[60px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative z-10 overflow-hidden bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Noch Fragen?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              Wir helfen persönlich weiter.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Schreiben Sie kurz, worum es geht. Wir melden uns schnell zurück
              und klären den passenden Ablauf.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={phoneHref}
              className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
            >
              {phone}
            </a>

            <Link
              href="/kontakt"
              className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
            >
              Kontaktformular öffnen
            </Link>
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
