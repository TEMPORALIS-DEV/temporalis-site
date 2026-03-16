import { ethers } from "ethers";

const RPC = process.env.NEXT_PUBLIC_BASE_RPC || "";
const SCORING_ENGINE = process.env.NEXT_PUBLIC_SCORING_ENGINE || "";

const ABI = [
  "event SignalPublished(uint256 indexed epoch, bytes32 indexed strategyId, uint256 score, uint256 confidence, uint256 allocationBps, uint256 flags)",
  "event StrategyScored(uint256 indexed epoch, bytes32 indexed strategyId, uint256 score, uint256 confidence, uint256 allocationBps, uint256 flags)",
];

export type HistoryRow = {
  epoch: number;
  score: number;
  confidence: number;
  allocation: number;
  compression: boolean;
};

export async function getStrategyHistoryOnchain(strategyKey: string): Promise<HistoryRow[] | null> {
  try {
    if (!RPC || !SCORING_ENGINE) return null;

    const provider = new ethers.JsonRpcProvider(RPC);
    const c = new ethers.Contract(SCORING_ENGINE, ABI, provider);

    const idBytes32 = ethers.id(strategyKey);
    const latest = await provider.getBlockNumber();
    const from = Math.max(0, latest - 80_000);

    const logs1 = await c
      .queryFilter(c.filters.SignalPublished(null, idBytes32), from, latest)
      .catch(() => []);

    const logs2 = await c
      .queryFilter(c.filters.StrategyScored(null, idBytes32), from, latest)
      .catch(() => []);

    const logs = (logs1?.length ? logs1 : logs2) || [];
    if (!logs.length) return [];

    const rows = logs
      .slice(-12)
      .map((l: any) => {
        const epoch = Number(l.args?.epoch ?? 0);
        const score = toUnit(l.args?.score ?? BigInt(0));
        const confidence = toUnit(l.args?.confidence ?? BigInt(0));
        const allocationBps = Number(l.args?.allocationBps ?? 0);
        const allocation = Math.round(allocationBps / 100);
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