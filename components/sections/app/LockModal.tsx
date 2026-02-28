"use client";

export default function LockModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur">

      <div className="w-full max-w-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-8 rounded-lg">

        <div className="text-sm tracking-[0.2em] text-[var(--text-muted)] mb-6">
          LOCK ALLOCATION
        </div>

        <input
          type="number"
          placeholder="Enter Amount"
          className="w-full mb-6 bg-black border border-[var(--border-subtle)] px-4 py-3 text-sm"
        />

        <div className="flex justify-between">

          <button
            onClick={onClose}
            className="text-sm text-[var(--text-muted)]"
          >
            Cancel
          </button>

          <button
            onClick={onSuccess}
            className="text-sm text-[var(--sovereign-gold)]"
          >
            Confirm
          </button>

        </div>

      </div>
    </div>
  );
}