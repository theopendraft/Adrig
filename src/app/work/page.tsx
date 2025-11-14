import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work | Adrig AI Technologies",
  description:
    "Explore Adrig AI Technologies' portfolio of innovative AI solutions, workflow automations, and custom software projects that have transformed businesses.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <Work />
      <Footer />
    </main>
  );
}
