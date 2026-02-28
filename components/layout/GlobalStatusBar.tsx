"use client";

import { useEffect, useRef, useState } from "react";

type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
};

export default function GlobalStatusBar() {
  const [s, setS] = useState<EpochView>({ ok: false });
  const lastOkAt = useRef<number>(0);

  useEffect(() => {
    let alive = true;

    async function load() {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000); // لا تخليه يطوّل
      try {
        const r = await fetch("/api/epoch", {
          cache: "no-store",
          signal: controller.signal,
        });
        const j = (await r.json()) as any;
        if (!alive) return;

        const ok = !!j.ok;
        if (ok) lastOkAt.current = Date.now();

        // لو فشل الطلب الحالي لكن عندنا آخر نجاح قريب، خله Live
        const recentlyOk = Date.now() - lastOkAt.current < 60_000;

        setS({
          ok: ok || recentlyOk,
          epochIndex: j.epochIndex ?? s.epochIndex,
          epochEnd: j.epochEnd ?? s.epochEnd,
          timeLeft: j.timeLeft ?? s.timeLeft,
        });
      } catch {
        if (!alive) return;
        const recentlyOk = Date.now() - lastOkAt.current < 60_000;
        setS((prev) => ({ ...prev, ok: recentlyOk }));
      } finally {
        clearTimeout(timeout);
      }
    }

    load();
    const t = setInterval(load, 15_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center gap-2 opacity-80">
          <span className={`h-1.5 w-1.5 rounded-full ${s.ok ? "bg-white/70" : "bg-white/20"}`} />
          <span>{s.ok ? "Live protocol feed" : "Offline mode"}</span>
        </div>

        <div className="flex items-center gap-4 opacity-75 tabular-nums">
          <span>Epoch: {s.epochIndex ?? "—"}</span>
          <span>Time left: {formatTime(s.timeLeft)}</span>
        </div>
      </div>
    </div>
  );
}

function formatTime(sec?: number) {
  if (sec == null) return "—";
  const s = Math.max(0, Math.floor(sec));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}