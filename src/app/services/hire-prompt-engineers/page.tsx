import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import HirePromptEngineers from "@/components/services/HirePromptEngineers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Prompt Engineers | Adrig AI Technologies",
  description:
    "As experts in developing, training, and deploying generative models, we provide top-notch prompt engineering services to help you unlock the full potential of your generative AI models.",
};

export default function HirePromptEngineersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <HirePromptEngineers />
      <Footer />
    </main>
  );
}

