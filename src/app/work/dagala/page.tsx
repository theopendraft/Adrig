import Link from "next/link";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Daga Group - Vertically Integrated Textile Manufacturing | ADRIG AI Technologies",
  description:
    "How Daga Group leverages vertical integration across knits, suiting, and furnishing to scale textile manufacturing with export readiness and innovation leadership.",
};

export default function DagalaPage() {
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
                Daga Group
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Vertically Integrated Textile Manufacturing Excellence
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Textile Manufacturing
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Vertical Integration
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Export Division
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement / Market Need Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Market Need & Industry Challenges
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In the textile industry, manufacturers and garment makers
                constantly face pressure to deliver high-quality, varied fabrics
                (suiting, shirting, knit, furnishing) on demand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Strong need for innovative materials that combine
                    performance, style, and sustainability, while keeping costs
                    competitive
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Growing global demand (exports) and competition from fast
                    fashion requires Indian textile companies to scale
                    manufacturing, maintain quality, and optimize their
                    logistics and supply chain
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Many fabric manufacturers lack a single, vertically
                    integrated model that spans knitting, suiting, and
                    furnishing in a streamlined way
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Daga Group Does Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Daga Group Solution
              </h2>

              <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Heritage & Expertise
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Daga Group has been operating in the textile space for{" "}
                  <strong>over three decades</strong>, building a reputation for
                  quality craftsmanship and innovation.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Vertical Integration Model
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  They unify three major textile verticals under one umbrella:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Knits
                    </h4>
                    <p className="text-gray-600">via Shree Salasar Textiles</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Suiting & Shirting
                    </h4>
                    <p className="text-gray-600">through Hanuman Textiles</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Furnishing Fabrics
                    </h4>
                    <p className="text-gray-600">using Maruti Furnishing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Product Range & Innovation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    They produce a wide array of fabrics: ethnic suiting,
                    premium shirting, sportswear fabrics, home furnishing
                    fabrics.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Focus on{" "}
                    <strong>
                      quality excellence, innovation, and sustainable practices
                    </strong>{" "}
                    as core values.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Manufacturing & Capacity
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    They&apos;ve established a modern facility in{" "}
                    <strong>Vikas Logistics (Surat, Gujarat)</strong> to enhance
                    production capacity.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Export Ambition
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In <strong>2025</strong>, they launched an{" "}
                    <strong>Export Division</strong> to serve global garment
                    manufacturers.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Leadership & Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Founded by <strong>Jagdish Daga & Narendra Daga</strong>,
                    who emphasize quality craftsmanship, innovation, and a
                    value-driven business philosophy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Mission:</strong> Become a leading textile company
                    across India, with a strong network of clients, and achieve
                    a turnover goal of <strong>~₹500 Cr by 2030</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Core Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quality Excellence
                  </h3>
                  <p className="text-gray-700">
                    Uncompromising standards in every fabric
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-700">
                    Continuous improvement and R&D
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Sustainability
                  </h3>
                  <p className="text-gray-700">
                    Eco-friendly practices throughout
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Integrity
                  </h3>
                  <p className="text-gray-700">Ethical business practices</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Lifelong Learning
                  </h3>
                  <p className="text-gray-700">Continuous skill development</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Teamwork
                  </h3>
                  <p className="text-gray-700">Collaborative excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Clients Choose Daga Group
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">
                    <strong>Customization capability:</strong> they can produce
                    tailored fabrics to client specifications
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">
                    <strong>Global distribution network</strong> for exports
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">
                    <strong>Robust quality control</strong> and testing for
                    durability, colorfastness, and performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Business Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Impact & Business Benefits
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                  <div className="text-lg font-bold text-primary mb-2">
                    Scalable Growth
                  </div>
                  <p className="text-gray-700">
                    Integrated manufacturing approach (knit + suiting +
                    furnishing) allows them to scale and optimize costs, giving
                    them a competitive edge
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    Export Readiness
                  </div>
                  <p className="text-gray-700">
                    With a dedicated export division, they can serve
                    international markets, increasing revenue potential
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Innovation Leadership
                  </div>
                  <p className="text-gray-700">
                    Focus on innovation helps them stay relevant in high-demand
                    segments (sportswear, premium fabrics) and offer
                    differentiated materials
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <div className="text-lg font-bold text-purple-600 mb-2">
                    Sustainability & Trust
                  </div>
                  <p className="text-gray-700">
                    By putting sustainability and integrity at the core, they
                    build long-term trust with clients for retention and brand
                    reputation
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">
                    ₹500 Cr
                  </div>
                  <p className="text-xl text-gray-700 font-semibold">
                    Target Turnover by 2030
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl">
                <p className="text-xl leading-relaxed">
                  <strong>Value-driven Business:</strong> Their mission-driven
                  approach combining quality, growth, and ethical practices
                  supports sustainable business growth and positions Daga Group
                  as a leading textile manufacturer in India.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* CTA Section */}
        <section className="py-20 md:py-32 bg-gray-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Let&apos;s discuss how our predictive analytics solutions can
                help your business gain a competitive edge and drive growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
              >
                GET IN TOUCH
                <img
                  src="/right-up-white.png"
                  alt="Arrow Right"
                  className="w-6 h-6 "
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
