import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const FALLBACK = [
  { id: 1, name: "Liquidity Provision", score: 0.82, confidence: 0.91, allocation: 42, status: "Stable" },
  { id: 2, name: "Arbitrage Engine", score: 0.74, confidence: 0.68, allocation: 28, status: "Moderate" },
  { id: 3, name: "Oracle Strategy", score: 0.61, confidence: 0.52, allocation: 18, status: "Compression" },
  { id: 4, name: "Market Neutral", score: 0.89, confidence: 0.95, allocation: 12, status: "Strong" }
];

export async function GET() {
  return NextResponse.json({ ok: true, source: "fallback", rows: FALLBACK }, { status: 200 });
}
