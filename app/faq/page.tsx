import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-25" />
        <div className="laf-noise absolute inset-0 opacity-[0.05]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
        <div className="laf-orb laf-orb-three" />
      </div>

      <Header />

      <section className="relative z-10 min-h-[82vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/faq.jpg"
            alt="Umzüge LAF FAQ"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/88 via-[#050505]/58 to-[#050505]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/16 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.28),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[66vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/35 bg-white/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Häufige Fragen
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              Fragen?
              <span className="gradient-text block">Hier finden Sie Antworten.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 drop-shadow md:text-xl">
              Hier finden Sie die wichtigsten Antworten rund um Umzug,
              Entrümpelung, Möbelmontage, Anfrage und Service von Umzüge LAF.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Anfrage stellen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/25 bg-white/15 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/15 hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="rounded-[2.4rem] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:p-10">
              <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                Gut informiert
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Gut informiert vor der Anfrage.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                Je mehr Informationen wir haben, desto schneller können wir Ihr
                Anliegen einschätzen. Hier finden Sie die häufigsten Fragen
                übersichtlich geordnet.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickTopics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-3xl border border-black/10 bg-[#f7f7f2] p-5"
                  >
                    <p className="text-lg font-black text-black">{topic}</p>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      Schnell erklärt und direkt beantwortet.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-black/10 bg-black p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.14)] md:p-10">
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Schnellkontakt
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Lieber direkt fragen?
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Wenn Sie keine passende Antwort finden, helfen wir persönlich
                weiter — schnell, direkt und unkompliziert.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={phoneHref}
                  className="group rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-[#f6c21a]/40 hover:bg-[#f6c21a]/10 active:scale-[0.98]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                      ☎
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c21a]">
                        Direkt anrufen
                      </p>
                      <p className="mt-1 text-xl font-black text-white">
                        {phone}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Ideal für schnelle Rückfragen und direkte Abstimmung.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="group rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-[#f6c21a]/40 hover:bg-[#f6c21a]/10 active:scale-[0.98]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black transition group-hover:rotate-6 group-hover:scale-110">
                      ✉
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c21a]">
                        E-Mail schreiben
                      </p>
                      <p className="mt-1 text-xl font-black text-white">
                        {email}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Perfekt für ausführlichere Anfragen und Fotos.
                      </p>
                    </div>
                  </div>
                </a>

                <Link
                  href="/kontakt"
                  className="rounded-full bg-[#f6c21a] px-6 py-4 text-center font-black text-black shadow-[0_18px_60px_rgba(246,194,26,0.25)] transition hover:-translate-y-1 hover:bg-white active:scale-95"
                >
                  Kontaktformular öffnen
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.4rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-8">
                <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Gruppe 1
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-black">
                  Fragen zu Umzug & Service
                </h3>
              </div>

              <div className="grid gap-4">
                {faqGroupOne.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#f7f7f2] transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-sm font-black text-black">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <h4 className="text-lg font-black leading-7 text-black">
                          {faq.question}
                        </h4>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-2xl font-light text-black transition group-open:rotate-45 group-open:bg-[#f6c21a]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-black/10 px-5 pb-5 pt-4">
                      <p className="leading-7 text-black/65 sm:pl-[60px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-8">
                <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Gruppe 2
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-black">
                  Fragen zu Anfrage & Entrümpelung
                </h3>
              </div>

              <div className="grid gap-4">
                {faqGroupTwo.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#f7f7f2] transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-sm font-black text-black">
                          {String(index + 7).padStart(2, "0")}
                        </div>

                        <h4 className="text-lg font-black leading-7 text-black">
                          {faq.question}
                        </h4>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-2xl font-light text-black transition group-open:rotate-45 group-open:bg-[#f6c21a]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-black/10 px-5 pb-5 pt-4">
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

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-24 lg:px-8">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f6c21a]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Noch Fragen?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Wir helfen persönlich weiter.
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

            <Link
              href="/kontakt"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
            >
              Kontaktformular öffnen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
