import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us - Adrig AI Technologies",
  description:
    "Speak with an expert, not a salesperson. Get in touch with Adrig AI Technologies for AI solutions, chatbot development, and custom software.",
};

export default function ContactPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
