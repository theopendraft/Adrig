"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIMarketingAgentDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Strategy Consulting",
      description:
        "Our expert consulting helps you adopt and optimize AI agents for marketing, aligning strategies with business goals to maximize efficiency and ROI.",
    },
    {
      number: "02",
      title: "Custom AI Agent Development for Marketing",
      description:
        "We build custom AI marketing agents that automate content creation, customer engagement, and data analysis to improve efficiency and integrate seamlessly into your workflows.",
    },
    {
      number: "03",
      title: "Integration",
      description:
        "We seamlessly integrate AI agents into your marketing workflows, enabling chatbots, automated campaigns, and personalized content with minimal disruption",
    },
    {
      number: "04",
      title: "Maintenance and Support",
      description:
        "We develop AI marketing agents and provide ongoing maintenance and support to ensure optimal performance, security, and continuous improvement.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Personalization",
      description:
        "Automate marketing operations, enhance personalization, and gain actionable insights at scale. Our AI agents help you improve efficiency, optimize campaigns, and maximize ROI",
    },
    {
      number: "02",
      title: "Efficient Content Creation",
      description:
        "Automate marketing operations, enhance personalization, and gain actionable insights at scale. Our AI agents help you improve efficiency, optimize campaigns, and maximize ROI",
    },
    {
      number: "03",
      title: "Automated Processes",
      description:
        "Automate marketing operations, enhance personalization, and gain actionable insights at scale. Our AI agents help you improve efficiency, optimize campaigns, and maximize ROI",
    },
    {
      number: "04",
      title: "Data Analysis",
      description:
        "Automate marketing operations, enhance personalization, and gain actionable insights at scale. Our AI agents help you improve efficiency, optimize campaigns, and maximize ROI",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Extensive Experience",
      description:
        "Our experienced team specializes in building AI agents across domains, including marketing. We also provide expert consulting to help you seamlessly integrate AI agents and maximize their value.",
    },
    {
      number: "02.",
      title: "Comprehensive Support",
      description:
        "We ensure your AI agents stay optimized, secure, and up to date through continuous monitoring and enhancements. Our ongoing support maximizes long-term value and performance across your marketing operations.",
    },
    {
      number: "03.",
      title: "Technical Expertise",
      description:
        "Leverage our deep expertise in AI agent frameworks such as AutoGen Studio, LangChain, MetaGPT, and Crew AI. We select the right tools for your project to accelerate development with tailored, pre-built components.",
    },
  ];

  const processes = [
    {
      number: "01",
      title: "Content Marketing",
      description:
        "Our AI agents automate content creation and marketing strategy optimization, delivering personalized recommendations, content calendars, performance insights, and actionable optimization guidance.",
    },
    {
      number: "02",
      title: "Social Media Marketing",
      description:
        "Our AI agents automate social media post creation, scheduling, and optimization to ensure timely, engaging, and high-impact content across platforms.",
    },
    {
      number: "03",
      title: "Ad Performance Analysis",
      description:
        "Our AI ad performance analysis agents deliver actionable insights, optimization recommendations, and clear performance visualizations to maximize your advertising ROI",
    },
    {
      number: "04",
      title: "SEO and Content Strategy Planning",
      description:
        "Our SEO and content strategy agents optimize keywords, analyze competitors, and plan high-impact content to boost search rankings and online visibility.",
    },
    {
      number: "05",
      title: "Market Research and Survey Analysis",
      description:
        "Our AI market research and survey analysis agents uncover consumer insights through trend detection, sentiment analysis, and precise data interpretation to drive informed decisions.",
    },
    {
      number: "06",
      title: "Automated PR and Outreach",
      description:
        "We build custom AI agents that identify opportunities, personalize outreach, manage contacts, track campaigns, and automate follow-ups to maximize engagement and results.",
    },
  ];

  const faqs = [
    {
      question: "How can AI agents streamline marketing operations?",
      answer: (
        <>
          AI agents streamline marketing operations by offering personalized recommendations, automating content creation tasks, handling repetitive workflows, providing valuable data analysis insights, and enhancing creativity in marketing strategies.
        </>
      ),
    },
    {
      question: "What benefits do AI marketing agents offer?",
      answer: "",
    },
    {
      question: "What expertise do you have in AI marketing development?",
      answer: "",
    },
    {
      question: "What support do you provide after delivering a solution?",
      answer: "",
    },
    {
      question: "Can AI agents handle complex marketing tasks effectively?",
      answer: "",
    },
    {
      question: "How do AI marketing agents integrate with existing marketing systems?",
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
              AI Marketing Agent <span className="text-blue-600">Development</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build intelligent AI agents for marketing teams using advanced tools such as Crew AI, AutoGen Studio, and TaskWeaver. Our custom agents are designed to perform a wide range of tasks, including data analysis, content creation, customer segmentation, and personalized email marketing, enabling businesses to streamline their marketing operations, optimize efficiency, and drive impactful results.
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

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Marketing Agent Development Services
            </h2>
          </div>

          {/* Services Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
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

      {/* Why Implement Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Implement Our AI Marketing Agents?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Automate marketing operations, enhance personalization, and gain actionable insights at scale. Our AI agents help you improve efficiency, optimize campaigns, and maximize ROI
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {benefit.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Adrig Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">ADRIG</span> for AI Marketing Agent Development?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Deep expertise in AI, marketing automation, and data-driven strategy. We deliver secure, scalable AI marketing agents aligned with your business goals.
            </p>
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

      {/* How Do Our AI Agents Improve Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Do Our AI Agents Improve Your Marketing Processes?
            </h2>
          </div>

          {/* Processes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((process, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {process.number} {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {process.description}
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
              Let&apos;s discuss how our AI marketing agent development solutions can help
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

