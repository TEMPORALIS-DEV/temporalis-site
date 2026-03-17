import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { EpochProvider } from "../components/layout/EpochProvider";
import BackgroundLayer from "../components/layout/BackgroundLayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://temporalis.dev"),
  title: {
    default: "TEMPORALIS",
    template: "%s | TEMPORALIS",
  },
  description: "Temporal Capital Intelligence Infrastructure",
  keywords: [
    "TEMPORALIS",
    "Temporal Capital Intelligence Infrastructure",
    "DeFi",
    "Web3",
    "capital infrastructure",
    "epoch-based protocol",
    "risk engine",
    "GSCL",
    "allocation engine",
  ],
  applicationName: "TEMPORALIS",
  authors: [{ name: "TEMPORALIS" }],
  creator: "TEMPORALIS",
  publisher: "TEMPORALIS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TEMPORALIS",
    description:
      "Evaluate capital through time. Temporal capital intelligence infrastructure.",
    url: "https://temporalis.dev",
    siteName: "TEMPORALIS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMPORALIS",
    description:
      "Evaluate capital through time. Temporal capital intelligence infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EpochProvider>
          <BackgroundLayer />

          <div className="topnav-fixed">
            <Navbar />
          </div>

          <main className="site-main">
            <div className="page-panel">{children}</div>
          </main>

          <Footer />
        </EpochProvider>
      </body>
    </html>
  );
}