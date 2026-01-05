import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import GenerativeAIDevelopment from "@/components/services/GenerativeAIDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Generative AI Development | Adrig AI Technologies",
  description:
    "Build end-to-end GenAI solutions tailored to your business. Expert generative AI development services from Adrig AI Technologies.",
};

export default function GenerativeAIDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <GenerativeAIDevelopment />
      <Footer />
    </main>
  );
}


