"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        "We continuously improve model quality, speed, and accuracy - ensuring your AI stays powerful and up-to-date.",
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
              We build advanced Large Language Model (LLM)–powered solutions
              that elevate automation, enhance customer experiences, and
              streamline complex business workflows.
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
                      <div className="relative">
                          <div className="aspect-[4/2] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
                            <Image
                              src="/Website/Service/LLMdev/LLM1.jpg"
                              alt="Chat_2"
                              width={1000}
                              height={800}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              priority
                            />
                          </div>
                        </div>

            {/* Right Box */}
                      <div className="relative">
                          <div className="aspect-[4/2] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
                            <Image
                              src="/Website/Service/LLMdev/LLM2.jpg"
                              alt="Chat_2"
                              width={1000}
                              height={800}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              priority
                            />
                          </div>
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
              We build advanced Large Language Model (LLM)–powered solutions
              that elevate automation, enhance customer experiences, and
              streamline complex business workflows.
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
                <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-bold rounded mb-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of LLM Solutions We Build
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                From intelligent chatbots to document analysis systems, we create
                custom LLM solutions that transform how your business operates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">
                      {solution.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Adrig for LLM Development?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine deep AI expertise with practical business understanding to
              deliver LLM solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl rounded-full mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                  {reason.number.replace('.', '')}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our LLM Development Process
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A systematic approach to building powerful, reliable LLM solutions
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your data, workflows, and requirements to design the optimal LLM solution."
              },
              {
                step: "02",
                title: "Model Selection & Training",
                description: "Choose and fine-tune the best model architecture for your specific use case."
              },
              {
                step: "03",
                title: "Integration & Testing",
                description: "Seamlessly integrate the LLM into your systems with comprehensive testing."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy to production and continuously optimize for performance and accuracy."
              }
            ].map((process) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl rounded-full group-hover:bg-gray-900 transition-colors duration-300">
                    {process.step}
                  </div>
                  {process.step !== "04" && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Get answers to common questions about LLM development and implementation.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center transition-transform duration-200 ${
                          openFaq === index ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-blue-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with LLM Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how custom LLM solutions can automate your workflows,
              enhance customer experiences, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                START YOUR PROJECT
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-200"
              >
                VIEW OUR WORK
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
