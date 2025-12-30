import type { Metadata } from "next";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import StableDiffusionDevelopers from "@/components/services/StableDiffusionDevelopers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stable Diffusion Developers | Adrig AI Technologies",
  description:
    "As specialists in creating Stable Diffusion model powered solutions, we bring your vision to reality through innovative image-to-image generative AI applications.",
};

export default function StableDiffusionDevelopersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdrigNavbarTabs />
      <StableDiffusionDevelopers />
      <Footer />
    </main>
  );
}

