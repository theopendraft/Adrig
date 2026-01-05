"use client";

import { useState } from "react";
import Link from "next/link";

export default function BigDataConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Big Data Strategy Development",
      description:
        "We collaborate with clients to define comprehensive data strategies by assessing data needs, identifying sources, and establishing governance and management frameworks aligned with business goals.",
    },
    {
      number: "02",
      title: "Big Data Architecture Design",
      description:
        "Our big data experts design scalable data architectures, selecting the right databases, data lakes, warehouses, and integration frameworks to support efficient data storage, processing, and analytics.",
    },
    {
      number: "03",
      title: "Data Integration and ETL",
      description:
        "We design and implement ETL pipelines that integrate data from diverse sources into a unified, high-quality format for efficient analysis.",
    },
    {
      number: "04",
      title: "Data Governance and Security",
      description:
        "Our big data experts establish robust data governance frameworks with access controls, classification, lineage, and retention policies to ensure data integrity, privacy, and compliance.",
    },
    {
      number: "05",
      title: "Data Visualization and Reporting",
      description:
        "Our big data experts support data preparation, visualization selection, and scalable solution design to deliver interactive, insight-driven reporting systems.",
    },
    {
      number: "06",
      title: "Implementing ML and Analytics Algorithms",
      description:
        "Our big data experts implement and train ML and analytics models within data pipelines to generate actionable insights from complex datasets.",
    },
  ];

  const expertise = [
    { title: "Data Management" },
    { title: "Distributed Computing" },
    { title: "Data Processing" },
    { title: "Machine Learning" },
    { title: "Data Security and Privacy" },
    { title: "Performance Optimization" },
  ];

  const industries = [
    { title: "Finance" },
    { title: "Retail" },
    { title: "Manufacturing" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Deep Big Data Expertise",
      description:
        "With deep expertise in handling the challenges associated with big data and proficiency in advanced tools and technologies, such as distributed computing frameworks, data lakes, and cloud platforms, our experts can effortlessly handle the scale and complexity of big data.",
    },
    {
      number: "02.",
      title: "Comprehensive Solutions",
      description:
        "We provide end-to-end big data consulting services—from strategy development and architecture design to data integration, governance, and analytics implementation. Our comprehensive approach ensures businesses derive maximum value from their large and complex datasets.",
    },
    {
      number: "03.",
      title: "Industry-Specific Experience",
      description:
        "Our big data experts have extensive experience across various industries including finance, retail, and manufacturing, enabling us to deliver tailored solutions that address industry-specific challenges and requirements.",
    },
  ];

  const faqs = [
    {
      question: "How can LeewayHertz help organizations develop data strategy?",
      answer:
        "We help organizations trapped in the complexities of data to create a comprehensive data strategy that aligns with their business objectives. This involves conducting an assessment of the organization's data needs, identifying relevant data sources, defining data governance policies, and establishing data management frameworks. By partnering with our experts, data-driven businesses can ensure that their data strategy is well-defined, actionable, and tailored to their specific requirements.",
    },
    {
      question: "How can we get started with your big data consulting services?",
      answer:
        "Getting started is straightforward. Contact us for an initial consultation where we'll assess your current data infrastructure, understand your business objectives, and identify big data opportunities. We'll then develop a tailored big data strategy and roadmap, guiding you through each step from architecture design to implementation and ongoing optimization.",
    },
    {
      question: "How does LeewayHertz address data governance and security concerns associated with big data services?",
      answer:
        "We establish robust data governance frameworks with access controls, data classification, lineage tracking, and retention policies. Our big data experts are proficient in data security and privacy techniques, ensuring data protection, regulatory compliance, and comprehensive data governance management throughout the big data lifecycle.",
    },
    {
      question: "What kind of data can your team handle?",
      answer:
        "Our team can handle diverse data formats and structures including structured, unstructured, and semi-structured data. We efficiently handle data acquisition, cleansing, integration, and storage across various data sources, ensuring your big data infrastructure can accommodate the scale and complexity of your datasets.",
    },
    {
      question: "Can LeewayHertz help us leverage machine learning and analytics?",
      answer:
        "Yes, absolutely. Our big data experts implement and train ML and analytics models within data pipelines to generate actionable insights from complex datasets. We are proficient in supervised and unsupervised learning, deep learning, ensemble methods, and dimensionality reduction techniques, enabling you to leverage advanced analytics on your big data.",
    },
    {
      question: "How do you determine the right ML algorithm for a given project?",
      answer:
        "We determine the right ML algorithm by analyzing your data characteristics, business requirements, and use case objectives. Our big data experts assess data types, volume, complexity, and desired outcomes to select the most suitable algorithms. We leverage our expertise in various ML techniques including supervised learning, unsupervised learning, deep learning, and ensemble methods to ensure optimal algorithm selection for your specific big data project.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Big Data Consulting <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Harness the power of big data with our big data consulting services. With deep expertise in handling the challenges associated with big data and proficiency in advanced tools and technologies, such as distributed computing frameworks, data lakes, and cloud platforms, our experts can effortlessly handle the scale and complexity of big data, enabling businesses to derive value from their large and complex datasets.
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
                  alt="Big Data Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Big Data Consulting"
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
              Our Big Data Consulting Services
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

      {/* Our Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Big Data Consultants Have Expertise In
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our big data experts are proficient in various domains, enabling us to design and implement scalable big data solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Big Data Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Expertise List */}
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
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

      {/* Industry Verticals Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Verticals We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our big data and AI expertise helps businesses across various industries optimize operations, uncover insights, and drive competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Content */}
            <div>
              {/* Industries List */}
              <div className="grid grid-cols-1 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {industry.title}
                      </h3>
                      {industry.title === "Finance" && (
                        <p className="text-gray-700 leading-relaxed">
                          Our big data analytics expertise helps financial services uncover insights in customer behavior, fraud detection, and risk management to drive informed decisions and competitive advantage.
                        </p>
                      )}
                      {industry.title === "Retail" && (
                        <p className="text-gray-700 leading-relaxed">
                          Our big data and AI expertise helps retailers optimize supply chains, understand customer preferences, improve pricing strategies, and deploy custom AI/ML solutions to streamline operations.
                        </p>
                      )}
                      {industry.title === "Manufacturing" && (
                        <p className="text-gray-700 leading-relaxed">
                          Our big data analytics services help manufacturers improve quality control, optimize production, reduce downtime, and lower operational costs through data-driven insights.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Industry Verticals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span> for Big Data
              Consulting?
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
              Let&apos;s discuss how our big data consulting services can help
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

