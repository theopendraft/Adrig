import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import CosmosBlockchainDevelopment from "@/components/services/CosmosBlockchainDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cosmos Blockchain Development Company | Adrig AI Technologies",
  description:
    "Cosmos blockchain and interchain solutions. Cosmos Blockchain Development Company from Adrig AI Technologies. Build robust interchain networks, multi-asset dApps, and application-specific blockchains.",
};

export default function CosmosBlockchainDevelopmentCompanyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <CosmosBlockchainDevelopment />
      <Footer />
    </main>
  );
}

