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
      className="relative z-10 border-t border-white/10 bg-[#050505] px-5 py-16 text-white lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
            Umzüge LAF in Landshut
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Umzug, Entrümpelung und Möbelmontage in Landshut.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-white/60">
            Umzüge LAF unterstützt Privatkunden, Firmen und Haushalte in
            Landshut und Umgebung mit Umzug, Transport, Möbelmontage,
            Einpackservice, Entrümpelung und Sperrmüllentsorgung.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-black text-[#f6c21a]">
              Wichtige Seiten
            </h3>

            <div className="mt-5 grid gap-3">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 font-bold text-white transition hover:border-[#f6c21a]/50 hover:bg-[#f6c21a]/10 hover:text-[#f6c21a]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-[#f6c21a]">
              Weitere Leistungen
            </h3>

            <div className="mt-5 grid gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 font-bold text-white transition hover:border-[#f6c21a]/50 hover:bg-[#f6c21a]/10 hover:text-[#f6c21a]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-black text-[#f6c21a]">
            Einsatzgebiet
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-bold text-white/75"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
