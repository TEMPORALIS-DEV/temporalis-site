"use client";

import TitaniumButton from "../../ui/TitaniumButton";
import { useEpoch } from "../../layout/EpochProvider";

export default function Hero() {
  const { s } = useEpoch();

  const live = !!s?.ok;
  const status = live ? "Live" : "Offline";

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* glow فقط بدون ساتر أسود قوي */}
      <div className="titanium-glow absolute" />

      <h1 className="relative z-10 text-6xl md:text-7xl font-light tracking-[0.25em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]">
        TEMPORALIS
      </h1>

      <p className="relative z-10 mt-6 text-base text-white/85 max-w-md">
        Temporal Capital Intelligence Infrastructure
      </p>

      <div className="relative z-10 mt-14 space-y-2 text-sm text-white/85">
        <div>
          Current Epoch:
          <span className="text-white ml-2">
            {live ? s?.epochIndex ?? "—" : "—"}
          </span>
        </div>

        <div>
          Status:
          <span
            className={`ml-2 ${
              live ? "text-[var(--sovereign-gold)]" : "text-white/60"
            }`}
          >
            {status}
          </span>
        </div>

        <div>
          Time Remaining:
          <span className="text-white ml-2">{formatTime(s?.timeLeft)}</span>
        </div>
      </div>

      <div className="relative z-10 mt-16">
        <TitaniumButton>Enter Protocol</TitaniumButton>
      </div>
    </section>
  );
}

function formatTime(sec?: number) {
  if (!sec || sec <= 0) return "—";

  const total = Math.floor(sec);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);

  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}