"use client";

import { useState } from "react";
import Link from "next/link";

export default function WorkflowAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    "Automated task routing based on rules and AI decision-making",
    "Seamless integration with existing tools like CRM, ERP, HRMS, and databases",
    "Real-time monitoring and workflow analytics",
    "Multi-step automation sequences for end-to-end processes",
    "Intelligent triggers for emails, notifications, approvals, and escalations",
    "Scalable architecture capable of handling large operational workloads",
  ];

  const benefits = [
    {
      number: "01",
      title: "Reduce manual workload and improve team productivity",
    },
    {
      number: "02",
      title: "Minimize human errors with consistent, automated processes",
    },
    {
      number: "03",
      title: "Accelerate approvals and decision-making across departments",
    },
    {
      number: "04",
      title: "Improve operational transparency with analytics and tracking",
    },
    {
      number: "05",
      title:
        "Boost customer satisfaction through faster response and processing",
    },
    {
      number: "06",
      title: "Achieve scalable operations without increasing manpower",
    },
  ];

  const methodologies = [
    {
      title: "Rule-based Automation",
      description:
        "Predefined workflows for repetitive processes requiring consistency.",
    },
    {
      title: "AI-driven Decision Systems",
      description:
        "Smart automation using machine learning for dynamic workflows.",
    },
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "Mimicking user actions to automate tasks across applications.",
    },
    {
      title: "API-Based Automations",
      description:
        "Connecting multiple systems for seamless data flow and task completion.",
    },
    {
      title: "Event-triggered Workflows",
      description:
        "Automations activated by specific user actions or system events.",
    },
    {
      title: "Automated Reporting & Notifications",
      description: "Generating insights and alerts without manual involvement.",
    },
  ];

  const faqs = [
    {
      question: "What processes can be automated?",
      answer:
        "Anything from approvals, data entry, ticketing, billing, onboarding, and customer support-almost all repetitive processes.",
    },
    {
      question: "How long does workflow automation implementation take?",
      answer:
        "Most projects take 3–8 weeks, depending on the number of workflows and integrations.",
    },
    {
      question: "Will automation replace employees?",
      answer:
        "No. It enhances employee productivity by removing repetitive tasks, allowing teams to focus on high-value work.",
    },
    {
      question: "Can workflows be customized for our business?",
      answer:
        "Absolutely. All automations are designed based on your exact processes and tools.",
    },
    {
      question: "Do you offer ongoing monitoring?",
      answer:
        "Yes, we continuously track, optimize, and improve workflows for maximum performance.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Workflow <span className="text-primary">Automation</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our workflow automation solutions streamline operations, eliminate
              repetitive tasks, and enable your business teams to operate faster
              and more efficiently with intelligent AI-backed systems.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              SCHEDULE A CONSULTATION
              <img
                src="/right-up-white.png"
                alt="right-up"
                className="w-6 h-6 "
              />
            </Link>
          </div>

          {/* Two Image Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Left Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>

            {/* Right Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Heading and Description */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies.
              </p>
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" flex items-start gap-4  p-4 rounded-xl "
                >
                  {/* Blue Arrow Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <img
                      src="/right-up-white.png"
                      alt="right-up"
                      className="w-8 h-8"
                    />
                  </div>
                  {/* Feature Text */}
                  <p className="text-lg text-gray-900 leading-relaxed flex-1">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Your Business Benefits
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for
              forward-thinking companies.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="h-48 bg-gray-100 rounded-xl p-6 justify-between flex flex-col"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded mb-4">
                  {benefit.number}
                </div>

                {/* Title */}
                <h3 className="text-lg text-gray-700 leading-relaxed">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Automation Techniques We Use
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for
              forward-thinking companies.
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {methodologies.map((methodology, index) => (
              <div key={index} className="">
                <div className="flex items-start gap-4">
                  {/* Blue Arrow Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <img
                      src="/right-up-white.png"
                      alt="right-up"
                      className="w-6 h-6"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {methodology.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {methodology.description}
                    </p>
                  </div>
                </div>
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
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>

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
                      <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
                        <img src="/plus.png" alt="plus" className="w-4 h-4" />
                      </div>
                    )}
                  </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our workflow automation solutions can help
              your business gain a competitive edge and drive growth.
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
    </>
  );
}
