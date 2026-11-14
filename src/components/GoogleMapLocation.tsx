export default function GoogleMapLocation() {
  const companyName = "Umzüge LAF (Inh. Fahri Kalludra)";
  const address = "Ergoldinger Str. 15, 84030 Landshut";
  const phone = "0162 900 75 65";
  const email = "info@umzuegelandshut.de";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Umz%C3%BCge+LAF,+Ergoldinger+Str.+15,+84030+Landshut&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const routeUrl = "https://www.google.com/maps/dir/?api=1&destination=Umz%C3%BCge+LAF,+Ergoldinger+Str.+15,+84030+Landshut";
  const openMapUrl = "https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF+Ergoldinger+Str.+15+84030+Landshut";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
      <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[410px] w-full bg-slate-100 flex-1">
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
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Offizieller Unternehmensstandort
              </p>
            </div>
            <p className="mt-1 text-base font-black text-slate-900">
              {companyName}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              {address}
            </p>
            <div className="mt-2 space-y-0.5 text-xs text-slate-600">
              <p>Telefon: <a href="tel:+491629007565" className="font-bold text-slate-900 hover:text-amber-600">{phone}</a></p>
              <p>E-Mail: <a href={`mailto:${email}`} className="font-medium text-slate-900 hover:text-amber-600">{email}</a></p>
              <p className="text-slate-600 font-medium pt-1">
                Öffnungszeiten: Mo–Fr: 08:00 – 18:00 Uhr · Sa: 09:00 – 17:00 Uhr
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2.5">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-4 py-2.5 text-xs font-black text-slate-950 shadow-xs transition hover:bg-amber-400 active:scale-95"
            >
              <span>🧭</span>
              <span>Route berechnen</span>
            </a>

            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-white active:scale-95"
            >
              <span>In Maps öffnen →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
