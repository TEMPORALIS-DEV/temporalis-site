"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
};

type Ctx = {
  s: EpochView;
  refresh: () => Promise<void>;
};

const EpochContext = createContext<Ctx | null>(null);

export function EpochProvider({ children }: { children: React.ReactNode }) {
  const [s, setS] = useState<EpochView>({ ok: false });

  async function refresh() {
    try {
      const r = await fetch("/api/epoch", { cache: "no-store" });
      const j = await r.json();
      setS({
        ok: !!j.ok,
        epochIndex: j.epochIndex,
        epochEnd: j.epochEnd,
        timeLeft: j.timeLeft,
        error: j.error,
      });
    } catch (e: any) {
      setS({ ok: false, error: e?.message ?? "offline" });
    }
  }

  useEffect(() => {
    let alive = true;

    const run = async () => {
      await refresh();
      if (!alive) return;
    };

    run();
    const t = setInterval(() => {
      if (!alive) return;
      refresh();
    }, 15_000);

    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const value = useMemo(() => ({ s, refresh }), [s]);

  return <EpochContext.Provider value={value}>{children}</EpochContext.Provider>;
}

export function useEpoch() {
  const ctx = useContext(EpochContext);
  if (!ctx) throw new Error("useEpoch must be used inside EpochProvider");
  return ctx;
}