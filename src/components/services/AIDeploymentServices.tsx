"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIDeploymentServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Deployment Strategy and Planning",
      description:
        "We design a tailored AI deployment strategy aligned with your business goals, defining clear objectives, tools, timelines, and scalability requirements.",
    },
    {
      number: "02",
      title: "Infrastructure Setup & Configuration",
      description:
        "We set up and configure secure, scalable on-premises or cloud infrastructure optimized for the performance and reliability of your AI solutions.",
    },
    {
      number: "03",
      title: "Cloud Platform Integration",
      description:
        "We seamlessly integrate AI solutions with AWS, Azure, and Google Cloud, handling data migration, resource management, and cost optimization for scalable performance.",
    },
    {
      number: "04",
      title: "Continuous Integration & Delivery (CI/CD)",
      description:
        "We implement CI/CD pipelines to automate testing, validation, and deployment, reducing errors and accelerating time-to-market for your AI solutions.",
    },
    {
      number: "05",
      title: "Model Packaging and Optimization",
      description:
        "We package and optimize AI models for efficient, compatible deployment, fine-tuning performance to ensure reliable real-world effectiveness.",
    },
    {
      number: "06",
      title: "API Development",
      description:
        "We develop robust, well-documented APIs that enable seamless integration and reliable communication between your AI solutions and enterprise systems.",
    },
  ];

  const deploymentOptions = [
    { title: "Cloud Deployment" },
    { title: "On-premises Deployment" },
    { title: "Hybrid Deployment" },
    { title: "Multi-cloud Deployment" },
    { title: "Container-based Deployment" },
    { title: "Serverless Deployment" },
  ];

  const benefits = [
    {
      number: "01.",
      title: "Accelerate Deployment",
      description:
        "Streamline AI implementation to quickly achieve greater efficiency, cost savings, and improved decision-making.",
    },
    {
      number: "02.",
      title: "Scale Solutions",
      description:
        "Optimize and scale AI solutions to support growing workloads while maintaining high performance and competitiveness.",
    },
    {
      number: "03.",
      title: "Reduce Costs",
      description:
        "Reduce costs and accelerate ROI by leveraging established AI infrastructure and expertise instead of building an in-house team.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise and Experience",
      description:
        "ADRIG delivers precise, efficient, and tailored AI solutions by leveraging deep cross-industry expertise, advanced technologies, and best practices to drive measurable business outcomes.",
    },
    {
      number: "02.",
      title: "Scalability and Flexibility",
      description:
        "ADRIG provides scalable, flexible AI solutions with modular architecture and cloud integration, ensuring seamless expansion, upgrades, and long-term adaptability to evolving business needs.",
    },
    {
      number: "03.",
      title: "End-to-end Services",
      description:
        "ADRIG provides end-to-end AI services, from consultation and deployment to continuous support, ensuring seamless integration, customization, and optimal performance.",
    },
  ];

  const faqs = [
    {
      question: "What are AI deployment services, and why do I need them?",
      answer: (
        <>
          AI deployment services involve the process of integrating and implementing AI models and solutions into an organization's existing infrastructure. These services ensure that your AI solutions effectively deliver actionable insights, automate processes, and enhance decision-making. By leveraging AI deployment services, you can:
          <br /><br />
          <strong>Leverage advanced AI capabilities.</strong>
          <br />
          <strong>Optimize workflows</strong>
          <br />
          <strong>Enhance operational efficiency.</strong>
          <br />
          <strong>Reduce operational costs</strong>
          <br />
          <strong>Drive innovation and competitive advantage.</strong>
          <br /><br />
          Deploying AI solutions correctly ensures that they are scalable, secure, and seamlessly integrated into your existing infrastructure, maximizing their impact and value.
        </>
      ),
    },
    {
      question: "What AI frameworks does LeewayHertz support for deployment?",
      answer: "",
    },
    {
      question: "How does LeewayHertz ensure data security during AI deployment?",
      answer: "",
    },
    {
      question: "What kind of support does LeewayHertz offer post AI deployment?",
      answer: "",
    },
    {
      question: "How can I get started with your AI deployment services?",
      answer: "",
    },
    {
      question: "How does LeewayHertz handle the scalability of AI deployments?",
      answer: "",
    },
    {
      question: "Why should I choose LeewayHertz as my AI deployment service provider?",
      answer: "",
    },
    {
      question: "What platforms does LeewayHertz support for AI solution deployment?",
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
              AI Deployment Services <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our AI deployment services enable seamless integration of cutting-edge AI solutions into your business operations, ensuring a smooth transition from development to real-world application. We expertly manage and optimize the intricate interactions between AI models, data, and infrastructure on platforms like AWS, Azure, and Vertex AI, ensuring precise and efficient AI development and deployment. From configuration and integration to monitoring and maintenance, our team manages every deployment aspect to ensure optimal performance.
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
                  alt="AI Deployment Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="AI Deployment Services"
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
              Our AI Deployment Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Secure, scalable, and seamless AI deployment that ensures reliable performance and enterprise-ready integration.
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

      {/* Deployment Options Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Deployment Options
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Flexible and secure AI deployment models designed to fit your infrastructure, scalability, and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="AI Deployment Options"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Deployment Options List */}
              <div className="grid grid-cols-2 gap-4">
                {deploymentOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {option.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Can Businesses Benefit from Our AI Deployment Services?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Businesses benefit through faster time-to-market, scalable and secure deployments, reduced operational risk, and consistent AI performance across environments.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {benefit.number} {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {benefit.description}
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

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ensure Robust Security and Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Implement robust security measures and regulatory compliance to protect sensitive data and prevent unauthorized access to AI solutions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gain Expert Guidance and Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Leverage expert knowledge in machine learning, infrastructure, and security to ensure effective AI implementation and optimization.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integrate Seamlessly with Existing Systems
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ensure seamless integration of AI solutions with existing systems and workflows to enhance efficiency while minimizing operational disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LeewayHertz Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">LeewayHertz</span> as your AI Deployment Partner?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              A trusted partner delivering secure, scalable, and business-aligned AI deployments with proven enterprise expertise.
            </p>
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
              Let&apos;s discuss how our AI deployment services can help
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

