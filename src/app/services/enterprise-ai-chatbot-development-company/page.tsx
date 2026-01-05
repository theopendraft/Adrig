import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import EnterpriseAIChatbotDevelopment from "@/components/services/EnterpriseAIChatbotDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise AI Chatbot Development Company | Adrig AI Technologies",
  description:
    "Leverage our enterprise AI chatbot development expertise to build intelligent virtual assistants and chatbots that streamline workflows and boost customer satisfaction.",
};

export default function EnterpriseAIChatbotDevelopmentCompanyPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <EnterpriseAIChatbotDevelopment />
      <Footer />
    </>
  );
}

