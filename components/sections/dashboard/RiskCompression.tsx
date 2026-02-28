import Panel from "../../ui/Panel";

type Strat = {
  id: string;
  name: string;
  score: number;
  confidence: number;
  allocation: number;
  status: string;
};

export default function RiskCompression({ strategies }: { strategies: Strat[] }) {
  // ضغط المخاطر = كل ما زادت الحالات (Compression/Moderate) وكل ما قلت confidence
  const total = strategies.length || 1;

  const compressionCount = strategies.filter((s) => s.status === "Compression").length;
  const moderateCount = strategies.filter((s) => s.status === "Moderate").length;

  const avgConfidence =
    strategies.reduce((a, s) => a + clamp01(s.confidence), 0) / total;

  // مؤشر بسيط قوي بصريًا:
  // - Compression له وزن أعلى
  // - Moderate وزن متوسط
  // - نقص الثقة يرفع المؤشر
  const idx =
    clamp01(compressionCount / total) * 0.65 +
    clamp01(moderateCount / total) * 0.25 +
    (1 - clamp01(avgConfidence)) * 0.25;

  const indexPct = Math.round(clamp01(idx) * 100);

  // تصنيف نبرة مؤسسية
  const label =
    indexPct >= 70 ? "High" : indexPct >= 40 ? "Elevated" : "Normal";

  const tone =
    label === "High"
      ? "bg-red-500/15 text-red-300 border-red-500/20"
      : label === "Elevated"
      ? "bg-yellow-500/15 text-yellow-300 border-yellow-500/20"
      : "bg-white/[0.04] text-white/70 border-white/10";

  return (
    <Panel className="p-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-sm font-medium tracking-tight">
            Risk Compression Index
          </div>
          <div className="mt-1 text-xs opacity-55">
            Aggregate indicator derived from strategy statuses and confidence.
          </div>
        </div>

        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${tone}`}>
          {label}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs opacity-70">
          <span>Index</span>
          <span className="tabular-nums">{indexPct}%</span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-white/35" style={{ width: `${indexPct}%` }} />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Metric label="Compression" value={String(compressionCount)} />
          <Metric label="Moderate" value={String(moderateCount)} />
          <Metric label="Avg. Confidence" value={`${Math.round(avgConfidence * 100)}%`} />
        </div>
      </div>
    </Panel>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-xs uppercase tracking-[0.18em] opacity-60">{label}</div>
      <div className="mt-2 text-lg font-medium tracking-tight tabular-nums">
        {value}
      </div>
    </div>
  );
}

function clamp01(x: number) {
  if (Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(1, x));
}