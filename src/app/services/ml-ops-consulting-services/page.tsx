import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import MLOpsConsulting from "@/components/services/MLOpsConsulting";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MLOps Consulting Services | Adrig AI Technologies",
  description:
    "We optimize your business's machine learning operations for improved productivity and efficiency by automating ML pipelines and implementing AutoML platforms.",
};

export default function MLOpsConsultingServicesPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <MLOpsConsulting />
      <Footer />
    </>
  );
}

