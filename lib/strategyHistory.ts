import { ethers } from "ethers";

const RPC = process.env.NEXT_PUBLIC_BASE_RPC!;
const TELEMETRY_ADDRESS = process.env.NEXT_PUBLIC_TELEMETRY_ADDRESS || "";

// ABI مرن (لو تطابق عندك بيركب مباشرة).
// إذا ما عندك نفس الأحداث، الصفحة ما تنكسر وبتروح fallback.
const ABI = [
  // Example: published signals (adjust later إذا تبغى)
  "event SignalPublished(uint256 indexed epoch, bytes32 indexed strategyId, uint256 score, uint256 confidence, uint256 allocationBps, uint256 flags)",
  // Example: rebalance marker
  "event Rebalanced(uint256 indexed epoch)",
];

export type HistoryRow = {
  epoch: number;
  score: number; // 0..1
  confidence: number; // 0..1
  allocation: number; // %
  compression: boolean;
};

export async function getStrategyHistory(strategyId: string): Promise<HistoryRow[] | null> {
  try {
    if (!RPC || !TELEMETRY_ADDRESS) return null;

    const provider = new ethers.JsonRpcProvider(RPC);
    const c = new ethers.Contract(TELEMETRY_ADDRESS, ABI, provider);

    // نحول الاستراتيجية إلى bytes32 (لو عقدك يستخدم string بدل bytes32 لاحقًا نعدله)
    const idBytes32 = ethers.id(strategyId);

    // آخر ~50k بلوك (خفيف ومناسب كبداية)
    const latest = await provider.getBlockNumber();
    const fromBlock = Math.max(0, latest - 50_000);

    const logs = await c.queryFilter(
      c.filters.SignalPublished(null, idBytes32),
      fromBlock,
      latest
    );

    if (!logs || logs.length === 0) return [];

    // Map logs
    const rows: HistoryRow[] = logs
      .slice(-12) // آخر 12 فقط
      .map((l: any) => {
        const epoch = Number(l.args?.epoch ?? 0);

        // افتراض: score/confidence مخزنة بـ 1e18
        const scoreRaw = l.args?.score ?? 0n;
        const confRaw = l.args?.confidence ?? 0n;

        const score = toUnit(scoreRaw);
        const confidence = toUnit(confRaw);

        // allocationBps = basis points (مثلاً 2500 = 25%)
        const allocBps = Number(l.args?.allocationBps ?? 0);
        const allocation = Math.round(allocBps / 100);

        const flags = Number(l.args?.flags ?? 0);
        // flags bit0 = compression (افتراض)
        const compression = (flags & 1) === 1;

        return { epoch, score, confidence, allocation, compression };
      })
      .sort((a, b) => a.epoch - b.epoch);

    return rows;
  } catch {
    return null;
  }
}

function toUnit(x: bigint) {
  // 1e18 scaling
  const n = Number(x) / 1e18;
  return clamp01(n);
}

function clamp01(x: number) {
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(1, x));
}