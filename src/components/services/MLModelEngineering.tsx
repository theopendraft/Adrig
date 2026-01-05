"use client";

import { useState } from "react";
import Link from "next/link";

export default function MLModelEngineering() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const expertise = [
    {
      number: "01",
      title: "Machine Learning",
      description:
        "Our ML engineers combine strong expertise in statistics, probability, and programming languages like Python, R, and Java to build and accurately evaluate reliable ML models.",
    },
    {
      number: "02",
      title: "Model Fine-tuning",
      description:
        "Our ML engineers monitor and maintain models for optimal performance, applying techniques such as hyperparameter tuning, transfer learning, ensembling, and pruning.",
    },
    {
      number: "03",
      title: "Data Engineering",
      description:
        "Our data engineers use frameworks like Apache Spark and Hadoop to clean, preprocess, analyze, and visualize data efficiently.",
    },
    {
      number: "04",
      title: "Expertise Across Industries",
      description:
        "Our ML engineers leverage cross-industry expertise in healthcare, finance, and e-commerce to build custom, compliant ML models tailored to each business's needs.",
    },
    {
      number: "05",
      title: "Cloud Computing",
      description:
        "Our developers have deep expertise in deploying and scaling AI solutions across major cloud platforms, including AWS, Google Cloud, and Microsoft Azure.",
    },
    {
      number: "06",
      title: "Software Engineering",
      description:
        "Our ML engineers apply strong software engineering practices, including version control, testing, and deployment, to deliver thoroughly tested, high-quality ML models.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Custom Model Development",
      description:
        "Our ML model engineering services deliver end-to-end custom model development across the full ML lifecycle, ensuring solutions meet specific business needs and perform reliably.",
    },
    {
      number: "02",
      title: "Model Optimization",
      description:
        "Our model optimization services enhance existing ML models using techniques like transfer learning, ensembling, and pruning to improve accuracy and performance.",
    },
    {
      number: "03",
      title: "Model Integration",
      description:
        "We deploy and integrate ML models into cloud or on-prem environments, fine-tuning them for optimal performance and reliable business impact.",
    },
    {
      number: "04",
      title: "Model Maintenance and Monitoring",
      description:
        "We provide continuous ML model maintenance and monitoring, including performance tracking and retraining, to ensure sustained accuracy and efficiency.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Data Security",
      description:
        "We ensure end-to-end data security through strict access controls, authentication, authorization, encryption, and backups to protect sensitive information throughout the ML engineering process.",
    },
    {
      number: "02.",
      title: "End-to-End Solution Development",
      description:
        "Our full-cycle development services cover ideation to maintenance, delivering future-ready solutions aligned with your business goals and evolving technology needs.",
    },
    {
      number: "03.",
      title: "Infrastructure",
      description:
        "Our world-class ML infrastructure combines high-performance computing, distributed systems, and large-scale data processing to support complex and demanding ML projects.",
    },
  ];

  const faqs = [
    {
      question: "What is ML model engineering?",
      answer:
        "Machine learning (ML) model engineering is a technical process that involves various steps, including data collection and preprocessing, model selection, training, deployment and monitoring. It aims to develop effective and efficient ML models to solve specific problems and meet diverse business use cases. This process requires a range of technical skills, including expertise in programming languages, data structures, algorithms and ML frameworks.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with a wide range of industries including healthcare, finance, e-commerce, retail, manufacturing, technology, and more. Our ML engineers leverage cross-industry expertise to build custom, compliant ML models tailored to each business's specific needs and regulatory requirements.",
    },
    {
      question: "What are the benefits of hiring professional ML model engineering services?",
      answer:
        "Professional ML model engineering services provide several benefits including access to expert talent, proven methodologies, end-to-end development support, optimized model performance, reduced time-to-market, and ongoing maintenance and monitoring. This ensures your ML models are production-ready, scalable, and deliver reliable business impact.",
    },
    {
      question: "How do you ensure the security of my data?",
      answer:
        "We ensure end-to-end data security through strict access controls, authentication, authorization, encryption, and backups. We implement comprehensive security measures throughout the ML engineering process to protect sensitive information and comply with industry regulations and standards.",
    },
    {
      question: "What is your approach to ML model development?",
      answer:
        "Our approach to ML model development follows a comprehensive methodology covering the full ML lifecycle: data collection and preprocessing, model selection and design, training and validation, optimization and fine-tuning, deployment and integration, and continuous monitoring and maintenance. We ensure each model is thoroughly tested and optimized for your specific business use case.",
    },
    {
      question: "How long does it take to develop an ML model?",
      answer:
        "The timeline for ML model development varies based on complexity, data availability, and project requirements. Simple models may take 4-8 weeks, while complex custom models with extensive data preprocessing and optimization can take 3-6 months. We provide detailed timelines during the initial consultation based on your specific needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ML Model Engineering <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              With deep expertise in machine learning frameworks and libraries, NLP, deep learning, data visualization/processing tools, and DevOps, we build powerful machine learning models that can drive transformative business outcomes. Whether you want to build a custom ML model from scratch, optimize an existing one, or deploy it in the cloud, we have you covered. Our custom ML models, including generative AI models, multimodal models, transformer models, and recommender systems, are optimized for business-specific use cases.
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
                  alt="ML Model Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="ML Model Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML Model Engineering Expertise Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our ML Model Engineering Expertise
            </h2>
          </div>

          {/* Expertise Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our ML Model Engineering Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ML model engineering services designed to build, optimize, integrate, and maintain production-grade machine learning models tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="ML Model Engineering Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Services List */}
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, index) => (
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
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
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
              Why Hire <span className="text-primary">ADRIG</span> for ML Model
              Engineering Services?
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
              Let&apos;s discuss how our ML model engineering services can help
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

