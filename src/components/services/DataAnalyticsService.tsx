"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataAnalyticsService() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Data Analysis",
      description:
        "Our data analysis services use EDA, statistical methods, and ML algorithms to clean, visualize, analyze data, and deliver actionable insights through customized reports.",
    },
    {
      number: "02",
      title: "Data Analytics Consulting",
      description:
        "We provide end-to-end data services, from strategy and analysis to predictive modeling and data governance, to support your business needs.",
    },
    {
      number: "03",
      title: "Data Strategy Development",
      description:
        "We assess your data landscape, identify analytics opportunities, and implement a refined roadmap to turn data into insights that improve decisions, operations, and products.",
    },
    {
      number: "04",
      title: "Predictive Analytics",
      description:
        "Our predictive analytics services use advanced statistics and ML algorithms like linear regression and random forests to forecast trends and outcomes with high accuracy.",
    },
  ];

  const expertise = [
    { title: "Machine Learning" },
    { title: "Deep Learning" },
    { title: "Data Preprocessing" },
    { title: "Supervised and Unsupervised Learning" },
    { title: "Model Fine-tuning" },
    { title: "Feature Engineering" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expert Data Analysts",
      description:
        "Our data analysts are proficient in data analytics and machine learning model training, with deep knowledge of statistics, programming, data visualization, and machine learning to extract crucial insights from your data.",
    },
    {
      number: "02.",
      title: "Comprehensive Analytics Services",
      description:
        "We provide end-to-end data analytics services—from data analysis and strategy development to predictive modeling and data governance. Our services empower businesses to make data-driven decisions.",
    },
    {
      number: "03.",
      title: "Advanced ML Expertise",
      description:
        "Our data analysts leverage advanced tools and frameworks like TensorFlow, PyTorch, and Scikit-learn to build efficient models for predictive maintenance, anomaly detection, and business-specific AI solutions.",
    },
  ];

  const faqs = [
    {
      question: "How do you evaluate the performance of an AI model?",
      answer:
        "There are several ways to evaluate the performance of an AI model, such as measuring accuracy, precision, recall, F1 score, and AUC-ROC. Our data analysts use a combination of these metrics and other techniques to evaluate the model's performance.",
    },
    {
      question: "Can AI models be used for predictive analytics?",
      answer:
        "Yes, AI models are highly effective for predictive analytics. Our data analysts use advanced statistics and ML algorithms like linear regression and random forests to forecast trends and outcomes with high accuracy, helping businesses make informed decisions based on predicted future scenarios.",
    },
    {
      question: "Do LeewayHertz's data analysts have expertise in using different data types for developing AI models?",
      answer:
        "Yes, our data analysts have extensive expertise working with various data types including structured data, unstructured data, time series, images, text, and more. We use appropriate preprocessing and feature engineering techniques to prepare different data types for AI model development.",
    },
    {
      question: "How long does developing and deploying an AI model usually take?",
      answer:
        "The timeline for developing and deploying an AI model varies based on complexity, data availability, and project requirements. Simple models may take 4-8 weeks, while complex models with extensive data preprocessing can take 3-6 months. We provide detailed timelines during the initial consultation.",
    },
    {
      question: "Can you help us with data visualization and dashboard creation for our data analysis needs?",
      answer:
        "Yes, our data analysts excel in data visualization and dashboard creation. We use various visualization tools and techniques to create customized reports and interactive dashboards that help you understand your data and make data-driven decisions effectively.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Data Analytics <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage the expertise of LeewayHertz's data analysts, proficient in data analytics and machine learning model training, to harness the power of data and improve business performance with data-driven decisions. With their deep knowledge of statistics, programming, data visualization, and machine learning, our data analysts empower businesses of all sizes to extract crucial insights from their data, refine their data strategies, and comprehend complex data.
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
                  alt="Data Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Data Analytics"
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
              Our Data Analytics Services
            </h2>
          </div>

          {/* Services Grid - 2x2 */}
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

      {/* Areas of Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Data Analyst's Areas of Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our data analysts leverage advanced tools, frameworks, and techniques to build efficient models and deliver actionable insights tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Data Analytics Expertise"
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

      {/* Why Choose Adrig Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">Adrig</span> for Your
              Next
              <br />
              Data Analytics Project?
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
              Let&apos;s discuss how our data analytics services can help
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

