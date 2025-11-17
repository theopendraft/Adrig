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
        "Navigate the complexities of AI integration with our expert consultation.",
    },
    {
      number: "02",
      title: "Custom SaaS Product Development",
      description:
        "We employ advanced tools & technologies to craft secure & future-ready solutions.",
    },
    {
      number: "03",
      title: "UI/UX Design Service",
      description:
        "Persona development, user journey mapping, wireframing, and usability testing.",
    },
    {
      number: "04",
      title: "Migration to SaaS",
      description:
        "We expertly convert your on-premise software into a robust and scalable model.",
    },
    {
      number: "05",
      title: "API Development and Integration",
      description:
        "Build robust APIs that seamlessly connect your SaaS product with external sources.",
    },
    {
      number: "06",
      title: "Support and Maintenance",
      description:
        "Bug fixes, security updates, and performance opts to keep your SaaS running smoothly.",
    },
  ];

  const solutions = [
    { title: "Accounting SaaS Solutions" },
    { title: "Content Management System" },
    { title: "Enterprise Resource Planning" },
    { title: "Project Management SaaS" },
    { title: "Communication Solutions" },
    { title: "HR SaaS Solutions" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Customized Solutions",
      description:
        "We understand that every business is unique, so we take a tailored approach to SaaS development.",
    },
    {
      number: "02.",
      title: "End-to-end Services",
      description:
        "We offer comprehensive end-to-end services to ensure a seamless and succesful SaaS journey.",
    },
    {
      number: "03.",
      title: "Post-launch Support",
      description:
        "Our commitment to your success doesn't end with the launch of your SaaS solution.",
    },
  ];

  const faqs = [
    {
      question: "How quickly can we see results from predictive analytics?",
      answer:
        "Most clients begin seeing initial insights within 4-6 weeks of implementation. However, the full value of predictive analytics develops over time as the system collects more data and refines its models.",
    },
    {
      question: "Do we need to have a data science team to use this?",
      answer:
        "No, you don't need an in-house data science team. Our solutions are designed to be user-friendly with intuitive dashboards and automated insights. We provide full support and training to ensure your team can effectively utilize the analytics.",
    },
    {
      question: "What kind of data do we need to get started?",
      answer:
        "We can work with various data sources including historical sales data, customer behavior data, market trends, and operational metrics. The more comprehensive your data, the more accurate the predictions, but we can start with whatever data you currently have available.",
    },
    {
      question: "How accurate are the predictions?",
      answer:
        "Prediction accuracy varies based on data quality, quantity, and the specific use case. Typically, our models achieve 85-95% accuracy rates. We continuously monitor and refine the models to maintain and improve accuracy over time.",
    },
    {
      question: "Can predictive analytics integrate with our existing systems?",
      answer:
        "Yes, our predictive analytics solutions are designed to integrate seamlessly with popular business intelligence platforms, CRM systems, ERP software, and custom databases. We ensure smooth data flow between your existing infrastructure and our analytics platform.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              SAAS <span className="text-primary">Development</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build scalable, secure Software-as-a-Service platforms that
              generate recurring revenue and provide exceptional value to your
              customers through cloud-based solutions.
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
                  src="/Website/Service/Softdev/SOFT1.jpg"
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
                              src="/Website/Service/Softdev/SOFT2.jpg"
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

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              SaaS Development Services We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
            </p>
          </div>

          {/* Services Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded mb-6">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-500 to-gray-600">
                {/* Placeholder for image */}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of SaaS Solutions We Develop
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies.
              </p>

              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src="/right-up-blue.png"
                      alt="Arrow"
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span className="text-lg text-primary font-medium">
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
              <div key={index}>
                <div className="bg-white rounded-3xl p-10 flex flex-col">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-32">
                    {reason.number} {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Button - only show on middle card (index 1) */}
                {index === 1 && (
                  <Link href="/contact">
                    <button className="mt-6 w-full bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm tracking-wider">
                      GET STARTED
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
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
              Let&apos;s discuss how our SAAS development solutions can help
              your business gain a competitive edge and drive growth.
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
