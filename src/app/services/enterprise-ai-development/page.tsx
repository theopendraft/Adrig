import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import EnterpriseAIDevelopment from "@/components/services/EnterpriseAIDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise AI Development Company | Adrig AI Technologies",
  description:
    "Eliminate workflow pain points and accelerate your digital transformation journey with our enterprise AI development services.",
};

export default function EnterpriseAIDevelopmentPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <EnterpriseAIDevelopment />
      <Footer />
    </>
  );
}

