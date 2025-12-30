"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileAppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Mobile Product Strategy",
      description:
        "Define goals, user journeys, and release plans to align mobile outcomes with business impact.",
    },
    {
      number: "02",
      title: "Native iOS & Android Development",
      description:
        "Build high-performance native apps with platform-specific best practices and rich experiences.",
    },
    {
      number: "03",
      title: "Cross-platform Development",
      description:
        "Ship faster on iOS and Android with shared codebases while keeping great UX and performance.",
    },
    {
      number: "04",
      title: "API & Backend Integration",
      description:
        "Design and integrate secure APIs, auth, and data sync to power reliable mobile experiences.",
    },
    {
      number: "05",
      title: "App Performance & Analytics",
      description:
        "Optimize speed, battery, and reliability with observability, crash reporting, and A/B testing.",
    },
    {
      number: "06",
      title: "Launch, Support, and Growth",
      description:
        "App store readiness, releases, monitoring, and continuous improvements post-launch.",
    },
  ];

  const solutions = [
    { title: "Consumer Mobile Apps" },
    { title: "Enterprise Mobility Apps" },
    { title: "On-demand & Marketplace Apps" },
    { title: "Fintech & Payments Apps" },
    { title: "Healthcare & Wellness Apps" },
    { title: "Productivity & Collaboration Apps" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Performance-first Apps",
      description:
        "We optimize for speed, stability, and usability—critical for engaging mobile users.",
    },
    {
      number: "02.",
      title: "End-to-end Ownership",
      description:
        "Strategy, design, build, QA, releases, and support handled by one accountable team.",
    },
    {
      number: "03.",
      title: "Post-launch Partnership",
      description:
        "We stay to monitor, optimize, and ship new features to keep your app competitive.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "Most mobile apps reach first release (MVP) in 8-12 weeks depending on scope; complex apps may use phased releases.",
    },
    {
      question: "Do you build both native and cross-platform?",
      answer:
        "Yes. We build native (Swift/Kotlin) and cross-platform (React Native) based on your performance, timeline, and budget needs.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We integrate with CRMs, ERPs, payments, identity providers, and custom backends via secure APIs.",
    },
    {
      question: "How do you handle quality and testing?",
      answer:
        "We use automated testing, device farms, and CI/CD to ensure quality, plus monitoring and crash reporting post-launch.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer managed support, SLO/SLAs, performance tuning, and continuous feature delivery after launch.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Mobile App Development
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
              We design and build native and cross-platform mobile apps that are
              fast, secure, and delight users on every device.
            </p>

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

          {/* Two Large Image Boxes with Gap and Padding */}
          <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="aspect-[16/10] rounded-lg overflow-hidden">
                  <img
                    src="/Website/Service/MobileApp/mobile1.jpg"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[16/10] rounded-lg overflow-hidden">
                  <img
                    src="/Website/Service/MobileApp/mobile2.jpg"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Development Services We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
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

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/MobileApp/mobile3.jpg"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of Mobile Solutions We Build
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies.
              </p>

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
              Mobile App Project?
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
                  {/* Icon - Left Side */}
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

                  {/* Question Text */}
                  <span className="font-bold text-gray-900 flex-1 text-left">
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our mobile expertise can help your business launch
              faster, scale securely, and delight users.
            </p>
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
      </section>
    </>
  );
}

