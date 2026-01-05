import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import DataAnalyticsService from "@/components/services/DataAnalyticsService";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Analytics Service | Adrig AI Technologies",
  description:
    "Data analytics services from Adrig AI Technologies. Analytics solutions for insights and decision-making. Leverage expert data analysts to harness the power of data.",
};

export default function DataAnalyticsServicePage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <DataAnalyticsService />
      <Footer />
    </main>
  );
}

