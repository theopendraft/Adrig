"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SaasDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Consulting and Strategy Building",
      description:
        "We provide expert AI consultation to help you navigate AI integration with confidence. Our approach aligns AI strategies with your business goals to drive measurable impact and sustainable growth.",
    },
    {
      number: "02",
      title: "Custom SaaS Product Development",
      description:
        "We build secure, scalable, and future-ready SaaS solutions using advanced tools and technologies. Our expertise in single- and multi-tenant architectures ensures tailored, rigorously tested applications that perform reliably at scale.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Our UI/UX design services cover personas, user journeys, wireframes, and usability testing for SaaS products. We create intuitive experiences and polished visual interfaces through thoughtful design and interactive prototyping.",
    },
    {
      number: "04",
      title: "Migration to SaaS",
      description:
        "We transform on-premise software into scalable, subscription-based SaaS solutions with enhanced flexibility. Our team handles end-to-end migration—including data transfer, reconfiguration, and user training—for a seamless, low-downtime transition.",
    },
    {
      number: "05",
      title: "API Development and Integration",
      description:
        "We build robust APIs that seamlessly connect your SaaS product with external services and data sources. From payment gateways to custom integrations, our APIs extend functionality and enable a more connected user experience.",
    },
    {
      number: "06",
      title: "Support and Maintenance",
      description:
        "We provide proactive SaaS maintenance with continuous bug fixes, security updates, and performance optimization. Our support team ensures smooth operation while assisting users with technical queries and issues.",
    },
  ];

  const solutions = [
    { title: "Accounting SaaS Solutions" },
    { title: "Content Management System (CMS)" },
    { title: "Enterprise Resource Planning (ERP) SaaS" },
    { title: "Project Management SaaS Solutions" },
    { title: "Communication SaaS Solutions" },
    { title: "HR SaaS Solutions" },
    { title: "Customer Relationship Management (CRM) Saas" },
    { title: "Billing SaaS Solutions" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise in SaaS Architecture",
      description:
        "We develop a wide range of SaaS solutions tailored to diverse business needs. Each solution is designed for scalability, security, and long-term performance.",
    },
    {
      number: "02.",
      title: "Customized Solutions",
      description:
        "We take a tailored approach to SaaS development, recognizing that every business has unique needs. By closely collaborating with clients, we deliver customized solutions that address real challenges and drive measurable results.",
    },
    {
      number: "03.",
      title: "End-to-end Services",
      description:
        "We provide end-to-end SaaS development services—from ideation and design to development, testing, and integration. Our multidisciplinary team ensures high-quality delivery on time and aligned with your business goals.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of custom SaaS solutions?",
      answer: (
        <>
          Custom SaaS solutions offer a multitude of benefits compared to off-the-shelf software. Here are a few key advantages:
          <br /><br />
          <strong>Perfect fit for your business needs:</strong> Custom solutions are tailored to your specific workflows and challenges, unlike generic software with limitations.
          <br /><br />
          <strong>Scalability and flexibility:</strong> Your SaaS solution can grow and adapt alongside your business needs.
          <br /><br />
          <strong>Enhanced security and control:</strong> Custom SaaS applications provide greater control over your data and security measures.
          <br /><br />
          <strong>Improved user experience:</strong> Custom SaaS applications can be designed with user-friendly interfaces that streamline user adoption and boost productivity.
        </>
      ),
    },
    {
      question: "What industries does LeewayHertz cater to?",
      answer: "",
    },
    {
      question: "How does LeewayHertz approach the SaaS product development process?",
      answer: "",
    },
    {
      question: "How much does custom SaaS development cost?",
      answer: "",
    },
    {
      question: "How can I get started with a custom SaaS project?",
      answer: "",
    },
    {
      question: "How long does it take to develop a custom SaaS product?",
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
              SaaS <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our team of experts is equipped with the knowledge and tools to create scalable, secure, and highly adaptive SaaS solutions. Whether you are looking to launch a new product or optimize an existing one, we ensure the end product delivers a seamless, user-friendly experience for your customers while maintaining rigorous security standards. Our experienced developers excel in both single-tenant and multi-tenant architectures, allowing them to craft a solution that meets your precise needs for security, scalability and cost-effectiveness.
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
                  src="/Website/Service/Saas/saas1.png"
                  alt="SaaS Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Saas/saas2.jpg"
                  alt="SaaS Development"
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
              SaaS Development Services We Offer
            </h2>
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

      {/* Types of SaaS Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Types of SaaS Solutions We Develop
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We design and develop a wide range of SaaS solutions tailored to specific business requirements. Our platforms are built for scalability, security, and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Saas/saas3.jpg"
                  alt="SaaS Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
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
              Why Choose <span className="text-primary">Adrig</span> for Your
              Next
              <br />
              SaaS Development Project?
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
              Let&apos;s discuss how our SaaS development solutions can help
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
