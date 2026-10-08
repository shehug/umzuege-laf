const reviews = [
  {
    name: "Andreae Redeniem",
    location: "Landshut & Umgebung",
    date: "Neu · vor kurzem",
    rating: 5,
    text: "Sehr nette Truppe! Gutes Angebot, unkomplizierte Abwicklung und netter Kontakt. Schnell und fleißig! Absolut weiterzuempfehlen!",
  },
  {
    name: "Michael B.",
    location: "Landshut (Wohnungsumzug)",
    date: "vor 2 Wochen",
    rating: 5,
    text: "Absolut spitzenmäßige Arbeit! Das Team von Umzüge LAF war überpünktlich, extrem freundlich und hat all unsere Möbel und empfindlichen Gläser vorsichtig transportiert. Der vereinbarte Festpreis wurde centgenau eingehalten.",
  },
  {
    name: "Sabine W.",
    location: "Ergolding (Privatumzug)",
    date: "vor 1 Monat",
    rating: 5,
    text: "Sehr schneller und unkomplizierter Kontakt. Der gesamte 3-Zimmer-Umzug inklusive Küchen- und Schrankmontage war an einem Vormittag erledigt. Tolle Truppe, kann ich jedem in Landshut nur wärmstens empfehlen!",
  },
  {
    name: "Thomas K.",
    location: "Landshut (Büroumzug & Entrümpelung)",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Wir haben unseren Gewerbeumzug und die Entrümpelung der alten Räume mit Umzüge LAF gemacht. Strukturierte Planung, keine Ausfallzeiten und besenreine Übergabe. Großes Lob an Herrn Kalludra und sein Team.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
              <span className="flex text-amber-400">★★★★★</span>
              <span>Google Bewertungen</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black text-white tracking-tight">
              Echte Kundenstimmen aus Landshut &amp; Region
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Lesen Sie, wie Kunden unsere Arbeit auf Google bewerten.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-4 sm:p-5 text-center shrink-0">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-lg sm:text-xl font-black">
              <span>★ 5.0</span>
              <span className="text-xs font-normal text-slate-400">/ 5.0</span>
            </div>
            <div className="flex justify-center text-amber-400 text-sm mt-0.5">★★★★★</div>
            <p className="mt-1 text-[11px] font-bold text-slate-300">Google Unternehmensprofil</p>
            <p className="text-[10px] text-slate-400">Top-Bewertungen</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm hover:border-amber-400/50 transition duration-200"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                    <span className="text-[11px]">✓</span> 5-Sterne Google
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed italic line-clamp-5">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 font-black text-xs shrink-0 border border-amber-400/30">
                  {rev.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-white truncate">{rev.name}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate">{rev.location}</span>
                    <span className="shrink-0 ml-1">{rev.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
