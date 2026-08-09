import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LocalSeoLinks from "../../components/LocalSeoLinks";
import ContactForm from "../../components/ContactForm";
import TrackedLink from "../../components/TrackedLink";
import { createSeoMetadata, seoPages } from "../seo";

export const metadata = createSeoMetadata(seoPages.kontakt);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const whatsappHref = "https://wa.me/491629007565?text=Hallo%20Umz%C3%BCge%20LAF%2C%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Angebot%20anfragen.";
const email = "info@umzuege-laf.de";
const emailHref = "mailto:info@umzuege-laf.de";
const address = "Ergoldinger Str. 15, 84030 Landshut";

const quickWays = [
  {
    title: "1. Anrufen",
    value: phone,
    subtitle: "Am schnellsten für Eiliges",
    action: "Jetzt anrufen",
    href: phoneHref,
    badge: "Sofort sprechen",
    color: "bg-[#f6c21a] text-black",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "2. WhatsApp",
    value: "Fotos & Details senden",
    subtitle: "Ideal für Möbel & Räume",
    action: "WhatsApp Chat öffnen",
    href: whatsappHref,
    badge: "Sehr beliebt",
    color: "bg-[#25D366] text-white",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
  {
    title: "3. Formular",
    value: "Kostenloses Angebot",
    subtitle: "In 2 Min. ausgefüllt",
    action: "Zum Formular springen",
    href: "#anfrageformular",
    badge: "Top Ausführlich",
    color: "bg-[#18181b] text-white",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const trustBadges = [
  { title: "100% Kostenlos", desc: "Unverbindliches Angebot ohne Risiko" },
  { title: "Antwort in 30 Min.", desc: "Zügige Rückmeldung zu Ihrer Anfrage" },
  { title: "Festpreis-Garantie", desc: "Transparente Preise ohne Überraschungen" },
  { title: "Vor-Ort-Termin", desc: "Kostenfreie Besichtigung in Landshut" },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-5 pb-16 pt-36 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.2),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b28a00]/30 bg-[#f6c21a]/15 px-5 py-2 text-sm font-black text-[#b28a00]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              Einfach & Direkt Kontaktieren
            </div>

            <h1 className="text-5xl font-black leading-[1.14] tracking-tight md:text-7xl">
              Drei einfache Wege zu
              <span className="gradient-text block mt-2">Ihrem Festpreis-Angebot.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-black/70 md:text-xl">
              Ob Umzug, Entrümpelung, Möbelmontage oder Einpackservice in Landshut:
              Wählen Sie den Weg, der für Sie am bequemsten ist.
            </p>
          </div>

          {/* 3 Quick Cards Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {quickWays.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/5 bg-[#fafaf7] px-4 py-1.5 text-xs font-black text-black/70">
                    {item.badge}
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} shadow-sm transition group-hover:scale-110`}>
                    {item.icon}
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-black text-[#b28a00]">{item.title}</h2>
                  <p className="mt-1 text-2xl font-black text-[#18181b]">{item.value}</p>
                  <p className="mt-2 text-sm text-black/60">{item.subtitle}</p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5">
                  <span className="font-black text-sm text-[#18181b] group-hover:text-[#b28a00] transition">
                    {item.action}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fafaf7] text-black transition group-hover:bg-[#f6c21a]">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm text-center"
              >
                <p className="font-black text-[#18181b] text-base">{badge.title}</p>
                <p className="mt-1 text-xs text-black/60">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Form Section */}
      <section id="anfrageformular" className="relative z-10 bg-[#f7f7f2] px-5 py-24 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-4 inline-block rounded-full bg-[#f6c21a]/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#b28a00]">
              Online-Anfrage
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Kostenloses Angebot in wenigen Schritten.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/65">
              Füllen Sie einfach unser Online-Formular aus. Wir melden uns umgehend mit einem maßgeschneiderten Angebot bei Ihnen zurück.
            </p>

            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="font-black text-[#18181b] text-lg">💡 Hilfreiche Angaben für ein exaktes Angebot:</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-black/70">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6c21a] text-xs font-black text-black">✓</span>
                  <span>Startadresse & Zieladresse (Ort / PLZ)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6c21a] text-xs font-black text-black">✓</span>
                  <span>Etage, Aufzug & Parkmöglichkeit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6c21a] text-xs font-black text-black">✓</span>
                  <span>Wunschtermin für den Umzug / Entrümpelung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6c21a] text-xs font-black text-black">✓</span>
                  <span>Besondere Möbelstücke (z.B. Schrank, Einbauküche)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="font-black text-[#18181b] text-lg">📍 Firmensitz in Landshut:</p>
              <div className="mt-3 text-sm leading-7 text-black/70">
                <p className="font-bold">{address}</p>
                <p className="mt-1">Telefon: <a href={phoneHref} className="font-bold text-[#b28a00] hover:underline">{phone}</a></p>
                <p>E-Mail: <a href={emailHref} className="font-bold text-[#b28a00] hover:underline">{email}</a></p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Direct Call Footer CTA */}
      <section className="relative z-10 overflow-hidden bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Persönliche Beratung
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              Fragen? Wir beraten Sie gerne persönlich am Telefon.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/65">
              Rufen Sie uns direkt an. Wir beantworten Ihre Fragen zu Termin, Ablauf und Kosten sofort.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <TrackedLink
              href={phoneHref}
              tracking="phone"
              trackingLocation="Kontakt Unterseite CTA"
              className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-md"
            >
              ☎ {phone}
            </TrackedLink>

            <TrackedLink
              href={whatsappHref}
              tracking="whatsapp"
              trackingLocation="Kontakt Unterseite CTA"
              className="rounded-full bg-[#25D366] px-8 py-4 text-center font-black text-white shadow-md transition hover:opacity-90"
            >
              💬 WhatsApp Chat
            </TrackedLink>
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
