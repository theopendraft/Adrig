import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import GenerativeAIIntegrationServices from "@/components/services/GenerativeAIIntegrationServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Generative AI Integration Services | Adrig AI Technologies",
  description: "Embed GenAI into your existing products and workflows. Expert GenAI integration services from Adrig AI Technologies.",
};

export default function GenerativeAIIntegrationServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <GenerativeAIIntegrationServices />
      <Footer />
    </main>
  );
}

