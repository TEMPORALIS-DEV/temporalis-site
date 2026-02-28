import "dotenv/config";

function opt(name: string): string | undefined {
  return process.env[name];
}
function req(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export const CONFIG = {
  rpcUrl: req("RPC_URL"),
  privateKey: req("PRIVATE_KEY"),
  epochManager: req("EPOCH_MANAGER"),
  slashTo: req("SLASH_TO"),
  strategyId: BigInt(req("STRATEGY_ID")),

  selfHealing: opt("SELF_HEALING"),
  cooldownSeconds: BigInt(opt("COOLDOWN_SECONDS") ?? "0"),
};
