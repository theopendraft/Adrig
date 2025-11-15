import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import WorkflowAutomation from "@/components/services/WorkflowAutomation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Workflow Automation | Adrig",
  description: "Transform your business operations with intelligent workflow automation solutions.",
};

export default function WorkflowAutomationPage() {
  return (
    <main className="min-h-screen pt-20">
      <AdrigNavbarTabs />
      <WorkflowAutomation />
      <Footer />
    </main>
  );
}
