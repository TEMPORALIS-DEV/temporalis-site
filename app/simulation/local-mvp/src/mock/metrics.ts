export type RiskMetrics = {
  drawdownBps: bigint;
  exposurePerPoolBps: bigint;
  exposurePerChainBps: bigint;
  execSuccessBps: bigint;
  gasCostBps: bigint;
};

export function makeMetricsOK(): RiskMetrics {
  return {
    drawdownBps: BigInt(120),          // 1.2%
    exposurePerPoolBps: BigInt(1500),  // 15%
    exposurePerChainBps: BigInt(3000), // 30%
    execSuccessBps: BigInt(9850),      // 98.5%
    gasCostBps: BigInt(40),            // 0.4%
  };
}

export function makeMetricsBadDrawdown(): RiskMetrics {
  return {
    drawdownBps: BigInt(2200),         // 22%
    exposurePerPoolBps: BigInt(2200),  // 22%
    exposurePerChainBps: BigInt(4500), // 45%
    execSuccessBps: BigInt(9200),      // 92%
    gasCostBps: BigInt(120),           // 1.2%
  };
}