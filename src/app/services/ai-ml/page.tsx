import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIDevelopment from "@/components/services/AIDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Development Company | Adrig AI Technologies",
  description:
    "Maximize your business potential with our AI development services, designed to streamline your business workflows and amplify operational efficiency.",
};

export default function AIDevelopmentPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <AIDevelopment />
      <Footer />
    </>
  );
}

