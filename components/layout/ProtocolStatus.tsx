"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type EpochView = {
  ok: boolean;
  stale?: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
  source?: string;
};

type Ctx = {
  state: EpochView;
};

const ProtocolFeedContext = createContext<Ctx | null>(null);

async function fetchWithTimeout(url: string, ms: number) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);
  try {
    const r = await fetch(url, { cache: "no-store", signal: ac.signal });
    return await r.json();
  } finally {
    clearTimeout(t);
  }
}

export function ProtocolFeedProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<EpochView>({ ok: false });
  const failCount = useRef(0);
  const lastGood = useRef<EpochView | null>(null);

  useEffect(() => {
    let alive = true;

    async function tick() {
      try {
        const j = (await fetchWithTimeout("/api/epoch", 4500)) as any;

        if (!alive) return;

        if (j?.ok) {
          failCount.current = 0;
          const next: EpochView = {
            ok: true,
            stale: !!j.stale,
            epochIndex: j.epochIndex,
            epochEnd: j.epochEnd,
            timeLeft: j.timeLeft,
            source: j.source,
          };
          lastGood.current = next;
          setState(next);
          return;
        }

        // ok:false
        failCount.current += 1;

        // لو عندنا آخر نتيجة جيدة: نخليها “stale” بدل offline مباشر
        if (lastGood.current) {
          setState({ ...lastGood.current, ok: true, stale: true, error: j?.error ?? "offline" });
          return;
        }

        // ما عندنا أي good سابق → offline بعد كم محاولة
        setState({ ok: failCount.current < 3 ? false : false, error: j?.error ?? "offline" });
      } catch (e: any) {
        if (!alive) return;

        failCount.current += 1;

        if (lastGood.current) {
          setState({ ...lastGood.current, ok: true, stale: true, error: "RPC_TIMEOUT" });
          return;
        }

        // offline فقط إذا تكرر
        setState({ ok: false, error: failCount.current >= 3 ? "RPC_TIMEOUT" : "…" });
      }
    }

    tick();
    const t = setInterval(tick, 15_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const value = useMemo(() => ({ state }), [state]);

  return <ProtocolFeedContext.Provider value={value}>{children}</ProtocolFeedContext.Provider>;
}

export function useProtocolFeed() {
  const ctx = useContext(ProtocolFeedContext);
  if (!ctx) throw new Error("useProtocolFeed must be used inside ProtocolFeedProvider");
  return ctx.state;
}