"use client";

import { useState } from "react";
import Link from "next/link";

export default function LLMDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Custom LLM Model Development",
      description:
        "We design and train LLMs tailored to your specific business needs, industry data, and workflow requirements.",
    },
    {
      number: "02",
      title: "Fine-tuning Pre-trained Models",
      description:
        "We enhance existing models like GPT, Llama, and Mistral using your proprietary data for improved accuracy and domain expertise.",
    },
    {
      number: "03",
      title: "LLM-Powered Chatbot & Agent Development",
      description:
        "Build intelligent assistants capable of handling customer support, task automation, onboarding, data extraction, and more.",
    },
    {
      number: "04",
      title: "Enterprise AI Knowledgebase Systems",
      description:
        "Convert your documents, SOPs, and manuals into searchable, AI-driven knowledge systems that deliver instant answers.",
    },
    {
      number: "05",
      title: "LLM API Development & Integration",
      description:
        "Integrate LLM capabilities into your apps, websites, CRMs, or internal systems using secure, scalable APIs.",
    },
    {
      number: "06",
      title: "Continuous Monitoring & Model Optimization",
      description:
        "We track performance, update datasets, refine prompts, and optimize your LLM to keep it fast, accurate, and reliable.",
    },
  ];

  const solutions = [
    { title: "AI Customer Support Agents" },
    { title: "Internal Knowledge Assistants" },
    { title: "Document Analysis & Summarization Systems" },
    { title: "Automated Email/Report Generation" },
    { title: "Code Assistants & Developer Tools" },
    { title: "AI Tutors & Training Assistants" },
    { title: "RAG (Retrieval-Augmented Generation) Systems" },
    { title: "Voice-Enabled LLM Assistants" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Domain-Specific AI Expertise",
      description:
        "We build LLMs trained on your industry knowledge, ensuring precise, context-aware outputs.",
    },
    {
      number: "02.",
      title: "End-to-End Development",
      description:
        "From dataset preparation to model deployment, we deliver a complete, production-ready LLM solution.",
    },
    {
      number: "03.",
      title: "Post-Launch Optimization",
      description:
        "We continuously improve model quality, speed, and accuracy — ensuring your AI stays powerful and up-to-date.",
    },
  ];

  const faqs = [
    {
      question: "What kind of data do you need to build an LLM?",
      answer:
        "We can work with documents, PDFs, chats, knowledge bases, or any structured/unstructured data your business already has.",
    },
    {
      question: "Do LLMs require a lot of computing resources?",
      answer:
        "Not necessarily. We design optimized, cost-efficient models suitable for both small and large enterprises.",
    },
    {
      question: "Can an LLM be integrated into my existing platform?",
      answer:
        "Yes. We build secure APIs that integrate seamlessly with your current software, apps, or internal tools.",
    },
    {
      question: "How long does LLM development take?",
      answer:
        "Most projects take 4–10 weeks, depending on complexity and the volume of custom data.",
    },
    {
      question: "Is my company's data safe during training?",
      answer:
        "Absolutely. We follow strict privacy, encryption, and data compliance standards to ensure full protection of your information.",
    },
    {
      question: "Can you fine-tune models like GPT, Llama, or OpenAI APIs?",
      answer:
        "Yes. We specialize in fine-tuning and customizing all leading LLM architectures based on your requirements.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              LLM Development <span className="text-primary">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build advanced Large Language Model (LLM)–powered solutions that elevate automation, enhance customer experiences, and streamline complex business workflows.
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

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              LLM Development Services We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We build advanced Large Language Model (LLM)–powered solutions that elevate automation, enhance customer experiences, and streamline complex business workflows.
            </p>
          </div>

          {/* Services Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded mb-6">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of LLM Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-500 to-gray-600">
                {/* Placeholder for image */}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of LLM Solutions We Build
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                We create intelligent, business-ready LLM solutions that transform how organizations work and communicate.
              </p>

              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src="/right-up-blue.png"
                      alt="Arrow"
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span className="text-lg text-primary font-medium">
                      {solution.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Adrig Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">Adrig</span> for Your Next
              <br />
              LLM Development Project?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index}>
                <div className="bg-white rounded-3xl p-10 flex flex-col">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-32">
                    {reason.number} {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Button - only show on middle card (index 1) */}
                {index === 1 && (
                  <Link href="/contact">
                    <button className="mt-6 w-full bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm tracking-wider">
                      GET STARTED
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
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
              Let&apos;s discuss how a custom LLM solution can boost productivity, automate workflows, and transform your business into an AI-driven powerhouse.
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
