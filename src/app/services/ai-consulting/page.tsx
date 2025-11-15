import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIConsulting from "@/components/services/AIConsulting";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Consulting Services | Adrig",
  description:
    "Strategic AI consulting to help businesses identify opportunities and implement intelligent solutions.",
};

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen pt-20">
      <AdrigNavbarTabs />
      <AIConsulting />
      <Footer />
    </main>
  );
}
