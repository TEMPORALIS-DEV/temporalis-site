export type RiskMetrics = {
  drawdownBps: bigint;
  exposurePerPoolBps: bigint;
  exposurePerChainBps: bigint;
  execSuccessBps: bigint;
  gasToProfitBps: bigint;
  dataIntegrityFail: boolean;
  protocolExploitSignal: boolean;
};

export function makeMetricsOK(): RiskMetrics {
  return {
    drawdownBps: 120n,          // 1.2%
    exposurePerPoolBps: 1500n,  // 15%
    exposurePerChainBps: 3000n, // 30%
    execSuccessBps: 9850n,      // 98.5%
    gasToProfitBps: 800n,       // 8%
    dataIntegrityFail: false,
    protocolExploitSignal: false,
  };
}

// مثال: خرق drawdown (يؤدي retire+slash)
export function makeMetricsBadDrawdown(): RiskMetrics {
  return {
    ...makeMetricsOK(),
    drawdownBps: 500n // 5% > 3%
  };
}
