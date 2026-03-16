// lib/epoch-manager.ts
import { Contract, JsonRpcProvider } from "ethers";
import { EPOCH_MANAGER_ABI } from "./epoch-manager.abi";

export function getBaseProvider() {
  const rpc =
    process.env.BASE_MAINNET_RPC ||
    process.env.NEXT_PUBLIC_BASE_MAINNET_RPC ||
    "https://mainnet.base.org";

  return new JsonRpcProvider(rpc);
}

export function getEpochManagerAddress() {
  return (
    process.env.EPOCH_MANAGER ||
    process.env.NEXT_PUBLIC_EPOCH_MANAGER ||
    "0x169C4a706b7fc847Cb97AB718743b19ED2787826"
  );
}

export function getEpochManager() {
  return new Contract(
    getEpochManagerAddress(),
    EPOCH_MANAGER_ABI as any,
    getBaseProvider()
  );
}