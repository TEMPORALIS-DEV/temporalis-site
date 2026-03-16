import { NextResponse } from "next/server";
import { getBaseProvider, getEpochManager } from "../../../../lib/epoch-manager";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const provider = getBaseProvider();
    const E = getEpochManager();

    const latest = await provider.getBlockNumber();
    const from = Math.max(0, latest - 20_000);

    const logs = await E.queryFilter(E.filters.ProofScored(), from, latest);

    if (!logs.length) {
      return NextResponse.json(
        {
          ok: true,
          found: false,
          latest,
          from,
          rows: [],
        },
        { status: 200 }
      );
    }

    const rows = logs
      .map((log: any) => ({
        epochId: Number(log.args?.epochId ?? 0),
        strategyId: Number(log.args?.strategyId ?? 0),
        score: log.args?.score?.toString?.() ?? "0",
        blockNumber: log.blockNumber,
        txHash: log.transactionHash,
      }))
      .sort((a, b) => b.blockNumber - a.blockNumber);

    return NextResponse.json(
      {
        ok: true,
        found: true,
        latest,
        from,
        rows,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        ok: false,
        error: e?.shortMessage || e?.message || "GSCL_LATEST_FAILED",
      },
      { status: 503 }
    );
  }
}