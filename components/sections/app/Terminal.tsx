"use client";

import { useEpoch } from "../../layout/EpochProvider";
import { useState } from "react";
import LockModal from "./LockModal";
import Toast from "./Toast";
import ConnectWallet from "../../web3/ConnectWallet";

export default function Terminal() {
  const { s } = useEpoch();
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const gsclScore = 0.82;
  const gsclTier = "Prime";

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 flex justify-center">
        <ConnectWallet />
      </div>

      {/* EPOCH DISPLAY */}
      <div className="mb-16 text-center">
        <div className="text-xs tracking-[0.3em] text-[var(--text-muted)]">
          CURRENT EPOCH
        </div>
        <div className="mt-4 text-6xl tracking-tight text-[var(--titanium)]">
          {s.ok ? s.epochIndex ?? "—" : "—"}
        </div>
      </div>

      {/* GSCL */}
      <div className="mb-16 border border-[var(--border-subtle)] p-10 rounded-lg bg-[var(--bg-elevated)]">
        <div className="text-xs tracking-[0.25em] text-[var(--text-muted)]">
          GSCL SIGNAL
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-4xl text-[var(--text-primary)]">{gsclScore}</div>
          <div className="text-sm text-[var(--sovereign-gold)]">{gsclTier}</div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="
            border border-[var(--border-strong)]
            text-[var(--sovereign-gold)]
            px-8 py-3 rounded-md tracking-wide transition
            hover:border-[var(--sovereign-gold)]
            hover:text-white
          "
        >
          Lock Allocation
        </button>
      </div>

      {showModal && (
        <LockModal
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setShowModal(false);
            setToast(true);
            setTimeout(() => setToast(false), 3000);
          }}
        />
      )}

      {toast && <Toast message="Allocation Locked Successfully" />}
    </section>
  );
}