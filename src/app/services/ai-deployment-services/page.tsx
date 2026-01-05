import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import AIDeploymentServices from "@/components/services/AIDeploymentServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Deployment Services Company | Adrig AI Technologies",
  description:
    "Our AI deployment services enable seamless integration of cutting-edge AI solutions into your business operations, ensuring a smooth transition from development to real-world application.",
};

export default function AIDeploymentServicesPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <AIDeploymentServices />
      <Footer />
    </>
  );
}

