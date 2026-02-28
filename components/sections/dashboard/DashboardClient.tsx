"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Panel from "../../ui/Panel";

type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
};

type StrategyRow = {
  id: number;
  key: string;
  name: string;
  ok: boolean;
  epochId: number;
  score: number; // -1..1
  confidence: number; // 0..1
  allocation: number; // 0..100 (derived for now)
  status: string;
  compression: boolean;
  shouldPause?: boolean;
  shouldRetire?: boolean;
  smiStreak?: number;
  drawdownBps?: number;
  execSuccessBps?: number;
  violatedRisk?: boolean;
  updatedAt?: number;
};

type HistoryRow = {
  epochId: number;
  score: number;
  shouldPause: boolean;
  shouldRetire: boolean;
  smiStreak: number;
  drawdownBps: number;
  execSuccessBps: number;
  violatedRisk: boolean;
  tx: string;
  blockNumber: number;
};

export default function DashboardClient({ epoch }: { epoch: EpochView }) {
  const [live, setLive] = useState(epoch);
  const [rows, setRows] = useState<StrategyRow[]>([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"All" | "Compression" | "Strong">("All");

  const [openId, setOpenId] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryRow[] | null>(null);
  const [historyLoading, setHistoryLoading] = useState(false);

  // Poll epoch
  useEffect(() => {
    let alive = true;

    async function refreshEpoch() {
      try {
        const r = await fetch("/api/epoch", { cache: "no-store" });
        const j = await r.json();
        if (!alive) return;
        setLive({ ok: !!j.ok, epochIndex: j.epochIndex, epochEnd: j.epochEnd, timeLeft: j.timeLeft });
      } catch {
        if (!alive) return;
        setLive((p) => ({ ...p, ok: false }));
      }
    }

    refreshEpoch();
    const t = setInterval(refreshEpoch, 15_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  // Poll strategy snapshot
  useEffect(() => {
    let alive = true;

    async function refreshStrategies() {
      try {
        const r = await fetch("/api/strategies", { cache: "no-store" });
        const j = await r.json();
        if (!alive) return;
        setRows(Array.isArray(j.rows) ? j.rows : []);
      } catch {
        if (!alive) return;
        setRows([]);
      }
    }

    refreshStrategies();
    const t = setInterval(refreshStrategies, 15_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const shown = useMemo(() => {
    const query = q.trim().toLowerCase();

    let r = rows;
    if (query) {
      r = r.filter((x) => x.name.toLowerCase().includes(query) || x.key.toLowerCase().includes(query));
    }
    if (filter === "Compression") r = r.filter((x) => x.compression);
    if (filter === "Strong") r = r.filter((x) => x.status === "Strong");
    return r.slice().sort((a, b) => b.score - a.score);
  }, [rows, q, filter]);

  const compressionIndex = useMemo(() => {
    // weighted by derived allocation; if allocation totals 0, use equal weights
    const totalAlloc = rows.reduce((a, r) => a + (r.allocation || 0), 0);
    if (rows.length === 0) return 0;

    const weight = (r: StrategyRow) => (totalAlloc > 0 ? (r.allocation || 0) / totalAlloc : 1 / rows.length);
    const idx = rows.reduce((a, r) => a + (r.compression ? weight(r) : 0), 0);
    return Math.round(idx * 100);
  }, [rows]);

  async function openDrilldown(id: number) {
    setOpenId(id);
    setHistory(null);
    setHistoryLoading(true);
    try {
      const r = await fetch(`/api/strategy/${id}/history`, { cache: "no-store" });
      const j = await r.json();
      setHistory(j.ok ? j.rows : []);
    } catch {
      setHistory([]);
    } finally {
      setHistoryLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Top header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Capital Governance Console
          </div>
          <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Protocol Terminal
          </h1>
          <p className="mt-2 text-sm opacity-70">
            Deterministic allocation enforced at epoch boundary.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <Kpi
            label="Feed"
            value={live.ok ? "Live" : "Offline"}
            sub={live.ok ? "On-chain read-only" : "Data source unavailable"}
            tone={live.ok ? "ok" : "dim"}
          />
          <Kpi
            label="Active Epoch"
            value={live.ok ? String(live.epochIndex ?? "—") : "—"}
            sub={`Time left: ${formatTime(live.timeLeft)}`}
            tone="neutral"
          />
          <Kpi
            label="Compression Index"
            value={`${compressionIndex}%`}
            sub={compressionIndex >= 35 ? "Risk compression active" : "Normal operating band"}
            tone={compressionIndex >= 35 ? "warn" : "neutral"}
          />
        </div>
      </div>

      {/* Terminal Shell */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left rail */}
        <Panel className="lg:col-span-3 p-5 sticky top-24 h-fit">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Modules
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <RailLink label="Signal Matrix" active />
            <RailLink label="Risk Compression" />
            <RailLink label="Epoch Timeline" />
            <RailLink label="Execution Integrity" />
            <RailLink label="Governance Constraints" />
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">Shortcuts</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill href="/architecture" label="Architecture" />
              <Pill href="/technology" label="Technology" />
              <Pill href="/docs" label="Docs" />
            </div>
          </div>
        </Panel>

        {/* Main table */}
        <Panel className="lg:col-span-6 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-medium tracking-tight">Strategy Signals</div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search strategy…"
                className="w-full md:w-56 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm outline-none placeholder:text-white/35"
              />

              <div className="flex gap-2">
                <Btn active={filter === "All"} onClick={() => setFilter("All")}>All</Btn>
                <Btn active={filter === "Strong"} onClick={() => setFilter("Strong")}>Strong</Btn>
                <Btn active={filter === "Compression"} onClick={() => setFilter("Compression")}>Compression</Btn>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-6 gap-2 text-xs uppercase opacity-50 pb-3 border-b border-white/10">
            <div className="col-span-2">Strategy</div>
            <div>Score</div>
            <div>Confidence</div>
            <div>Alloc %</div>
            <div>Status</div>
          </div>

          {shown.map((s) => (
            <button
              key={s.id}
              onClick={() => openDrilldown(s.id)}
              className="w-full text-left grid grid-cols-6 gap-2 py-4 text-sm border-b border-white/5 last:border-0 hover:bg-white/[0.02] rounded-lg px-2 -mx-2 transition"
            >
              <div className="col-span-2">
                <div className="opacity-90">{s.name}</div>
                <div className="mt-1 text-xs opacity-50">{s.key} · id {s.id}</div>
              </div>
              <div className="tabular-nums">{fmt2(s.score)}</div>
              <div className="tabular-nums">{fmt2(s.confidence)}</div>
              <div className="tabular-nums">{s.allocation ?? 0}%</div>
              <div className="flex items-center gap-2">
                <StatusBadge status={s.status} compression={s.compression} />
                {!s.ok && <span className="text-xs opacity-40">no data</span>}
              </div>
            </button>
          ))}

          {shown.length === 0 && (
            <div className="py-10 text-sm opacity-60">
              No strategies match the current filter.
            </div>
          )}
        </Panel>

        {/* Right rail */}
        <div className="lg:col-span-3 space-y-6">
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Protocol Snapshot
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <SnapRow k="Mode" v={compressionIndex >= 35 ? "Compression" : "Deterministic"} />
              <SnapRow k="Epoch" v={live.ok ? String(live.epochIndex ?? "—") : "—"} />
              <SnapRow k="Time left" v={formatTime(live.timeLeft)} />
              <SnapRow k="Feed" v={live.ok ? "Live (RPC)" : "Offline"} />
            </div>
          </Panel>

          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Risk Signals
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <SnapRow k="Compression Index" v={`${compressionIndex}%`} />
              <SnapRow k="Compression Count" v={String(rows.filter((r) => r.compression).length)} />
              <SnapRow k="Retire Flags" v={String(rows.filter((r) => r.shouldRetire).length)} />
              <SnapRow k="Pause Flags" v={String(rows.filter((r) => r.shouldPause).length)} />
            </div>
          </Panel>
        </div>
      </div>

      {/* Drilldown modal */}
      {openId !== null && (
        <Modal onClose={() => setOpenId(null)} title={`Strategy Drilldown · id ${openId}`}>
          {historyLoading && <div className="text-sm opacity-70">Loading on-chain history…</div>}

          {!historyLoading && history && history.length === 0 && (
            <div className="text-sm opacity-70">
              No events found. (يعني يا العقد ما فيه StrategyScored events، أو window صغير، أو ما في calls مسجّلة)
            </div>
          )}

          {!historyLoading && history && history.length > 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-6 text-xs uppercase opacity-50 pb-2 border-b border-white/10">
                <div>Epoch</div>
                <div>Score</div>
                <div>Exec</div>
                <div>DD</div>
                <div>Flags</div>
                <div>Tx</div>
              </div>

              {history.slice().reverse().slice(0, 20).map((h, i) => (
                <div key={i} className="grid grid-cols-6 text-sm py-2 border-b border-white/5 last:border-0">
                  <div className="tabular-nums opacity-85">{h.epochId}</div>
                  <div className="tabular-nums">{fmt2(h.score)}</div>
                  <div className="tabular-nums">{(h.execSuccessBps / 100).toFixed(2)}%</div>
                  <div className="tabular-nums">{(h.drawdownBps / 100).toFixed(2)}%</div>
                  <div className="text-xs opacity-75">
                    {h.violatedRisk ? "RISK " : ""}
                    {h.shouldRetire ? "RETIRE " : ""}
                    {h.shouldPause ? "PAUSE " : ""}
                  </div>
                  <div className="text-xs opacity-60 truncate">
                    {h.tx.slice(0, 10)}…{h.tx.slice(-6)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

/* ---------- UI bits ---------- */

function Kpi({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "neutral" | "warn" | "ok" | "dim";
}) {
  const cls =
    tone === "warn"
      ? "border-yellow-500/20 bg-yellow-500/10"
      : tone === "ok"
      ? "border-emerald-500/20 bg-emerald-500/10"
      : tone === "dim"
      ? "border-white/10 bg-white/[0.02]"
      : "border-white/10 bg-white/[0.03]";

  return (
    <div className={`rounded-2xl border ${cls} p-4`}>
      <div className="text-xs uppercase tracking-[0.18em] opacity-60">{label}</div>
      <div className="mt-2 text-lg font-medium tracking-tight tabular-nums">{value}</div>
      <div className="mt-2 text-xs opacity-60">{sub}</div>
    </div>
  );
}

function StatusBadge({ status, compression }: { status: string; compression: boolean }) {
  const color =
    compression ? "bg-red-500/20 text-red-300" :
    status === "Strong" ? "bg-emerald-500/20 text-emerald-300" :
    "bg-white/10 text-white/70";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {compression ? "Compression" : status}
    </span>
  );
}

function RailLink({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={[
        "rounded-xl border px-4 py-2 text-sm",
        active
          ? "border-white/15 bg-white/[0.05] opacity-95"
          : "border-white/10 bg-white/[0.02] opacity-70",
      ].join(" ")}
    >
      {label}
    </div>
  );
}

function Pill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs opacity-80 hover:opacity-100"
    >
      {label}
    </Link>
  );
}

function Btn({ active, onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-xs transition",
        active
          ? "border-white/15 bg-white/[0.05] opacity-95"
          : "border-white/10 bg-white/[0.02] opacity-70 hover:opacity-95",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SnapRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="opacity-60">{k}</div>
      <div className="tabular-nums opacity-85">{v}</div>
    </div>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-black p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-medium tracking-tight opacity-90">{title}</div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs opacity-80 hover:opacity-100"
          >
            Close
          </button>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

/* ---------- utils ---------- */

function fmt2(x: number) {
  if (!Number.isFinite(x)) return "—";
  return x.toFixed(2);
}

function formatTime(sec?: number) {
  if (sec === undefined || sec === null) return "—";
  const s = Math.max(0, Math.floor(sec));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}