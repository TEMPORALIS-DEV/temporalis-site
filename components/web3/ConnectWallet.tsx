"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

function short(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: injected() })}
        className="border border-[var(--border-strong)] text-[var(--titanium)] px-4 py-2 rounded-md text-xs tracking-[0.12em] hover:border-[var(--sovereign-gold)] hover:text-white transition"
        disabled={isPending}
      >
        {isPending ? "Connecting…" : "Connect Wallet"}
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      className="border border-[var(--border-subtle)] text-[var(--text-muted)] px-4 py-2 rounded-md text-xs tracking-[0.12em] hover:text-white transition"
      title={address}
    >
      {short(address)} · Disconnect
    </button>
  );
}