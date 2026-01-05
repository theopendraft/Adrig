"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmartContractAudit() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      number: "01",
      title: "Specification Assembling and Client Consultation",
      description:
        "Understanding your project's details is integral to our smart contract audit services. We gather the specifications of your code, and comprehend its design, build process and architecture to grasp its intended functionalities.",
    },
    {
      number: "02",
      title: "Automated Review and Testing",
      description:
        "Utilizing high-end tools, including MythX, Certik's SkyHarbor and Quill Hash, we conduct several analysis techniques to examine your source code's potential risks that involve syntax errors, security loopholes, bugs and other weaknesses.",
    },
    {
      number: "03",
      title: "Initial Audit Report Submission",
      description:
        "After the vulnerability inspection of your smart contract, our developers provide an initial comprehensive audit report, stating all the findings and effective recommendations to fix the issues.",
    },
    {
      number: "04",
      title: "Issue Fixing by Developers",
      description:
        "Once the initial audit report is submitted, the detected issues and bugs are fixed by the developers either from the client's side or from our end, if required.",
    },
    {
      number: "05",
      title: "Inspecting the Rectified Code",
      description:
        "After the necessary changes in the code are made, we review the rectified code and run a series of tests to verify if the code quality has improved and all the issues have been resolved.",
    },
    {
      number: "06",
      title: "Final Report Documentation and Submission",
      description:
        "In the final step, we document every detail and vital information of our smart contract audit to deliver a fully customized, transparent and comprehensive report to the client.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Improved Optimization",
      description:
        "Smart contract audits can optimize your code by revealing any indirect command execution like unknown code, reentrancy, runtime errors, interface issues, gas-intensive operations and other flaws.",
    },
    {
      number: "02.",
      title: "Security",
      description:
        "Proper smart contract audits aid in discovering possible security vulnerabilities and risks by eradicating bugs and insecure codes so that the system remains tamper-proof and protected against any malicious attacks.",
    },
    {
      number: "03.",
      title: "Boost Efficiency",
      description:
        "Auditing smart contracts help improve the efficiency of your code by ensuring that the codes are well-written and organized and assist in verifying that all variables and functions are precise yet descriptive.",
    },
    {
      number: "04.",
      title: "Better Performance",
      description:
        "Auditing a smart contract before deploying it can assist in triggering the automation process of your smart contract without any glitches or hindrances and improve the contract's overall functionality.",
    },
  ];

  const faqs = [
    {
      question: "What is a smart contract audit?",
      answer:
        "A smart contract audit examines the source code of a smart contract line-by-line to scrutinize if the code has any security loopholes or vulnerabilities so that the code quality can be improved and any potential risks can be reduced. Our smart contract audit services include both automatic and manual testing to address the shortcomings of your source code and prevent it from all possible vulnerabilities.",
    },
    {
      question: "How much time does it take to audit a smart contract?",
      answer:
        "The time required to audit a smart contract depends on various factors including the complexity of the contract, the number of lines of code, the number of functions, and the depth of analysis required. Typically, a comprehensive audit can take anywhere from a few days to several weeks. We provide an initial timeline estimate after reviewing your project specifications during the consultation phase.",
    },
    {
      question: "Is auditing smart contracts mandatory?",
      answer:
        "While auditing smart contracts is not legally mandatory, it is highly recommended and considered a best practice. Smart contracts are irreversible and cannot be edited once deployed, making them vulnerable to exploits if not properly audited. An audit helps identify and fix security vulnerabilities, optimize code, and ensure the contract functions as intended before deployment on the mainnet.",
    },
    {
      question: "How do you audit a smart contract?",
      answer:
        "Our smart contract audit process involves several steps: First, we gather specifications and understand your project's design and architecture. Then we conduct automated review and testing using high-end tools like MythX, Certik's SkyHarbor, and Quill Hash to identify potential risks. We provide an initial audit report with findings and recommendations. After issues are fixed, we review the rectified code and run tests. Finally, we deliver a comprehensive final audit report documenting all details and vital information.",
    },
    {
      question: "What smart contract vulnerabilities does a smart contract audit address?",
      answer:
        "A smart contract audit addresses various vulnerabilities including reentrancy attacks, overflow/underflow issues, access control problems, gas optimization issues, logic errors, interface issues, runtime errors, unknown code execution, insecure code patterns, and other security loopholes. Our audit process uses both automated tools and manual code review to identify and address these vulnerabilities comprehensively.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smart Contract Audit <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage our smart contract audit services to thoroughly inspect your smart contract and improve its efficacy. Our smart contract audit services include both automatic and manual testing to address the shortcomings of your source code and prevent it from all possible vulnerabilities.
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                SCHEDULE A CONSULTATION
                <img
                  src="/right-up-white.png"
                  alt="right-up"
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Two Large Image Boxes with Gap and Padding */}
        <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai1.jpg"
                  alt="Smart Contract Audit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Smart Contract Audit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Smart Contract Audit Process
            </h2>
          </div>

          {/* Process Steps Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Audit Smart Contracts Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Audit Smart Contracts?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Smart contracts are irreversible and cannot be edited once deployed. Thus, it is important to deploy error-free smart contracts that can seamlessly operate as desired without fail. A proper smart contract audit before implementing it on the mainnet can ensure the following benefits:
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {reason.number} {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Button - only show on second card (index 1) */}
                {index === 1 && (
                  <Link href="/contact" className="mt-6">
                    <button className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      GET STARTED
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-5 h-5"
                      />
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 "
                onMouseEnter={() => setOpenFaq(index)}
                onMouseLeave={() => setOpenFaq(null)}
              >
                {/* Question */}
                <button
                  className="w-full flex items-center gap-4 p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded">
                        <img
                          src="/remove.png"
                          alt="remove"
                          className="w-4 h-4"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-sm">
                        <img src="/plus.png" alt="plus" className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <span className="font-bold text-gray-900 flex-1">
                    {faq.question}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our smart contract audit services can help
              secure your smart contracts and prevent vulnerabilities.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                GET IN TOUCH
                <img
                  src="/right-up-white.png"
                  alt="Arrow Right"
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

