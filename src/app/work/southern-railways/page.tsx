import Link from "next/link";
import Image from "next/image";
import AdrigNavbarTabs from "@/components/AdrigNavbarTabs";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Southern Railways - Railway Block Management System (RBMS) | ADRIG AI Technologies",
  description:
    "How ADRIG AI built RBMS for Southern Railways - a digital block management system that eliminated overlapping incidents and reduced approval time by 50%.",
};

export default function SouthernRailwaysPage() {
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
                Southern Railways (RBMS)
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Railway Block Management System
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Digital Transformation
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Railway Operations
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Safety System
                </span>
              </div>
              <div className="mt-12">
                <Image
                  src="/Website/Products/Rbms/portrait-railroader-man-worker-with-clipboard-standing-by-railroad-tracks-cargo-freight-train-background.jpg"
                  alt="Railway Worker at Southern Railways"
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Southern Railways needed a centralized and reliable system for
                managing railway maintenance blocks. These blocks are essential
                for track maintenance, signal works, cable laying, and other
                field activities — but if not coordinated properly, two teams
                might request work on the same track section at the same time,
                risking collisions or operational failures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                To eliminate these issues, Adrig AI Technologies built{" "}
                <strong>
                  RBMS – a complete digital Block Management System
                </strong>{" "}
                used internally by railway employees.
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
                Railway employees across multiple depots and divisions were
                manually coordinating block permissions through calls, WhatsApp
                messages, and paperwork. This caused multiple issues:
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
                    Overlapping block requests on the same track section
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
                    No real-time visibility of ongoing, approved, or cancelled
                    blocks
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
                    Miscommunication between S&T, TRAFFIC, ENGINEERING, and
                    ELECTRICAL departments
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
                    Delays in granting permissions
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
                    High risk of operational errors due to human dependency
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
                    No record-level tracking or audit trail
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Railways needed a digital, error-free platform where all
                departments could coordinate smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* What We Delivered Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Delivered
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We built RBMS, a powerful internal tool for railway staff with
                features including:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Slot-Based Block Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Employees can request blocks by selecting the track section,
                    timing, depot, work category, and activities. The system
                    automatically checks for conflicts and prevents two works
                    from occurring in the same location.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Multi-Department Approval Workflow
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    RBMS supports end-to-end approvals involving:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      S&T
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Traffic
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Engineering
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Electrical
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Section Controllers
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Each action is timestamped and traceable.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Real-Time Block Status Dashboard
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Employees can instantly view:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center text-gray-700">
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
                      Pending blocks
                    </li>
                    <li className="flex items-center text-gray-700">
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
                      Ongoing blocks
                    </li>
                    <li className="flex items-center text-gray-700">
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
                      Completed blocks
                    </li>
                    <li className="flex items-center text-gray-700">
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
                      Rejected and cancelled requests
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Safety-Driven Conflict Prevention
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If any block overlaps with an existing one, the system
                    immediately alerts the user and restricts submission —
                    ensuring no two teams work on the same track simultaneously.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/Website/Products/Rbms/people-watching-as-train-approaches.jpg"
                      alt="Railway Safety Operations"
                      width={800}
                      height={500}
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. Revision, Resubmission & Remarks
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Railway officers can comment, request changes, or revise
                    block timings, creating transparent communication between
                    departments.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    6. Audit Trail & Reporting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every block is logged with detailed history and exported as
                    daily reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Impact & Results
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                After deploying RBMS:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    0
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Overlapping block incidents reported
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                  <div className="text-4xl font-bold text-primary mb-2">
                    70%
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Drop in administrative confusion between departments
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50%
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Reduction in approval time
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    2-3 hrs
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Saved per day per staff member
                  </p>
                </div>
              </div>

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
                    Daily block tracking became fully digital
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
                    Safety and operational efficiency improved significantly
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl mt-8">
                <p className="text-xl leading-relaxed">
                  <strong>
                    RBMS is now an essential component of Southern
                    Railway&apos;s internal digital workflow.
                  </strong>
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
