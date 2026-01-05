"use client";

import { useState } from "react";
import Link from "next/link";

export default function HireGolangDevelopers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Custom Blockchain Development",
      description:
        "With 100+ full-stack developers and a dedicated team of Go experts, we specialize in building custom blockchain ecosystems for various industries. We create future-ready interoperable and scalable blockchains enriched with features specific to your business use case.",
    },
    {
      number: "02",
      title: "Multi-chain Solution",
      description:
        "Our Go developers have expertise in using tools, tech stacks and frameworks designed to support multi-chain solution development. We strengthen these solutions with integrated interoperability and security for seamless accessibility over multiple siloed blockchain ecosystems.",
    },
    {
      number: "03",
      title: "dApp Development",
      description:
        "With hands-on experience in decentralized application development, our Golang developers build custom dApps for your enterprise-specific needs. We optimize the dApps to achieve transparency, scalability and automation while solving issues related to the services.",
    },
    {
      number: "04",
      title: "Microservices Deployment",
      description:
        "Our team adopts an architectural and organizational method for Go microservice development. We build and activate small independent components to perform intended services. Once developed, we coordinate the microservices together via well-defined APIs.",
    },
    {
      number: "05",
      title: "Integration and Testing",
      description:
        "We integrate independent APIs and SDKs into your Go-powered platform to enable seamless interaction across data, applications and device components. Our Go integration eases your business processes and delivers data and connectivity for programs and applications.",
    },
    {
      number: "06",
      title: "Migration and Upgrade",
      description:
        "We easily migrate your existing project to Go-based architecture with our ability to perform risk-free same and cross-protocol migration execution. Once migrated, our team rigorously tests various project components and performs optimization wherever needed.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Full Stack Developers",
      description:
        "We have qualified Go developers who keep themselves updated with the most recent Golang development strategies and trends, contributing their valuable inputs to designing scalable multifunctional Go-based decentralized solutions.",
    },
    {
      number: "02.",
      title: "One-stop Golang Development Service",
      description:
        "With 100+ full-stack developers, we offer full support for enterprises seeking to build and launch customized decentralized applications. We undertake projects from simple Web3 wallet development to creating a trailblazing blockchain network.",
    },
    {
      number: "03.",
      title: "Impressive Work Portfolio",
      description:
        "Being an experienced Golang development company, we have wide expertise in using tools and frameworks designed to support multi-chain solution development. We strengthen these solutions with interoperability and high-end security, ensuring their seamless accessibility over multiple siloed blockchain ecosystems.",
    },
  ];

  const faqs = [
    {
      question: "What services do Golang development companies offer?",
      answer:
        "Golang development companies offer a range of services, including software development, testing, maintenance, and support. They can also provide consulting and project management services to help you plan and execute your project. Our services include custom blockchain development, multi-chain solutions, dApp development, microservices deployment, integration and testing, and migration and upgrade services.",
    },
    {
      question: "How do I choose a Golang development company?",
      answer:
        "When choosing a Golang development company, consider factors such as: experience and expertise in Golang development, portfolio of successful projects, team size and qualifications, range of services offered, technical capabilities, and ability to deliver scalable solutions. Look for companies with proven track records in blockchain and dApp development, especially those with 100+ full-stack developers and expertise in multi-chain solutions.",
    },
    {
      question: "What are the advantages of using Golang for web development?",
      answer:
        "Golang offers several advantages for web development including faster execution, unparalleled scalability, built-in concurrency support, efficient memory management, and strong performance. Golang is particularly well-suited for blockchain development, microservices architecture, and building high-performance decentralized applications. Its simplicity and efficiency make it ideal for building scalable, production-ready solutions.",
    },
    {
      question: "Why should we choose Leewayhertz for Golang development?",
      answer:
        "We offer comprehensive Golang development services backed by a team of blockchain experts, full-stack developers, and UX designers. With 100+ full-stack developers and a dedicated team of Go experts, we specialize in building custom blockchain ecosystems, multi-chain solutions, and enterprise-specific dApps. Our impressive work portfolio and one-stop Golang development service make us an ideal partner for your blockchain projects.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hire Golang <span className="text-blue-600">Developers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Launch business-ready solutions and custom futuristic dApps with our complete range of Go development services and solutions backed by a team of blockchain experts, full-stack developers, and UX designers. As an experienced Golang development company, we build innovative Go-based projects delivering with faster executions and unparalleled scalability.
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
                  src="/Website/Service/AI/ai1.jpg"
                  alt="Golang Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Golang Development"
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
              Our Golang Development Services
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

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Makes <span className="text-primary">ADRIG</span> the Top Golang Development
              Company?
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
              Let&apos;s discuss how our Golang development services can help
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

