export default function GoogleMapLocation() {
  const address = "Ergoldinger Str. 15, 84030 Landshut";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Ergoldinger+Str.+15,+84030+Landshut&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const routeUrl = "https://www.google.com/maps/dir/?api=1&destination=Ergoldinger+Str.+15,+84030+Landshut";
  const openMapUrl = "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-64 sm:h-72 w-full bg-slate-100">
        <iframe
          title="Umzüge LAF Standort Landshut"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full grayscale-[10%] contrast-[105%]"
        />
      </div>

      <div className="p-5 sm:p-6 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Standort Landshut
              </p>
            </div>
            <p className="mt-1 text-base sm:text-lg font-black text-slate-900">
              {address}
            </p>
            <p className="mt-0.5 text-xs text-slate-600">
              Mo–Sa: 08:00 – 18:00 Uhr · Ansprechpartner vor Ort
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f59e0b] px-4 py-2.5 text-xs font-black text-slate-950 shadow-xs transition hover:bg-amber-400 active:scale-95"
            >
              <span>🧭</span>
              <span>Route berechnen</span>
            </a>

            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-white active:scale-95"
            >
              <span>In Maps öffnen →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
