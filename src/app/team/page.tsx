import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work | Adrig AI Technologies",
  description:
    "Explore Adrig AI Technologies' portfolio of innovative AI solutions, workflow automations, and custom software projects that have transformed businesses.",
};

export default function TeamPage() {
  return (
      <>
        <AdrigNavbarTabs />
        <main className="pt-20">
          <Team />
        </main>
        <Footer />
      </>
    );
}