"use client";

import React, { useMemo } from "react";
import { WagmiProvider } from "wagmi";
import { createConfig, http } from "wagmi";
import { mainnet, base, arbitrum } from "wagmi/chains";

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

  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}