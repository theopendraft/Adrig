"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SoftwareConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Software Launch Consulting",
      description:
        "Strategic software consulting designed to align technology with your business goals. We help you plan, optimize, and scale solutions for long-term success.",
    },
    {
      number: "02",
      title: "Software Integration & Enhancement Consulting",
      description:
        "Strategic software consulting designed to align technology with your business goals. We help you plan, optimize, and scale solutions for long-term success.",
    },
    {
      number: "03",
      title: "Technology Stack Identification",
      description:
        "Strategic software consulting designed to align technology with your business goals. We help you plan, optimize, and scale solutions for long-term success.",
    },
    {
      number: "04",
      title: "Software Compliance Consulting",
      description:
        "Strategic software consulting designed to align technology with your business goals. We help you plan, optimize, and scale solutions for long-term success.",
    },
  ];

  const technologies = [
    {
      title: "Blockchain Technology",
      description:
        "Having worked with 20+ Fortune500 clients, we can help you identify the potential of Blockchain for your business idea with our software strategy consulting.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "With our expertise in Machine Learning, RPA, Image Processing and Deep Learning models, we transform businesses with next-generation AI software solutions.",
    },
    {
      title: "Mobile & Web Apps",
      description:
        "Being one of the first few companies to launch a commercial app on the App Store, our team can help you launch a successful mobile/web app from scratch, providing you complete assistance from ideation through launch.",
    },
    {
      title: "Internet of Things",
      description:
        "With broad expertise in IoT systems and innovations, our IoT specialists structure and create secure IoT solutions that enable you to gather enormous information, and enhance important procedures.",
    },
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
      question: "What is a Software Consulting Company?",
      answer: (
        <>
          Software Consulting is defined as the activity of providing expert knowledge in the software space to a third party. Software Consulting Services are offered when any organization requires an expert opinion regarding a business idea or decision.
          <br /><br />
          A company that provides Software Consulting is known as a Software Consulting Company.
        </>
      ),
    },
    {
      question: "What is the difference between Software Consultant and Developer?",
      answer: "",
    },
    {
      question: "What software consulting services do consultants provide?",
      answer: "",
    },
    {
      question: "What are the benefits of hiring Software Consulting Company?",
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
              Software <span className="text-blue-600">Consulting</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              By providing Software Consulting Services, we help you emphasize what you need and which technology can align with your operational and financial objectives. Our Software Consultants aim to maximize your ROI and convert your idea into reality with our expertise across emerging technologies, including Blockchain, AI, IoT and Cloud Computing.
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
                  alt="Software Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/Consulting/consulting2.png"
                  alt="Software Consulting"
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
              Our Software Consulting Services
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

      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technologies that our software development team works on
            </h2>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
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
              Let&apos;s discuss how our software consulting solutions can help
              your business make better technology decisions and drive growth.
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
