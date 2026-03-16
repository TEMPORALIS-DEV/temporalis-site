import { ethers } from "ethers";

const RPC = process.env.NEXT_PUBLIC_BASE_RPC!;
const TELEMETRY_ADDRESS = process.env.NEXT_PUBLIC_TELEMETRY_ADDRESS || "";

const ABI = [
  "event SignalPublished(uint256 indexed epoch, bytes32 indexed strategyId, uint256 score, uint256 confidence, uint256 allocationBps, uint256 flags)",
  "event Rebalanced(uint256 indexed epoch)",
];

export type HistoryRow = {
  epoch: number;
  score: number;
  confidence: number;
  allocation: number;
  compression: boolean;
};

export async function getStrategyHistory(strategyId: string): Promise<HistoryRow[] | null> {
  try {
    if (!RPC || !TELEMETRY_ADDRESS) return null;

    const provider = new ethers.JsonRpcProvider(RPC);
    const c = new ethers.Contract(TELEMETRY_ADDRESS, ABI, provider);

    const idBytes32 = ethers.id(strategyId);

    const latest = await provider.getBlockNumber();
    const fromBlock = Math.max(0, latest - 50_000);

    const logs = await c.queryFilter(
      c.filters.SignalPublished(null, idBytes32),
      fromBlock,
      latest
    );

    if (!logs || logs.length === 0) return [];

    const rows: HistoryRow[] = logs
      .slice(-12)
      .map((l: any) => {
        const epoch = Number(l.args?.epoch ?? 0);

        const scoreRaw = l.args?.score ?? BigInt(0);
        const confRaw = l.args?.confidence ?? BigInt(0);

        const score = toUnit(scoreRaw);
        const confidence = toUnit(confRaw);

        const allocBps = Number(l.args?.allocationBps ?? 0);
        const allocation = Math.round(allocBps / 100);

        const flags = Number(l.args?.flags ?? 0);
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
  const n = Number(x) / 1e18;
  return clamp01(n);
}

function clamp01(x: number) {
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(1, x));
}