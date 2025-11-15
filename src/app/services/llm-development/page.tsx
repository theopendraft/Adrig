import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import LLMDevelopment from "@/components/services/LLMDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LLM Development Services | Adrig",
  description: "Custom Large Language Model solutions to transform your business operations through AI.",
};

export default function LLMDevelopmentPage() {
  return (
    <main className="min-h-screen pt-20">
      <AdrigNavbarTabs />
      <LLMDevelopment />
      <Footer />
    </main>
  );
}
