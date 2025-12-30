"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EnterpriseSoftwareDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const capabilities = [
    {
      number: "01",
      title: "CRM Development",
      description:
        "Extend CRM functionality with Enterprise CRM Development, integration, migration and customization solutions provided by Enterprises software development.",
    },
    {
      number: "02",
      title: "CMS Development",
      description:
        "We provide enterprise application development services for CMS to create and manage digital content easily.",
    },
    {
      number: "03",
      title: "Business Workflow Process",
      description:
        "Improving the efficiency of businesses with the updated workflow process using emerging technologies.",
    },
    {
      number: "04",
      title: "Marketing automation",
      description:
        "We build a marketing automation tool for enterprises that help them track, manage and filter qualified leads specific to search terms.",
    },
    {
      number: "05",
      title: "Third-party Software Integration",
      description:
        "We bring more efficiency to the enterprise software by integrating it with third-party software that can improve customers' experience.",
    },
    {
      number: "06",
      title: "Digital Transformation",
      description:
        "We can transform your business processes using emerging technologies such as blockchain, IoT, AI and cloud to provide efficiency and open up new opportunities.",
    },
  ];

  const services = [
    { title: "Custom Software Development" },
    { title: "Enterprise Application Integration" },
    { title: "Legacy Application Modernization" },
    { title: "Digital Transformation Consulting" },
  ];

  const engagementModels = [
    {
      number: "01.",
      title: "Dedicated Development Team",
      description:
        "Our developers leverage cutting-edge cognitive technologies to deliver high-quality services and tailored solutions to our clients.",
    },
    {
      number: "02.",
      title: "Team Extension",
      description:
        "Our team extension model is designed to assist clients seeking to expand their teams with the precise expertise needed for their projects.",
    },
    {
      number: "03.",
      title: "Project-based Model",
      description:
        "Our project-oriented approach, supported by our team of software development specialists, is dedicated to fostering client collaboration and achieving specific project objectives",
    },
  ];

  const faqs = [
    {
      question: "What is Enterprise App Development Company?",
      answer: "",
    },
    {
      question: "What is the Enterprise Application Development Process?",
      answer: "",
    },
    {
      question: "What Enterprise Software Solutions Do You Offer?",
      answer: "",
    },
    {
      question: "Who Works for Enterprise Software development Company?",
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
              Custom Enterprise Software <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              As a company specializing in custom enterprise software development, we focus on creating unique solutions that leverage blockchain, web3, machine learning (ML), artificial intelligence (AI), and other advanced technologies. Our team of skilled developers is committed to assisting businesses and organizations in navigating the evolving tech landscape. We excel in constructing bespoke software and applications tailored to meet specific business needs, ensuring our clients remain at the forefront of innovation and efficiency.
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
                  src="/Website/Service/Enterprise/enterprise1.png"
                  alt="Enterprise Software Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Enterprise/eneterprise2.jpg"
                  alt="Enterprise Software Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Enterprise Software Development Capabilities
            </h2>
          </div>

          {/* Capabilities Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {capability.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Enterprise Software Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Custom enterprise solutions that optimize operations and improve efficiency.
              <br />
              Developed with security, scalability, and performance at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Enterprise/eneterprise3.jpg"
                  alt="Enterprise Software Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Services List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Engagement Models
            </h2>
          </div>

          {/* Engagement Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {model.number} {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {model.description}
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
              Let&apos;s discuss how our enterprise software development solutions can help
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
