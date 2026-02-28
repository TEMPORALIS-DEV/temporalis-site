import { keccak256, toUtf8Bytes } from "ethers";

export function makeProofHash(epoch: number, strategyId: bigint) {
  // v1 dummy proof: hash(epoch|strategyId|timestamp)
  const payload = `epoch:${epoch}|strategy:${strategyId.toString()}|t:${Date.now()}`;
  return keccak256(toUtf8Bytes(payload));
}
