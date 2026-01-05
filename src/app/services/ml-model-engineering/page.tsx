import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import MLModelEngineering from "@/components/services/MLModelEngineering";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ML Model Engineering Services | Adrig AI Technologies",
  description:
    "Production-grade ML model design and delivery from Adrig AI Technologies. Build powerful machine learning models with deep expertise in ML frameworks, NLP, deep learning, and DevOps.",
};

export default function MLModelEngineeringPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <MLModelEngineering />
      <Footer />
    </main>
  );
}

