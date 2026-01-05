import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import SolanaBlockchainDevelopment from "@/components/services/SolanaBlockchainDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solana Blockchain Development Company | Adrig AI Technologies",
  description:
    "High-performance blockchain development on Solana. Solana Blockchain Development Company from Adrig AI Technologies. Build scalable dApps, DeFi platforms, and NFT marketplaces on Solana.",
};

export default function SolanaDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <SolanaBlockchainDevelopment />
      <Footer />
    </main>
  );
}

