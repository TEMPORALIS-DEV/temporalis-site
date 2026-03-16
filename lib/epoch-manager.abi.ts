// lib/epoch-manager.abi.ts
// Minimal REAL ABI فقط للأحداث اللي نحتاجها لقراءة GSCL من logs
export const EPOCH_MANAGER_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "epochId", type: "uint256" },
      { indexed: true, internalType: "uint256", name: "strategyId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "score", type: "uint256" },
    ],
    name: "ProofScored",
    type: "event",
  },
] as const;