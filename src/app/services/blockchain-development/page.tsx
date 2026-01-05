import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import BlockchainDevelopment from "@/components/services/BlockchainDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blockchain Development Company | Adrig AI Technologies",
  description:
    "Custom blockchain solutions for your business. Blockchain development services from Adrig AI Technologies. Build decentralized solutions using Ethereum, Hyperledger, Stellar, Solana and Cosmos.",
};

export default function BlockchainDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <BlockchainDevelopment />
      <Footer />
    </main>
  );
}

