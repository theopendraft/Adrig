"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdaptiveAIDevelopmentCompany() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const expertiseAreas = [
    {
      title: "Machine Learning",
      description:
        "Our developers bring deep expertise in advanced machine learning techniques, enabling seamless integration of adaptive AI models into existing systems.",
    },
    {
      title: "Deep Learning",
      description:
        "Our developers are skilled in deep learning algorithms and neural networks such as CNNs, RNNs, and LSTMs, enabling AI models to learn from data and make accurate predictions autonomously.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Our adaptive AI experts integrate NLP to enable sentiment analysis, text processing, entity recognition, and the development of intelligent chatbots and virtual assistants.",
    },
    {
      title: "Computer Vision",
      description:
        "Our team leverages leading frameworks such as TensorFlow and PyTorch to build robust computer vision solutions, including image classification, object detection, segmentation, and scene understanding.",
    },
    {
      title: "Cloud Computing",
      description:
        "Our developers leverage cloud platforms such as AWS, Azure, and GCP to securely deploy, manage, and scale adaptive AI solutions with access to large datasets.",
    },
    {
      title: "Predictive Analytics",
      description:
        "Our developers build adaptive AI solutions using predictive analytics techniques such as random forests, decision trees, and gradient boosting to enable real-time, data-driven decision-making.",
    },
  ];

  const services = [
    { title: "Consulting and Strategy Development" },
    { title: "Custom Adaptive AI Model-based Solutions Development" },
    { title: "Maintenance and Upgrade" },
    { title: "Model Integration and Deployment" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Identify the Problem",
      description:
        "We begin by identifying the core business problem and user requirements the adaptive AI solution must address, along with any constraints or limitations.",
    },
    {
      number: "02",
      title: "Validate and Test the Model",
      description:
        "After training, we rigorously validate and test the model by evaluating key performance metrics and refining it to ensure optimal accuracy and reliability.",
    },
    {
      number: "03",
      title: "Monitor and Update the Model",
      description:
        "After deployment, we continuously monitor performance, set up alerts, and update the model using new data and feedback to ensure sustained accuracy and effectiveness.",
    },
  ];

  const faqs = [
    {
      question: "What is adaptive AI development?",
      answer: (
        <>
          Adaptive AI development refers to the process of building AI systems that can automatically adjust and improve their performance based on feedback from the environment or user interactions.
        </>
      ),
    },
    {
      question: "How is adaptive AI different from traditional AI?",
      answer: "",
    },
    {
      question: "What are some examples of adaptive AI?",
      answer: "",
    },
    {
      question: "What are the benefits of adaptive AI?",
      answer: "",
    },
    {
      question: "Do you also sign NDA?",
      answer: "",
    },
    {
      question: "What are some challenges of developing adaptive AI?",
      answer: "",
    },
    {
      question: "What is the future of adaptive AI?",
      answer: "",
    },
    {
      question: "What are some challenges of developing adaptive AI?",
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
              Adaptive AI <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Harness the power of adaptive AI to transform your business operations and improve customer satisfaction. With deep expertise in machine learning, deep learning, neural networks, NLP and other AI subsets, our adaptive AI developers build highly performant custom adaptive AI solutions.
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
              <div className="aspect-[16/10] bg-gray-400 rounded-lg w-full"></div>
              <div className="aspect-[16/10] bg-gray-400 rounded-lg w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technical Expertise in Adaptive AI Development
            </h2>
          </div>

          {/* Expertise Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
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
              Our Adaptive AI Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Intelligent, self-learning AI solutions built to evolve with changing data and business needs.
              <br />
              Our adaptive AI services drive smarter decisions, scalability, and long-term performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Adaptive AI Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Services List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Adaptive AI Systems Development Process
            </h2>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {step.number} {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {step.description}
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
              Let&apos;s discuss how our adaptive AI development solutions can help
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

