import { ethers } from "ethers";
import { CONFIG } from "./config.js";
import EpochManagerAbi from "./abi/EpochManager.json" assert { type: "json" };
import { makeProofHash } from "./mock/proof.js";
import { makeMetricsOK, makeMetricsBadDrawdown } from "./mock/metrics.js";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const provider = new ethers.JsonRpcProvider(CONFIG.rpcUrl);
  const wallet = new ethers.Wallet(CONFIG.privateKey, provider);

  const epoch = new ethers.Contract(CONFIG.epochManager, EpochManagerAbi, wallet);

  console.log("Wallet:", await wallet.getAddress());
  console.log("EpochManager:", CONFIG.epochManager);
  console.log("StrategyId:", CONFIG.strategyId.toString());
  console.log("SlashTo:", CONFIG.slashTo);

  console.log("SelfHealing cooldown step skipped (ABI not included).");

  console.log("-> openEpoch()");
  await (await epoch.openEpoch()).wait();
  console.log("   opened ✅");

  const proofHash = makeProofHash(1, CONFIG.strategyId);
  console.log("-> submitProof()", proofHash);
  await (await epoch.submitProof(CONFIG.strategyId, proofHash)).wait();
  console.log("   proof submitted ✅");

  const m = makeMetricsOK();
  // const m = makeMetricsBadDrawdown();

  console.log("-> submitRiskMetrics()", m);
  await (await epoch.submitRiskMetrics(CONFIG.strategyId, m)).wait();
  console.log("   metrics forwarded ✅");

  console.log("-> scoreAndEnforce()");
  await (await epoch.scoreAndEnforce(CONFIG.strategyId, CONFIG.slashTo)).wait();
  console.log("   scored & enforced ✅");

  if (CONFIG.cooldownSeconds > BigInt(0)) {
    const waitMs = Number(CONFIG.cooldownSeconds) * 1000;
    console.log(`-> waiting ${CONFIG.cooldownSeconds.toString()}s for cooldown...`);
    await sleep(waitMs + 500);
    console.log("-> reactivation skipped (SelfHealing ABI not included)");
  } else {
    console.log("CooldownSeconds=0, skipping reactivation step.");
  }

  console.log("DONE ✅");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});