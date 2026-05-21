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
      { label: "Umzugsunternehmen Landshut", href: "/umzugsunternehmen-landshut" },
      { label: "Umzug Landshut", href: "/umzug-landshut" },
      { label: "Privatumzug Landshut", href: "/privatumzug-landshut" },
      { label: "Firmenumzug Landshut", href: "/firmenumzug-landshut" },
      { label: "Fernumzug Landshut", href: "/umzuege/fernumzug" },
      { label: "Expressumzug Landshut", href: "/umzuege/expressumzug" },
    ],
  },
  {
    label: "Entrümpelung",
    href: "/entruempelung-landshut",
    children: [
      { label: "Entrümpelung Landshut", href: "/entruempelung-landshut" },
      { label: "Wohnungsauflösung Landshut", href: "/wohnungsaufloesung-landshut" },
      { label: "Haushaltsauflösung Landshut", href: "/haushaltsaufloesung-landshut" },
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
      { label: "Möbelmontage Landshut", href: "/umzuege/moebelmontage" },
      { label: "Einpackservice Landshut", href: "/umzuege/einpackservice" },
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
      className="h-5 w-5"
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

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-14 w-36 transition group-hover:scale-105">
              <Image
                src="/images/logo/laf-logo.png"
                alt="Umzüge LAF Logo"
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-wide text-black">
                Umzüge LAF
              </p>
              <p className="text-xs text-black/55">Landshut & Umgebung</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-black/70 transition hover:bg-black/[0.04] hover:text-[#b28a00]"
                >
                  {item.label}
                  {item.children && (
                    <span className="text-xs transition group-hover:rotate-180">
                      ▾
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
                      <div className="mb-2 rounded-[1.3rem] bg-[#f6c21a]/15 px-4 py-3">
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b28a00]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-black/60">
                          Alle Leistungen im Überblick
                        </p>
                      </div>

                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black text-black transition hover:bg-[#f6c21a] hover:text-black"
                          >
                            <span>{child.label}</span>
                            <span className="transition group-hover/item:translate-x-1">
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

          <div className="flex items-center gap-3">
            <TrackedLink
              href={phoneHref}
              tracking="phone"
              trackingLocation="Header"
              aria-label="Umzüge LAF anrufen"
              title="Umzüge LAF anrufen"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a] md:inline-flex"
            >
              <PhoneIcon />
            </TrackedLink>

            <Link
              href="/kontakt"
              className="rounded-full bg-[#f6c21a] px-5 py-2.5 text-sm font-black text-black shadow-[0_0_30px_rgba(246,194,26,0.35)] transition hover:scale-105 hover:bg-black hover:text-white sm:inline-flex"
            >
              Anfrage
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-black backdrop-blur-xl transition hover:border-[#f6c21a] hover:bg-[#f6c21a] lg:hidden"
              aria-label="Menü öffnen"
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current" />
                <span className="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current" />
                <span className="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl lg:hidden">
          <div className="absolute inset-x-4 top-4 max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white p-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative h-14 w-36">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-2xl font-light text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]"
                aria-label="Menü schließen"
              >
                ×
              </button>
            </div>

            <nav className="grid gap-3 p-5">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.025]"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between px-5 py-4 transition hover:bg-[#f6c21a]/15"
                  >
                    <span className="text-lg font-black text-black group-hover:text-[#b28a00]">
                      {item.label}
                    </span>

                    <span className="text-xs font-black text-black/25 group-hover:text-[#b28a00]">
                      0{index + 1}
                    </span>
                  </Link>

                  {item.children && (
                    <div className="grid gap-1 border-t border-black/10 bg-white px-3 py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-black/70 transition hover:bg-[#f6c21a] hover:text-black"
                        >
                          <span>{child.label}</span>
                          <span>→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="grid grid-cols-[auto_1fr] gap-3 border-t border-black/10 p-5">
              <TrackedLink
                href={phoneHref}
                tracking="phone"
                trackingLocation="Mobile Menü"
                onClick={() => setOpen(false)}
                aria-label="Umzüge LAF anrufen"
                title="Umzüge LAF anrufen"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6c21a] text-black shadow-[0_0_30px_rgba(246,194,26,0.35)] transition hover:bg-black hover:text-white"
              >
                <PhoneIcon />
              </TrackedLink>

              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/15 px-6 py-4 text-center font-black text-black transition hover:border-[#f6c21a] hover:bg-[#f6c21a]"
              >
                Angebot anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
