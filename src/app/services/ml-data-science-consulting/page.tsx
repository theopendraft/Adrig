import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import MLDataScienceConsulting from "@/components/services/MLDataScienceConsulting";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ML and Data Science Consulting | Adrig AI Technologies",
  description:
    "Strategy and advisory for ML and data initiatives. Machine Learning and Data Science Consulting Services from Adrig AI Technologies. Specializing in ML algorithms and advanced analytics.",
};

export default function MLDataScienceConsultingPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <MLDataScienceConsulting />
      <Footer />
    </main>
  );
}

