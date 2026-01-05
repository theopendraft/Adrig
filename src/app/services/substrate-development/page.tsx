import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import SubstrateDevelopment from "@/components/services/SubstrateDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Substrate Development Services | Adrig AI Technologies",
  description:
    "Build custom blockchains using Substrate framework. Substrate Development Services from Adrig AI Technologies. Leverage Substrate SDK framework's flexibility to build future-proof blockchains.",
};

export default function SubstrateDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <SubstrateDevelopment />
      <Footer />
    </main>
  );
}

