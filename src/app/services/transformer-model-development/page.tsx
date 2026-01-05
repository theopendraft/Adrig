import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import TransformerModelDevelopment from "@/components/services/TransformerModelDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transformer Model Development Services | Adrig AI Technologies",
  description:
    "Transform the way you process and analyze data with our custom Transformer models.",
};

export default function TransformerModelDevelopmentPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <TransformerModelDevelopment />
      <Footer />
    </>
  );
}

