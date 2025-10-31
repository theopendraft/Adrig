// import Header from "@/components/Header";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import Clients from "@/components/Clients";
import Innovation from "@/components/Innovation";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AdrigNavbarTabs />
      <main>
        <Hero />
        <Partnership />
        <Clients />
        <Innovation />
        <Services />
        <Process />
        <Testimonials />
        {/* <Features /> */}
        {/* <About /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
