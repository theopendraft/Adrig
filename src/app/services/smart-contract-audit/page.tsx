import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import SmartContractAudit from "@/components/services/SmartContractAudit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Smart Contract Audit Company | Adrig AI Technologies",
  description:
    "Comprehensive security audits for smart contracts. Smart Contract Audit Company from Adrig AI Technologies. Thorough inspection and improvement of smart contract efficacy with automated and manual testing.",
};

export default function SmartContractAuditPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AdrigNavbarTabs />
      <SmartContractAudit />
      <Footer />
    </main>
  );
}

