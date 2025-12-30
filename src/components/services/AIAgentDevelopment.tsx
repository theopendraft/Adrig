"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIAgentDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const departments = [
    {
      title: "Customer Service",
      description: "Enhance customer interactions and satisfaction through AI-driven support and personalized recommendations.",
      agents: [
        "Customer Support Agents",
        "Personalized Recommendation Agents",
        "Customer Feedback Analysis Agents",
        "Virtual Shopping Agents (Retail)",
      ],
    },
    {
      title: "Human Resources (HR)",
      description: "Streamline HR processes, from recruitment to employee management, with intelligent AI solutions.",
      agents: [
        "Talent Acquisition and Recruitment Agents",
        "Employee Onboarding Agents",
        "HR Support Agents",
        "Scheduling and Calendar Management Agents",
      ],
    },
    {
      title: "Finance and Accounting",
      description: "Automate financial tasks, enhance fraud detection and improve financial planning with AI.",
      agents: [
        "Financial Analysis and Reporting Agents",
        "Fraud Detection in Transactions Agents",
        "Automated Bookkeeping Agents",
        "Invoice Processing Agents",
      ],
    },
    {
      title: "Information Technology (IT)",
      description: "Optimize IT operations, enhance security, and streamline software development with AI.",
      agents: [
        "Task Automation Agents",
        "IT Helpdesk Support Agents",
        "DevOps Automation Agents",
        "Software Testing Agents",
      ],
    },
    {
      title: "Research and Development (R&D)",
      description: "Drive innovation and product development with advanced AI analytics and predictive insights.",
      agents: [
        "Data Analysis and Insights Agents",
        "Predictive Analytics Agents",
        "Product R&D Agents",
        "Competitive Analysis Agents",
      ],
    },
    {
      title: "Security",
      description: "Enhance organizational security through AI-based threat detection and incident response systems.",
      agents: [
        "Fraud Detection and Prevention Agents",
        "Cybersecurity Threat Detection Agents",
        "Compliance Monitoring Agents",
        "Incident Response and Management Agents",
      ],
    },
  ];

  const capabilities = [
    { title: "Deliver Automated Customer Support" },
    { title: "Offer Personalized Recommendations" },
    { title: "Business Analysis and Decision-making" },
    { title: "Code Generation and Verification" },
    { title: "Data Visualization and Storytelling" },
    { title: "Research and Analysis" },
  ];

  const features = [
    {
      number: "01.",
      title: "Autonomous Decision-making",
      description:
        "Equipped with self-prompting capabilities, our AI agents autonomously analyze complex data, extract insights, and take proactive actions to achieve desired outcomes.",
    },
    {
      number: "02.",
      title: "Skills Library Integration",
      description:
        "Our AI agents leverage an extensive skills library built with Python to perform diverse tasks with precision, accessing external information beyond their training to deliver smarter and more capable outcomes.",
    },
    {
      number: "03.",
      title: "Multimodal Interaction",
      description:
        "Using AutoGen's Multimodal Conversable and LLaVA agents, we enable AI agents to process text, speech, and images, delivering adaptive, multi-channel experiences tailored to diverse user preferences.",
    },
    {
      number: "04.",
      title: "Defined Multi-agent Workflow",
      description:
        "Our AI agent development tools streamline agent configuration and workflow orchestration, supporting multiple architectures—two-agent, sequential, hierarchical, and non-hierarchical—to handle diverse use cases efficiently.",
    },
    {
      number: "05.",
      title: "Customizable Conversation Patterns",
      description:
        "We build AI agents with flexible conversation patterns that collaborate seamlessly using LLMs, tools, and human input, enabling autonomous task execution while improving overall operational efficiency.",
    },
    {
      number: "06.",
      title: "Enhanced LLM Inference",
      description:
        "We enhance LLM performance—including GPT-4, Gemini, and Mistral—through advanced inference capabilities such as caching, error handling, multi-config inference, and templating to ensure reliable, optimized outcomes.",
    },
  ];

  const faqs = [
    {
      question: "How can AI agents benefit my business?",
      answer: (
        <>
          AI-powered digital agents, such as GPT agents and AutoGPT, bring significant advantages to your business by automating tasks, improving decision-making processes, enhancing user experiences, solving complex problems and optimizing overall operational efficiency. They are tailored to address specific challenges in your industry, providing intelligent solutions.
        </>
      ),
    },
    {
      question: "How do you engineer intelligent agents similar to AutoGPT?",
      answer: "",
    },
    {
      question: "What AI agent development frameworks do you use to build robust generative AI agents?",
      answer: "",
    },
    {
      question: "What capabilities do the AI agents developed by your team possess?",
      answer: "",
    },
    {
      question: "Do I need technical expertise to implement AI agents in my business?",
      answer: "",
    },
    {
      question: "How do you ensure the security and integrity of AI agents?",
      answer: "",
    },
    {
      question: "How can I engage LeewayHetz for AI agent development services?",
      answer: "",
    },
    {
      question: "How do you ensure the quality and performance of your AI agents?",
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
              AI Agent <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Amplify business outcomes with our intelligent AI agents designed to enhance operational efficiency by automating tasks and streamlining processes. We use premier tools like AutoGen Studio, Vertex AI agent builder, and crewAI to build task-focused, high-performing, and reliable AI agents tailored to your business requirements. Leveraging the advanced capabilities of LLMs and a comprehensive skills library, our AI agents excel in diverse tasks such as research, analysis, code generation, reviews, audits, online search and segmentation.
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
              <div className="aspect-[16/10] bg-gray-400 rounded-lg w-full"></div>
              <div className="aspect-[16/10] bg-gray-400 rounded-lg w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents We Develop Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents We Develop for Departments Across Industries
            </h2>
          </div>

          {/* Departments Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {dept.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {dept.description}
                </p>

                {/* Agents List */}
                <ul className="space-y-2">
                  {dept.agents.map((agent, agentIndex) => (
                    <li key={agentIndex} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <img
                          src="/right-up-white.png"
                          alt="Arrow"
                          className="w-3 h-3"
                        />
                      </div>
                      <span className="text-sm text-gray-700">{agent}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can Our Digital AI Agents Do Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Can Our Digital AI Agents Do?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Intelligent AI agents designed to automate tasks, optimize workflows, and enhance decision-making. Built to operate seamlessly across systems and business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="AI Agent Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Capabilities List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {capability.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Our AI Agents Apart Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Sets Our AI Agents Apart?
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {feature.number} {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Button - only show on third card (index 2) */}
                {index === 2 && (
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
              Let&apos;s discuss how our AI agent development solutions can help
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

