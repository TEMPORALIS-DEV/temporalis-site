import { Contract, JsonRpcProvider } from "ethers";
import { EPOCH_MANAGER_ABI } from "../epoch-manager.abi";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) {
    throw new Error(`${name} is not set`);
  }
  return v;
}

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

export function getRequiredEpochManager() {
  return new Contract(
    mustEnv("EPOCH_MANAGER"),
    EPOCH_MANAGER_ABI as any,
    getBaseProvider()
  );
}