import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HireGolangDevelopers from "@/components/services/HireGolangDevelopers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Golang Developers | Adrig AI Technologies",
  description:
    "Expert Golang developers for blockchain projects. Hire Golang Developers from Adrig AI Technologies. Launch business-ready solutions and custom futuristic dApps with our Go development services.",
};

export default function HireGolangDevelopersPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <HireGolangDevelopers />
      <Footer />
    </main>
  );
}

