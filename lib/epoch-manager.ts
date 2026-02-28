// lib/epoch-manager.ts
import { ethers } from "ethers";

// ✅ ضع عنوان عقد EpochManager هنا أو بالـ .env.local باسم EPOCH_MANAGER
const EPOCH_MANAGER_ADDRESS = process.env.EPOCH_MANAGER || "";

// ✅ RPC
const RPC =
  process.env.BASE_MAINNET_RPC ||
  process.env.NEXT_PUBLIC_BASE_MAINNET_RPC ||
  "https://mainnet.base.org";

// Minimal ABI (بس اللي نحتاجه + Event ProofScored)
export const EPOCH_MANAGER_ABI = [
  "function currentEpochId() view returns (uint256)",
  "function epochStart() view returns (uint256)",
  "function epochEnd() view returns (uint256)",
  "function timeLeft() view returns (uint256)",
  "function epochOpen() view returns (bool)",
  "function isEntryOpen() view returns (bool)",

  // proofs(epochId, strategyId) -> (proofHash, submittedAt, scored, score)
  "function proofs(uint256,uint256) view returns (bytes32 proofHash,uint64 submittedAt,bool scored,uint256 score)",

  // ✅ Real GSCL feed event (from your ABI)
  "event ProofScored(uint256 indexed epochId,uint256 indexed strategyId,uint256 score)",
] as const;

let _provider: ethers.JsonRpcProvider | null = null;

export function getProvider() {
  if (!_provider) _provider = new ethers.JsonRpcProvider(RPC);
  return _provider;
}

export function getEpochManager() {
  if (!EPOCH_MANAGER_ADDRESS) {
    throw new Error("EPOCH_MANAGER env var is missing");
  }
  const provider = getProvider();
  return new ethers.Contract(EPOCH_MANAGER_ADDRESS, EPOCH_MANAGER_ABI, provider);
}