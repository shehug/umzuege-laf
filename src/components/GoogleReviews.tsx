export default function GoogleReviews() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-16 text-white sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-black sm:text-4xl">Kundenbewertungen auf Google</h2>
          <p className="mt-3 text-sm text-slate-300">Lesen Sie die Erfahrungen unserer Kunden direkt im Google-Unternehmensprofil.</p>
          <p className="mt-3 font-bold text-amber-300">5,0 von 5 Sternen · 65 Bewertungen</p>
          <p className="mt-1 text-xs text-slate-400">Stand: 11. Oktober 2026. Die aktuelle Bewertung finden Sie auf Google.</p>
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge%20LAF%20Landshut"
          target="_blank" rel="noopener noreferrer"
          className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300">
          Bewertungen auf Google ansehen ↗
        </a>
      </div>
    </section>
  );
}
