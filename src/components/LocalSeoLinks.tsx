import Link from "next/link";

const primaryLinks = [
  {
    title: "Umzugsunternehmen Landshut",
    href: "/umzugsunternehmen-landshut",
  },
  {
    title: "Umzug Landshut",
    href: "/umzug-landshut",
  },
  {
    title: "Privatumzug Landshut",
    href: "/privatumzug-landshut",
  },
  {
    title: "Firmenumzug Landshut",
    href: "/firmenumzug-landshut",
  },
  {
    title: "Entrümpelung Landshut",
    href: "/entruempelung-landshut",
  },
  {
    title: "Wohnungsauflösung Landshut",
    href: "/wohnungsaufloesung-landshut",
  },
];

const serviceLinks = [
  {
    title: "Möbelmontage Landshut",
    href: "/umzuege/moebelmontage",
  },
  {
    title: "Einpackservice Landshut",
    href: "/umzuege/einpackservice",
  },
  {
    title: "Fernumzug Landshut",
    href: "/umzuege/fernumzug",
  },
  {
    title: "Expressumzug Landshut",
    href: "/umzuege/expressumzug",
  },
  {
    title: "Sperrmüllentsorgung Landshut",
    href: "/entruempelung/sperrmuellentsorgung",
  },
  {
    title: "Haushaltsauflösung Landshut",
    href: "/entruempelung/haushaltsaufloesung",
  },
];

const areas = [
  "Landshut",
  "Altstadt",
  "Nikola",
  "Wolfgang",
  "Achdorf",
  "Münchnerau",
  "Schönbrunn",
  "Peter & Paul",
  "Ergolding",
  "Altdorf",
  "Essenbach",
  "Kumhausen",
  "Vilsbiburg",
  "Moosburg",
  "Landkreis Landshut",
];

export default function LocalSeoLinks() {
  return (
    <section
      aria-label="Lokale Leistungen von Umzüge LAF in Landshut"
      className="border-t border-slate-200 bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#b45309]">
            Umzüge LAF in Landshut
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Umzug, Entrümpelung & Montage in Ihrer Region
          </h2>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
            Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in
            Landshut und Umgebung mit Umzug, Transport, Möbelmontage,
            Einpackservice, Entrümpelung und Sperrmüllentsorgung.
          </p>

          <div className="mt-6">
            <p className="text-xs font-bold text-slate-700">Einsatzgebiet:</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                >
                  ✓ {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#b45309]">
              Umzugsdienste
            </h3>

            <div className="mt-4 grid gap-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold text-slate-700 transition hover:text-[#b45309]"
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#b45309]">
              Montage & Räumung
            </h3>

            <div className="mt-4 grid gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold text-slate-700 transition hover:text-[#b45309]"
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
