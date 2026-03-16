import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { EpochProvider } from "../components/layout/EpochProvider";
import BackgroundLayer from "../components/layout/BackgroundLayer";

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