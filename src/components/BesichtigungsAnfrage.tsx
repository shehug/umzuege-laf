export default function BesichtigungsAnfrage() {
  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center">
      <h3 className="text-2xl sm:text-3xl font-black text-white">Kostenlose Besichtigung anfragen</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
        Besprechen Sie mit Fahri Kalludra Ihren Umzug oder Ihre Entrümpelung in Landshut und Umgebung.
        Nennen Sie uns Ihren Wunschtermin telefonisch oder im Anfrageformular.
        Wir stimmen den Termin persönlich mit Ihnen ab.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="/kontakt?leistung=Besichtigung#anfrageformular" data-track="booking" data-track-loc="Besichtigungsanfrage"
          className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300">
          Besichtigung anfragen
        </a>
        <a href="tel:+491629007565" data-track="phone" data-track-loc="Besichtigungsanfrage Telefon"
          className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
          Anrufen: 0162 900 75 65
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-400">Kostenlos und unverbindlich · Termin nach persönlicher Bestätigung</p>
    </div>
  );
}
