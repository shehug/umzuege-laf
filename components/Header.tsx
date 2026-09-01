"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

const navItems = [
  { label: "Startseite", href: "/" },
  {
    label: "Umzüge",
    href: "/umzugsunternehmen-landshut",
    children: [
      { label: "Umzugsunternehmen Landshut", href: "/umzugsunternehmen-landshut" },
      { label: "Privatumzug", href: "/privatumzug-landshut" },
      { label: "Firmenumzug", href: "/firmenumzug-landshut" },
      { label: "Fernumzug", href: "/umzuege/fernumzug" },
      { label: "Expressumzug", href: "/umzuege/expressumzug" },
    ],
  },
  {
    label: "Entrümpelung",
    href: "/entruempelung-landshut",
    children: [
      { label: "Entrümpelung Landshut", href: "/entruempelung-landshut" },
      { label: "Wohnungsauflösung", href: "/wohnungsaufloesung-landshut" },
      { label: "Haushaltsauflösung", href: "/haushaltsaufloesung-landshut" },
      { label: "Kellerentrümpelung", href: "/entruempelung/kellerentruempelung" },
      { label: "Sperrmüllentsorgung", href: "/entruempelung/sperrmuellentsorgung" },
    ],
  },
  {
    label: "Service",
    href: "/leistungen",
    children: [
      { label: "Alle Leistungen", href: "/leistungen" },
      { label: "Möbelmontage", href: "/umzuege/moebelmontage" },
      { label: "Einpackservice", href: "/umzuege/einpackservice" },
      { label: "Lagerung", href: "/umzuege/lagerung" },
      { label: "Häufige Fragen (FAQ)", href: "/faq" },
    ],
  },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (label: string) => {
    setExpandedCategory(expandedCategory === label ? null : label);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-28 sm:h-12 sm:w-36 transition hover:opacity-90">
              <Image
                src="/images/logo/laf-logo.png"
                alt="Umzüge LAF Logo"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14px] font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="h-3.5 w-3.5 text-slate-400 transition group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-[260px] -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      <div className="grid gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-[#fffbeb] hover:text-[#b45309]"
                          >
                            <span>{child.label}</span>
                            <span className="text-xs text-slate-400">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <TrackedLink
              href={phoneHref}
              tracking="phone"
              trackingLocation="Header"
              className="flex items-center gap-2 rounded-full bg-[#f59e0b] px-4 py-2 text-xs font-black text-slate-900 shadow-sm transition hover:bg-[#d97706] hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden min-[480px]:inline">{phone}</span>
              <span className="min-[480px]:hidden">Anrufen</span>
            </TrackedLink>

            <Link
              href="/kontakt"
              className="hidden rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Angebot
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 lg:hidden"
              aria-label="Menü öffnen"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-x-2 top-2 max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white p-4">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                <div className="relative h-10 w-28">
                  <Image
                    src="/images/logo/laf-logo.png"
                    alt="Umzüge LAF Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-700 transition hover:bg-slate-200"
                aria-label="Menü schließen"
              >
                ✕
              </button>
            </div>

            <nav className="grid gap-1.5 p-3">
              {navItems.map((item) => (
                <div key={item.href} className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleCategory(item.label)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-extrabold text-slate-800 transition hover:bg-slate-100"
                      >
                        <span>{item.label}</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-bold">
                          {expandedCategory === item.label ? "−" : "+"}
                        </span>
                      </button>

                      {expandedCategory === item.label && (
                        <div className="grid gap-1 border-t border-slate-100 bg-white p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-[#fffbeb] hover:text-[#b45309]"
                            >
                              <span>{child.label}</span>
                              <span className="text-xs text-slate-400">→</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-sm font-extrabold text-slate-800 transition hover:bg-slate-100"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-400">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 border-t border-slate-100 p-4">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Mobile Menü"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] py-3 text-center text-sm font-extrabold text-slate-900 shadow-sm"
              >
                <span>📞 Anrufen</span>
              </TrackedLink>

              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-slate-900 py-3 text-center text-sm font-extrabold text-white shadow-sm"
              >
                Angebot anfordern
              </Link>

              <TrackedLink
                href="https://cal.com/fahrush-kalludra-2scjtx-besichtigung"
                target="_blank"
                rel="noopener noreferrer"
                tracking="booking"
                trackingLocation="Mobile Menü Cal.com"
                onClick={() => setOpen(false)}
                className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-amber-400 bg-amber-50/70 py-3 text-center text-sm font-black text-slate-900 shadow-sm transition hover:bg-amber-100"
              >
                <span>📅 Besichtigung online buchen</span>
              </TrackedLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
