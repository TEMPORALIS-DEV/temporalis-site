// app/api/strategy/[id]/history/route.ts
import { NextResponse } from "next/server";
import { getProvider, getEpochManager, EPOCH_MANAGER_ABI } from "../../../../../lib/epoch-manager";
import { ethers } from "ethers";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const strategyId = Number(params.id);
    const { searchParams } = new URL(req.url);
    const lookback = Number(searchParams.get("lookback") ?? "120000");
    const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? "20")));

    const provider = getProvider();
    const contract = getEpochManager();
    const iface = new ethers.Interface(EPOCH_MANAGER_ABI as any);

    const latestBlock = await provider.getBlockNumber();
    const fromBlock = Math.max(0, latestBlock - lookback);

    const topic = iface.getEvent("ProofScored").topicHash;

    const logs = await provider.getLogs({
      address: await contract.getAddress(),
      fromBlock,
      toBlock: latestBlock,
      topics: [
        topic,
        null,
        ethers.zeroPadValue(ethers.toBeHex(strategyId), 32),
      ],
    });

    const rows = logs
      .slice(-limit)
      .map((l) => {
        const d = iface.decodeEventLog("ProofScored", l.data, l.topics);
        return {
          epochId: Number(d.epochId),
          strategyId,
          score: d.score?.toString?.() ?? String(d.score),
          blockNumber: l.blockNumber,
          txHash: l.transactionHash,
        };
      })
      .reverse();

    return NextResponse.json(
      { ok: true, strategyId, rows, fromBlock, toBlock: latestBlock },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "error", rows: [] },
      { status: 200 }
    );
  }
}