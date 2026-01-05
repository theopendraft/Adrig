import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import CryptoWalletDevelopment from "@/components/services/CryptoWalletDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crypto Wallet Development Solution | Adrig AI Technologies",
  description:
    "Secure cryptocurrency wallet development. Crypto Wallet Development Solution from Adrig AI Technologies. Build decentralized crypto wallets for Blockchain projects, DEXs, and DeFi platforms.",
};

export default function CryptoWalletDevelopmentSolutionPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <CryptoWalletDevelopment />
      <Footer />
    </main>
  );
}

