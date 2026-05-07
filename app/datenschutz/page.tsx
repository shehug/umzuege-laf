import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.datenschutz);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const privacySections = [
  {
    title: "1. Verantwortlicher",
    text: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      "Umzüge LAF, Fahri Kalludra, Ergoldinger Str. 15, 84030 Landshut",
      "Telefon: 0162 900 75 65",
      "E-Mail: info@umzuege-laf.de",
    ],
  },
  {
    title: "2. Allgemeine Hinweise zur Datenverarbeitung",
    text: [
      "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen oder zur Kommunikation mit Interessenten und Kunden erforderlich ist.",
      "Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können, zum Beispiel Name, Telefonnummer, E-Mail-Adresse oder Angaben aus einer Anfrage.",
    ],
  },
  {
    title: "3. Zugriffsdaten und Server-Logfiles",
    text: [
      "Beim Besuch dieser Website können durch den Hostinganbieter automatisch technische Zugriffsdaten verarbeitet werden. Dazu können IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp, Betriebssystem und Referrer-URL gehören.",
      "Die Verarbeitung erfolgt, um die Website technisch bereitzustellen, Stabilität und Sicherheit zu gewährleisten und Missbrauch zu verhindern.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb der Website.",
    ],
  },
  {
    title: "4. Hosting",
    text: [
      "Diese Website wird bei einem externen Hostinganbieter betrieben. Beim Aufruf der Website verarbeitet der Hostinganbieter technische Daten, die für den Betrieb und die Sicherheit der Website erforderlich sind.",
      "Nach aktuellem Stand wird die Website über Hostinger gehostet.",
      "Mit dem Hostinganbieter sollte ein Vertrag zur Auftragsverarbeitung bestehen, sofern personenbezogene Daten im Auftrag verarbeitet werden.",
    ],
  },
  {
    title: "5. Kontaktaufnahme per Telefon, E-Mail oder Kontaktformular",
    text: [
      "Wenn Sie uns per Telefon, E-Mail oder über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage.",
      "Dazu können insbesondere Name, Telefonnummer, E-Mail-Adresse, Start- und Zieladresse, gewünschter Termin, Nachrichtentext und weitere freiwillige Angaben gehören.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage der Durchführung vorvertraglicher Maßnahmen oder eines Vertrags dient. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung von Anfragen.",
    ],
  },
  {
    title: "6. Mailto-Formular",
    text: [
      "Das Kontaktformular auf dieser Website ist derzeit als Mailto-Formular umgesetzt. Beim Absenden wird Ihr E-Mail-Programm geöffnet und die Anfrage wird über Ihr eigenes E-Mail-Programm versendet.",
      "Die Daten werden dabei nicht automatisch über einen eigenen Website-Server verschickt, sondern über Ihr E-Mail-Programm verarbeitet.",
      "Bitte beachten Sie, dass die Übertragung per E-Mail je nach Anbieter nicht vollständig verschlüsselt sein kann.",
    ],
  },
  {
    title: "7. Speicherdauer",
    text: [
      "Wir speichern personenbezogene Daten nur so lange, wie dies für die Bearbeitung Ihrer Anfrage, zur Vertragserfüllung oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.",
      "Anfragedaten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    title: "8. Weitergabe von Daten",
    text: [
      "Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, wenn dies zur Bearbeitung Ihrer Anfrage, zur Durchführung eines Vertrags, aufgrund gesetzlicher Pflichten oder auf Grundlage Ihrer Einwilligung erforderlich ist.",
      "Eine Weitergabe zu Werbezwecken findet nicht statt.",
    ],
  },
  {
    title: "9. Cookies und Tracking",
    text: [
      "Nach aktuellem Stand verwendet diese Website keine Tracking- oder Marketing-Cookies und keine Analyse-Tools wie Google Analytics.",
      "Sollten später Cookies, Analyse-Tools, Karten, externe Schriftarten oder andere Drittanbieter-Dienste eingebunden werden, muss diese Datenschutzerklärung entsprechend erweitert werden.",
    ],
  },
  {
    title: "10. Ihre Rechte",
    text: [
      "Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen bestimmte Verarbeitungen.",
      "Außerdem haben Sie das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.",
      "Sie haben zudem das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.",
    ],
  },
  {
    title: "11. SSL-/TLS-Verschlüsselung",
    text: [
      "Diese Website sollte aus Sicherheitsgründen und zum Schutz vertraulicher Inhalte über eine SSL-/TLS-Verschlüsselung bereitgestellt werden.",
      "Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt.",
    ],
  },
  {
    title: "12. Änderung dieser Datenschutzerklärung",
    text: [
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich technische, rechtliche oder organisatorische Änderungen ergeben.",
      "Stand dieser Datenschutzerklärung: Mai 2026.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="laf-grid absolute inset-0 opacity-25" />
        <div className="laf-noise absolute inset-0 opacity-[0.05]" />
        <div className="laf-orb laf-orb-one" />
        <div className="laf-orb laf-orb-two" />
      </div>

      <Header />

      <section className="relative z-10 overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.26),transparent_34%)]" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/35 bg-[#f6c21a]/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
              Datenschutz & Transparenz
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Datenschutz
              <span className="gradient-text block">Umzüge LAF</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Informationen darüber, welche personenbezogenen Daten beim Besuch
              dieser Website und bei Kontaktaufnahme verarbeitet werden.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Kontakt aufnehmen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="sticky top-32 rounded-[2.4rem] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Überblick
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">
              Ihre Daten, klar erklärt.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Diese Datenschutzerklärung beschreibt die Verarbeitung von Daten
              bei Websitebesuch, Hosting und Kontaktaufnahme.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={phoneHref}
                className="rounded-full bg-[#f6c21a] px-6 py-4 text-center font-black text-black transition hover:bg-black hover:text-white"
              >
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="rounded-full border border-black/15 px-6 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]"
              >
                E-Mail schreiben
              </a>

              <Link
                href="/impressum"
                className="rounded-full border border-black/15 px-6 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]"
              >
                Impressum öffnen
              </Link>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-black/10 bg-[#f7f7f2] p-5">
              <p className="font-black text-black">Hinweis</p>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Wenn später Tools wie Google Maps, Analytics, Fonts, WhatsApp
                Widgets oder Cookies eingebunden werden, muss diese Seite
                erweitert werden.
              </p>
            </div>
          </aside>

          <div className="grid gap-5">
            {privacySections.map((section) => (
              <section
                key={section.title}
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="text-2xl font-black tracking-[-0.03em] text-black md:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 grid gap-4">
                  {section.text.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-black/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-[2rem] border border-black/10 bg-black p-6 text-white shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
                Kontakt zum Datenschutz
              </h2>

              <p className="mt-5 leading-8 text-white/65">
                Für Fragen zur Verarbeitung personenbezogener Daten können Sie
                sich jederzeit an uns wenden.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref}
                  className="rounded-full bg-[#f6c21a] px-6 py-4 text-center font-black text-black transition hover:bg-white"
                >
                  {phone}
                </a>

                <a
                  href={`mailto:${email}`}
                  className="rounded-full border border-white/15 px-6 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
                >
                  {email}
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Rechtliches
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Angaben zum Anbieter ansehen.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Die Angaben zum verantwortlichen Anbieter finden Sie im Impressum.
            </p>
          </div>

          <Link
            href="/impressum"
            className="rounded-full bg-[#f6c21a] px-8 py-4 text-center font-black text-black transition hover:bg-white"
          >
            Impressum öffnen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
