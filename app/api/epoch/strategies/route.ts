// app/api/strategies/route.ts
import { NextResponse } from "next/server";
import { createPublicClient, http, isAddress, type Address, parseAbiItem } from "viem";
import { base } from "viem/chains";

export const dynamic = "force-dynamic";

const RPC =
  process.env.BASE_MAINNET_RPC ||
  process.env.NEXT_PUBLIC_BASE_RPC ||
  "https://mainnet.base.org";

const SCORING_ENGINE =
  process.env.SCORING_ENGINE ||
  process.env.NEXT_PUBLIC_SCORING_ENGINE ||
  "";

const client = createPublicClient({
  chain: base,
  transport: http(RPC, { timeout: 12_000 }),
});

// مهم: عقدك الحالي ما فيه Events في الكود اللي أرسلته
// فنعطي fallback ثابت (institutional placeholder) لين نضيف events أو نعمل verify/abi.
const FALLBACK = [
  { id: 1, name: "Liquidity Provision", score: 0.82, confidence: 0.91, allocation: 42, status: "Stable" },
  { id: 2, name: "Arbitrage Engine", score: 0.74, confidence: 0.68, allocation: 28, status: "Moderate" },
  { id: 3, name: "Oracle Strategy", score: 0.61, confidence: 0.52, allocation: 18, status: "Compression" },
  { id: 4, name: "Market Neutral", score: 0.89, confidence: 0.95, allocation: 12, status: "Strong" },
];

export async function GET() {
  try {
    if (!SCORING_ENGINE || !isAddress(SCORING_ENGINE)) {
      return NextResponse.json(
        { ok: true, source: "fallback", rows: FALLBACK },
        { status: 200 }
      );
    }

    const address = SCORING_ENGINE as Address;

    // إذا عندك Event حقيقي لاحقًا (مثلاً StrategyScored)، بنفعل قراءة logs هنا.
    // حالياً بما أن عقدك ما فيه events، نخلي fallback.
    // مثال جاهز للتفعيل لاحقاً:
    // const event = parseAbiItem("event StrategyScored(uint256 indexed epochId,uint256 indexed strategyId,int256 score,bool shouldPause,bool shouldRetire,uint256 slashAmount)");
    // const logs = await client.getLogs({ address, event, fromBlock: 0n, toBlock: "latest" });

    return NextResponse.json(
      { ok: true, source: "fallback", rows: FALLBACK },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: true, source: "fallback", rows: FALLBACK, note: e?.message ?? "fallback" },
      { status: 200 }
    );
  }
}