import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HireActionTransformerDevelopers from "@/components/services/HireActionTransformerDevelopers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Action Transformer Developers | Adrig AI Technologies",
  description:
    "Leverage our AI expertise to build powerful Action Transformer-powered solutions and apps that can perform diverse tasks based on user inputs.",
};

export default function HireActionTransformerDevelopersPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <HireActionTransformerDevelopers />
      <Footer />
    </>
  );
}

