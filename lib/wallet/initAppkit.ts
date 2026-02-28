"use client";

/**
 * Reown AppKit init (EVM).
 * This file runs only on client (via Providers).
 *
 * If you don't have these packages installed yet, you can keep wallet disabled
 * by removing NEXT_PUBLIC_REOWN_PROJECT_ID from .env.local
 */

import { createAppKit } from "@reown/appkit/react";
import { wagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, base, arbitrum } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!;

const metadata = {
  name: "Velora Protocol",
  description: "On-chain proof of investment strategies (PoS²).",
  url: "https://veloraprotocol.io",
  icons: ["https://veloraprotocol.io/favicon.ico"],
};

createAppKit({
  adapters: [wagmiAdapter({ projectId, chains: [mainnet, base, arbitrum] })],
  networks: [mainnet, base, arbitrum],
  metadata,
  projectId,
  themeMode: "dark",
});