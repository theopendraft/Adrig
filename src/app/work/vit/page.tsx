import Link from "next/link";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VIT - Case Study | ADRIG AI Technologies",
  description:
    "Discover how ADRIG AI Technologies helped VIT achieve their goals with innovative AI solutions.",
};

export default function VITPage() {
  return (
    <>
      <AdrigNavbarTabs />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-blue-50 pt-32">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/work"
                className="inline-flex items-center text-primary hover:text-blue-700 mb-6"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Work
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                VIT
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Project content will be added here.
              </p>
            </div>
          </div>
        </section>

        {/* Content sections will be added based on client requirements */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Content to be added...
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let&apos;s discuss how we can help transform your business with
                AI solutions.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-lg">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
