import Link from "next/link";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Rail Rules - AI-Powered Railway Rule Clarifier | ADRIG AI Technologies",
  description:
    "How ADRIG AI built Rail Rules for Southern Railways - an AI-powered rule engine that gives instant, human-readable interpretations of complex railway regulations.",
};

export default function RailRulesPage() {
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
                Rail Rules
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                AI-Powered Railway Rule Clarifier for Southern Railways
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  AI Rule Engine
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Railway Operations
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Knowledge Management
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Railway rulebooks contain thousands of pages of technical
                regulations, making it challenging for staff to quickly find and
                interpret the rules that govern daily operations.{" "}
                <strong>Rail Rules</strong> — also known as{" "}
                <strong>Rule Clarifier AI</strong> — is a smart AI-powered rule
                engine built to give railway employees instant, human-readable
                interpretations of complex railway regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Problem Statement
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Railway staff — from station masters to clerks — often struggle
                with:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Extremely large and complex rulebooks
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Slow manual search for specific clauses
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Risk of misinterpretation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Lack of easy, digital access to rules
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Southern Railways needed a{" "}
                <strong>reliable, AI-driven solution</strong> to help staff
                quickly understand policies and make better operational
                decisions.
              </p>
            </div>
          </div>
        </section>

        {/* What We Did Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What We Did
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Centralized Rule Compendium
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We digitized and consolidated railway rules into a single
                    searchable web portal.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. AI-Powered Clarification
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Employees can ask questions like:
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-4 rounded-lg mb-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 italic">
                          &quot;What is the rule for delays?&quot;
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 italic">
                          &quot;What is the platform change protocol?&quot;
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The system gives immediate, simplified explanations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Intuitive Interface
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Designed to be fast, clean, and accessible for field staff,
                    clerks, and senior officers alike.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Continuous Updates
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rules and policies can be updated anytime, ensuring the
                    system is always in sync with latest regulations.
                  </p>
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
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Speed & Efficiency
                  </h3>
                  <p className="text-gray-700">
                    Staff get answers instantly — no more searching through
                    hundreds of pages.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-600 mb-3">
                    Accuracy
                  </h3>
                  <p className="text-gray-700">
                    Reduces mistakes caused by misinterpreting rules.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    Compliance
                  </h3>
                  <p className="text-gray-700">
                    Ensures the entire workforce follows up-to-date and accurate
                    railway guidelines.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">
                    Empowered Workforce
                  </h3>
                  <p className="text-gray-700">
                    Field staff can make confident, quick decisions with
                    clarity.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl">
                <p className="text-xl leading-relaxed text-center">
                  <strong>
                    Rail Rules modernizes the way Southern Railways handles
                    internal rule communication and compliance
                  </strong>{" "}
                  — transforming complex rulebooks into an intelligent,
                  accessible knowledge base that empowers every employee.
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
