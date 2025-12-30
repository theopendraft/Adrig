"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AICopilotDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Strategy Development and Consulting",
      description:
        "We assess your challenges and implement AI assistants strategically to streamline workflows and boost productivity.",
    },
    {
      number: "02",
      title: "Data Analysis",
      description:
        "We analyze your proprietary data in depth to design a domain-specific AI copilot that efficiently handles both routine and complex tasks with precision.",
    },
    {
      number: "03",
      title: "MVP and PoC Development",
      description:
        "We rapidly prototype and validate your AI Copilot through MVPs or POCs, enabling quick iteration and a strong foundation for full-scale implementation.",
    },
    {
      number: "04",
      title: "Custom AI Copilot Development",
      description:
        "We collaborate closely to build and integrate a custom AI copilot using your proprietary data, iteratively refining it to align with your vision and enhance operational efficiency.",
    },
    {
      number: "05",
      title: "AI Copilot Integration",
      description:
        "We integrate AI copilots into your existing systems with minimal disruption, ensuring rapid efficiency gains, data security, and compliance.",
    },
    {
      number: "06",
      title: "Maintenance and Support",
      description:
        "We provide ongoing maintenance, monitoring, and support to ensure your AI copilots operate reliably and perform at their best.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Tailored Approach",
      description:
        "End-to-end AI copilot development backed by deep technical expertise and domain understanding. We deliver secure, scalable, and business-ready solutions aligned with your goals.",
    },
    {
      number: "02.",
      title: "Expert AI Professionals",
      description:
        "End-to-end AI copilot development backed by deep technical expertise and domain understanding. We deliver secure, scalable, and business-ready solutions aligned with your goals.",
    },
    {
      number: "03.",
      title: "Extensive Experience",
      description:
        "End-to-end AI copilot development backed by deep technical expertise and domain understanding. We deliver secure, scalable, and business-ready solutions aligned with your goals.",
    },
    {
      number: "04.",
      title: "Security and Compliance Assurance",
      description:
        "End-to-end AI copilot development backed by deep technical expertise and domain understanding. We deliver secure, scalable, and business-ready solutions aligned with your goals.",
    },
  ];

  const processSteps = [
    {
      number: "Step 1",
      title: "Initial Consultation and Goal Alignment",
      description:
        "We begin by deeply understanding your business goals and requirements to ensure the AI copilot is strategically aligned with your vision from the outset.",
    },
    {
      number: "Step 2",
      title: "Research and Custom Solution Design",
      description:
        "We conduct in-depth research and analysis to design an AI copilot solution precisely aligned with your business needs and objectives.",
    },
    {
      number: "Step 3",
      title: "Prototyping",
      description:
        "We develop detailed prototypes and design mock-ups to visualize functionality, refine features collaboratively, and ensure seamless alignment with your vision.",
    },
    {
      number: "Step 4",
      title: "Development and Testing",
      description:
        "Guided by the approved design, we build and rigorously test your AI copilot to deliver a robust, high-performance, and reliable solution.",
    },
    {
      number: "Step 5",
      title: "Seamless Integration",
      description:
        "In the final phase, we seamlessly deploy and integrate the AI copilot into your existing systems, ensuring minimal disruption and immediate productivity gains.",
    },
    {
      number: "Step 6",
      title: "Ongoing Support and Maintenance",
      description:
        "We provide ongoing support, maintenance, and enhancements to ensure your AI copilot continues to perform optimally and evolve with your business needs.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Machine Learning & Deep Learning",
      description:
        "Our expertise in advanced machine learning and deep learning enables us to build AI models that continuously learn, adapt, and deliver intelligent, precise interactions.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Our deep NLP expertise enables AI copilots to understand and generate human language, ensuring seamless and natural communication.",
    },
    {
      title: "Data Science & Analytics",
      description:
        "By leveraging advanced data science and analytics, we enable AI copilots to extract actionable insights, enhancing decision-making accuracy and versatility.",
    },
    {
      title: "Cloud & Edge Computing",
      description:
        "Our expertise in cloud and edge computing enables the development of efficient, reliable AI copilots that perform seamlessly across diverse environments",
    },
    {
      title: "APIs & System Integration",
      description:
        "We build robust APIs and use advanced integration technologies to ensure AI copilots integrate seamlessly with your existing workflows.",
    },
    {
      title: "Advanced Development Frameworks",
      description:
        "By leveraging leading AI and machine learning frameworks, we accelerate model development and streamline the journey from concept to deployment.",
    },
  ];

  const faqs = [
    {
      question: "What is an AI copilot?",
      answer: (
        <>
          An AI copilot is an artificial intelligence system designed to assist users in various tasks, such as coding, customer support, data analysis, and more, by providing real-time assistance, intelligent suggestions, and automating routine tasks.
        </>
      ),
    },
    {
      question: "How can AI copilots enhance my business operations?",
      answer: "",
    },
    {
      question: "What industries can benefit from your AI copilot development services?",
      answer: "",
    },
    {
      question: "How do you ensure the AI copilot integrates seamlessly with client's existing systems?",
      answer: "",
    },
    {
      question: "What measures do you take to secure data and ensure compliance?",
      answer: "",
    },
    {
      question: "Can AI copilots be customized for specific tasks within my organization?",
      answer: "",
    },
    {
      question: "Can AI copilot be used for enhanced customer support?",
      answer: "",
    },
    {
      question: "What support do you offer post deployment?",
      answer: "",
    },
    {
      question: "How long does it take to develop and deploy an AI copilot?",
      answer: "",
    },
    {
      question: "How can I get started with AI copilot development for my business?",
      answer: "",
    },
    {
      question: "What value AI copilots can bring to my business in the long run?",
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
              AI Copilot <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We leverage AI technologies like ML and NLP to develop intelligent AI copilots that streamline your business operations and drive innovation. These AI systems provide real-time assistance for tasks like code generation, error detection, and content creation, automating repetitive processes and freeing your teams for high-value activities. With personalized customer support and data-driven insights, our AI copilots enhance customer experiences and boost efficiency. This intelligent, AI-driven solution is designed to boost productivity with next-gen automation, resulting in enhanced productivity and efficiency for businesses of all sizes.
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
              AI Copilot Development Services We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Harness the power of AI to transform your operations, enhance customer experiences, and drive innovation across your organization with our comprehensive AI copilot development services
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

      {/* Why Choose Adrig Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">ADRIG</span> for AI Copilot Development?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              End-to-end AI copilot development backed by deep technical expertise and domain understanding. We deliver secure, scalable, and business-ready solutions aligned with your goals.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our AI Copilot Development Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A Structured, Collaborative, and Outcome-Driven Approach to Building Intelligent AI Copilots
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {step.number}: {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {step.description}
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

      {/* Our Domains of Expertise Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Domains of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="AI Copilot Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Expertise Areas List */}
            <div>
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
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
              Let&apos;s discuss how our AI copilot development solutions can help
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

