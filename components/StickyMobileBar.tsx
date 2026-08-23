"use client";

import Link from "next/link";
import TrackedLink from "./TrackedLink";

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";
const whatsappHref = "https://wa.me/491629007565?text=Hallo%20Umz%C3%BCge%20LAF%2C%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Angebot%20anfragen.";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-2 py-2.5 backdrop-blur-md shadow-[0_-4px_25px_rgba(0,0,0,0.12)] md:hidden">
      <div className="mx-auto grid grid-cols-3 gap-1.5 max-w-lg">
        {/* 1. Anrufen */}
        <TrackedLink
          href={phoneHref}
          tracking="phone"
          trackingLocation="StickyMobileBar_Call"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 rounded-xl bg-[#f59e0b] py-2.5 px-2 text-center text-xs font-black text-[#0f172a] shadow-sm transition active:scale-95 hover:bg-amber-400"
        >
          <svg
            className="h-4 w-4 shrink-0"
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
          <span className="truncate">Anrufen</span>
        </TrackedLink>

        {/* 2. WhatsApp */}
        <TrackedLink
          href={whatsappHref}
          tracking="whatsapp"
          trackingLocation="StickyMobileBar_WhatsApp"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 rounded-xl bg-[#25D366] py-2.5 px-2 text-center text-xs font-black text-white shadow-sm transition active:scale-95 hover:bg-green-600"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-4 w-4 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16.04 3C8.87 3 3.05 8.82 3.05 15.99c0 2.29.6 4.52 1.74 6.49L3 29l6.69-1.75a12.9 12.9 0 0 0 6.35 1.62h.01c7.16 0 12.99-5.82 12.99-12.99C29.04 8.82 23.21 3 16.04 3Zm0 23.67h-.01a10.75 10.75 0 0 1-5.48-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.72c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.54 1.11 7.56 3.13a10.63 10.63 0 0 1 3.14 7.56c0 5.9-4.8 10.69-10.71 10.69Zm5.88-8.01c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
          </svg>
          <span className="truncate">WhatsApp</span>
        </TrackedLink>

        {/* 3. Angebot */}
        <Link
          href="/kontakt#anfrageformular"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 rounded-xl bg-slate-900 py-2.5 px-2 text-center text-xs font-black text-white shadow-sm transition active:scale-95 hover:bg-slate-800"
        >
          <span className="truncate">Angebot</span>
          <span className="text-amber-400">→</span>
        </Link>
      </div>
    </div>
  );
}
