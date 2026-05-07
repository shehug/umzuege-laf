"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/lib/siteContent";

type Props = {
  initialContent: SiteContent;
};

export default function AdminContentEditor({ initialContent }: Props) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  function updateField(field: keyof SiteContent, value: string) {
    setContent((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSave() {
    setStatus("saving");
    setMessage("");

    const response = await fetch("/api/admin/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Speichern fehlgeschlagen.");
      return;
    }

    setStatus("success");
    setMessage("Inhalte wurden gespeichert.");
    router.refresh();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Adminbereich
          </p>
          <h1 className="mt-2 text-3xl font-black text-black">
            Website-Inhalte bearbeiten
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-full border border-black/15 px-5 py-3 text-sm font-black text-black transition hover:bg-black hover:text-white"
        >
          Logout
        </button>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Startseite Titel
            </label>
            <input
              value={content.homeHeroTitle}
              onChange={(event) =>
                updateField("homeHeroTitle", event.target.value)
              }
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Startseite Beschreibung
            </label>
            <textarea
              value={content.homeHeroText}
              onChange={(event) =>
                updateField("homeHeroText", event.target.value)
              }
              rows={5}
              className="w-full resize-none rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Button Text
            </label>
            <input
              value={content.homeCtaText}
              onChange={(event) =>
                updateField("homeCtaText", event.target.value)
              }
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black text-black">
                Telefon
              </label>
              <input
                value={content.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-black">
                E-Mail
              </label>
              <input
                value={content.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
              />
            </div>
          </div>

          {message && (
            <div
              className={`rounded-2xl p-4 text-sm font-bold ${
                status === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

          <button
            onClick={handleSave}
            disabled={status === "saving"}
            className="rounded-full bg-[#f6c21a] px-8 py-4 font-black text-black shadow-[0_18px_60px_rgba(246,194,26,0.25)] transition hover:-translate-y-1 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "saving" ? "Wird gespeichert..." : "Änderungen speichern"}
          </button>
        </div>
      </div>
    </div>
  );
}
