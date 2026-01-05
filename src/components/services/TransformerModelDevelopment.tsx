"use client";

import { useState } from "react";
import Link from "next/link";

export default function TransformerModelDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const aiSubsets = [
    { title: "Machine Learning" },
    { title: "Natural Language Processing" },
    { title: "Intent Recognition" },
    { title: "Data Engineering" },
    { title: "Deep Learning" },
    { title: "Cloud Computing" },
  ];

  const services = [
    {
      number: "01",
      title: "Custom Transformer Model Development",
      description:
        "Custom transformer models designed, trained, and deployed to solve complex business challenges with precision and scalability.",
    },
    {
      number: "02",
      title: "Model Optimization",
      description:
        "We optimize transformer models for improved performance, efficiency, and accuracy to ensure they meet your specific business requirements.",
    },
    {
      number: "03",
      title: "Model Integration",
      description:
        "We seamlessly integrate transformer models into your existing systems and workflows, ensuring smooth deployment and optimal performance.",
    },
    {
      number: "04",
      title: "Ongoing Maintenance and Support",
      description:
        "We provide continuous monitoring, updates, and support to ensure your transformer models remain effective and aligned with evolving business needs.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Domain Expertise",
      description:
        "Our developers are experts in building industry-specific AI solutions for finance, healthcare, logistics, and more using the most advanced and suitable tech stacks.",
    },
    {
      number: "02.",
      title: "Use of Advanced Technologies",
      description:
        "Our developers are proficient in AI frameworks like TensorFlow, deployment tools such as Docker, multiple programming languages, and neural networks including CNNs.",
    },
    {
      number: "03.",
      title: "End-to-end Solution Development",
      description:
        "ADRIG's end-to-end transformer model development service covers ideation, development, and deployment to ensure optimal performance and desired outcomes.",
    },
  ];

  const additionalReason = {
    title: "Proven Track Record",
    description:
      "With a proven cross-industry track record, we are a trusted choice for delivering high-quality transformer model development solutions.",
  };

  const faqs = [
    {
      question: "What is a Transformer model and how does it work?",
      answer: (
        <>
          A Transformer model is an advanced machine-learning model that utilizes self-attention mechanisms to generate highly accurate predictions and can be used in various applications, including natural language processing and image recognition. It works by processing input data in parallel and creating a weighted representation of the input sequence, which is then used to generate predictions.
        </>
      ),
    },
    {
      question: "How can a Transformer model benefit my business?",
      answer: "",
    },
    {
      question: "How can I get started with Transformer model development?",
      answer: "",
    },
    {
      question: "How long does it take to develop a Transformer model?",
      answer: "",
    },
    {
      question: "How much does it cost to develop a Transformer model?",
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
              Transformer Model Development <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Transform the way you process and analyze data with our custom Transformer models. Our extensive expertise in deep-learning frameworks, including TensorFlow, Keras, PyTorch, and MXNet, enables us to build models capable of tackling complex tasks like natural language processing, as well as image and video processing, offering deep insights into your data.
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
                  alt="Transformer Model Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Transformer Model Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Subsets Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Subsets We are Proficient in
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="AI Subsets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* AI Subsets List */}
              <div className="grid grid-cols-2 gap-4">
                {aiSubsets.map((subset, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {subset.title}
                    </span>
                  </div>
                ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Transformer Model Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Custom transformer models designed, trained, and deployed to solve complex business challenges with precision and scalability.
            </p>
          </div>

          {/* Services Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Hire <span className="text-primary">ADRIG</span> for Transformer Model Development?
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

          {/* Additional Reason Card */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {additionalReason.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {additionalReason.description}
              </p>
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
              Let&apos;s discuss how our transformer model development services can help
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

