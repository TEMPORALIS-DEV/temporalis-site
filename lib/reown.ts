// lib/reown.ts
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// لازم يكون موجود في .env.local
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID ?? "";

// شبكاتنا (Mainnet + Testnet)
export const networks = [mainnet, sepolia] as const;

// Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
});

// AppKit Instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: "Velora",
    description: "Velora Protocol — DeFi access layer",
    url: "https://veloraprotocol.io",
    icons: ["https://veloraprotocol.io/favicon.ico"]
  },
  // اختياري: لو تبي تخليها تبدأ على Mainnet
  defaultNetwork: mainnet
});