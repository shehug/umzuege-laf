"use client";

import Link from "next/link";
import TrackedLink from "./TrackedLink";

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-2.5 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <div className="mx-auto grid grid-cols-2 gap-2 max-w-md">
        <TrackedLink
          href={phoneHref}
          tracking="phone"
          trackingLocation="StickyMobileBar"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] py-3 text-center text-sm font-extrabold text-[#0f172a] shadow-sm transition active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Anrufen</span>
        </TrackedLink>

        <Link
          href="/kontakt"
          className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-slate-900 bg-slate-900 py-3 text-center text-sm font-extrabold text-white shadow-sm transition active:scale-95 hover:bg-slate-800"
        >
          <span>Angebot</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
