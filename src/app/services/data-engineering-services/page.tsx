import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import DataEngineeringServices from "@/components/services/DataEngineeringServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Engineering Services | Adrig AI Technologies",
  description:
    "End-to-end data engineering services from Adrig AI Technologies. We build reliable data pipelines, data warehouses, and analytics solutions that drive business growth.",
};

export default function DataEngineeringServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <DataEngineeringServices />
      <Footer />
    </main>
  );
}

