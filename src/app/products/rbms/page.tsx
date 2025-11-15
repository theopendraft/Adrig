import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";
import RBMS from "@/components/products/RBMS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RBMS - Restaurant Billing Management System | Adrig",
  description: "Complete restaurant billing and management solution for modern restaurants",
};

export default function RBMSPage() {
  return (
    <div className="relative pt-20">
      <AdrigNavbarTabs />
      <RBMS />
      <Footer />
    </div>
  );
}
