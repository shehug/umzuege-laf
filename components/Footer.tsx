import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const email = "info@umzuege-laf.de";

const links = [
  { label: "Startseite", href: "/" },
  { label: "Umzugsunternehmen Landshut", href: "/umzugsunternehmen-landshut" },
  { label: "Umzug Landshut", href: "/umzug-landshut" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Häufige Fragen (FAQ)", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const services = [
  { label: "Privatumzug Landshut", href: "/privatumzug-landshut" },
  { label: "Firmenumzug Landshut", href: "/firmenumzug-landshut" },
  { label: "Entrümpelung Landshut", href: "/entruempelung-landshut" },
  { label: "Wohnungsauflösung Landshut", href: "/wohnungsaufloesung-landshut" },
  { label: "Möbelmontage Landshut", href: "/umzuege/moebelmontage" },
  { label: "Einpackservice Landshut", href: "/umzuege/einpackservice" },
  { label: "Fernumzug", href: "/umzuege/fernumzug" },
  { label: "Expressumzug", href: "/umzuege/expressumzug" },
  { label: "Sperrmüllentsorgung", href: "/entruempelung/sperrmuellentsorgung" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-12 w-32 sm:h-14 sm:w-40">
                <Image
                  src="/images/logo/laf-logo.png"
                  alt="Umzüge LAF Logo"
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400">
              Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen in Landshut für Privatumzug,
              Firmenumzug, Möbelmontage, Einpackservice und Entrümpelung.
            </p>

            <div className="mt-5 text-xs sm:text-sm font-semibold text-slate-300">
              <a
                href="https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                <p className="font-bold text-white">Standort:</p>
                <p>Ergoldinger Str. 15</p>
                <p>84030 Landshut</p>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Navigation
            </h3>
            <div className="mt-4 grid gap-2.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Leistungen
            </h3>
            <div className="mt-4 grid gap-2.5">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Kontakt & Beratung
            </h3>
            <div className="mt-4 grid gap-2.5">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Footer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] py-3 text-center text-xs sm:text-sm font-black text-slate-950 shadow-sm transition hover:bg-amber-400"
              >
                <span>📞</span>
                <span>{phone}</span>
              </TrackedLink>

              <TrackedLink
                href={`mailto:${email}`}
                tracking="email"
                trackingLocation="Footer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 py-3 text-center text-xs sm:text-sm font-bold text-slate-200 transition hover:bg-slate-800"
              >
                <span>✉️</span>
                <span>{email}</span>
              </TrackedLink>
            </div>

            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400">
              <p className="font-bold text-white">Öffnungszeiten:</p>
              <p className="mt-1">Mo – Sa: 08:00 – 18:00 Uhr</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Umzüge LAF · Alle Rechte vorbehalten.</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className="hover:text-slate-300 transition">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-300 transition">
              Datenschutz
            </Link>
            <Link href="/admin/login" className="hover:text-slate-300 transition">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
