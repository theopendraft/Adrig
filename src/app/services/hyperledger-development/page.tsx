import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HyperledgerDevelopment from "@/components/services/HyperledgerDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hyperledger Development Services | Adrig AI Technologies",
  description:
    "Enterprise blockchain solutions with Hyperledger. Hyperledger Blockchain Development Services from Adrig AI Technologies. Develop and deploy cross-industry Hyperledger blockchain applications.",
};

export default function HyperledgerDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <HyperledgerDevelopment />
      <Footer />
    </main>
  );
}

