// app/api/epoch/route.ts
import { NextResponse } from "next/server";
import { getEpochData } from "../../../lib/epoch";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getEpochData();
    return NextResponse.json({ ok: true, ...data }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "offline" },
      { status: 200 }
    );
  }
}