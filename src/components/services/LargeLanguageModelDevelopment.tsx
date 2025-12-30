"use client";

import { useState } from "react";
import Link from "next/link";

export default function LargeLanguageModelDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Consulting and Strategy Building",
      description:
        "We analyze your needs and leverage NLP and ML expertise to develop a tailored private LLM aligned with your business goals.",
    },
    {
      number: "02",
      title: "Large Language Model (LLM) Development",
      description:
        "We build custom LLMs from scratch, from consultation and data preparation to training, delivering models precisely aligned with your business needs.",
    },
    {
      number: "03",
      title: "LLM Fine-tuning",
      description:
        "We fine-tune LLMs such as GPT, Llama, and PaLM for industry-specific use cases, delivering precise, context-aware outputs that enhance business decision-making.",
    },
    {
      number: "04",
      title: "LLM-powered Solution Development",
      description:
        "We build robust AI solutions powered by LLMs like GPT, including chatbots, virtual assistants, sentiment analysis, and speech recognition systems tailored to your business needs.",
    },
    {
      number: "05",
      title: "LLM Model Integration",
      description:
        "Our developers seamlessly integrate large language models into enterprise systems with a carefully planned process that ensures zero disruption to your operations",
    },
    {
      number: "06",
      title: "Support and Maintenance",
      description:
        "We provide end-to-end support and maintenance for LLMs, including continuous monitoring, updates, bug fixes, and adaptations to evolving data and use cases.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Leveraging tools like NLTK, spaCy, and TensorFlow, our developers build custom NLP models with advanced NLU and NLG capabilities to analyze, interpret, and generate human language",
    },
    {
      title: "Machine Learning",
      description:
        "Leveraging expertise in scikit-learn, Keras, and PyTorch, we build ML-powered solutions using supervised, unsupervised, and reinforcement learning techniques for effective results.",
    },
    {
      title: "Transfer Learning",
      description:
        "We build custom LLMs using advanced transfer learning by fine-tuning pre-trained models such as GPT, Llama, PaLM, LaMDA, and BLOOM for domain-specific language tasks.",
    },
    {
      title: "In-context Learning",
      description:
        "We use tools like PyText, FastText, and Flair to continuously train and update language models with fresh data, ensuring adaptability and improved performance over time.",
    },
    {
      title: "Few-shot Learning",
      description:
        "We leverage meta-learning techniques and tools such as Meta-Transfer Learning, Meta-Learning Toolkit, and Reptile to rapidly adapt LLMs to new tasks using minimal data",
    },
    {
      title: "Sentiment Analysis",
      description:
        "We use tools like VADER and NLTK for text preprocessing and analysis, then apply ML techniques such as Naive Bayes to build robust LLM-based sentiment analysis systems.",
    },
  ];

  const faqs = [
    {
      question: "What is Large Language Model (LLM) development, and how can it benefit my business?",
      answer: (
        <>
          Large Language Model development involves creating advanced models capable of understanding and generating human-like text. It benefits businesses by enhancing natural language processing capabilities for solutions, such as chatbots, content generation apps, and sentiment analysis tools.
        </>
      ),
    },
    {
      question: "As a Large Language Model development company, what services do you offer?",
      answer: "",
    },
    {
      question: "What industries do you cover?",
      answer: "",
    },
    {
      question: "What types of LLMs do you work with?",
      answer: "",
    },
    {
      question: "How do you ensure the quality of your models and solutions?",
      answer: "",
    },
    {
      question: "How does LeewayHertz ensure the LLMs they build perform optimally over time?",
      answer: "",
    },
    {
      question: "How do I get started?",
      answer: "",
    },
    {
      question: "What support and maintenance services does LeewayHertz provide for LLMs?",
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
              Large Language Model <span className="text-blue-600">Development Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              At ADRIG, we offer a comprehensive suite of LLM development services tailored to meet your industry-specific needs. Our expertise encompasses both the creation of LLMs from scratch and the fine-tuning of pre-trained models to align seamlessly with your domain requirements. Whether starting from the ground up or optimizing existing models, our AI experts ensure a customized solution that enhances accuracy, efficiency, and productivity, ultimately improving your workflows and driving operational excellence.
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
              Our Large Language Model Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              End-to-end Large Language Model development services tailored to build, deploy, and optimize intelligent, scalable AI solutions.
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

      {/* Unlock Strategic Growth Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unlock Strategic Growth for Your Business With Our AI Know-how
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Leverage our AI expertise to drive innovation, optimize operations, and achieve measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <img
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Large Language Model Development"
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
              Let&apos;s discuss how our Large Language Model development solutions can help
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

