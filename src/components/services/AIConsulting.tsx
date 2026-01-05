"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "AI Strategy Development",
      description:
        "We start with a stakeholder-driven consultation to understand your goals and challenges, then deliver a clear AI implementation roadmap with defined steps and timelines.",
    },
    {
      number: "02",
      title: "AI Opportunity Mapping",
      description:
        "We assess your operations and data to identify high-impact AI use cases, delivering a strategic roadmap that prioritizes initiatives with maximum ROI and long-term alignment.",
    },
    {
      number: "03",
      title: "Domain-specific Model Development",
      description:
        "We analyze your domain in depth to fine-tune and integrate the most suitable foundation model with your proprietary data, ensuring validated alignment with your business needs.",
    },
    {
      number: "04",
      title: "Generative AI Solutions Development",
      description:
        "We deliver end-to-end generative AI solutions—from UX/UI design to model integration—building chatbots, content tools, and AI agents tailored to your business needs.",
    },
    {
      number: "05",
      title: "Data Engineering",
      description:
        "Our data engineering services span the full data lifecycle, delivering clean, structured, and enriched data optimized for accurate and reliable AI model training.",
    },
    {
      number: "06",
      title: "AI Integration",
      description:
        "We go beyond AI development to seamlessly integrate solutions into your existing systems, ensuring a smooth transition and effective adoption across your operations.",
    },
  ];

  const approach = [
    { title: "Assessment Phase" },
    { title: "Strategy Development" },
    { title: "Data Collection and Preparation" },
    { title: "Custom Model Development" },
    { title: "Model Integration/Solution Development" },
    { title: "Monitoring and Maintenance" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Deep Experience and Expertise",
      description:
        "Trusted AI expertise delivering strategic insight, seamless execution, and measurable business impact across industries.",
    },
    {
      number: "02.",
      title: "Extensive Technical Skills",
      description:
        "Our team brings deep technical expertise across the entire AI development lifecycle, from strategy to deployment and maintenance.",
    },
    {
      number: "03.",
      title: "Responsible AI Development",
      description:
        "We prioritize ethical AI practices, ensuring transparency, fairness, and compliance with industry standards and regulations.",
    },
  ];

  const faqs = [
    {
      question: "What is AI consulting, and why do you need it?",
      answer: (
        <>
          AI consulting involves working with an experienced team of AI experts who can help your business identify and implement artificial intelligence solutions to improve your operations and help you achieve your goals. If you want to automate repetitive tasks, analyze large amounts of data, or improve customer experiences through chatbots or other AI-powered tools, contact LeewayHertz's AI consultants today.
        </>
      ),
    },
    {
      question: "What industries do you serve?",
      answer: "",
    },
    {
      question: "How do you approach AI consulting?",
      answer: "",
    },
    {
      question: "What kind of AI solutions do you provide?",
      answer: "",
    },
    {
      question: "How can AI consulting companies assist in data-driven decision-making for my business?",
      answer: "",
    },
    {
      question: "What measures does your AI consulting company take to ensure data security and compliance with privacy regulations?",
      answer: "",
    },
    {
      question: "How do AI consulting companies tailor their solutions to meet the unique needs of clients?",
      answer: "",
    },
    {
      question: "How does AI consulting contribute to business growth?",
      answer: "",
    },
    {
      question: "What key areas of expertise do AI consultants possess?",
      answer: "",
    },
    {
      question: "What impact does AI consulting have on businesses?",
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
              AI Consulting <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our comprehensive AI consulting services help you harness the transformative power of AI, enhancing your operational capabilities and product offerings. Our experts partner with you to understand your unique challenges and objectives, creating customized AI strategies and solutions that yield tangible results. We are also proficient in generative AI, with expertise in leveraging advanced models like GPT, Gemini, Llama, PaLM, and Mistral to build innovative solutions for diverse use cases. From enhancing operations through intelligent automation to exploring the creative potential of generative AI, we guide you through every step of your AI journey.
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
                  src="/Website/Service/Consulting/consulting1.jpg"
                  alt="AI Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Consulting/consulting2.png"
                  alt="AI Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
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
              Our AI Consulting Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Strategic AI guidance to identify opportunities, define roadmaps, and maximize business value through intelligent technologies.
            </p>
          </div>

          {/* Services Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Why Choose LeewayHertz Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">LeewayHertz</span> for AI Consulting Services?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Trusted AI expertise delivering strategic insight, seamless execution, and measurable business impact across industries.
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

      {/* Our Approach Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach to AI Consulting
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A structured, insight-driven methodology that aligns AI strategy, technology, and execution with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Consulting/consulting1.jpg"
                  alt="AI Consulting Approach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Approach List */}
              <div className="grid grid-cols-2 gap-4">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
              Let&apos;s discuss how our AI consulting services can help
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
