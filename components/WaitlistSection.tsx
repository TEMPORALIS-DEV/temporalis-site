"use client";

import React, { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // MVP: no backend yet — just a confirmation.
    // Later: connect to Supabase / Google Sheet / Mailchimp.
    setDone(true);
  }

  return (
    <section id="waitlist" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Join Early Access
          </h2>
          <p className="mt-2 max-w-2xl text-sm opacity-80">
            Get access to PoS² strategy ratings, early protocol updates, and the
            first public beta.
          </p>

          {done ? (
            <div className="mt-6 rounded-xl border p-4 text-sm">
              ✅ You’re on the list. We’ll notify you when Velora opens the beta.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-6 flex flex-col gap-3 md:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
              />

              <button
                type="submit"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:opacity-80 md:w-auto"
              >
                Request Access
              </button>
            </form>
          )}

          <p className="mt-3 text-xs opacity-60">
            No spam. One email when we launch beta.
          </p>
        </div>
      </div>
    </section>
  );
}