"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIAsAService() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const offerings = [
    {
      number: "01",
      title: "Creating No-code Custom Models",
      description:
        "Our PaaS platforms enable easy AI model creation using pre-trained models, customizable templates, and drag-and-drop tools without requiring coding or data science expertise.",
    },
    {
      number: "02",
      title: "Building Applications",
      description:
        "Our PaaS solutions use your proprietary data to build intelligent, context-aware AI applications and chatbots that enhance efficiency and business value",
    },
    {
      number: "03",
      title: "Private Deployment",
      description:
        "Our AIaaS platforms support secure private deployments, ensuring your AI applications remain accessible only to authorized users while maintaining full data confidentiality.",
    },
    {
      number: "04",
      title: "Integrating Apps Into Workflows",
      description:
        "Our platforms enable seamless integration of AI applications into your existing infrastructure and workflows, ensuring minimal disruption while maximizing efficiency and productivity.",
    },
  ];

  const benefits = [
    {
      number: "01.",
      title: "Reduced Technical Barriers",
      description:
        "Our AIaaS platforms eliminate technical barriers by handling all AI complexities, reducing costs and enabling organizations to adopt AI efficiently without in-house expertise.",
    },
    {
      number: "02.",
      title: "Save Hardware Costs",
      description:
        "Our AIaaS solutions provide a ready-to-use, customizable AI infrastructure that eliminates the need for costly hardware investments while enabling high-performance, data-driven application",
    },
    {
      number: "03.",
      title: "Absolute Transparency",
      description:
        "Our AIaaS solutions use transparent pay-per-usage pricing, giving you cost control while ensuring maximum value from your AI investment.",
    },
  ];

  const additionalBenefits = [
    {
      title: "Build Ready-to-use Apps",
      description:
        "Our AIaaS platforms enable instant, training-free AI applications using pre-trained models, easy knowledge base integration, and an intuitive drag-and-drop interface.",
    },
    {
      title: "Enterprise-wide Integration",
      description:
        "AI applications built on our AIaaS platforms integrate seamlessly with your existing systems, ensuring smooth adoption without disrupting business workflows.",
    },
    {
      title: "Long-term Value",
      description:
        "Our no-code PaaS applications improve efficiency, reduce errors, and increase productivity without requiring additional technical or human resource investments.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Strong Security and Regulatory Compliance",
      description:
        "We ensure secure, compliant AI applications through robust data protection measures and strict adherence to regulatory standards.",
    },
    {
      number: "02.",
      title: "Continuous Support and Maintenance",
      description:
        "We provide ongoing maintenance and expert support to keep your AIaaS solutions secure, up to date, and aligned with evolving business needs.",
    },
    {
      number: "03.",
      title: "Use of Ethical AI",
      description:
        "Choosing LeewayHertz AIaaS means investing in advanced, responsible, and ethical AI solutions that foster trust and create positive business impact.",
    },
  ];

  const faqs = [
    {
      question: "What is AIaaS?",
      answer: (
        <>
          AIaaS, or Artificial Intelligence as a Service, offers ready-to-use AI tools enabling businesses to adopt AI capabilities swiftly and affordably without the need for in-house AI expertise. This service overcomes traditional barriers such as high costs, scarce expertise, and data insufficiency, making AI accessible for businesses of all sizes.
        </>
      ),
    },
    {
      question: "Can the solutions built using your AIaaS/PaaS be integrated into my existing systems?",
      answer: "",
    },
    {
      question: "What industries can benefit from your AIaaS solutions?",
      answer: "",
    },
    {
      question: "How can LeewayHertz's AIaaS platforms enhance my business with essential capabilities?",
      answer: "",
    },
    {
      question: "How do LeewayHertz's AIaaS solutions simplify custom AI model development?",
      answer: "",
    },
    {
      question: "Can I keep my AI applications confidential and secure using your PaaS solutions?",
      answer: "",
    },
    {
      question: "What makes LeewayHertz's AIaaS cost-effective for businesses?",
      answer: "",
    },
    {
      question: "How can I quickly deploy AI applications using LeewayHertz's AIaaS platforms?",
      answer: "",
    },
    {
      question: "How does LeewayHertz ensure data security and regulatory compliance?",
      answer: "",
    },
    {
      question: "Why should I choose LeewayHertz?",
      answer: "",
    },
    {
      question: "What long-term benefits can I expect from using LeewayHertz's AIaaS solutions?",
      answer: "",
    },
    {
      question: "How can AIaaS support my business growth?",
      answer: "",
    },
    {
      question: "How can I get started with LeewayHertz's AIaaS solutions?",
      answer: "",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-as-a-<span className="text-blue-600">Service</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Unlock the power of AI with our comprehensive AI-as-a-Service offerings. From chatbots that enhance customer support to information retrieval & analysis tools that extract valuable insights from your enterprise's data corpus, our AIaaS platforms enable you to build powerful applications without the need for in-house expertise. With easy integration into your existing systems, these apps streamline your operations, boost efficiency, and deliver a competitive edge.
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
                  alt="AI-as-a-Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="AI-as-a-Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AIaaS/PaaS Offerings Equip You With These Key Capabilities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive capabilities designed to accelerate AI adoption and scalability
            </p>
          </div>

          {/* Offerings Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {offering.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Use Our AI-as-a-Service Offerings for Your Business?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {benefit.number} {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Button - only show on middle card (index 1) */}
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

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span>?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                {/* Button - only show on middle card (index 1) */}
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
              Let&apos;s discuss how our AI-as-a-Service solutions can help
              your business scale, innovate, and drive growth.
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

