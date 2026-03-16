// lib/epoch-manager.ts
import { JsonRpcProvider } from "ethers";

export function getBaseProvider() {
  const rpc =
    process.env.BASE_MAINNET_RPC ||
    process.env.NEXT_PUBLIC_BASE_MAINNET_RPC ||
    "https://mainnet.base.org";

  return new JsonRpcProvider(rpc);
}

export function getEpochManagerAddress() {
  // حطها في .env.local لو تبي: EPOCH_MANAGER=0x...
  return (
    process.env.EPOCH_MANAGER ||
    process.env.NEXT_PUBLIC_EPOCH_MANAGER ||
    "0x169C4a706b7fc847Cb97AB718743b19ED2787826"
  );
}