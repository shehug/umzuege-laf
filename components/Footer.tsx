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
    <footer className="relative z-10 border-t border-black/5 bg-[#fafaf7] px-5 py-16 text-[#18181b] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-12 w-32 sm:h-20 sm:w-48">
                <Image
                  src="/images/logo/laf-logo.png"
                  alt="Umzüge LAF Logo"
                  fill
                  sizes="(max-width: 640px) 128px, 192px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-black/65">
              Umzüge LAF ist Ihr Umzugsunternehmen in Landshut für Privatumzug,
              Firmenumzug, Entrümpelung, Wohnungsauflösung, Möbelmontage und
              Einpackservice in Landshut und Umgebung.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm font-bold text-black/75">
              <a
                href="https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#b28a00] underline-offset-2 hover:underline"
              >
                <p>Ergoldinger Str. 15</p>
                <p>84030 Landshut</p>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Navigation
            </h3>

            <div className="mt-6 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-black/70 transition hover:text-[#b28a00]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Leistungen
            </h3>

            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm font-medium text-black/70 transition hover:text-[#b28a00]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
              Kontakt
            </h3>

            <div className="mt-6 grid gap-3">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Footer"
                className="glow-button rounded-full px-6 py-3 text-center text-sm font-black text-black shadow-md"
              >
                {phone}
              </TrackedLink>

              <TrackedLink
                href={`mailto:${email}`}
                tracking="email"
                trackingLocation="Footer"
                className="rounded-full border border-black/15 bg-white px-6 py-3 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                {email}
              </TrackedLink>
            </div>

            <div className="mt-8 rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-[#18181b]">Schnell anfragen</p>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Für Umzug Landshut, Entrümpelung Landshut oder Möbelmontage einfach kurz melden.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Umzüge LAF. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/impressum" className="transition hover:text-[#b28a00]">
              Impressum
            </Link>

            <Link
              href="/datenschutz"
              className="transition hover:text-[#b28a00]"
            >
              Datenschutz
            </Link>

            <Link
              href="/admin/login"
              className="transition hover:text-[#b28a00]"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
