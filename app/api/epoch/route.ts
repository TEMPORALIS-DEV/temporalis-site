// app/api/epoch/route.ts
import { NextResponse } from "next/server";
import { getEpochData } from "../../../lib/epoch";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getEpochData();
  return NextResponse.json(data, { status: 200 });
}