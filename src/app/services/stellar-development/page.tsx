import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import StellarBlockchainDevelopment from "@/components/services/StellarBlockchainDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stellar Blockchain Development Company | Adrig AI Technologies",
  description:
    "Payment and financial solutions on Stellar network. Stellar Blockchain Development Company from Adrig AI Technologies. Build feature-rich dApps, smart contracts, and solutions on Stellar.",
};

export default function StellarDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <StellarBlockchainDevelopment />
      <Footer />
    </main>
  );
}

