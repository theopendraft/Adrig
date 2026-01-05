import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import BigDataConsulting from "@/components/services/BigDataConsulting";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Big Data Consulting Company | Adrig AI Technologies",
  description:
    "Architecture and optimization for large-scale data. Big Data Consulting services from Adrig AI Technologies. Harness the power of big data with deep expertise in distributed computing frameworks.",
};

export default function BigDataConsultingPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <BigDataConsulting />
      <Footer />
    </main>
  );
}

