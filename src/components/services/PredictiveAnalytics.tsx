"use client";

import { useState } from "react";
import Link from "next/link";

export default function PredictiveAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    "Advanced forecasting models using machine learning algorithms",
    "Real-time data processing and analysis capabilities",
    "Custom dashboards for easy visualization and interpretation",
    "Seamless integration with your existing business intelligence systems",
    "Automated alerts and recommendations based on predictive insights",
    "Continuous learning and improvement over time",
  ];

  const benefits = [
    {
      number: "01",
      title: "Anticipate market changes and stay ahead of competitors",
    },
    {
      number: "02",
      title: "Optimize inventory management and reduce operational costs",
    },
    {
      number: "03",
      title: "Identify potential risks before they impact your business",
    },
    {
      number: "04",
      title: "Make data-driven decisions with confidence",
    },
    {
      number: "05",
      title: "Improve customer retention through predictive analysis",
    },
    {
      number: "06",
      title: "Maximize ROI on marketing and sales initiatives",
    },
  ];

  const methodologies = [
    {
      title: "Time Series Forecasting",
      description:
        "Advanced forecasting models using machine learning algorithms",
    },
    {
      title: "Regression Analysis",
      description:
        "Identifying variables to understand factors influencing business outcomes",
    },
    {
      title: "Classification Models",
      description:
        "Categorizing data points to predict customer behaviors and segment markets effectively",
    },
    {
      title: "Anomaly Detection",
      description:
        "Identifying unusual patterns that could indicate opportunities or risks",
    },
    {
      title: "Ensemble Methods",
      description:
        "Combining multiple predictive models to improve accuracy and reliability of forecasts",
    },
    {
      title: "Time Series Forecasting",
      description:
        "Advanced forecasting models using machine learning algorithms",
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
              Predictive <span className="text-primary">Analytics</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our predictive analytics solutions leverage machine learning to
              forecast trends, identify opportunities, and mitigate risks before
              they occur, giving your business a competitive edge.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg">
              SCHEDULE A CONSULTATION
              <img
                src="/right-up-white.png"
                alt="right-up"
                className="w-6 h-6 "
              />
            </button>
          </div>

          {/* Two Image Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Left Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>

            {/* Right Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Heading and Description */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies.
              </p>
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" flex items-start gap-4  p-4 rounded-xl "
                >
                  {/* Blue Arrow Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <img
                      src="/right-up-white.png"
                      alt="right-up"
                      className="w-8 h-8"
                    />
                  </div>
                  {/* Feature Text */}
                  <p className="text-lg text-gray-900 leading-relaxed flex-1">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Your Business Benefits
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="h-48 bg-gray-100 rounded-xl p-6 justify-between flex flex-col"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded mb-4">
                  {benefit.number}
                </div>

                {/* Title */}
                <h3 className="text-lg text-gray-700 leading-relaxed">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Predictive Analytics Methodology
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {methodologies.map((methodology, index) => (
              <div key={index} className="">
                <div className="flex items-start gap-4">
                  {/* Blue Arrow Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <img
                      src="/right-up-white.png"
                      alt="right-up"
                      className="w-6 h-6"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {methodology.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {methodology.description}
                    </p>
                  </div>
                </div>
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
              Let&apos;s discuss how our predictive analytics solutions can help
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
