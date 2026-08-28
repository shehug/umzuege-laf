import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalSeoLinks from "@/components/LocalSeoLinks";
import ContactForm from "@/components/ContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import { createSeoMetadata, seoPages } from "./seo";

export const metadata = createSeoMetadata(seoPages.home);

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const trustPillars = [
  {
    title: "Garantierter Festpreis",
    desc: "Keine versteckten Gebühren oder Nachforderungen am Umzugstag.",
    icon: "💶",
  },
  {
    title: "Voll versichert",
    desc: "Ihre Möbel & Wertsachen sind während des gesamten Transports optimal geschützt.",
    icon: "🛡️",
  },
  {
    title: "Regional aus Landshut",
    desc: "Direkte Erreichbarkeit, ortskundiges Team und kostenlose Vor-Ort-Besichtigung.",
    icon: "📍",
  },
  {
    title: "Antwort in 4 Stunden",
    desc: "Verbindliches Angebot innerhalb von 4 Stunden nach Ihrer Anfrage.",
    icon: "⏱️",
  },
];

const mainServices = [
  {
    title: "Privatumzug Landshut",
    badge: "Beliebt",
    text: "Stressfreier Wohnungsumzug oder Hausumzug mit Einpackservice, Möbeltransport und Montage.",
    href: "/privatumzug-landshut",
    image: "/images/services/privatumzug.jpg",
  },
  {
    title: "Firmenumzug Landshut",
    badge: "Gewerbe",
    text: "Strukturierte Büroumzüge, Praxisumzüge und Gewerbeumzüge mit minimaler Ausfallzeit.",
    href: "/firmenumzug-landshut",
    image: "/images/services/firmenumzug.jpg",
  },
  {
    title: "Möbelmontage",
    badge: "Handwerk",
    text: "Fachgerechter Abbau, sicherer Transport und stabiler Wiederaufbau aller Möbel.",
    href: "/umzuege/moebelmontage",
    image: "/images/services/Montage.jpg",
  },
  {
    title: "Entrümpelung & Räumung",
    badge: "Besenrein",
    text: "Wohnungsauflösungen, Keller, Dachböden und Sperrmüllentsorgung schnell und sauber.",
    href: "/entruempelung-landshut",
    image: "/images/services/entruempelung.jpg",
  },
];

const steps = [
  {
    num: "1",
    title: "Kurze Anfrage oder Anruf",
    text: "Nennen Sie uns Startadresse, Zieladresse und den ungefähren Umfang in nur 2 Minuten.",
  },
  {
    num: "2",
    title: "Verbindliches Festpreis-Angebot",
    text: "Sie erhalten innerhalb von 4 Stunden ein transparentes, faires Angebot ohne versteckte Kosten.",
  },
  {
    num: "3",
    title: "Pünktlich & entspannt umziehen",
    text: "Unser geschultes Team erledigt Tragen, Transport und Montage zuverlässig für Sie.",
  },
];

const homeFaqs = [
  {
    q: "Was kostet ein Umzug in Landshut mit Umzüge LAF?",
    a: "Die Kosten richten sich nach Wohnungsgröße, Etage, Entfernung und gewünschten Zusatzleistungen (z. B. Montage oder Einpackservice). Nach Erhalt Ihrer Eckdaten erstellen wir einen verbindlichen Festpreis ohne Nachforderungen.",
  },
  {
    q: "Wie schnell erhalte ich mein Umzugsangebot?",
    a: "Wir garantieren Ihnen eine persönliche Rückmeldung und ein transparentes Angebot innerhalb von maximal 4 Stunden während unserer Geschäftszeiten (Mo–Sa: 08:00 – 18:00 Uhr).",
  },
  {
    q: "Sind meine Möbel beim Transport versichert?",
    a: "Ja, alle Transporte, Tragearbeiten und Montageservices sind selbstverständlich vollumfänglich nach gesetzlichen deutschen Transportstandards versichert.",
  },
  {
    q: "Sind auch kurzfristige Umzugstermine möglich?",
    a: "Ja! Durch unsere flexible Teamplanung in Landshut können wir oft auch kurzfristige oder dringende Express-Umzüge innerhalb von 24–48 Stunden realisieren.",
  },
  {
    q: "Übernehmen Sie auch Möbelmontage und Küchenabbau?",
    a: "Ja, unser Team baut Ihre Schränke, Betten, Regale und Möbel fachgerecht ab und baut sie am Zielort wieder stabil auf.",
  },
  {
    q: "Kombinieren Sie Umzug auch mit Entrümpelung oder Sperrmüll?",
    a: "Ja, wir können nicht mehr benötigte Altmöbel, Kellerabteile oder Sperrmüll direkt im Rahmen Ihres Umzugs fachgerecht entsorgen.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/hero/Hero.jpg"
            alt="Umzüge LAF Transporter und Team Landshut"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center sm:object-right"
          />
        </div>
        {/* Soft directional gradient: dark on left for text, clear fade on right for photo */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30 sm:to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              {/* Trust Tag */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
                <span className="flex text-amber-400">★★★★★</span>
                <span>4.9 / 5 Google Bewertung · Landshut</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
                Umzugsunternehmen Landshut.<br />
                <span className="text-amber-400">Stressfrei & zum Festpreis.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Ihr erfahrenes Umzugsteam für Landshut & Umgebung. Wir übernehmen
                Privatumzüge, Firmenumzüge, Möbelmontage, Einpackservice und Entrümpelungen
                — zuverlässig, pünktlich und fair.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={phoneHref}
                  className="flex items-center justify-center gap-2.5 rounded-full bg-[#f59e0b] px-7 py-4 text-center text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Direkt anrufen: {phone}</span>
                </a>

                <a
                  href="#direktanfrage"
                  className="flex items-center justify-center rounded-full border-2 border-slate-600 bg-slate-800/80 px-7 py-4 text-center text-base font-bold text-white transition hover:border-slate-400 hover:bg-slate-700 active:scale-98"
                >
                  Kostenlos anfragen →
                </a>
              </div>

              {/* Mini Trust Checklist */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-black">✓</span>
                  <span>Kostenlose Besichtigung</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-black">✓</span>
                  <span>Transparenter Festpreis</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-black">✓</span>
                  <span>Antwort in 4 Std.</span>
                </div>
              </div>
            </div>

            {/* Quick Hero Card */}
            <div className="hidden lg:block rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Kunden-Zufriedenheit
                  </p>
                  <p className="mt-1 text-2xl font-black text-white">4.9 von 5.0 Sternen</p>
                </div>
                <div className="flex text-amber-400 text-lg">★★★★★</div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  <p><strong className="text-white">Pünktlich & Zuverlässig:</strong> Feste Termine ohne Verzögerungen.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  <p><strong className="text-white">Sorgfältiges Tragen:</strong> Schutzdecken & Spanngurte für jedes Möbelstück.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  <p><strong className="text-white">Alles aus einer Hand:</strong> Transport, Montage & Entsorgung.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#direktanfrage"
                  className="block w-full rounded-xl bg-amber-400 py-3.5 text-center text-sm font-black text-slate-950 transition hover:bg-amber-300 shadow-md"
                >
                  Unverbindliches Angebot anfordern →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 TRUST PILLARS ── */}
      <section className="relative z-20 -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition duration-200"
            >
              <div className="text-2xl">{p.icon}</div>
              <h2 className="mt-3 text-base font-black text-slate-900">{p.title}</h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3-STEP PROCESS ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Einfacher Ablauf
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              In 3 Schritten zu Ihrem stressfreien Umzug
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Klar, transparent und ohne komplizierten Papierkram.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-base font-black text-amber-800">
                    {s.num}
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN GRID ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Unsere Leistungen
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Professionelle Umzugsservices in Landshut
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Wählen Sie den passenden Service für Ihr Vorhaben:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainServices.map((srv) => (
              <Link
                key={srv.title}
                href={srv.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-sm">
                    {srv.badge}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#b45309] transition">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {srv.text}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-extrabold text-[#b45309]">
                    <span>Details ansehen</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECHTE KUNDENBEWERTUNGEN VOM GOOGLE PROFIL ── */}
      <GoogleReviews />

      {/* ── DIREKTANFRAGE FORMULAR SEKTION ── */}
      <section id="direktanfrage" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                <span>📍</span>
                <span>Standort: Ergoldinger Str. 15, 84030 Landshut</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Jetzt kostenloses Angebot anfordern.
              </h2>

              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Ob 1-Zimmer-Wohnung, Einfamilienhaus oder Büro: Teilen Sie uns kurz
                Ihre Eckdaten mit. Wir melden uns innerhalb von 4 Stunden mit einem fairen Festpreis bei Ihnen.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <p className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Direkter telefonischer Kontakt
                </p>
                <a
                  href={phoneHref}
                  className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-black text-white hover:text-amber-400 transition"
                >
                  <span>📞</span>
                  <span>{phone}</span>
                </a>
                <p className="mt-1 text-xs text-slate-400">
                  Mo–Sa: 08:00 – 18:00 Uhr erreichbar
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-black text-slate-900">
                Online-Anfrage starten
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Unverbindlich und in 2 Minuten ausgefüllt.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SEKTION (6 FAQs) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-[#d97706]">
              Fragen & Antworten
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Häufige Fragen zu unserem Umzugsservice
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {homeFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm hover:border-amber-400/60 transition"
              >
                <h3 className="text-base font-black text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalSeoLinks />
      <Footer />
    </main>
  );
}
