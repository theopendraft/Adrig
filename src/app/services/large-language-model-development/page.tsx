import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import LargeLanguageModelDevelopment from "@/components/services/LargeLanguageModelDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Large Language Model Development Company | Adrig AI Technologies",
  description:
    "Comprehensive suite of LLM development services tailored to meet your industry-specific needs. Custom LLM development and fine-tuning from Adrig AI Technologies.",
};

export default function LargeLanguageModelDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <LargeLanguageModelDevelopment />
      <Footer />
    </main>
  );
}