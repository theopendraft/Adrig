"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIChatbotDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Technology Consulting and Strategy Building",
      description:
        "Our technology consultants guide AI adoption by assessing your needs, recommending the right chatbot, and delivering a seamless conversational AI implementation strategy.",
    },
    {
      number: "02",
      title: "Chatbot Design and Development",
      description:
        "We design and develop custom chatbots aligned with your brand and business goals, delivering context-aware, engaging, and efficient user experiences.",
    },
    {
      number: "03",
      title: "Chatbot Integration",
      description:
        "We ensure seamless chatbot integration with your existing systems to enhance efficiency, maintain data consistency, and deliver a unified customer experience without operational disruption.",
    },
    {
      number: "04",
      title: "Maintenance and Support",
      description:
        "We provide continuous post-deployment maintenance and 24/7 support to monitor performance, resolve issues, and keep your chatbot up to date while you focus on your core business.",
    },
  ];

  const chatbots = [
    { title: "GPT-based Chatbots" },
    { title: "Customized AI Voice Assistants" },
    { title: "Custom CRM/ERP/CM Bots" },
    { title: "Social Media-focused Chatbots" },
    { title: "Transactional Chatbots" },
  ];

  const platforms = [
    { title: "Websites" },
    { title: "Social Media Channels" },
    { title: "E-commerce Portals" },
    { title: "Android Applications" },
    { title: "iOS Applications" },
    { title: "HR, ERP, CRM and CM Systems" },
  ];

  const faqs = [
    {
      question: "What are AI chatbots?",
      answer: (
        <>
          AI chatbots are computer programs powered by artificial intelligence (AI) algorithms that are designed to simulate human-like conversations with users. These chatbots utilize Natural Language Processing (NLP) techniques to understand and interpret user inputs and generate appropriate responses. They are programmed to handle a wide range of queries, provide information, assist with tasks, and engage in interactive conversations. AI chatbots can be deployed in various industries and platforms, including websites, messaging apps, customer support systems, and virtual assistants, to enhance user experiences, streamline operations, and deliver efficient and personalized interactions. If you are looking to incorporate AI chatbots into your business or project, it's important that you hire expert AI chatbot developers who can craft customized solutions for your business needs.
        </>
      ),
    },
    {
      question: "What is conversational AI?",
      answer: "",
    },
    {
      question: "How can your AI chatbot solutions help my business?",
      answer: "",
    },
    {
      question: "What industries can benefit from LeewayHertz's AI chatbot solutions?",
      answer: "",
    },
    {
      question: "How do your AI chatbots work?",
      answer: "",
    },
    {
      question: "What features do your AI chatbots offer?",
      answer: "",
    },
    {
      question: "Can LeewayHertz's AI chatbots be customized to suit my business needs?",
      answer: "",
    },
    {
      question: "How do your AI chatbots enhance customer engagement and support?",
      answer: "",
    },
    {
      question: "Are your AI chatbots capable of handling complex queries?",
      answer: "",
    },
    {
      question: "What data privacy and security measures are in place for your AI chatbots?",
      answer: "",
    },
    {
      question: "How can I integrate your AI chatbot into my existing systems or platforms?",
      answer: "",
    },
    {
      question: "Do your Chatbots support multiple languages?",
      answer: "",
    },
    {
      question: "What expertise does LeewayHertz offer as an AI chatbot development company?",
      answer: "",
    },
    {
      question: "What support and maintenance services does LeewayHertz offer for AI chatbots?",
      answer: "",
    },
    {
      question: "Why hire AI chatbot developers from LeewayHertz?",
      answer: "",
    },
    {
      question: "What are the foundational models powering your chatbots?",
      answer: "",
    },
    {
      question: "How do you ensure that the chatbot aligns with my brand's personality and objectives?",
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
              AI Chatbot Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We develop custom AI chatbots that act as intelligent assistants, ensuring 24/7 support and rapid query resolution. Our chatbots maximize engagement and productivity, guiding your employees and customers to the information they need and enabling your team to focus on core business imperatives. Partner with us to unlock the power of AI-powered conversations.
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
                  src="/Website/Service/ChatDev/Chat1.jpg"
                  alt="AI Chatbot Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/ChatDev/Chat2.jpg"
                  alt="AI Chatbot Development"
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
              AI Chatbot Development Services We Offer
            </h2>
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

      {/* AI Chatbots Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Chatbots We Develop
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/ChatDev/Chat1.jpg"
                  alt="AI Chatbots"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Chatbots List */}
              <div className="grid grid-cols-2 gap-4">
                {chatbots.map((chatbot, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {chatbot.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Platforms Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Integrate Our Chatbots into Different Platforms
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our versatile chatbots are designed to seamlessly integrate into a wide array of platforms, providing you with a powerful tool to enhance user experiences and streamline interactions
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <img
                      src="/right-up-white.png"
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {platform.title}
                  </h3>
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
              Let&apos;s discuss how our AI chatbot development services can help
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

