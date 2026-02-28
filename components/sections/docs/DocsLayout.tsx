"use client";

import { useEffect, useMemo, useState } from "react";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";
import Link from "next/link";

const sidebar = [
  { label: "Introduction", id: "intro" },
  { label: "Epoch Model", id: "epoch" },
  { label: "GSCL Spec", id: "gscl" },
  { label: "Allocation Rules", id: "allocation" },
  { label: "Invariants", id: "invariants" },
  { label: "Security Assumptions", id: "security" },
];

type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
};

export default function DocsLayout() {
  const ids = useMemo(() => sidebar.map((x) => x.id), []);
  const [active, setActive] = useState<string>("intro");
  const [epoch, setEpoch] = useState<EpochView>({ ok: false });

  // --- Active section highlight ---
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // choose the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  // --- Live/Offline status (client-side poll) ---
  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const r = await fetch("/api/epoch", { cache: "no-store" });
        const j = (await r.json()) as EpochView;
        if (!alive) return;
        setEpoch({
          ok: !!j?.ok,
          epochIndex: j?.epochIndex,
          epochEnd: j?.epochEnd,
          timeLeft: j?.timeLeft,
        });
      } catch {
        if (!alive) return;
        setEpoch({ ok: false });
      }
    }

    load();
    const t = setInterval(load, 15_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  return (
    <Section className="pt-12 md:pt-16">
      <div className="grid gap-8 md:grid-cols-12">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <Panel className="p-6 sticky top-24">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                Documentation
              </div>

              {/* Live / Offline */}
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  epoch.ok
                    ? "border-white/15 bg-white/[0.04] text-white/80"
                    : "border-white/10 bg-white/[0.02] text-white/60"
                }`}
              >
                {epoch.ok ? "Live" : "Offline"}
              </span>
            </div>

            <div className="mt-3 text-xs opacity-55">
              Epoch:{" "}
              <span className="tabular-nums">
                {epoch.ok ? epoch.epochIndex : "—"}
              </span>
            </div>

            <ul className="mt-5 space-y-1 text-sm">
              {sidebar.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={[
                        "flex items-center justify-between rounded-xl px-3 py-2 transition",
                        isActive
                          ? "bg-white/[0.04] border border-white/10 opacity-100"
                          : "opacity-75 hover:opacity-100",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <span
                        className={[
                          "h-1.5 w-1.5 rounded-full",
                          isActive ? "bg-white/70" : "bg-white/20",
                        ].join(" ")}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                Resources
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <Link className="opacity-80 hover:opacity-100" href="/whitepaper">
                  Open Whitepaper
                </Link>
                <Link className="opacity-80 hover:opacity-100" href="/pitch">
                  Open Pitch Deck
                </Link>
                <a
                  className="opacity-80 hover:opacity-100"
                  href="/Velora-Whitepaper-v0.1-Full.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Whitepaper (PDF)
                </a>
                <a
                  className="opacity-80 hover:opacity-100"
                  href="/Velora-PitchDeck-v0.1-Full.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Pitch (PDF)
                </a>
              </div>
            </div>
          </Panel>
        </div>

        {/* Content */}
        <div className="md:col-span-9 space-y-8">
          {/* Header */}
          <Panel className="p-8">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Protocol Specification
            </div>
            <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              TEMPORALIS Documentation
            </h1>
            <p className="mt-3 text-sm leading-relaxed opacity-70 max-w-3xl">
              A technical reference for epoch-governed capital systems: signal
              definitions, enforcement constraints, and invariant guarantees.
              No marketing claims. No yield promises.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#epoch"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs opacity-85 hover:opacity-100"
              >
                Jump to Epoch Model
              </a>
              <a
                href="#invariants"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs opacity-85 hover:opacity-100"
              >
                Read Invariants
              </a>
              <Link
                href="/technology"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs opacity-85 hover:opacity-100"
              >
                Technical Page
              </Link>
            </div>
          </Panel>

          <DocSection
            id="intro"
            title="Introduction"
            body="TEMPORALIS defines a protocol standard for time-segmented capital governance. This documentation specifies behavioral expectations, signal definitions, and enforcement constraints."
            bullets={[
              "Not a token. Not a vault UI. A protocol-level specification.",
              "Epochs define measurement boundaries and rebalance eligibility.",
              "Signals are published deterministically and evaluated under invariant constraints.",
            ]}
          />

          <DocSection
            id="epoch"
            title="Epoch Model"
            body="The system operates on discrete epochs. Each epoch defines measurement boundaries, publication windows, and deterministic enforcement of exposure changes."
            bullets={[
              "EpochStart / EpochEnd define the evaluation window.",
              "Rebalance is permitted only at epoch boundary.",
              "All per-epoch signals are immutable once finalized.",
            ]}
            callout={{
              label: "Design Intent",
              text: "Make performance comparable across time windows, preventing continuous re-optimization that hides risk.",
            }}
          />

          <DocSection
            id="gscl"
            title="GSCL Specification"
            body="GSCL converts normalized strategy outputs into confidence-weighted signals. It is deterministic and reproducible under identical inputs."
            bullets={[
              "Score reflects performance under evaluation window.",
              "Confidence reflects signal reliability under regime conditions.",
              "Output is bounded and normalized for allocation.",
            ]}
            code={[
              "signal = clamp(score × confidence)",
              "allocationWeight ∝ signal, subject to risk caps",
            ]}
          />

          <DocSection
            id="allocation"
            title="Allocation Rules"
            body="Exposure weights are computed as a function of score × confidence, bounded by predefined risk caps and epoch constraints."
            bullets={[
              "No allocation change mid-epoch.",
              "Caps enforce maximum strategy exposure per regime.",
              "Compression reduces exposure when confidence breaks thresholds.",
            ]}
          />

          <DocSection
            id="invariants"
            title="Protocol Invariants"
            body="TEMPORALIS is enforced by invariants that restrict behavior regardless of market conditions."
            bullets={[
              "Rebalances only occur at epoch boundaries.",
              "Signal immutability holds per epoch.",
              "Exposure sums satisfy precision constraints (e.g., 100% total).",
              "Adapters must not bypass caps or re-enter allocation routes.",
            ]}
            callout={{
              label: "Why invariants",
              text: "Invariants turn policy into enforceable constraints, making outputs auditable and comparable.",
            }}
          />

          <DocSection
            id="security"
            title="Security Assumptions"
            body="Signal integrity, epoch enforcement, adapter constraints, and governance boundaries define the security model of TEMPORALIS."
            bullets={[
              "Oracle integrity assumptions (if used).",
              "Registry integrity and access control.",
              "No admin path to force mid-epoch allocation overrides.",
              "Upgrades must be gated by governance policy and time delay.",
            ]}
          />

          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Notes
            </div>
            <p className="mt-3 text-sm leading-relaxed opacity-70 max-w-3xl">
              This documentation describes expected behavior and constraints.
              Any implementation MUST preserve invariants across upgrades and deployments.
            </p>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

function DocSection({
  id,
  title,
  body,
  bullets,
  callout,
  code,
}: {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
  callout?: { label: string; text: string };
  code?: string[];
}) {
  return (
    <Panel id={id} className="scroll-mt-32 p-8">
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed opacity-75 max-w-3xl">
        {body}
      </p>

      {bullets?.length ? (
        <ul className="mt-5 space-y-2 text-sm opacity-75">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {callout ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            {callout.label}
          </div>
          <div className="mt-2 text-sm opacity-75">{callout.text}</div>
        </div>
      ) : null}

      {code?.length ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-xs overflow-x-auto">
          {code.map((line, i) => (
            <div key={i} className="opacity-80">
              {line}
            </div>
          ))}
        </div>
      ) : null}
    </Panel>
  );
}