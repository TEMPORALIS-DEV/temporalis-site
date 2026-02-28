// lib/epoch.ts
// lib/epoch.ts
import { getEpochManager } from "./epoch-manager";

export type EpochData = {
  epochIndex: number;
  epochStart: number;
  epochEnd: number;
  timeLeft: number;
  epochOpen: boolean;
  entryOpen: boolean;
};

export async function getEpochData(): Promise<EpochData> {
  const E = getEpochManager();

  const [epochIndex, epochStart, epochEnd, timeLeft, epochOpen, entryOpen] =
    await Promise.all([
      E.currentEpochId(),
      E.epochStart(),
      E.epochEnd(),
      E.timeLeft(),
      E.epochOpen(),
      E.isEntryOpen(),
    ]);

  return {
    epochIndex: Number(epochIndex),
    epochStart: Number(epochStart),
    epochEnd: Number(epochEnd),
    timeLeft: Number(timeLeft),
    epochOpen: Boolean(epochOpen),
    entryOpen: Boolean(entryOpen),
  };
}