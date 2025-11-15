import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";
import BillsApp from "@/components/products/BillsApp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BillsApp - Smart Billing Solution | Adrig",
  description: "Smart billing solution for businesses of all sizes",
};

export default function BillsAppPage() {
  return (
    <div className="relative pt-20">
      <AdrigNavbarTabs />
      <BillsApp />
      <Footer />
    </div>
  );
}
