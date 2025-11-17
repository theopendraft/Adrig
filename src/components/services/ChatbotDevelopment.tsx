"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

export default function ChatbotDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    "AI-driven natural language understanding for accurate conversations",
    "Multi-platform support (Web, WhatsApp, Instagram, Mobile Apps)",
    "Personalized responses using machine learning and context awareness",
    "Seamless integration with CRM, ERP, and internal tools",
    "Automated ticketing, appointment scheduling, and data collection",
    "Continuous improvement as the chatbot learns from interactions",
  ];

  const benefits = [
    {
      number: "01",
      title: "Deliver 24/7 instant customer support with no downtime",
    },
    {
      number: "02",
      title: "Reduce operational costs by automating repetitive tasks",
    },
    {
      number: "03",
      title: "Improve customer satisfaction through faster response times",
    },
    {
      number: "04",
      title:
        "Streamline workflows by integrating chatbots into existing systems",
    },
    {
      number: "05",
      title: "Increase lead conversions with intelligent conversational flows",
    },
    {
      number: "06",
      title:
        "Enhance data collection and insights through automated interactions",
    },
  ];

  const methodologies = [
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Understanding and generating human-like responses for natural conversations.",
    },
    {
      title: "Intent & Entity Recognition",
      description:
        "Identifying user intentions and extracting meaningful data from messages.",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Using knowledge bases to provide accurate, context-aware answers.",
    },
    {
      title: "Custom Prompt Engineering",
      description:
        "Designing structured prompts to improve accuracy and response quality.",
    },
    {
      title: "Analytics & Conversation Tracking",
      description:
        "Monitoring user behavior, performance, and chatbot efficiency.",
    },
    {
      title: "Omni-channel Deployment",
      description:
        "Deploying the chatbot across websites, apps, social media, and messaging platforms.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a chatbot?",
      answer:
        "Most chatbot projects take 3–6 weeks, depending on features and integrations.",
    },
    {
      question: "Can the chatbot understand multiple languages?",
      answer: "Yes. We support multilingual NLP for global audiences.",
    },
    {
      question: "Do you integrate chatbots with CRM or ERP tools?",
      answer:
        "Absolutely. We connect your chatbot with internal systems for seamless workflow automation.",
    },
    {
      question: "Will the chatbot keep improving over time?",
      answer:
        "Yes. It continuously learns from new conversations, improving accuracy and performance.",
    },
    {
      question: "Do we need technical expertise to manage the chatbot?",
      answer:
        "No. We provide a user-friendly dashboard and full post-launch support.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Chatbot <span className="text-primary">Development</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our AI-powered chatbot solutions deliver seamless automation,
              instant customer support, and intelligent assistance across your
              digital platforms, helping your business operate efficiently and
              offer superior user experiences.
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
                              src="/Website/Service/ChatDev/Chat1.jpg"
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
                  src="/Website/Service/ChatDev/Chat2.jpg"
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
                forward-thinking companies.
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
              Chatbot Technologies We Use
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
              Let&apos;s discuss how our AI-driven chatbot solutions can enhance
              your customer experience, automate workflows, and transform the
              way your business communicates.
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
