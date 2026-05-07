import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.impressum);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";
const emailHref = "mailto:info@umzuege-laf.de";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-25" />
        <div className="laf-noise absolute inset-0 opacity-[0.05]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
      </div>

      <Header />

      <section className="relative z-10 px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.26),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex rounded-full border border-[#f6c21a]/35 bg-[#f6c21a]/10 px-4 py-2 text-sm font-black text-[#f6c21a] backdrop-blur-xl">
              Rechtliche Angaben
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Impressum
              <span className="gradient-text block">Umzüge LAF</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Angaben gemäß § 5 TMG und rechtliche Informationen zum Anbieter
              dieser Website.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.4rem] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:p-10">
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Anbieter
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Verantwortlich für diese Website.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Nachfolgend finden Sie die gesetzlich erforderlichen Angaben zum
              Anbieter der Website von Umzüge LAF.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={phoneHref}
                className="rounded-full bg-[#f6c21a] px-6 py-4 text-center font-black text-black transition hover:bg-black hover:text-white"
              >
                {phone}
              </a>

              <a
                href={emailHref}
                className="rounded-full border border-black/15 px-6 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>

          <div className="rounded-[2.4rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                  Unternehmen
                </p>
                <p className="mt-2 text-lg font-black text-black">
                  Umzüge LAF
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                  Vertreten durch
                </p>
                <p className="mt-2 text-lg font-black text-black">
                  Fahri Kalludra
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                  Adresse
                </p>
                <p className="mt-2 text-lg font-black text-black">
                  Ergoldinger Str. 15
                  <br />
                  84030 Landshut
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                  Kontakt
                </p>
                <p className="mt-2 text-lg font-black text-black">
                  Telefon: {phone}
                  <br />
                  E-Mail: {email}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b28a00]">
                  Umsatzsteuer-ID
                </p>
                <p className="mt-2 text-lg font-black text-black">
                  DE364728600
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-black/10 bg-black p-6 text-white">
              <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                Inhaltlich verantwortlich
              </p>

              <p className="mt-4 text-lg leading-8 text-white/70">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                <br />
                Fahri Kalludra
                <br />
                Ergoldinger Str. 15
                <br />
                84030 Landshut
              </p>
            </div>

            <div className="mt-8 grid gap-8">
              <div>
                <h3 className="text-2xl font-black text-black">
                  EU-Streitschlichtung
                </h3>
                <p className="mt-3 leading-8 text-black/65">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung bereit. Verbraucher haben die
                  Möglichkeit, diese Plattform für die Beilegung ihrer
                  Streitigkeiten zu nutzen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black">
                  Verbraucherstreitbeilegung
                </h3>
                <p className="mt-3 leading-8 text-black/65">
                  Wir sind nicht verpflichtet und nicht bereit, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black">
                  Haftung für Inhalte
                </h3>
                <p className="mt-3 leading-8 text-black/65">
                  Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte
                  fremde Informationen zu überwachen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black">
                  Haftung für Links
                </h3>
                <p className="mt-3 leading-8 text-black/65">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Für diese fremden
                  Inhalte übernehmen wir keine Gewähr.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black">
                  Urheberrecht
                </h3>
                <p className="mt-3 leading-8 text-black/65">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht.
                  Beiträge Dritter sind als solche gekennzeichnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Datenschutz
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Mehr zu Ihren Daten.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Weitere Informationen zur Verarbeitung personenbezogener Daten
              finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>

          <Link
            href="/datenschutz"
            className="rounded-full bg-[#f6c21a] px-8 py-4 text-center font-black text-black transition hover:bg-white"
          >
            Datenschutz öffnen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
