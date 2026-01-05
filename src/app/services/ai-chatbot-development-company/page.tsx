import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIChatbotDevelopment from "@/components/services/AIChatbotDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Chatbot Development Company | Adrig AI Technologies",
  description:
    "We develop custom AI chatbots that act as intelligent assistants, ensuring 24/7 support and rapid query resolution.",
};

export default function AIChatbotDevelopmentCompanyPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <AIChatbotDevelopment />
      <Footer />
    </>
  );
}

