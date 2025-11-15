import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import SaasDevelopment from "@/components/services/SaasDevelopment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SAAS Development | Adrig AI Technologies",
  description:
    "Custom SAAS development solutions from Adrig AI Technologies. We build scalable, cloud-based applications that drive business growth and enhance user experience.",
};

export default function SaasDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <SaasDevelopment />
      <Footer />
    </main>
  );
}
