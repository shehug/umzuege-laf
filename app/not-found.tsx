import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const phone = "0162 900 75 65";
  const phoneHref = "tel:+491629007565";

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Header />

      <section className="relative overflow-hidden bg-slate-950 pt-36 pb-24 text-white sm:pt-44 sm:pb-32 flex-1 flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 to-slate-950" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black text-amber-300">
            <span>404 · Seite nicht gefunden</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
            Hier ist wohl etwas <br />
            <span className="text-amber-400">falsch abgebogen.</span>
          </h1>

          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            Die gesuchte Seite existiert leider nicht oder ist umgezogen. Aber keine Sorge:
            Wir bringen Sie und Ihren Umzug sicher ans Ziel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-full bg-[#f59e0b] px-7 py-3.5 text-center text-sm font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-98"
            >
              ← Zur Startseite
            </Link>

            <Link
              href="/leistungen"
              className="w-full sm:w-auto rounded-full border-2 border-slate-700 bg-slate-800/80 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-700 active:scale-98"
            >
              Alle Leistungen ansehen
            </Link>

            <a
              href={phoneHref}
              className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-center text-sm font-bold text-slate-300 hover:text-white transition"
            >
              📞 {phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
