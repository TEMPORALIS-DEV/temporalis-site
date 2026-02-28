export type RiskLevel = "Low" | "Medium" | "High";
export type Evidence = "Live" | "Simulated" | "Research";
export type Category =
  | "Lending"
  | "Liquidity"
  | "Arbitrage"
  | "Stables"
  | "LST"
  | "Options"
  | "Index"
  | "Perps";

export type Chain = "Ethereum" | "Base" | "Arbitrum";

export type Strategy = {
  id: string;
  name: string;
  summary: string;
  category: Category;
  risk: RiskLevel;
  evidence: Evidence;
  chains: Chain[];
  estRangeApr: string;
  tags: string[];
  riskNotes: string[];
  logic: string[];
  onchainSignals: string[];
  lastUpdated: string; // YYYY-MM
  scorePos2: number; // 0-100 (demo)
};

export const STRATEGIES: Strategy[] = [
  {
    id: "stable-lending-blend",
    name: "Stable Lending Blend",
    summary:
      "Diversified stablecoin lending allocation across venues with caps and rebalancing.",
    category: "Lending",
    risk: "Low",
    evidence: "Live",
    chains: ["Ethereum", "Base", "Arbitrum"],
    estRangeApr: "3–8%",
    tags: ["USDC", "USDT", "Risk Caps", "Rebalance"],
    riskNotes: [
      "Smart contract risk from lending markets.",
      "Rate variability; yields can compress.",
      "Stablecoin depeg tail risk.",
    ],
    logic: [
      "Allocate stablecoins across multiple lending venues.",
      "Apply per-venue caps and health checks.",
      "Rebalance periodically to maximize risk-adjusted yield.",
    ],
    onchainSignals: [
      "Utilization rates",
      "Borrow APR vs Supply APR spread",
      "Protocol reserve/solvency metrics",
    ],
    lastUpdated: "2026-02",
    scorePos2: 86,
  },
  {
    id: "lst-restaking-carry",
    name: "LST Carry (Restaking-Aware)",
    summary:
      "Earn base staking yield via liquid staking tokens with conservative collateral handling.",
    category: "LST",
    risk: "Medium",
    evidence: "Research",
    chains: ["Ethereum"],
    estRangeApr: "4–10%",
    tags: ["LST", "Staking", "Carry", "Conservative"],
    riskNotes: [
      "Slashing / validator risk (indirect).",
      "LST discount/premium risk.",
      "Protocol integration risk.",
    ],
    logic: [
      "Hold high-liquidity LST positions.",
      "Avoid aggressive leverage; keep buffers.",
      "Monitor peg deviations and liquidity depth.",
    ],
    onchainSignals: [
      "LST exchange rate / peg deviation",
      "Liquidity depth on DEXs",
      "Staking reward rate",
    ],
    lastUpdated: "2026-02",
    scorePos2: 78,
  },
  {
    id: "delta-neutral-lp-hedged",
    name: "Delta-Neutral LP (Hedged)",
    summary:
      "Provide liquidity while hedging price exposure using perps to reduce directional risk.",
    category: "Liquidity",
    risk: "Medium",
    evidence: "Simulated",
    chains: ["Arbitrum", "Base"],
    estRangeApr: "6–14%",
    tags: ["LP", "Perps Hedge", "Neutral", "Fees"],
    riskNotes: [
      "Basis risk between spot and perps.",
      "Liquidation risk if leverage mismanaged.",
      "Impermanent loss if hedge drifts.",
    ],
    logic: [
      "LP into high-volume pair.",
      "Open delta hedge via perps sized to LP exposure.",
      "Rebalance hedge on thresholds; control leverage.",
    ],
    onchainSignals: [
      "Funding rates",
      "Pool fee APR",
      "Volatility / price movement",
    ],
    lastUpdated: "2026-02",
    scorePos2: 72,
  },
  {
    id: "smart-liquidity-routing",
    name: "Smart Liquidity Routing",
    summary:
      "Routes swaps/liquidity to where it is most efficient using depth, fees, and slippage signals.",
    category: "Liquidity",
    risk: "Medium",
    evidence: "Research",
    chains: ["Ethereum", "Base", "Arbitrum"],
    estRangeApr: "5–12%",
    tags: ["Routing", "DEX", "Slippage", "Depth"],
    riskNotes: [
      "Integration risk across venues/routers.",
      "MEV / sandwich risk on some routes.",
      "Execution complexity increases surface area.",
    ],
    logic: [
      "Score routes by expected execution quality.",
      "Prefer deeper venues, lower fees, less MEV.",
      "Fallback routes on quote deviation.",
    ],onchainSignals: ["DEX depth", "Price impact", "MEV indicators"],
    lastUpdated: "2026-02",
    scorePos2: 74,
  },
  {
    id: "stable-curve-style-pools",
    name: "Stable AMM Pool Fees",
    summary:
      "Earn swap fees on stable pools with controlled exposure and volatility screening.",
    category: "Stables",
    risk: "Low",
    evidence: "Live",
    chains: ["Ethereum", "Arbitrum"],
    estRangeApr: "2–7%",
    tags: ["Stable Pools", "Fees", "Low Vol"],
    riskNotes: [
      "Stablecoin depeg tail risk.",
      "Pool imbalance risk in stress.",
      "Smart contract risk.",
    ],
    logic: [
      "LP into stable pools with healthy depth.",
      "Monitor imbalance; withdraw on extreme skew.",
      "Harvest fees periodically.",
    ],
    onchainSignals: ["Pool imbalance", "TVL changes", "Swap volume"],
    lastUpdated: "2026-02",
    scorePos2: 84,
  },
  {
    id: "basis-carry-perps",
    name: "Perps Basis Carry",
    summary:
      "Capture funding/basis by maintaining market-neutral exposure with strict liquidation controls.",
    category: "Perps",
    risk: "High",
    evidence: "Simulated",
    chains: ["Arbitrum"],
    estRangeApr: "8–20%",
    tags: ["Funding", "Basis", "Neutral", "Risk Control"],
    riskNotes: [
      "Funding can flip negative.",
      "Liquidation risk if collateral insufficient.",
      "Venue-specific risk.",
    ],
    logic: [
      "Open matched long/short exposures to isolate funding/basis.",
      "Maintain conservative collateral ratio.",
      "Reduce size when volatility spikes.",
    ],
    onchainSignals: ["Funding rate", "Open interest", "Volatility"],
    lastUpdated: "2026-02",
    scorePos2: 63,
  },
  {
    id: "bluechip-index-rebalance",
    name: "Bluechip Index Rebalance",
    summary:
      "Rule-based index basket with periodic rebalancing and volatility constraints.",
    category: "Index",
    risk: "Medium",
    evidence: "Research",
    chains: ["Ethereum", "Base", "Arbitrum"],
    estRangeApr: "—",
    tags: ["Index", "Rebalance", "Rules"],
    riskNotes: [
      "Market risk (directional).",
      "Tracking error vs benchmark.",
      "Rebalance timing risk.",
    ],
    logic: [
      "Hold a curated basket of liquid assets.",
      "Rebalance monthly or on drift thresholds.",
      "Apply volatility guardrails and max weights.",
    ],
    onchainSignals: ["Volatility", "Liquidity depth", "Correlation"],
    lastUpdated: "2026-02",
    scorePos2: 70,
  },
  {
    id: "tri-arb-stables",
    name: "Triangular Arb (Stables)",
    summary:
      "Low-latency arbitrage between stable pairs when pricing deviates beyond threshold.",
    category: "Arbitrage",
    risk: "High",
    evidence: "Research",
    chains: ["Base", "Arbitrum"],
    estRangeApr: "4–15%",
    tags: ["Arb", "Stables", "Execution"],
    riskNotes: [
      "Execution risk; edge disappears fast.",
      "MEV competition risk.",
      "Slippage & gas variability.",
    ],
    logic: [
      "Detect stable mispricings across venues.",
      "Execute only above min edge after costs.",
      "Rate-limit and circuit-break on anomalies.",
    ],
    onchainSignals: ["Price deviation", "Gas costs", "MEV activity"],
    lastUpdated: "2026-02",
    scorePos2: 58,
  },
  {
    id: "options-covered-yield",
    name: "Covered Option Yield",
    summary:
      "Generate premium by selling covered options with conservative strikes and sizing.",
    category: "Options",
    risk: "High",
    evidence: "Research",
    chains: ["Ethereum"],
    estRangeApr: "5–18%",
    tags: ["Options", "Covered", "Premium"],
    riskNotes: [
      "Opportunity cost on strong rallies.",
      "Volatility regime shifts.",
      "Venue/settlement risk.",
    ],
    logic: [
      "Sell covered calls on liquid assets.",
      "Choose conservative strikes and expiries.",
      "Size positions to avoid forced unwind.",
    ],
    onchainSignals: ["Implied volatility", "Skew", "Open interest"],
    lastUpdated: "2026-02",
    scorePos2: 60,
  },
  {
    id: "risk-framework-pos2-core",name: "PoS² Core Rating Framework",
    summary:
      "Standardized on-chain transparency schema for strategy logic, risk profile, and performance signals.",
    category: "Index",
    risk: "Low",
    evidence: "Research",
    chains: ["Ethereum", "Base", "Arbitrum"],
    estRangeApr: "—",
    tags: ["PoS²", "Ratings", "Transparency"],
    riskNotes: [
      "Informational layer only.",
      "Scores depend on inputs; must be auditable.",
      "No guarantees; governance must be clear.",
    ],
    logic: [
      "Assign Strategy ID + taxonomy fields.",
      "Publish logic and risk assumptions.",
      "Track performance signals and scoring rubric.",
    ],
    onchainSignals: ["Strategy ID registry", "Risk taxonomy", "Track record anchors"],
    lastUpdated: "2026-02",
    scorePos2: 92,
  },
];