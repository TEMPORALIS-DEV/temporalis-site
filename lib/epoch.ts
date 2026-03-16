// lib/epoch.ts
import { Contract } from "ethers";
import { getBaseProvider, getEpochManagerAddress } from "./epoch-manager";
import { EPOCH_MANAGER_ABI } from "./epoch-manager.abi";

export type EpochData = {
  ok: boolean;
  epochIndex?: number;
  epochOpen?: boolean;
  entryPaused?: boolean;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
};

export async function getEpochData(): Promise<EpochData> {
  try {
    const provider = getBaseProvider();
    const addr = getEpochManagerAddress();

    const c = new Contract(addr, EPOCH_MANAGER_ABI as any, provider);

    const [epochIdBn, epochEndBn, epochOpen, entryPaused, blk] = await Promise.all([
      c.currentEpochId(),
      c.epochEnd(),
      c.epochOpen(),
      c.entryPaused(),
      provider.getBlock("latest"),
    ]);

    const epochEnd = Number(epochEndBn);
    const now = Number(blk?.timestamp || 0);
    const timeLeft = Math.max(0, epochEnd - now);

    return {
      ok: true,
      epochIndex: Number(epochIdBn),
      epochOpen: Boolean(epochOpen),
      entryPaused: Boolean(entryPaused),
      epochEnd,
      timeLeft,
    };
  } catch (e: any) {
    return { ok: false, error: e?.shortMessage || e?.message || "EPOCH_READ_FAILED" };
  }
}