import { NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { contracts } from "../../../content/contracts";

export const dynamic = "force-dynamic";

/**
 * Minimal ABI (placeholder):
 * عدّل أسماء الدوال لما تعطيني ABI الحقيقي.
 */
const EPOCH_ABI = [
  {
    type: "function",
    name: "currentEpoch",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
] as const;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const strategyId = BigInt(url.searchParams.get("strategyId") || "2");

  const client = createPublicClient({
    chain: base,
    transport: http(process.env.NEXT_PUBLIC_BASE_RPC || "https://mainnet.base.org"),
  });

  try {
    // مثال: نجيب epoch الحالي من EPOCH_MANAGER (إذا الدالة موجودة فعلًا)
    const epochIndex = await client.readContract({
      address: contracts.EPOCH_MANAGER as `0x${string}`,
      abi: EPOCH_ABI,
      functionName: "currentEpoch",
    });

    // حاليا ما عندنا event/دالة ترجع score "جاهز" => fallback مؤسساتي
    const score = 0.82;
    const tier = scoreToTier(score);

    return NextResponse.json(
      {
        ok: true,
        source: "rpc+fallback",
        epochIndex: Number(epochIndex),
        strategyId: Number(strategyId),
        score,
        tier,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, source: "offline", error: e?.message || "offline" },
      { status: 200 }
    );
  }
}

function scoreToTier(x: number) {
  if (x >= 0.9) return "Sovereign";
  if (x >= 0.8) return "Prime";
  if (x >= 0.65) return "Standard";
  if (x >= 0.5) return "Watch";
  return "Restricted";
}