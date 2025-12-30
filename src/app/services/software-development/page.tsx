import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software Development | Adrig AI Technologies",
  description:
    "Custom software development solutions from Adrig AI Technologies. We build innovative software solutions using AI, ML, blockchain, and advanced technologies.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <SoftwareDevelopment />
      <Footer />
    </main>
  );
}

