import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HireDataScientists from "@/components/services/HireDataScientists";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Data Scientists | Adrig AI Technologies",
  description:
    "Hire expert data scientists from Adrig AI Technologies. Augment your team with experienced data scientists who can help unlock insights from your data and drive business growth.",
};

export default function HireDataScientistsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <HireDataScientists />
      <Footer />
    </main>
  );
}

