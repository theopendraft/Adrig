import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import BlockchainConsultingServices from "@/components/services/BlockchainConsultingServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blockchain Consulting Services | Adrig AI Technologies",
  description:
    "Strategic advisory and consulting for blockchain adoption. Blockchain Consulting Company from Adrig AI Technologies. Leverage expertise to solve technology challenges in the blockchain space.",
};

export default function BlockchainConsultingServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <BlockchainConsultingServices />
      <Footer />
    </main>
  );
}

