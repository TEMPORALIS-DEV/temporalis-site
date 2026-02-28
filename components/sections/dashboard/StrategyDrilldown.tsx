import Link from "next/link";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";
import { getStrategyHistory, type HistoryRow } from "../../../lib/strategyHistory";

type StrategyKey = "liquidity" | "arbitrage" | "oracle" | "market-neutral";

const registry: Record<
  StrategyKey,
  {
    title: string;
    description: string;
    status: "Strong" | "Stable" | "Moderate" | "Compression";
    riskNote: string;
  }
> = {
  liquidity: {
    title: "Liquidity Provision",
    description:
      "Inventory-managed liquidity exposure with epoch-based evaluation and bounded drawdown policy.",
    status: "Stable",
    riskNote: "Exposure capped under regime drift. Compression enabled.",
  },
  arbitrage: {
    title: "Arbitrage Engine",
    description:
      "Execution-driven spread capture with confidence gating and deterministic throttling.",
    status: "Moderate",
    riskNote: "Execution risk monitored. Confidence gating reduces overreach.",
  },
  oracle: {
    title: "Oracle Strategy",
    description:
      "Signal routing via oracle reliability score, with enforced failover constraints.",
    status: "Compression",
    riskNote: "Compression active due to weakened reliability regime.",
  },
  "market-neutral": {
    title: "Market Neutral",
    description:
      "Low-beta exposure targeting stability across epochs with strict invariant enforcement.",
    status: "Strong",
    riskNote: "High confidence regime. Allocation may expand within caps.",
  },
};

const mockEpochs: HistoryRow[] = [
  { epoch: 12, score: 0.71, confidence: 0.66, allocation: 22, compression: false },
  { epoch: 13, score: 0.76, confidence: 0.70, allocation: 25, compression: false },
  { epoch: 14, score: 0.69, confidence: 0.58, allocation: 19, compression: true },
  { epoch: 15, score: 0.62, confidence: 0.52, allocation: 16, compression: true },
  { epoch: 16, score: 0.74, confidence: 0.64, allocation: 21, compression: false },
  { epoch: 17, score: 0.79, confidence: 0.72, allocation: 24, compression: false },
];

export default async function StrategyDrilldown({ id }: { id: string }) {
  const key = normalize(id);
  const meta = key ? registry[key] : null;

  // on-chain first
  const onchain = await getStrategyHistory(key ?? id);
  const rows =
    onchain === null ? mockEpochs : onchain.length === 0 ? mockEpochs : onchain;

  const dataMode = onchain === null ? "Offline (mock)" : "On-chain (logs)";

  return (
    <Section className="pt-10 md:pt-14">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Strategy Drilldown
            </div>

            <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {meta?.title ?? "Unknown Strategy"}
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed opacity-70">
              {meta?.description ??
                "This strategy identifier is not registered. Use: liquidity, arbitrage, oracle, market-neutral."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/app"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs opacity-85 hover:opacity-100"
              >
                Back to Console
              </Link>

              <span className="rounded-full border border-white/12 bg-white/[0.02] px-4 py-2 text-xs opacity-70">
                Deterministic: Epoch-bounded
              </span>

              <span className="rounded-full border border-white/12 bg-white/[0.02] px-4 py-2 text-xs opacity-70">
                Data: {dataMode}
              </span>
            </div>
          </div>

          <Panel className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                Status
              </div>
              <StatusBadge status={meta?.status ?? "Moderate"} />
            </div>
            <div className="mt-3 text-xs opacity-65">{meta?.riskNote ?? "—"}</div>
          </Panel>
        </div>

        {/* Epoch History */}
        <Panel className="p-6">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-medium tracking-tight">Epoch History</div>
              <div className="mt-1 text-xs opacity-55">
                Score / Confidence drive bounded allocation within risk caps.
              </div>
            </div>
            <div className="text-xs opacity-55">Last {rows.length} epochs</div>
          </div>

          <div className="grid grid-cols-5 gap-2 pb-3 text-xs uppercase opacity-50 border-b border-white/10">
            <div>Epoch</div>
            <div>Score</div>
            <div>Confidence</div>
            <div>Allocation %</div>
            <div>Event</div>
          </div>

          {rows.map((e) => (
            <div
              key={`${e.epoch}-${e.allocation}-${e.score}`}
              className="grid grid-cols-5 gap-2 py-4 text-sm border-b border-white/5 last:border-b-0"
            >
              <div className="opacity-90">{e.epoch}</div>
              <div>{e.score.toFixed(2)}</div>
              <div>{e.confidence.toFixed(2)}</div>
              <div>{e.allocation}%</div>
              <div className="text-xs">
                {e.compression ? (
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-red-300">
                    Compression
                  </span>
                ) : (
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 opacity-70">
                    Normal
                  </span>
                )}
              </div>
            </div>
          ))}
        </Panel>

        {/* Signals + Allocation */}
        <div className="grid gap-6 md:grid-cols-2">
          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">Signal Evolution</div>
            <div className="mt-2 text-xs opacity-55">
              Score / Confidence normalized (0..1).
            </div>

            <div className="mt-5 space-y-3">
              {rows.map((e) => (
                <BarRow
                  key={e.epoch}
                  label={`Epoch ${e.epoch}`}
                  score={e.score}
                  confidence={e.confidence}
                />
              ))}
            </div>
          </Panel>

          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">Allocation Shifts</div>
            <div className="mt-2 text-xs opacity-55">Allocation percentage across epochs.</div>

            <div className="mt-5 space-y-3">
              {rows.map((e) => (
                <AllocRow key={e.epoch} label={`Epoch ${e.epoch}`} v={e.allocation} />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

function normalize(id: string): StrategyKey | null {
  const v = (id || "").toLowerCase().trim();
  if (v === "liquidity") return "liquidity";
  if (v === "arbitrage") return "arbitrage";
  if (v === "oracle") return "oracle";
  if (v === "market-neutral" || v === "marketneutral") return "market-neutral";
  return null;
}

function StatusBadge({ status }: { status: string }) {
  const s = status;
  const color =
    s === "Strong"
      ? "bg-green-500/20 text-green-400"
      : s === "Stable"
      ? "bg-blue-500/20 text-blue-400"
      : s === "Moderate"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-red-500/20 text-red-400";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {s}
    </span>
  );
}

function BarRow({
  label,
  score,
  confidence,
}: {
  label: string;
  score: number;
  confidence: number;
}) {
  const sv = Math.round(clamp01(score) * 100);
  const cv = Math.round(clamp01(confidence) * 100);

  return (
    <div>
      <div className="flex items-center justify-between text-xs opacity-70">
        <span>{label}</span>
        <span className="tabular-nums">
          S {sv}% · C {cv}%
        </span>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full bg-white/25" style={{ width: `${sv}%` }} />
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full bg-white/18" style={{ width: `${cv}%` }} />
      </div>
    </div>
  );
}

function AllocRow({ label, v }: { label: string; v: number }) {
  const w = Math.max(0, Math.min(100, Math.round(v)));
  return (
    <div>
      <div className="flex items-center justify-between text-xs opacity-70">
        <span>{label}</span>
        <span className="tabular-nums">{w}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full bg-white/30" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

function clamp01(x: number) {
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(1, x));
}