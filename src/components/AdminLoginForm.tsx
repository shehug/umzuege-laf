import React, { useState } from "react";

export default function AdminLoginForm() {
  const [username, setUsername] = useState("Administrator");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Login fehlgeschlagen.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div>
        <label className="mb-2 block text-sm font-bold">Benutzername</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:ring-4 focus:ring-[#f6c21a]/20"
          autoComplete="username"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold">Kennwort</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-black outline-none focus:border-[#f6c21a] focus:ring-4 focus:ring-[#f6c21a]/20"
          autoComplete="current-password"
        />
      </div>

      {message && (
        <div className="rounded-2xl bg-red-100 p-4 text-sm font-bold text-red-800">
          {message}
        </div>
      )}

      <button
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-[#f6c21a] px-6 py-4 font-black text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wird geprüft..." : "Einloggen"}
      </button>
    </form>
  );
}
