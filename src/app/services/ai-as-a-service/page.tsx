import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIAsAService from "@/components/services/AIAsAService";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-as-a-Service | Adrig AI Technologies",
  description:
    "Unlock the power of AI with our comprehensive AI-as-a-Service offerings. Build powerful applications without the need for in-house expertise.",
};

export default function AIAsAServicePage() {
  return (
    <>
      <AdrigNavbarTabs />
      <AIAsAService />
      <Footer />
    </>
  );
}

