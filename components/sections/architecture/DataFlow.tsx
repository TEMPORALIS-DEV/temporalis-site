// components/sections/architecture/DataFlow.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const flow = [
  { k: "Inputs", v: "Strategy metrics, execution data, regime markers" },
  { k: "Epoch Segmentation", v: "Windowed measurement & normalization" },
  { k: "GSCL", v: "Score + Confidence + Exposure signal" },
  { k: "Allocation Engine", v: "Deterministic capital distribution" },
  { k: "Self-Healing", v: "Exposure compression under adverse regimes" },
  { k: "Outputs", v: "Auditable state + standardized reporting" },
];

export default function DataFlow() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Model
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Data Flow Model
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            TEMPORALIS exposes a clear pipeline from measurement to enforcement.
            Each step is designed to be auditable and consistent across epochs.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="space-y-3 text-sm">
              {flow.map((x) => (
                <div
                  key={x.k}
                  className="flex items-start justify-between gap-6 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="opacity-80">{x.k}</div>
                  <div className="max-w-[60%] text-right opacity-70">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}