// components/sections/technology/Interfaces.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const api = [
  {
    sig: "epochStart() -> uint256",
    d: "Returns the current epoch start timestamp.",
  },
  {
    sig: "epochEnd() -> uint256",
    d: "Returns the current epoch end timestamp.",
  },
  {
    sig: "timeLeft() -> uint256",
    d: "Returns seconds until the next epoch boundary.",
  },
  {
    sig: "publishSignals(epoch, strategyId, score, confidence)",
    d: "Publishes standardized outputs for a strategy within an epoch.",
  },
  {
    sig: "rebalance(epoch) -> AllocationState",
    d: "Computes and applies deterministic allocations at epoch boundary.",
  },
  {
    sig: "getAllocation(strategyId) -> uint256",
    d: "Returns current exposure weight for a strategy.",
  },
];

export default function Interfaces() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Interfaces
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Minimal surface area. Explicit control points.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Interfaces are designed around epoch timing, signal publication, and
            allocation enforcement.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">
              Reference functions
            </div>

            <div className="mt-4 space-y-3 text-sm">
              {api.map((x) => (
                <div
                  key={x.sig}
                  className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="font-mono text-[12px] opacity-90">{x.sig}</div>
                  <div className="mt-2 text-sm leading-relaxed opacity-70">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs leading-relaxed opacity-55">
              Names reflect intent, not implementation. The standard focuses on
              behavior and reproducibility.
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}