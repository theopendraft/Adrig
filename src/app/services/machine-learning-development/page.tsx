import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import MachineLearningDevelopment from "@/components/services/MachineLearningDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Machine Learning Development Company | Adrig AI Technologies",
  description:
    "Custom ML solutions from prototyping to production. Machine learning development services from Adrig AI Technologies. Build and deploy powerful ML-based applications.",
};

export default function MachineLearningDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <MachineLearningDevelopment />
      <Footer />
    </main>
  );
}

