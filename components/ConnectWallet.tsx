"use client";

import React from "react";
import { appKit, projectId } from "@/lib/reown";

export default function ConnectWallet() {
  const disabled = !projectId;

  return (
    <button
      onClick={() => appKit.open()}
      disabled={disabled}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold",
        "bg-white/10 hover:bg-white/15 border border-white/15",
        "transition disabled:opacity-50 disabled:cursor-not-allowed"
      ].join(" ")}
      title={disabled ? "Missing NEXT_PUBLIC_REOWN_PROJECT_ID in .env.local" : "Connect Wallet"}
    >
      {disabled ? "Project ID Missing" : "Connect Wallet"}
    </button>
  );
}