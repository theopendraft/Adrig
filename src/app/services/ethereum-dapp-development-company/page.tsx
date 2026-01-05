import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import EthereumDAppDevelopment from "@/components/services/EthereumDAppDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ethereum dApp Development Company | Adrig AI Technologies",
  description:
    "Decentralized application development on Ethereum. Ethereum dApp Development Company from Adrig AI Technologies. Build customized Ethereum-powered dApps for Web3, NFTs, gaming, metaverse, DeFi, and more.",
};

export default function EthereumDAppDevelopmentCompanyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <EthereumDAppDevelopment />
      <Footer />
    </main>
  );
}

