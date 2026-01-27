import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Velora — Official Website",
  description:
    "Velora is a Web3 protocol focused on secure, composable design and a clean user experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}