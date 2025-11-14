import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import PredictiveAnalytics from "@/components/services/PredictiveAnalytics";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Predictive Analytics - AI-Powered Forecasting | Adrig AI Technologies",
  description:
    "Harness the power of AI and machine learning to predict future outcomes, optimize operations, and make data-driven decisions that drive growth.",
};

export default function PredictiveAnalyticsPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <main className="pt-20">
        <PredictiveAnalytics />
      </main>
      <Footer />
    </>
  );
}
