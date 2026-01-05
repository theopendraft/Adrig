import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import TezosDevelopment from "@/components/services/TezosDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tezos Development | Adrig AI Technologies",
  description:
    "Self-amending blockchain development on Tezos. Tezos Development from Adrig AI Technologies. Develop Tezos-based assets and applications with smart contract safety and long-term upgradability.",
};

export default function TezosDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <TezosDevelopment />
      <Footer />
    </main>
  );
}

