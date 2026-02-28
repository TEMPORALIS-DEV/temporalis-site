"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
};

type Ctx = {
  s: EpochView;
};

const EpochContext = createContext<Ctx | null>(null);

export function EpochProvider({ children }: { children: React.ReactNode }) {
  const [s, setS] = useState<EpochView>({ ok: false });
  const lastGood = useRef<EpochView | null>(null);

  async function load() {
    try {
      const r = await fetch("/api/epoch", { cache: "no-store" });
      const j = await r.json();

      if (j?.ok) {
        const next = { ...j };
        lastGood.current = next;
        setS(next);
      } else if (lastGood.current) {
        setS(lastGood.current);
      } else {
        setS({ ok: false });
      }
    } catch {
      if (lastGood.current) setS(lastGood.current);
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 15000);
    return () => clearInterval(t);
  }, []);

  const value = useMemo(() => ({ s }), [s]);

  return <EpochContext.Provider value={value}>{children}</EpochContext.Provider>;
}

export function useEpoch() {
  const ctx = useContext(EpochContext);
  if (!ctx) throw new Error("useEpoch must be used inside EpochProvider");
  return ctx;
}