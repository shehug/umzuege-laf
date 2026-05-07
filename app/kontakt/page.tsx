import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.kontakt);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";
const emailHref = "mailto:info@umzuege-laf.de";
const address = "Ergoldinger Str. 15, 84030 Landshut";

const contactCards = [
  {
    title: "Direkt anrufen",
    value: phone,
    text: "Für schnelle Fragen oder eine direkte Terminabsprache.",
    href: phoneHref,
    icon: "☎",
  },
  {
    title: "E-Mail schreiben",
    value: email,
    text: "Ideal für Anfragen mit Bildern, Adressen oder Details.",
    href: emailHref,
    icon: "✉",
  },
  {
    title: "Standort",
    value: "Landshut",
    text: address,
    href: "https://www.google.com/maps/search/?api=1&query=Ergoldinger%20Str.%2015%2084030%20Landshut",
    icon: "⌖",
  },
];

const requestTypes = [
  "Privatumzug",
  "Firmenumzug",
  "Entrümpelung",
  "Möbelmontage",
  "Einpackservice",
  "Sonstige Anfrage",
];

const benefits = [
  "Kostenlose Anfrage",
  "Schnelle Rückmeldung",
  "Persönliche Beratung",
  "Faire Planung",
];

export default function KontaktPage() {
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

      <section className="relative z-10 overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.28),transparent_34%)]" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f6c21a]/35 bg-[#f6c21a]/10 px-4 py-2 text-sm font-black text-[#f6c21a] shadow-[0_0_40px_rgba(246,194,26,0.16)] backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
                </span>
                Kontakt & Anfrage
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Erzählen Sie uns kurz,
                <span className="gradient-text block">worum es geht.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Ob Umzug, Entrümpelung, Möbelmontage oder Einpackservice:
                Umzüge LAF meldet sich schnell zurück und plant den Ablauf
                transparent mit Ihnen.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="premium-border rounded-3xl bg-white/[0.045] p-5 backdrop-blur-xl"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                      ✓
                    </div>
                    <p className="font-black text-white">{benefit}</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Schnell, klar und unkompliziert abgestimmt.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#f6c21a]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.18),transparent_36%)]" />

                <div className="relative">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
                    Schnellkontakt
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
                    Direkt erreichbar für Ihre Anfrage.
                  </h2>

                  <div className="mt-7 grid gap-4">
                    {contactCards.map((card) => (
                      <a
                        key={card.title}
                        href={card.href}
                        target={card.title === "Standort" ? "_blank" : undefined}
                        rel={card.title === "Standort" ? "noopener noreferrer" : undefined}
                        className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/35 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f6c21a]/50 hover:bg-[#f6c21a]/10 active:scale-[0.98]"
                      >
                        <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-[120%]" />

                        <div className="relative flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] text-2xl font-black text-black shadow-[0_0_30px_rgba(246,194,26,0.3)] transition group-hover:rotate-6 group-hover:scale-110">
                            {card.icon}
                          </div>

                          <div>
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c21a]">
                              {card.title}
                            </p>
                            <p className="mt-1 text-xl font-black text-white">
                              {card.value}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/60">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Anfrageformular
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Anfrage senden und Rückmeldung erhalten.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Füllen Sie die wichtigsten Informationen aus. Das Formular öffnet
              Ihr E-Mail-Programm mit den Angaben. Für ein echtes Online-Formular
              bauen wir später noch eine Server-Funktion ein.
            </p>

            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="font-black text-black">Für ein gutes Angebot hilfreich:</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-black/60">
                <li>✓ Startadresse und Zieladresse</li>
                <li>✓ Etage, Aufzug und Parkmöglichkeit</li>
                <li>✓ gewünschter Termin</li>
                <li>✓ Fotos oder kurze Beschreibung des Umfangs</li>
              </ul>
            </div>
          </div>

          <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.12)] md:p-8"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />

            <div className="relative">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    Name
                  </label>
                  <input
                    name="Name"
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    Telefon
                  </label>
                  <input
                    name="Telefon"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    E-Mail
                  </label>
                  <input
                    name="Email"
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    Anfrageart
                  </label>
                  <select
                    name="Anfrageart"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  >
                    {requestTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    Startort
                  </label>
                  <input
                    name="Startort"
                    type="text"
                    placeholder="z. B. Landshut"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-black">
                    Zielort
                  </label>
                  <input
                    name="Zielort"
                    type="text"
                    placeholder="z. B. München"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-black text-black">
                  Nachricht
                </label>
                <textarea
                  name="Nachricht"
                  rows={6}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen, gewünschtes Datum, Etage, Möbelumfang oder besondere Hinweise."
                  className="w-full resize-none rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-sm leading-6 text-black/50">
                  Mit dem Absenden wird Ihr E-Mail-Programm geöffnet.
                </p>

                <button
                  type="submit"
                  className="rounded-full bg-[#f6c21a] px-8 py-4 font-black text-black shadow-[0_18px_60px_rgba(246,194,26,0.25)] transition hover:-translate-y-1 hover:bg-black hover:text-white active:scale-95"
                >
                  Anfrage senden
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#050505] px-5 py-24 lg:px-8">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f6c21a]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Schnellkontakt
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Lieber direkt sprechen?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Rufen Sie einfach an oder schreiben Sie eine kurze E-Mail. Umzüge
              LAF meldet sich schnell zurück.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={phoneHref}
              className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
            >
              {phone}
            </a>

            <a
              href={emailHref}
              className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a] active:scale-95"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
