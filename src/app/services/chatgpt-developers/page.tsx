import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import ChatGPTDevelopers from "@/components/services/ChatGPTDevelopers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChatGPT Developers | Adrig AI Technologies",
  description:
    "Our skilled ChatGPT developers build custom OpenAI model-powered solutions that deliver exceptional conversational experiences and streamline business processes.",
};

export default function ChatGPTDevelopersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <ChatGPTDevelopers />
      <Footer />
    </main>
  );
}


