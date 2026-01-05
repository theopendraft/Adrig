"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataEngineeringServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Data Strategy and Consulting",
      description:
        "We deliver tailored data strategies, from roadmap and scalable architecture design to DataOps implementation, to help you effectively manage and maximize the value of your data assets.",
    },
    {
      number: "02",
      title: "Data Annotation and Labeling",
      description:
        "Our data engineers deliver precise data labeling and annotation for ML tasks like image recognition, NLP, and sentiment analysis, enabling models to learn accurately and effectively.",
    },
    {
      number: "03",
      title: "Data Processing Services",
      description:
        "We apply advanced data mining and modeling techniques to clean, structure, and analyze data, enabling accurate insights and efficient decision-making.",
    },
    {
      number: "04",
      title: "Data Warehousing Service",
      description:
        "We provide secure, scalable, and compliant data storage solutions across on-premises and cloud environments to ensure reliable access and efficient data management.",
    },
    {
      number: "05",
      title: "Big Data Analytics",
      description:
        "We use data mining, modeling, and visualization to uncover actionable insights, predict trends, and drive data-driven decisions tailored to your business needs.",
    },
    {
      number: "06",
      title: "Data Pipeline Development",
      description:
        "We design robust, scalable data pipelines that automate ingestion, processing, transformation, and storage to ensure reliable data flow and accessibility.",
    },
    {
      number: "07",
      title: "Data Governance and Compliance",
      description:
        "We help organizations meet data governance and regulatory requirements through data classification, lineage tracking, access controls, quality checks, audits, and continuous compliance monitoring.",
    },
    {
      number: "08",
      title: "ML Engineering",
      description:
        "Our ML engineers use advanced tools like NumPy, TensorFlow, and SciPy to build scalable, efficient ML models and applications that integrate seamlessly into your workflows and drive innovation.",
    },
    {
      number: "09",
      title: "Data Quality Assurance",
      description:
        "We ensure data integrity and reliability through rigorous quality assurance, including validation, cleansing, monitoring, and auditing across the data lifecycle.",
    },
  ];

  const solutions = [
    { title: "Data Pipeline Architecture" },
    { title: "Data Warehouse Solutions" },
    { title: "Real-time Data Processing" },
    { title: "Data Lake Implementation" },
    { title: "ETL/ELT Solutions" },
    { title: "Data Integration Services" },
    { title: "Data Quality Management" },
    { title: "Data Governance Frameworks" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise in Data Engineering",
      description:
        "We develop comprehensive data engineering solutions tailored to diverse business needs. Each solution is designed for scalability, reliability, and long-term performance.",
    },
    {
      number: "02.",
      title: "Customized Solutions",
      description:
        "We take a tailored approach to data engineering, recognizing that every business has unique data needs. By closely collaborating with clients, we deliver customized solutions that address real challenges and drive measurable results.",
    },
    {
      number: "03.",
      title: "End-to-end Services",
      description:
        "We provide end-to-end data engineering services—from strategy and design to development, deployment, and maintenance. Our multidisciplinary team ensures high-quality delivery on time and aligned with your business goals.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of custom data engineering services?",
      answer:
        "Custom data engineering services offer tailored solutions that align with your specific business needs, ensuring scalability, data quality, and compliance. They enable efficient data processing, better decision-making, and seamless integration with your existing systems.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including healthcare, finance, retail, manufacturing, technology, and more. Our data engineering services are adaptable to various business domains and use cases.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement robust security measures including encryption, access controls, and compliance frameworks. Our data governance services ensure adherence to regulations like GDPR, HIPAA, and other industry-specific requirements.",
    },
    {
      question: "What is the typical timeline for a data engineering project?",
      answer:
        "Project timelines vary based on complexity and scope. Simple data pipelines may take 4-8 weeks, while comprehensive data infrastructure projects can take 3-6 months. We provide detailed timelines during the initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance services including monitoring, optimization, troubleshooting, and updates to ensure your data infrastructure remains reliable and efficient.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Data Engineering <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We offer comprehensive data engineering services, empowering organizations with actionable insights and strategic decision-making capabilities. From data mining and preprocessing to data modeling and big data analytics, we offer the complete suite of data engineering services to ensure that your data-driven initiatives are executed seamlessly and effectively. With a focus on scalability, data quality assurance, compliance and governance, our services are tailored to your unique business needs.
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
                  alt="Data Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Data Engineering"
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
              Our Data Engineering Services
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

      {/* Types of Data Engineering Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Types of Data Engineering Solutions We Develop
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We design and develop a wide range of data engineering solutions tailored to specific business requirements. Our platforms are built for scalability, reliability, and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Data Engineering"
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
              Data Engineering Project?
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
              Let&apos;s discuss how our data engineering services can help
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

