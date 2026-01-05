import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import DataAnnotationServices from "@/components/services/DataAnnotationServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Annotation Services | Adrig AI Technologies",
  description:
    "High-quality data annotation services from Adrig AI Technologies. Labeling for ML and AI workloads. Enhance your AI models with precisely annotated text, image, audio and video data.",
};

export default function DataAnnotationServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <DataAnnotationServices />
      <Footer />
    </main>
  );
}

