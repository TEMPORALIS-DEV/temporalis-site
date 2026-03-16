"use client";

import React from "react";

export default function ConnectWallet() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("Wallet connect is temporarily disabled.");
      }}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold",
        "bg-white/10 hover:bg-white/15 border border-white/15",
        "transition"
      ].join(" ")}
      title="Connect Wallet"
    >
      Connect Wallet
    </button>
  );
}