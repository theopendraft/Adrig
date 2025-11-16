import Link from "next/link";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Miporis - AI-Powered Corporate Governance Platform | ADRIG AI Technologies",
  description:
    "How ADRIG AI helped Miporis build an AI-driven governance platform that reduced manual workload by 60-70% and achieved 3× increase in enterprise inquiries.",
};

export default function MiporisPage() {
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
                Miporis
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                AI-Powered Corporate Governance Platform
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  AI Integration
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Corporate Governance
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  SaaS Platform
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Problem Statement
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Corporate governance teams today deal with increasing regulatory
                pressure, manual documentation, and delayed risk detection. For
                many organisations, governance becomes reactive—issues are
                identified only after audits or compliance reviews, creating
                operational delays and financial risks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MIPORIS approached us with a vision:
              </p>
              <ul className="space-y-3 mb-6">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Build an AI-driven governance platform
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Make board-level decision making faster, smarter, and
                    predictive
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Help businesses stay compliant with upcoming regulatory
                    reforms
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Reduce dependency on manual audits
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                They needed a modern, scalable, and secure digital product that
                could support AI workflows while being simple for governance
                teams to use.
              </p>
            </div>
          </div>
        </section>

        {/* What We Did Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Did
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Adrig AI Technologies partnered with MIPORIS to transform their
                idea into a fully operational platform.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Product Architecture & Strategy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Designed a future-ready system capable of handling
                    governance data, risk models, and compliance workflows.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    AI Integration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Implemented intelligent modules that analyse governance
                    patterns and flag early risks.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Dashboard Design & UX
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Created a clean, board-friendly interface that presents
                    insights in real time.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Automation Tools
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Built automated workflows for compliance tracking, risk
                    scoring, and document management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ensured the product can handle enterprise-level clients and
                    large datasets.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Security & Governance Standards
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrated secure data handling practices aligned with
                    corporate compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Helped Them (Impact)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Within months of deployment, MIPORIS began to see measurable
                results:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Operational Improvements
                  </h3>
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        <strong>60–70% reduction</strong> in manual governance
                        workload
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Faster risk identification and early flagging of issues
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Improved accuracy in compliance tracking
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Seamless internal audit preparation
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Business Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
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
                      <span className="text-gray-700">
                        Enabled entry to UK corporate governance market with
                        strong AI product
                      </span>
                    </li>
                    <li className="flex items-start">
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
                      <span className="text-gray-700">
                        Strong positioning ahead of new regulatory reforms
                        (Provision 29 – 2026)
                      </span>
                    </li>
                    <li className="flex items-start">
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
                      <span className="text-gray-700">
                        Increased trust from enterprise clients
                      </span>
                    </li>
                    <li className="flex items-start">
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
                      <span className="text-gray-700">
                        Higher product adoption due to simplified UX &
                        intelligent automation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Outcome Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Business Outcome
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                After launching the AI-powered governance platform, MIPORIS saw
                strong commercial uplift:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                  <div className="text-4xl font-bold text-primary mb-2">3×</div>
                  <p className="text-gray-700 font-semibold">
                    Increase in enterprise inquiries within the first quarter
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    60-70%
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Reduction in manual governance workload
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Premium Pricing
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Significant client savings enabled premium charging model
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <div className="text-lg font-bold text-purple-600 mb-2">
                    AI-First Platform
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Stronger pitch for investors with competitive advantage
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl">
                <p className="text-xl leading-relaxed">
                  <strong>
                    MIPORIS is now positioned as a future-ready governance SaaS
                    platform
                  </strong>{" "}
                  with clear competitive advantage in a fast-growing regulatory
                  market.
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
