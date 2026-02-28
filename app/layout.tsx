import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { EpochProvider } from "../components/layout/EpochProvider";
import Web3Provider from "../components/web3/Web3Provider";

export const metadata: Metadata = {
  title: "TEMPORALIS",
  description: "Temporal Capital Intelligence Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="production-bg text-[var(--text-primary)] antialiased">
        <Web3Provider>
          <EpochProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </EpochProvider>
        </Web3Provider>
      </body>
    </html>
  );
}