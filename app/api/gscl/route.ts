import { NextResponse } from "next/server";
import { getBaseProvider, getEpochManagerAddress } from "../../../lib/epoch-manager";
import { EPOCH_MANAGER_ABI } from "../../../lib/epoch-manager.abi";
import { Contract } from "ethers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const provider = getBaseProvider();
    const address = getEpochManagerAddress();

    const contract = new Contract(address, EPOCH_MANAGER_ABI as any, provider);

    let latestEpochId: string | null = null;
    let currentEpoch: any = null;

    try {
      latestEpochId = (await contract.currentEpochId()).toString();
    } catch {
      latestEpochId = null;
    }

    try {
      if (latestEpochId !== null) {
        currentEpoch = await contract.epochs(latestEpochId);
      }
    } catch {
      currentEpoch = null;
    }

    return NextResponse.json(
      {
        ok: true,
        address,
        latestEpochId,
        currentEpoch,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        ok: false,
        error: e?.message ?? "failed to load gscl data",
      },
      { status: 500 }
    );
  }
}