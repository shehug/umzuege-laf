import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ContactForm from "../../components/ContactForm";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.faq);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const allFaqs = [
  {
    q: "Was kostet ein Umzug in Landshut mit Umzüge LAF?",
    a: "Die Kosten hängen von Wohnungsgröße, Etage, Entfernung, Möbelmontage, Kartonanzahl und Zusatzleistungen ab. Umzüge LAF erstellt nach Klärung der wichtigsten Eckdaten ein verbindliches Festpreis-Angebot.",
  },
  {
    q: "Wie schnell kann ich ein Angebot erhalten?",
    a: "In der Regel innerhalb weniger Stunden! Nennen Sie uns einfach Startadresse, Zieladresse, Etage, gewünschtes Datum und den ungefähren Umfang über unser Online-Formular oder telefonisch.",
  },
  {
    q: "Bietet Umzüge LAF auch kurzfristige Umzüge an?",
    a: "Ja, je nach Teamverfügbarkeit realisieren wir auch kurzfristige und spontane Umzüge in Landshut und Umgebung.",
  },
  {
    q: "Sind meine Möbel während des Umzugs versichert?",
    a: "Ja, alle Transporte und Umzugsarbeiten sind selbstverständlich vollumfänglich und ordnungsgemäß nach deutschen Transportstandards versichert.",
  },
  {
    q: "Übernehmen Sie auch den Abbau und Aufbau von Möbeln?",
    a: "Ja, unser geschultes Personal übernimmt die fachgerechte Demontage und den Wiederaufbau von Schränken, Betten und Küchenmöbeln.",
  },
  {
    q: "Gibt es auch einen professionellen Einpackservice?",
    a: "Ja. Auf Wunsch bringen wir stabiles Verpackungsmaterial mit und verpacken Ihren gesamten Hausrat sicher und transportsicher.",
  },
  {
    q: "Übernehmen Sie auch Entrümpelungen und Haushaltsauflösungen?",
    a: "Ja, wir räumen Wohnungen, Häuser, Keller, Dachböden und Gewerbeflächen inklusive fachgerechter und zertifizierter Sperrmüllentsorgung.",
  },
  {
    q: "Kann vorab eine Besichtigung vor Ort stattfinden?",
    a: "Ja, besonders bei größeren Wohnungen, Häusern oder Firmenumzügen bieten wir eine kostenlose und unverbindliche Vor-Ort-Besichtigung in Landshut an.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ── HERO ── */}
      <section className="bg-slate-900 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
            <span>★ Häufige Fragen & Antworten</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Antworten rund um Ihren Umzug.<br />
            <span className="text-amber-400">Klar, ehrlich & transparent.</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 sm:text-lg leading-relaxed">
            Hier finden Sie die wichtigsten Antworten zu Ablauf, Preisen, Versicherung
            und unseren Leistungen in Landshut.
          </p>
        </div>
      </section>

      {/* ── FAQ GRID ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {allFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:border-amber-400 transition"
              >
                <h3 className="text-base font-black text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANFRAGE SEKTION ── */}
      <section id="anfrage-formular" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                <span>📍</span>
                <span>Standort: Ergoldinger Str. 15, 84030 Landshut</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                Noch Fragen offen?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Rufen Sie uns einfach an. Wir beraten Sie persönlich und beantworten alle
                Ihre Fragen direkt am Telefon.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Direkter Draht
                </p>
                <a
                  href={phoneHref}
                  className="mt-1 inline-flex items-center gap-2 text-xl font-black text-white hover:text-amber-400 transition"
                >
                  <span>📞</span>
                  <span>{phone}</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-black text-slate-900">
                Unverbindlich anfragen
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                In 2 Minuten ausgefüllt – 100% unverbindlich.
              </p>
              <div className="mt-5">
                <ContactForm />
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
