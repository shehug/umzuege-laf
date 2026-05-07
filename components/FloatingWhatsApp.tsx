"use client";

import TrackedLink from "@/components/TrackedLink";

export default function FloatingWhatsApp() {
  const whatsappNumber = "491629007565";

  return (
    <TrackedLink
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hallo Umzüge LAF, ich möchte gerne eine Anfrage stellen."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      tracking="whatsapp"
      trackingLocation="WhatsApp Floating Button"
      aria-label="WhatsApp Kontakt"
      className="fixed bottom-6 right-6 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_35px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 hover:scale-110 active:scale-95"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.87 3 3.05 8.82 3.05 15.99c0 2.29.6 4.52 1.74 6.49L3 29l6.69-1.75a12.9 12.9 0 0 0 6.35 1.62h.01c7.16 0 12.99-5.82 12.99-12.99C29.04 8.82 23.21 3 16.04 3Zm0 23.67h-.01a10.75 10.75 0 0 1-5.48-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.72c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.54 1.11 7.56 3.13a10.63 10.63 0 0 1 3.14 7.56c0 5.9-4.8 10.69-10.71 10.69Zm5.88-8.01c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>

      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-5 w-5 rounded-full bg-white" />
      </span>
    </TrackedLink>
  );
}
