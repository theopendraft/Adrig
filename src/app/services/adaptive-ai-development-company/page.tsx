import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AdaptiveAIDevelopmentCompany from "@/components/services/AdaptiveAIDevelopmentCompany";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adaptive AI Development Company | Adrig AI Technologies",
  description:
    "Harness the power of adaptive AI to transform your business operations and improve customer satisfaction. Custom adaptive AI solutions from Adrig AI Technologies.",
};

export default function AdaptiveAIDevelopmentCompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <AdaptiveAIDevelopmentCompany />
      <Footer />
    </main>
  );
}

