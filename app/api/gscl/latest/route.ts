// app/api/gscl/latest/route.ts
import { NextResponse } from "next/server";
import { getProvider, getEpochManager, EPOCH_MANAGER_ABI } from "../../../../lib/epoch-manager";
import { ethers } from "ethers";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const strategyId = Number(searchParams.get("strategyId") ?? "2");
    const lookback = Number(searchParams.get("lookback") ?? "50000");

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

    if (!logs.length) {
      return NextResponse.json(
        { ok: true, found: false, strategyId },
        { status: 200 }
      );
    }

    const last = logs[logs.length - 1];
    const decoded = iface.decodeEventLog("ProofScored", last.data, last.topics);

    const epochId = Number(decoded.epochId);
    const score = decoded.score?.toString?.() ?? String(decoded.score);

    return NextResponse.json(
      {
        ok: true,
        found: true,
        strategyId,
        epochId,
        score,
        blockNumber: last.blockNumber,
        txHash: last.transactionHash,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "error" },
      { status: 200 }
    );
  }
}