"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GenerativeAIDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Generative AI Consulting",
      description:
        "We work closely with your team to define a tailored generative AI adoption strategy aligned with your business goals, applying deep expertise in generative AI models to deliver the most suitable solution.",
    },
    {
      number: "02",
      title: "Data Analysis",
      description:
        "Our data analysis services help businesses extract actionable insights from structured and unstructured data by uncovering hidden patterns and delivering meaningful, data-driven recommendations.",
    },
    {
      number: "03",
      title: "Domain-specific Generative AI Model Development",
      description:
        "We build domain-specific generative AI models by selecting and fine-tuning the right foundational models with your proprietary data, ensuring accurate, relevant, and business-ready AI outcomes.",
    },
    {
      number: "04",
      title: "Generative AI Solutions Development",
      description:
        "From chatbots and AI copilots to agents and recommendation systems, we build innovative generative AI solutions using leading foundational models like GPT, LLaMA, Gemini, Mistral, PaLM, and Claude to solve complex business challenges.",
    },
    {
      number: "05",
      title: "Generative AI Integration",
      description:
        "We seamlessly integrate generative AI into your existing infrastructure, streamlining internal workflows and customer systems while ensuring minimal disruption to ongoing operations.",
    },
    {
      number: "06",
      title: "Upgrade and Maintenance",
      description:
        "We provide post-deployment maintenance and upgrades to ensure your generative AI solutions remain secure, up to date, and continuously deliver value as your business evolves.",
    },
  ];

  const expertiseAreas = [
    { title: "Generative Models" },
    { title: "Natural Language Processing (NLP)" },
    { title: "Machine Learning" },
    { title: "Deep Learning" },
    { title: "Data Collection and Annotation" },
    { title: "Model Fine-tuning" },
  ];

  const benefits = [
    {
      number: "01.",
      title: "Increased Automation",
      description:
        "Gain a competitive edge with tailored generative AI solutions built for real business impact. We help you innovate faster, optimize operations, and scale with confidence.",
    },
    {
      number: "02.",
      title: "Increased Productivity",
      description:
        "Gain a competitive edge with tailored generative AI solutions built for real business impact. We help you innovate faster, optimize operations, and scale with confidence.",
    },
    {
      number: "03.",
      title: "Enhanced Creativity",
      description:
        "Gain a competitive edge with tailored generative AI solutions built for real business impact. We help you innovate faster, optimize operations, and scale with confidence.",
    },
    {
      number: "04.",
      title: "Cost Optimization",
      description:
        "Gain a competitive edge with tailored generative AI solutions built for real business impact. We help you innovate faster, optimize operations, and scale with confidence.",
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
      question: "What are some common applications of generative AI?",
      answer: "",
    },
    {
      question: "What generative AI development services does LeewayHertz offer?",
      answer: "",
    },
    {
      question: "How does LeewayHertz approach generative AI development?",
      answer: "",
    },
    {
      question: "How does LeewayHertz approach domain-specific generative AI model development, and what are the key steps involved?",
      answer: "",
    },
    {
      question: "What types of generative AI solutions does LeewayHertz develop, and what are the foundational models used?",
      answer: "",
    },
    {
      question: "Does LeewayHertz offer post-deployment support?",
      answer: "",
    },
    {
      question: "Do you offer generative AI integration services?",
      answer: "",
    },
    {
      question: "Why choose LeewayHertz as your generative AI development company?",
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
              Generative AI <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              From strategic consulting to solution development and ongoing support, our comprehensive generative AI services are specifically designed to propel advancements within your business. Our robust GenAI solutions powered by foundational models like GPT, Llama, PaLM, Mistral, Claude, and Gemini help businesses automate and streamline workflows for heightened productivity and efficiency.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our generative AI development services are your gateway to the boundless possibilities of AI-driven creativity and innovation. Drawing from a wealth of expertise in a wide range of AI technologies, including deep learning, machine learning, computer vision, reinforcement learning, and natural language processing, we engineer custom, domain-specific generative AI models and solutions.
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
              Our Generative AI Development Services
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

      {/* Our Areas of Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Generative AI Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Expertise Areas List */}
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      {index === 0 && (
                        <p className="text-gray-700 leading-relaxed">
                          We have deep expertise in fine-tuning foundation models like GPT-4 to build domain-specific AI solutions, with strong understanding of their architecture, training, and real-world applications.
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-gray-700 leading-relaxed">
                          By leveraging our knowledge of NLP, we craft robust applications that handle tasks like text generation, sentiment analysis, text summarization, and translation.
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-gray-700 leading-relaxed">
                          Our expertise across supervised, unsupervised, and reinforcement learning enables us to build adaptable AI solutions that address a wide range of business use cases effectively.
                        </p>
                      )}
                      {index === 3 && (
                        <p className="text-gray-700 leading-relaxed">
                          Our deep learning expertise allows us to implement advanced neural networks and deliver customized AI solutions that unlock the full potential of AI for your business.
                        </p>
                      )}
                      {index === 4 && (
                        <p className="text-gray-700 leading-relaxed">
                          We specialize in data collection, annotation, and preprocessing to ensure high-quality datasets for training reliable and effective generative AI models.
                        </p>
                      )}
                      {index === 5 && (
                        <p className="text-gray-700 leading-relaxed">
                          We fine-tune pre-trained models like GPT-4 for specific domains and use cases, enabling highly adaptable AI solutions tailored to client needs.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Lead the Competition Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How You Can Lead the Competition With Our Generative AI Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Gain a competitive edge with tailored generative AI solutions built for real business impact.
              <br />
              We help you innovate faster, optimize operations, and scale with confidence.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                {/* Button - only show on second card (index 1) */}
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
              Let&apos;s discuss how our generative AI development solutions can help
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
