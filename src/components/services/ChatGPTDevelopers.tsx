"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ChatGPTDevelopers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Consulting & Strategy Building",
      description:
        "We assess your goals, challenges, and market context to recommend the right GPT-powered solution and define a clear, aligned implementation strategy.",
    },
    {
      number: "02",
      title: "Data Engineering",
      description:
        "We transform your proprietary data into a high-quality asset through meticulous data engineering, enabling effective fine-tuning and optimal performance of GPT-powered solutions.",
    },
    {
      number: "03",
      title: "GPT Model Fine-tuning",
      description:
        "We develop custom GPT solutions by selecting and fine-tuning the right GPT model with your proprietary data to deliver accurate, domain-specific responses.",
    },
    {
      number: "04",
      title: "GPT Model-powered Solution Development",
      description:
        "Our GPT-powered solutions deliver innovation and efficiency through intelligent chatbots, content generators, and context-aware systems tailored to give your business a competitive edge.",
    },
    {
      number: "05",
      title: "Integration Into Workflows",
      description:
        "We seamlessly integrate GPT-powered solutions into your existing workflows with minimal disruption, maximizing efficiency and business impact.",
    },
    {
      number: "06",
      title: "Upgrades and Maintenance",
      description:
        "We provide ongoing upgrades and maintenance to keep your GPT-powered applications secure, optimized, and competitive in a rapidly evolving AI landscape.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Large Language Models",
      description:
        "Our developers have deep expertise in LLMs like GPT-4, LLaMA, and PaLM 2, fine-tuned for high-performance, domain-specific language understanding and generation",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We leverage deep NLP expertise to build GPT-powered applications for text generation, sentiment analysis, summarization, and multilingual communication.",
    },
    {
      title: "Machine Learning",
      description:
        "We apply supervised, unsupervised, and reinforcement learning techniques to build robust, customized OpenAI-powered AI solutions that address complex business challenges.",
    },
    {
      title: "Deep Learning",
      description:
        "Our deep learning expertise enables us to design and optimize advanced neural networks for NLP, recommendation systems, and complex AI challenges.",
    },
    {
      title: "Data Preparation",
      description:
        "We expertly transform raw, complex data into clean, structured, and ML-ready datasets through effective preprocessing, labeling, and quality management.",
    },
    {
      title: "Model Fine-tuning",
      description:
        "We fine-tune models like GPT-3.5 and GPT-4 to build adaptable, domain-specific AI solutions that deliver high performance and measurable business value.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Assessment",
      description:
        "We identify and document project needs, objectives, and constraints to ensure clear alignment with stakeholder expectations from the outset.",
    },
    {
      number: "02",
      title: "Strategy Building",
      description:
        "We create a strategic plan covering GPT model selection, fine-tuning approach, resource allocation, and deployment aligned with project goals.",
    },
    {
      number: "03",
      title: "Design and Development",
      description:
        "We design detailed architectures and specifications, then develop the solution using fine-tuned models tailored to client requirements.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We rigorously test and iteratively refine the GPT-powered solution to enhance output quality and minimize bias",
    },
    {
      number: "05",
      title: "Deployment and Optimization",
      description:
        "The GPT-powered solution is deployed to production with ongoing optimization to continuously improve performance and output quality.",
    },
    {
      number: "06",
      title: "Integration and Support",
      description:
        "Integrate the solution into the client's existing ecosystem, with ongoing support and maintenance to ensure continued alignment with evolving requirements.",
    },
  ];

  const faqs = [
    {
      question: "What is ChatGPT development?",
      answer: "",
    },
    {
      question: "How can ChatGPT benefit my business?",
      answer: "",
    },
    {
      question: "What GPT models do you work with?",
      answer: "",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "",
    },
    {
      question: "Can ChatGPT be customized for specific industries?",
      answer: "",
    },
    {
      question: "What support do you provide after deployment?",
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
              ChatGPT <span className="text-blue-600">Developers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our skilled ChatGPT developers build custom OpenAI model-powered solutions that deliver exceptional conversational experiences, streamline information retrieval, enhance customer experience and drive engagement. Thus, whether it's task automation or customer support, our solutions are designed to streamline your business processes, empowering your team to achieve more.
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
              Maximize Your Operational Efficiency With Our OpenAI Model-powered Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With a deep understanding of data engineering, NLP libraries, deep learning frameworks, cloud computing services and GPT models like GPT-4, our ChatGPT developers craft robust GPT-powered solutions tailored to your specific business needs.
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

      {/* Our Areas of Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Deep expertise across core AI technologies and advanced development frameworks.
              <br />
              We deliver scalable, secure, and high-performance solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="ChatGPT Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Expertise Areas List */}
            <div>
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
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
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
              Our OpenAI Model-powered Solutions Development Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A structured, secure, and scalable approach to developing OpenAI-powered solutions.
              <br />
              We ensure alignment with your business goals while delivering measurable results.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Button - only show on third card (index 2) */}
                {index === 2 && (
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
              Let&apos;s discuss how our ChatGPT development solutions can help
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

