import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import ChatbotDevelopment from "@/components/services/ChatbotDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chatbot Development | Adrig",
  description: "Build intelligent chatbots that enhance customer engagement and automate support.",
};

export default function ChatbotDevelopmentPage() {
  return (
    <main className="min-h-screen pt-20">
      <AdrigNavbarTabs />
      <ChatbotDevelopment />
      <Footer />
    </main>
  );
}
