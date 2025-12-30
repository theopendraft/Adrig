import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import GenerativeConsultingCompany from "@/components/services/GenerativeConsultingCompany";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Generative AI Consulting Company | Adrig AI Technologies",
  description:
    "Comprehensive generative AI consulting services. We help you harness the potential of generative AI for improved operations and enhanced product offerings.",
};

export default function GenerativeConsultingCompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <GenerativeConsultingCompany />
      <Footer />
    </main>
  );
}

