import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HireGenerativeAIEngineers from "@/components/services/HireGenerativeAIEngineers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Generative AI Engineers | Adrig AI Technologies",
  description:
    "Hire our team of expert generative AI engineers to unlock the full potential of generative AI for your business. Specializing in domain-specific models and advanced technologies.",
};

export default function HireGenerativeAIEngineersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <HireGenerativeAIEngineers />
      <Footer />
    </main>
  );
}


