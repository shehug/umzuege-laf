export default function GoogleReviews() {
  const currentDate = new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF,+Ergoldinger+Str.+15,+84030+Landshut";

  return (
    <section className="border-y border-slate-800 bg-slate-900 py-16 text-white sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300">
            <span>★ Verifizierte Kundenbewertungen</span>
          </div>
          <h2 className="mt-3 text-2xl font-black sm:text-4xl text-white">
            Kundenbewertungen auf Google
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl">
            Lesen Sie die ungefilterten Erfahrungen zufriedener Umzugskunden direkt im verifizierten Google-Unternehmensprofil von Umzüge LAF.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex text-amber-400 text-xl font-black tracking-widest">
              ★★★★★
            </span>
            <p className="font-extrabold text-white text-base">
              5,0 von 5 Sternen <span className="text-slate-400 font-normal">·</span>{" "}
              <span className="text-amber-300">65+ Bewertungen</span>
            </p>
          </div>
          <p className="mt-1.5 text-xs text-slate-400">
            Aktueller Stand ({currentDate}). Alle Bewertungen direkt auf Google einsehbar.
          </p>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-md transition hover:bg-amber-300 active:scale-95 shrink-0"
        >
          <span>Bewertungen auf Google ansehen</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
