// lib/epoch-manager.ts
import { Contract, JsonRpcProvider } from "ethers";

export const EPOCH_MANAGER_ADDRESS =
  process.env.EPOCH_MANAGER?.toLowerCase() ??
  "0x169c4a706b7fc847cb97ab718743b19ed2787826";

// ABI minimal (functions + ProofScored)
export const EPOCH_MANAGER_ABI = [
  // views
  { type: "function", name: "currentEpochId", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "epochEnd", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "timeLeft", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "epochOpen", stateMutability: "view", inputs: [], outputs: [{ type: "bool" }] },
  { type: "function", name: "isEntryOpen", stateMutability: "view", inputs: [], outputs: [{ type: "bool" }] },

  // event: ProofScored(epochId indexed, strategyId indexed, score)
  {
    type: "event",
    name: "ProofScored",
    anonymous: false,
    inputs: [
      { indexed: true, name: "epochId", type: "uint256" },
      { indexed: true, name: "strategyId", type: "uint256" },
      { indexed: false, name: "score", type: "uint256" },
    ],
  },
] as const;

export function getProvider() {
  const rpc =
    process.env.BASE_MAINNET_RPC ||
    "https://mainnet.base.org";
  return new JsonRpcProvider(rpc);
}

export function getEpochManager() {
  const provider = getProvider();
  return new Contract(EPOCH_MANAGER_ADDRESS, EPOCH_MANAGER_ABI, provider);
}