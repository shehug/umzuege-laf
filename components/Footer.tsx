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
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const services = [
  { label: "Privatumzug Landshut", href: "/privatumzug-landshut" },
  { label: "Firmenumzug Landshut", href: "/firmenumzug-landshut" },
  { label: "Entrümpelung Landshut", href: "/entruempelung-landshut" },
  { label: "Wohnungsauflösung Landshut", href: "/wohnungsaufloesung-landshut" },
  { label: "Möbelmontage Landshut", href: "/umzuege/moebelmontage" },
  { label: "Einpackservice Landshut", href: "/umzuege/einpackservice" },
  { label: "Fernumzug Landshut", href: "/umzuege/fernumzug" },
  { label: "Expressumzug Landshut", href: "/umzuege/expressumzug" },
  { label: "Sperrmüllentsorgung Landshut", href: "/entruempelung/sperrmuellentsorgung" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-20 w-48">
                <Image
                  src="/images/logo/Lafi12.png"
                  alt="Umzüge LAF Logo"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Privatumzug,
              Firmenumzug, Entrümpelung, Wohnungsauflösung, Möbelmontage und
              Einpackservice in Landshut und Umgebung.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <p>Ergoldinger Str. 15</p>
              <p>84030 Landshut</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Navigation
            </h3>

            <div className="mt-6 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-[#f6c21a]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Leistungen
            </h3>

            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-white/65 transition hover:text-[#f6c21a]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
              Kontakt
            </h3>

            <div className="mt-6 grid gap-3">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Footer"
                className="rounded-full bg-[#f6c21a] px-6 py-3 text-center text-sm font-black text-black transition hover:bg-white"
              >
                {phone}
              </TrackedLink>

              <TrackedLink
                href={`mailto:${email}`}
                tracking="email"
                trackingLocation="Footer"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
              >
                {email}
              </TrackedLink>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black text-white">Schnell anfragen</p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Für Umzug Landshut, Entrümpelung Landshut oder Möbelmontage einfach kurz melden.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Umzüge LAF. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/impressum" className="transition hover:text-[#f6c21a]">
              Impressum
            </Link>

            <Link
              href="/datenschutz"
              className="transition hover:text-[#f6c21a]"
            >
              Datenschutz
            </Link>

            <Link
              href="/admin/login"
              className="transition hover:text-[#f6c21a]"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
