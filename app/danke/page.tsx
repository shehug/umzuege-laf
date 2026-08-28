import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createSeoMetadata } from "../seo";

export const metadata = createSeoMetadata({
  title: "Vielen Dank für Ihre Anfrage | Umzüge LAF",
  description: "Ihre Anfrage ist erfolgreich bei Umzüge LAF eingegangen. Wir melden uns innerhalb von 4 Stunden mit Ihrem Festpreis-Angebot.",
  path: "/danke",
  noIndex: true,
});

export default function DankePage() {
  const phone = "0162 900 75 65";
  const phoneHref = "tel:+491629007565";
  const whatsappHref = "https://wa.me/491629007565?text=Hallo%20Umz%C3%BCge%20LAF%2C%20ich%20habe%20gerade%20eine%20Anfrage%20gesendet.";

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Header />

      <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 text-white sm:pt-44 sm:pb-28 flex-1 flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 to-slate-950" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 border border-green-500/40">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black text-amber-300">
            <span>Anfrage erfolgreich übermittelt</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight text-white">
            Vielen Dank für Ihr Vertrauen!
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Ihre Umzugsanfrage ist erfolgreich bei uns eingegangen. Wir prüfen
            Ihre Angaben und erstellen Ihnen ein transparentes Festpreis-Angebot.
          </p>

          {/* Response Promise Card */}
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/90 p-6 max-w-md mx-auto shadow-xl">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-sm font-bold">
              <span>⏱️</span>
              <span>Antwort-Garantie</span>
            </div>
            <p className="mt-2 text-xl font-black text-white">
              Rückmeldung innerhalb von 4 Stunden
            </p>
            <p className="mt-1 text-xs text-slate-400">
              (Montag bis Samstag: 08:00 – 18:00 Uhr)
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3.5 text-sm font-black text-slate-950 shadow-md transition hover:bg-amber-400"
            >
              <span>Eilig? Direkt anrufen: {phone}</span>
            </a>

            <a
              href={whatsappHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-black text-white shadow-md transition hover:bg-green-600"
            >
              <span>Fotos per WhatsApp nachsenden</span>
            </a>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-xs font-bold text-slate-400 hover:text-white underline underline-offset-4"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
