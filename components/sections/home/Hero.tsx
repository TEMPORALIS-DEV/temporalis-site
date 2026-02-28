"use client";

import TitaniumButton from "../../ui/TitaniumButton";
import { useEpoch } from "../../layout/EpochProvider";

export default function Hero() {
  const { s } = useEpoch();

  const live = s.ok;
  const status = live ? "Live" : "Offline";

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center px-6">

      {/* Subtle Breathing Glow */}
      <div className="titanium-glow absolute" />

      {/* Title */}
      <h1 className="relative z-10 text-5xl md:text-6xl tracking-[0.18em] text-[var(--titanium)]">
        TEMPORALIS
      </h1>

      {/* Tagline */}
      <p className="relative z-10 mt-6 text-sm text-[var(--text-muted)] max-w-md">
        Temporal Capital Intelligence Infrastructure
      </p>

      {/* Epoch Display */}
      <div className="relative z-10 mt-14 space-y-2 text-sm text-[var(--text-muted)]">

        <div>
          Current Epoch:{" "}
          <span className="text-[var(--text-primary)]">
            {live ? s.epochIndex ?? "—" : "—"}
          </span>
        </div>

        <div>
          Status:{" "}
          <span className={live ? "text-[var(--sovereign-gold)]" : "text-[var(--text-muted)]"}>
            {status}
          </span>
        </div>

        <div>
          Time Remaining:{" "}
          <span className="text-[var(--text-primary)]">
            {formatTime(s.timeLeft)}
          </span>
        </div>

      </div>

      {/* Action */}
      <div className="relative z-10 mt-16">
        <TitaniumButton>
          Enter Protocol
        </TitaniumButton>
      </div>

    </section>
  );
}

function formatTime(sec?: number) {
  if (!sec || sec <= 0) return "—";
  const s = Math.floor(sec);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}