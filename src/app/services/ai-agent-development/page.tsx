import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIAgentDevelopment from "@/components/services/AIAgentDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent Development Company | Adrig AI Technologies",
  description:
    "Amplify business outcomes with our intelligent AI agents designed to enhance operational efficiency by automating tasks and streamlining processes.",
};

export default function AIAgentDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <AIAgentDevelopment />
      <Footer />
    </main>
  );
}


