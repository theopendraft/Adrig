import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AICopilotDevelopment from "@/components/services/AICopilotDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Copilot Development Company | Adrig AI Technologies",
  description:
    "We leverage AI technologies like ML and NLP to develop intelligent AI copilots that streamline your business operations and drive innovation.",
};

export default function AICopilotDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <AICopilotDevelopment />
      <Footer />
    </main>
  );
}

