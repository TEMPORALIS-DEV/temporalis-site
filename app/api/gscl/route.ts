// app/api/gscl/route.ts
import { NextResponse } from "next/server";
import { Interface, zeroPadValue, toBeHex } from "ethers";
import { getBaseProvider, getEpochManagerAddress } from "../../../lib/epoch-manager";
import { EPOCH_MANAGER_ABI } from "../../../lib/epoch-manager.abi";

export const dynamic = "force-dynamic";

function toTier(score01: number) {
  if (score01 >= 0.85) return "Prime";
  if (score01 >= 0.7) return "Strong";
  if (score01 >= 0.55) return "Moderate";
  return "Compression";
}

function normalizeScore(scoreRaw: bigint) {
  let score01 = 0;

  if (scoreRaw > 1_000_000_000_000n) {
    score01 = Number(scoreRaw) / 1e18;
  } else if (scoreRaw > 100n) {
    score01 = Number(scoreRaw) / 10000;
  } else {
    score01 = Number(scoreRaw) / 100;
  }

  score01 = Math.max(0, Math.min(1, score01));
  return score01;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const strategyId = Number(url.searchParams.get("strategyId") || "0");

    if (!strategyId) {
      return NextResponse.json({ ok: false, error: "Missing strategyId" }, { status: 400 });
    }

    const provider = getBaseProvider();
    const addr = getEpochManagerAddress();

    const lookback = Number(process.env.GSCL_LOOKBACK_BLOCKS || "250000");
    const latest = await provider.getBlockNumber();
    const fromBlock = Math.max(0, latest - lookback);

    const iface = new Interface(EPOCH_MANAGER_ABI as any);
    const topic = iface.getEvent("ProofScored").topicHash;

    const logs = await provider.getLogs({
      address: addr,
      fromBlock,
      toBlock: latest,
      topics: [
        topic,
        null,
        zeroPadValue(toBeHex(strategyId), 32),
      ],
    });

    if (logs.length === 0) {
      return NextResponse.json(
        {
          ok: true,
          found: false,
          strategyId,
          fromBlock,
          toBlock: latest,
          note: "No ProofScored logs in lookback window",
        },
        { status: 200 }
      );
    }

    const last = logs[logs.length - 1];
    const parsed = iface.parseLog({
      topics: last.topics as string[],
      data: last.data,
    });

    const epochId = Number(parsed.args.epochId);
    const scoreRaw = BigInt(parsed.args.score);
    const score01 = normalizeScore(scoreRaw);

    return NextResponse.json(
      {
        ok: true,
        found: true,
        strategyId,
        epochId,
        scoreRaw: scoreRaw.toString(),
        score01,
        tier: toTier(score01),
        txHash: last.transactionHash,
        blockNumber: last.blockNumber,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        ok: false,
        error: e?.shortMessage || e?.message || "GSCL_EVENT_READ_FAILED",
      },
      { status: 503 }
    );
  }
}