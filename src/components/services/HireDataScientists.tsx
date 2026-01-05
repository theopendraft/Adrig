"use client";

import { useState } from "react";
import Link from "next/link";

export default function HireDataScientists() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Data Gathering and Preprocessing",
      description:
        "Our data scientists collect structured and unstructured data via web scraping and APIs, then prepare it through feature engineering and normalization for model training.",
    },
    {
      number: "02",
      title: "Data Annotation",
      description:
        "Our data scientists label and categorize data using manual methods and tools like Hugging Face Datasets to enable accurate pattern recognition and predictions.",
    },
    {
      number: "03",
      title: "Algorithm Selection and Hyperparameter Tuning",
      description:
        "Our data scientists use EDA, experimentation, and hypothesis testing to select optimal ML algorithms, applying grid search and Bayesian optimization for efficient hyperparameter tuning.",
    },
    {
      number: "04",
      title: "Model Training and Validation",
      description:
        "We apply supervised, unsupervised, and reinforcement learning techniques to train models and validate accuracy using cross-validation, confusion matrices, and ROC curves.",
    },
    {
      number: "05",
      title: "Model Evaluation",
      description:
        "After deployment, our data scientists evaluate models using precision, accuracy, recall, and F1 scores to identify issues, resolve anomalies, and improve underperforming areas.",
    },
    {
      number: "06",
      title: "Consultancy",
      description:
        "Our data scientists analyze your data and business challenges to uncover insights and develop data-driven strategies that drive informed decisions and growth.",
    },
  ];

  const methods = [
    { title: "Machine Learning Algorithms" },
    { title: "Deep Learning" },
    { title: "Supervised Learning" },
    { title: "Unsupervised Learning" },
    { title: "Transfer Learning" },
    { title: "Reinforcement Learning" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expert Data Science Talent",
      description:
        "Our data scientists bring extensive experience in data analysis, ML model development, and strategic consulting. They help you unlock insights from your data and drive data-driven decision-making.",
    },
    {
      number: "02.",
      title: "Comprehensive Services",
      description:
        "We provide end-to-end data science services—from data gathering and preprocessing to model training, validation, and consultancy. Our multidisciplinary team ensures high-quality delivery aligned with your business goals.",
    },
    {
      number: "03.",
      title: "Proven Track Record",
      description:
        "Our data scientists have a proven track record of delivering successful AI models and data-driven solutions across various industries, helping businesses achieve measurable growth and competitive advantage.",
    },
  ];

  const faqs = [
    {
      question: "What services do LeewayHertz's data scientists offer?",
      answer:
        "Our data scientists offer various services, including data gathering and preprocessing, data annotation, algorithm selection and hyperparameter tuning, model training and validation, model evaluation and consultancy services.",
    },
    {
      question: "What benefits do I reap when I hire data scientists from LeewayHertz?",
      answer:
        "When you hire our data scientists, you gain access to expert talent with extensive experience in data analysis, ML model development, and strategic consulting. They help you unlock insights from your data, build accurate AI models, and drive data-driven decision-making for your business growth.",
    },
    {
      question: "What types of businesses can benefit from the services offered by LeewayHertz's data scientists?",
      answer:
        "Businesses across various industries including healthcare, finance, retail, manufacturing, technology, and more can benefit from our data science services. Any organization looking to leverage data for insights, automation, or strategic decision-making can benefit from our expertise.",
    },
    {
      question: "What kind of data can your team work with?",
      answer:
        "Our data scientists work with both structured and unstructured data including text, images, numerical data, time series, and more. We handle data collection, preprocessing, and analysis for various data types and formats.",
    },
    {
      question: "How do you determine the right ML algorithm for a given project?",
      answer:
        "Our data scientists use exploratory data analysis (EDA), experimentation, and hypothesis testing to understand your data characteristics and business requirements. Based on this analysis, they select optimal ML algorithms and apply grid search and Bayesian optimization for efficient hyperparameter tuning.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hire Data <span className="text-blue-600">Scientists</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Hire LeewayHertz's expert data scientists to efficiently source, manage, and analyze large amounts of unstructured data. Our data scientists have extensive experience analyzing, visualizing and preprocessing complex data sets using manual techniques and automated tools like Pandas and NumPy to ensure they are ready for seamless training of your AI models.
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
                  alt="Data Scientists"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Data Scientists"
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
              Services Offered by Our Data Scientists
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

      {/* Methods Used Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Methods Used by Our Data Scientists to Extract Insights From Data
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our data scientists leverage advanced techniques and methodologies including machine learning, deep learning, and various learning approaches to unlock valuable insights from your data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Data Science Methods"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Methods List */}
              <div className="grid grid-cols-2 gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {method.title}
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
              Data Science Project?
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
              Let&apos;s discuss how our data scientists can help
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

