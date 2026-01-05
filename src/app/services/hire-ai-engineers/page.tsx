import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HireAIEngineers from "@/components/services/HireAIEngineers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire AI Engineers | Adrig AI Technologies",
  description:
    "Whether you want to initiate or advance your AI journey, trust our AI engineers to provide the expertise you need.",
};

export default function HireAIEngineersPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <HireAIEngineers />
      <Footer />
    </>
  );
}

