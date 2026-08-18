"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";

const phoneHref = "tel:+491629007565";

const navItems = [
  { label: "Startseite", href: "/" },
  {
    label: "Umzugsunternehmen",
    href: "/umzugsunternehmen-landshut",
    children: [
      { label: "Umzugsunternehmen", href: "/umzugsunternehmen-landshut" },
      { label: "Umzug", href: "/umzug-landshut" },
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
      { label: "Entrümpelung", href: "/entruempelung-landshut" },
      { label: "Wohnungsauflösung", href: "/wohnungsaufloesung-landshut" },
      { label: "Haushaltsauflösung", href: "/haushaltsaufloesung-landshut" },
      { label: "Kellerentrümpelung", href: "/entruempelung/kellerentruempelung" },
      { label: "Dachbodenentrümpelung", href: "/entruempelung/dachbodenentruempelung" },
      { label: "Garagenentrümpelung", href: "/entruempelung/garagenentruempelung" },
      { label: "Büroentrümpelung", href: "/entruempelung/bueroentruempelung" },
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
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8.09 9.55a16 16 0 0 0 6.36 6.36l1.11-1.11a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (label: string) => {
    setExpandedCategory(expandedCategory === label ? null : label);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3.5 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link href="/" className="group flex items-center">
            <div className="relative h-10 w-28 transition group-hover:scale-105 sm:h-13 sm:w-36">
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
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold text-black/70 transition hover:bg-black/[0.04] hover:text-[#b28a00]"
                >
                  {item.label}
                  {item.children && (
                    <span className="text-[10px] transition group-hover:rotate-180">
                      ▾
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                      <div className="mb-2 rounded-xl bg-[#f6c21a]/15 px-3.5 py-2.5">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b28a00]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs font-bold text-black/60">
                          Alle Leistungen im Überblick
                        </p>
                      </div>

                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-black text-black transition hover:bg-[#f6c21a] hover:text-black"
                          >
                            <span>{child.label}</span>
                            <span className="transition group-hover/item:translate-x-1 text-xs">
                              →
                            </span>
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
              aria-label="Umzüge LAF anrufen"
              title="Umzüge LAF anrufen"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a] sm:h-11 sm:w-11"
            >
              <PhoneIcon />
            </TrackedLink>

            <Link
              href="/kontakt"
              className="hidden rounded-full bg-[#f6c21a] px-4 py-2 text-xs font-black text-black shadow-[0_0_20px_rgba(246,194,26,0.3)] transition hover:bg-black hover:text-white min-[380px]:inline-flex sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Anfrage
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-black/[0.04] text-black backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a] sm:h-11 sm:w-11 lg:hidden"
              aria-label="Menü öffnen"
            >
              <span className="relative h-3.5 w-4.5">
                <span className="absolute left-0 top-0 h-0.5 w-4.5 rounded-full bg-current" />
                <span className="absolute left-0 top-1.5 h-0.5 w-4.5 rounded-full bg-current" />
                <span className="absolute left-0 top-3 h-0.5 w-4.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Accordion Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md lg:hidden">
          <div className="absolute inset-x-2 top-2 max-h-[calc(100vh-1rem)] overflow-y-auto rounded-3xl border border-black/10 bg-white shadow-2xl sm:inset-x-4 sm:top-4">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white p-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-xl font-light text-black transition hover:bg-[#f6c21a]"
                aria-label="Menü schließen"
              >
                ×
              </button>
            </div>

            <nav className="grid gap-2 p-3 sm:p-4">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf7]"
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleCategory(item.label)}
                        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-black text-black transition hover:bg-[#f6c21a]/10"
                      >
                        <span>{item.label}</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-xs font-bold">
                          {expandedCategory === item.label ? "−" : "+"}
                        </span>
                      </button>

                      {expandedCategory === item.label && (
                        <div className="grid gap-1 border-t border-black/10 bg-white p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold text-black/75 transition hover:bg-[#f6c21a] hover:text-black"
                            >
                              <span>{child.label}</span>
                              <span className="text-xs">→</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 text-base font-black text-black transition hover:bg-[#f6c21a]/15"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-black/40">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 border-t border-black/10 p-4">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Mobile Menü"
                onClick={() => setOpen(false)}
                aria-label="Umzüge LAF anrufen"
                title="Umzüge LAF anrufen"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#f6c21a] py-3 text-sm font-black text-black shadow-md"
              >
                <PhoneIcon />
                <span>Anrufen</span>
              </TrackedLink>

              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl border border-black/15 bg-white py-3 text-sm font-black text-black shadow-sm"
              >
                Angebot
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
