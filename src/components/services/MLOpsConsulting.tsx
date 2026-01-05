"use client";

import { useState } from "react";
import Link from "next/link";

export default function MLOpsConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "ML Pipeline Development",
      description:
        "We design automated ML pipelines that process data and code seamlessly to ensure accurate model training and high-quality machine learning outcomes.",
    },
    {
      number: "02",
      title: "Model Deployment and Implementation",
      description:
        "We deploy machine learning models on cloud-native platforms like AWS, Azure, and GCP to ensure high availability, scalability, and reliability.",
    },
    {
      number: "03",
      title: "Continuous Delivery for Machine Learning",
      description:
        "Our CI/CD services automate the building, testing, and deployment of ML pipelines, enabling faster experimentation, quicker iterations, and accelerated time-to-market.",
    },
    {
      number: "04",
      title: "Model Monitoring",
      description:
        "Our observability solutions deliver real-time insights through distributed tracing, log analysis, and anomaly detection to optimize AI model accuracy and performance.",
    },
    {
      number: "05",
      title: "Data Engineering and Management Services",
      description:
        "We provide expert guidance on data acquisition, cleaning, and processing to ensure high-quality, reliable datasets that improve ML model performance and reduce errors.",
    },
    {
      number: "06",
      title: "Model Governance and Compliance",
      description:
        "We strengthen ML application security and integrity through robust governance that ensures data confidentiality, ethical AI practices, regulatory compliance, bias detection, and model fairness.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Fastrack Your Workflow",
      description:
        "We optimize and automate infrastructure, workflows, and data preparation to ensure efficiency and productivity across the entire ML lifecycle.",
    },
    {
      number: "02.",
      title: "End-to-end Development",
      description:
        "Our end-to-end MLOps services leverage advanced tools, algorithms, and automation to eliminate the need for extensive in-house expertise.",
    },
    {
      number: "03.",
      title: "Flexible MLOps Toolkit",
      description:
        "We leverage a unified platform that blends open-source flexibility with commercial reliability, along with curated notebooks and libraries, to deliver a seamless and integrated user experience.",
    },
  ];

  const additionalReasons = [
    {
      title: "Lower TCO for ML Projects",
      description:
        "We offer a vendor-agnostic approach that enables flexible ML deployments across cloud, on-premises, or hybrid environments without vendor lock-in.",
    },
    {
      title: "Efficient Collaboration",
      description:
        "We automate routine tasks, streamline experiments, and organize datasets to build high-performing models that deliver desired outcomes.",
    },
    {
      title: "Security and Compliance",
      description:
        "Our robust encryption safeguards your data in use, in transit, and at rest in the cloud, ensuring end-to-end security.",
    },
  ];

  const process = [
    { title: "Aligning Machine Learning Objectives With Business Goals" },
    { title: "Data Preparation and Management" },
    { title: "Model Training" },
    { title: "Model Evaluation" },
    { title: "Model Serving" },
    { title: "Model Monitoring" },
  ];

  const faqs = [
    {
      question: "What is MLOps?",
      answer: (
        <>
          MLOps is a set of practices and tools that aim to streamline machine learning model development, deployment and monitoring. It is important because it can help businesses to reduce the time and costs associated with building and deploying ML models, improve model performance and increase the reliability and scalability of ML systems.
        </>
      ),
    },
    {
      question: "Why should I opt for MLOps consulting?",
      answer: "",
    },
    {
      question: "What services do you offer related to MLOps?",
      answer: "",
    },
    {
      question: "How can you help my business implement MLOps?",
      answer: "",
    },
    {
      question: "Do you offer customized solutions or pre-packaged MLOps packages?",
      answer: "",
    },
    {
      question: "How can I get started with your MLOps consulting services?",
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
              MLOps Consulting <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We optimize your business's machine learning operations for improved productivity and efficiency by automating ML pipelines and implementing AutoML platforms. Our MLOps expertise ensures improved planning and development, reproducibility in model training and deployment, scalability with hotkey access to necessary tools and resources, and continuity in the entire production flow leading to smooth machine learning operations.
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
                  alt="MLOps Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="MLOps Consulting"
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
              Our MLOps Consulting Services
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

      {/* Why Hire ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Hire <span className="text-primary">ADRIG</span> for MLOps Consulting?
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

          {/* Additional Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {additionalReasons.map((reason, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our MLOps Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="MLOps Implementation Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Process List */}
              <div className="grid grid-cols-2 gap-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {step.title}
                    </span>
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
              Let&apos;s discuss how our MLOps consulting services can help
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

