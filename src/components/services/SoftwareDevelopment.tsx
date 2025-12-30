"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SoftwareDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Software Consulting",
      description:
        "We design and deploy custom AI software tailored to your business needs, ensuring seamless integration and optimal performance.",
    },
    {
      number: "02",
      title: "Generative AI Software Development",
      description:
        "We build GenAI solutions from chatbots to recommendation and predictive systems that enhance user experience and drive innovation.",
    },
    {
      number: "03",
      title: "Blockchain Software Development",
      description:
        "We develop in-depth blockchain-based platforms like Ethereum, Hyperledger, and custom solutions for secure, decentralized applications.",
    },
    {
      number: "04",
      title: "Software Audit Service",
      description:
        "We perform in-depth software audits to identify security, compliance, and performance issues, providing actionable recommendations.",
    },
    {
      number: "05",
      title: "Software Integration",
      description:
        "We seamlessly integrate systems such as ERP, CRM, and e-commerce platforms to streamline your business operations.",
    },
    {
      number: "06",
      title: "Maintenance and Support",
      description:
        "We provide ongoing support and maintenance to keep your software secure, optimized, and up to date with the latest technologies.",
    },
  ];

  const softwareTypes = [
    { title: "Enterprise Software" },
    { title: "Mobile, Desktop, and Cross-platform Software" },
    { title: "SaaS/PaaS Development" },
    { title: "Web-based Software" },
    { title: "Cloud-based Software" },
    { title: "Consumer Electronics Software" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise in Software Architecture",
      description:
        "We develop a wide range of software solutions tailored to diverse business needs. Each solution is designed for scalability, security, and long-term performance.",
    },
    {
      number: "02.",
      title: "Customized Solutions",
      description:
        "We take a tailored approach to software development, recognizing that every business has unique needs. By closely collaborating with clients, we deliver customized solutions that address real challenges and drive measurable results.",
    },
    {
      number: "03.",
      title: "End-to-end Services",
      description:
        "We provide end-to-end software development services—from ideation and design to development, testing, and integration. Our multidisciplinary team ensures high-quality delivery on time and aligned with your business goals.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of custom software development?",
      answer: (
        <>
          Custom software development offers a multitude of benefits compared to off-the-shelf software. Here are a few key advantages:
          <br /><br />
          <strong>Perfect fit for your business needs:</strong> Custom solutions are tailored to your specific workflows and challenges, unlike generic software with limitations.
          <br /><br />
          <strong>Scalability and flexibility:</strong> Your software solution can grow and adapt alongside your business needs.
          <br /><br />
          <strong>Enhanced security and control:</strong> Custom software applications provide greater control over your data and security measures.
          <br /><br />
          <strong>Improved user experience:</strong> Custom software applications can be designed with user-friendly interfaces that streamline user adoption and boost productivity.
        </>
      ),
    },
    {
      question: "What industries does Adrig cater to?",
      answer: "",
    },
    {
      question: "How does Adrig approach the software development process?",
      answer: "",
    },
    {
      question: "How much does custom software development cost?",
      answer: "",
    },
    {
      question: "How can I get started with a custom software project?",
      answer: "",
    },
    {
      question: "How long does it take to develop custom software?",
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
              Software <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We are a leading software development company specializing in AI, ML, blockchain, and other advanced technologies. Our team of expert developers and engineers is dedicated to building innovative software solutions that help startups and enterprises achieve their business goals. With years of experience and a proven track record, we deliver high-quality, scalable, and secure software that drives growth and success.
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
                  src="/Website/Service/Softdev/SOFT1.jpg"
                  alt="Software Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Softdev/SOFT2.jpg"
                  alt="Software Development"
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
              Software Development Services We Offer
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

      {/* Types of Software We Build Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Types of Software We Build
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We design and develop a wide range of software solutions tailored to specific business requirements. Our platforms are built for scalability, security, and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Software Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Software Types List */}
              <div className="grid grid-cols-2 gap-4">
                {softwareTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {type.title}
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
              Software Development Project?
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
              Let&apos;s discuss how our software development solutions can help
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
