// components/sections/home/CoreLayers.tsx
import Link from "next/link";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const layers = [
  {
    title: "Epoch Manager",
    body:
      "Defines time windows for evaluation. Strategies are measured over discrete epochs before exposure decisions are made.",
  },
  {
    title: "GSCL Scoring",
    body:
      "Confidence-weighted scoring that reprices risk dynamically across time. Outputs a standardized signal for allocation.",
  },
  {
    title: "Self-Healing Layer",
    body:
      "Autonomous exposure compression under adverse regimes. Enforces discipline when strategies deviate from expected behavior.",
  },
  {
    title: "Allocation Engine",
    body:
      "Deterministic allocation rules that translate risk and performance into capital distribution — by design, not hype.",
  },
];

export default function CoreLayers() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Core Architecture
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            A protocol standard for time-governed capital systems.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-70">
            TEMPORALIS measures strategy behavior across time windows, reprices
            risk with confidence, then enforces exposure through deterministic
            rules.
          </p>
        </div>

        <Link
          href="/architecture"
          className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm opacity-80 hover:opacity-100 md:inline-flex"
        >
          Read Architecture
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {layers.map((x) => (
          <Panel key={x.title} className="p-6">
            <div className="text-sm font-medium tracking-tight">{x.title}</div>
            <div className="mt-2 text-sm leading-relaxed opacity-70">
              {x.body}
            </div>
          </Panel>
        ))}
      </div>
    </Section>
  );
}