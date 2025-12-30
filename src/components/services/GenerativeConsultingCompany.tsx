"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GenerativeConsultingCompany() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Use Case Identification and Feasibility Evaluation",
      description:
        "We help identify generative AI use cases and conduct feasibility studies to evaluate impact and guide informed decision-making.",
    },
    {
      number: "02",
      title: "Technology Assessment and Selection",
      description:
        "We assess leading generative AI models—including GPT, Llama, PaLM, Gemini, Claude, Mistral, and Mixtral—to select the best fit for your organization's requirements.",
    },
    {
      number: "03",
      title: "Compliance and Security Consultation",
      description:
        "We ensure generative AI solutions remain compliant and secure by safeguarding data privacy in line with regulations such as GDPR, CCPA, and HIPAA.",
    },
    {
      number: "04",
      title: "Data Engineering",
      description:
        "We prepare and engineer data for training, then apply ML expertise to build custom models for tasks such as predictive analysis.",
    },
    {
      number: "05",
      title: "Custom LLM Development",
      description:
        "We optimize LLMs by selecting the right pre-trained model and fine-tuning it with your proprietary data to deliver accurate, domain-specific responses.",
    },
    {
      number: "06",
      title: "Generative AI Solution Development",
      description:
        "We build robust generative AI solutions—including recommendation systems, research tools, AI copilots, and AI agents—to streamline processes, deliver insights, and boost operational efficiency.",
    },
  ];

  const expertiseAreas = [
    { title: "Deep Learning and Natural Language Processing" },
    { title: "Computer Vision and Image Synthesis" },
    { title: "Reinforcement Learning and Simulation" },
    { title: "Data Engineering" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise in Generative AI",
      description:
        "We deliver custom generative AI solutions inspired by ChatGPT, Bard, Stable Diffusion, and Midjourney, enabling businesses to harness cutting-edge AI innovation",
    },
    {
      number: "02.",
      title: "End-to-end Support",
      description:
        "Our generative AI consulting services span strategy, development, implementation, and ongoing support to maximize value across the entire project lifecycle.",
    },
    {
      number: "03.",
      title: "Responsible AI Practices",
      description:
        "We build ethical, transparent, and compliant generative AI solutions with a strong focus on security, privacy, and long-term trust.",
    },
  ];

  const faqs = [
    {
      question: "What is generative AI?",
      answer: (
        <>
          Generative AI, short for Generative Artificial Intelligence, is a subset of artificial intelligence that focuses on creating new, original content or data. It involves using algorithms and models to generate data that is not explicitly provided in the training dataset. This technology is capable of generating text, images, audio, and more, often by learning patterns and relationships from existing data. Generative AI has applications in a wide range of fields, including content generation, creative arts, data augmentation, chatbots, and even drug discovery. It&apos;s a powerful tool for automating tasks that require creative or novel outputs.
        </>
      ),
    },
    {
      question: "In what practical scenarios can generative AI be applied?",
      answer: "",
    },
    {
      question: "How does generative AI work?",
      answer: "",
    },
    {
      question: "How can LeewayHertz's generative AI solutions benefit my business and enhance operations?",
      answer: "",
    },
    {
      question: "Can your generative AI solutions help understand customer behavior and their requirements?",
      answer: "",
    },
    {
      question: "How does LeewayHertz support businesses in integrating generative AI for innovation and competitive advantage?",
      answer: "",
    },
    {
      question: "Can LeewayHertz assist with existing AI projects or only new implementations?",
      answer: "",
    },
    {
      question: "How can my company get started with LeewayHertz for a generative AI project?",
      answer: "",
    },
    {
      question: "How does LeewayHertz address data privacy and security concerns in generative AI projects?",
      answer: "",
    },
    {
      question: "Why choose LeewayHertz for generative AI consulting?",
      answer: "",
    },
    {
      question: "Do you have expertise working with multimodal models?",
      answer: "",
    },
    {
      question: "What does your data engineering service entail, and how does it support the development of custom AI models?",
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
              Generative AI <span className="text-blue-600">Consulting Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We offer comprehensive generative AI consulting services enabling you to harness the potential of generative AI for improved operations and enhanced product offerings. We combine our deep AI expertise in technologies like GANs, VAEs, and autoencoders with a strong ethical foundation to ensure that the AI solutions we deliver are not only technologically advanced but also aligned with ethical and responsible AI practices
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

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Generative AI Consulting Services
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

      {/* Our Generative AI Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Generative AI Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Generative AI Consulting"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Expertise Areas List */}
              <div className="grid grid-cols-1 gap-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {area.title}
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
              Why Choose <span className="text-blue-600">ADRIG</span> for Your
              Next
              <br />
              Generative AI Consulting Project?
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
              Let&apos;s discuss how our generative AI consulting solutions can help
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

