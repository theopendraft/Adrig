import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIMarketingAgentDevelopment from "@/components/services/AIMarketingAgentDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Marketing Agent Development | Adrig AI Technologies",
  description:
    "We build intelligent AI agents for marketing teams using advanced tools such as Crew AI, AutoGen Studio, and TaskWeaver to streamline marketing operations.",
};

export default function AIMarketingAgentDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <AIMarketingAgentDevelopment />
      <Footer />
    </main>
  );
}

