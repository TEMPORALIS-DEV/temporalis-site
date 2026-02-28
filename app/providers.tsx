"use client";

import React, { useEffect, useMemo } from "react";

// AppKit (Reown)
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { createConfig, http } from "wagmi";
import { mainnet, base, arbitrum } from "wagmi/chains";

let appKitInited = false;

function buildWagmiConfig() {
  return createConfig({
    chains: [mainnet, base, arbitrum],
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
      [arbitrum.id]: http(),
    },
  });
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const wagmiConfig = useMemo(() => buildWagmiConfig(), []);

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

    // لو ما عندك ProjectId لا نسوي init — عشان ما يطيح
    if (!projectId) return;

    if (!appKitInited) {
      createAppKit({
        projectId,
        // minimal config
        metadata: {
          name: "Velora Protocol",
          description: "On-chain proof of investment strategies.",
          url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
          icons: [],
        },
        networks: [mainnet, base, arbitrum],
      });

      appKitInited = true;
    }
  }, []);

  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}