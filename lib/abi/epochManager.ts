// lib/abi/epochManager.ts
export const epochManagerAbi = [
  // ------- Read -------
  {
    name: "currentEpochId",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "epochEnd",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "timeLeft",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "epochOpen",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    name: "entryPaused",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    name: "isEntryOpen",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "bool" }],
  },

  // ------- Event (REAL GSCL feed) -------
  {
    anonymous: false,
    name: "ProofScored",
    type: "event",
    inputs: [
      { indexed: true, name: "epochId", type: "uint256" },
      { indexed: true, name: "strategyId", type: "uint256" },
      { indexed: false, name: "score", type: "uint256" },
    ],
  },
] as const;