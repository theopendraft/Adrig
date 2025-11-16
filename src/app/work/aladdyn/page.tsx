import Link from "next/link";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Aladdyn - Intelligent AI Assistant for Productivity & Creativity | ADRIG AI Technologies",
  description:
    "Aladdyn is a next-generation AI assistant that boosts productivity, enhances creativity, and supports teams with smart chat, personalization, and real-time insights.",
};

export default function AladdynPage() {
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
                Aladdyn
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Your Intelligent AI Assistant for Work, Creativity & Everyday
                Productivity
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  AI Assistant
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Conversational AI
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Productivity Tool
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Product Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aladdyn is a next-generation AI assistant designed to simplify
                your day, boost productivity, and support both personal and
                professional tasks with ease.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Built with <strong>advanced conversational intelligence</strong>
                , it acts as a smart companion that understands context, adapts
                to your style, and delivers accurate, meaningful responses
                instantly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re writing content, planning tasks, solving
                problems, or simply looking for inspiration —{" "}
                <strong>Aladdyn is always ready to help.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Key Features of Aladdyn
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. AI-Powered Smart Chat
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aladdyn provides natural, human-like conversation. You can
                    brainstorm ideas, ask questions, refine writing, get
                    explanations, or hold long contextual discussions — all with
                    a single click.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Deep Memory & Personalization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The assistant remembers your previous conversations,
                    preferences, and working style. This helps it give more
                    personalized answers the more you use it.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Creative Writing & Content Assistance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From scripts, captions, short stories, and blogs to social
                    media posts — Aladdyn helps you draft and improve content
                    quickly and creatively.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Task Planning & Idea Organization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create plans, to-do lists, strategies, and structured
                    outlines effortlessly. Aladdyn helps you break down complex
                    tasks into simple, step-by-step action plans.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. Real-Time Information & Insights
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aladdyn pulls up-to-date data, insights, and explanations
                    across multiple topics, helping you stay informed and make
                    better decisions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    6. User-Friendly Interface
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A clean, intuitive design makes it easy for anyone —
                    beginners or advanced users — to get value instantly. No
                    technical skills needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    7. Cross-Scenario Support
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Use Aladdyn for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Writing and content creation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Learning and research
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                      <span className="text-gray-700">Daily productivity</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                      <span className="text-gray-700">Creative projects</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Communication assistance
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Personal brainstorming sessions
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Professional document drafting
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                        Decision-making and strategy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    8. Always On, Always Fast
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aladdyn responds instantly, giving you a{" "}
                    <strong>24/7 digital partner</strong> who never slows down
                    or needs a break.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                How Aladdyn Helps Your Business
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Boosts Team Productivity
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Employees can get instant help with:
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Emails
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Reports
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Presentations
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Documentation
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Research
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
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
                      Content drafts
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This speeds up workflows and reduces manual effort.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Enhances Creativity Across Departments
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Marketing, design, content, and brand teams can use Aladdyn
                    to generate ideas, scripts, captions, campaign concepts, and
                    more — helping teams innovate faster.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Reduces Operational Load
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Instead of searching through multiple apps or browsing
                    endlessly, your team can ask Aladdyn directly and get the
                    exact answer they need.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Strengthens Decision-Making
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    With real-time insights, summaries, and structured
                    breakdowns, decision-makers can move faster and with more
                    clarity.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. Improves Internal Support & Onboarding
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    New team members can use Aladdyn to understand workflows,
                    collect information, or write documentation instantly,
                    making onboarding smoother.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    6. Consistent Knowledge Base
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Because Aladdyn remembers conversations, teams maintain
                    continuity across long-term projects — reducing confusion
                    and miscommunication.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    7. Cost-Saving
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Instead of hiring multiple micro-services or external tools,
                    one AI assistant can handle:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Writing
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Editing
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Strategy
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Research
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Ideation
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
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
                      Planning
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    All in one place.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl border-l-4 border-teal-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    8. Scalable for Any Industry
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Whether it&apos;s tech, marketing, education, finance,
                    hospitality, or creative fields, Aladdyn adapts to the work
                    environment effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  24/7 Intelligent Companion
                </h3>
                <p className="text-xl leading-relaxed">
                  Aladdyn combines{" "}
                  <strong>
                    advanced AI, deep personalization, and real-time insights
                  </strong>{" "}
                  to become your team&apos;s most reliable productivity partner
                  — always on, always fast, always helpful.
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
