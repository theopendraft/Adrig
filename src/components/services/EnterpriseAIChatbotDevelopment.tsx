"use client";

import { useState } from "react";
import Link from "next/link";

export default function EnterpriseAIChatbotDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const solutions = [
    {
      number: "01",
      title: "Retrieval-based Chatbots and Query Suggestion Bots",
      description:
        "We build NLP-powered retrieval and query suggestion chatbots that answer FAQs and deliver accurate, knowledge-based responses to improve customer satisfaction.",
    },
    {
      number: "02",
      title: "Generative AI Chatbots",
      description:
        "We develop advanced generative AI chatbots using models like GPT-4, Llama 3, Gemini, and Mistral to deliver contextual, interactive conversations that strengthen customer relationships and brand perception.",
    },
    {
      number: "03",
      title: "Customized AI Voice Assistants",
      description:
        "Our custom AI voice assistants support voice commands, multilingual interactions, and seamless enterprise integration to deliver hands-free, user-friendly customer experiences.",
    },
    {
      number: "04",
      title: "Virtual Assistant Chatbots",
      description:
        "We build AI-powered virtual assistant chatbots that automate tasks, streamline workflows, and deliver 24/7 support to improve efficiency and customer satisfaction.",
    },
    {
      number: "05",
      title: "Transactional Chatbots",
      description:
        "Our transactional chatbots automate orders, reservations, and payments while providing 24/7 support to enhance e-commerce efficiency and customer satisfaction.",
    },
    {
      number: "06",
      title: "Conversational Chatbot",
      description:
        "Our developers create NLU- and NLG-powered conversational chatbots that deliver personalized, context-aware interactions, simplify complex processes, and strengthen customer engagement and brand loyalty",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Technology Consulting and Strategy Building",
      description:
        "Our technology consultants guide AI adoption by assessing your tech landscape, recommending the right chatbot, and delivering a seamless implementation strategy to maximize ROI.",
    },
    {
      number: "02",
      title: "Chatbot Design and Development",
      description:
        "We design custom enterprise chatbots powered by NLP that address complex queries, align with your brand, and improve agent efficiency and customer satisfaction.",
    },
    {
      number: "03",
      title: "Chatbot Integration",
      description:
        "Our developers integrate custom chatbots with CRM systems, helpdesks, and knowledge bases via APIs to deliver unified, fast, and personalized automation.",
    },
    {
      number: "04",
      title: "Maintenance and Support",
      description:
        "We provide continuous post-deployment support, performance monitoring, and NLP refinement to ensure your chatbot adapts, improves, and delivers long-term ROI.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Experience Across Industries",
      description:
        "We bring extensive cross-industry experience in enterprise AI chatbot development to deliver solutions aligned with specific business and industry needs.",
    },
    {
      number: "02.",
      title: "Custom AI Chatbot Solutions",
      description:
        "We deliver fully customized AI chatbot solutions aligned with your business objectives to provide personalized interactions and enhanced user experiences.",
    },
    {
      number: "03.",
      title: "Deep Expertise in AI Technologies",
      description:
        "We use advanced AI technologies such as NLP, machine learning, and generative AI to build intelligent chatbots that understand context, learn continuously, and deliver accurate responses.",
    },
  ];

  const additionalReasons = [
    {
      title: "Seamless Integration",
      description:
        "Our enterprise AI chatbots integrate seamlessly with your existing systems, websites, and mobile apps to ensure smooth and efficient implementation.",
    },
    {
      title: "Scalability and Reliability",
      description:
        "We build enterprise AI chatbots that are scalable and reliable, effortlessly handling growing user demands without compromising performance.",
    },
    {
      title: "Data Security and Compliance",
      description:
        "We ensure enterprise-grade data security and regulatory compliance, protecting sensitive information and building trust through strict adherence to industry standards.",
    },
  ];

  const faqs = [
    {
      question: "What is an enterprise AI chatbot?",
      answer: (
        <>
          An enterprise AI chatbot is an artificial intelligence-powered virtual assistant designed to streamline business processes, enhance customer experiences, and provide personalized services within an organization or enterprise setting.
        </>
      ),
    },
    {
      question: "What benefits can enterprise AI chatbots offer my business?",
      answer: "",
    },
    {
      question: "Can enterprise AI chatbots be integrated with existing systems?",
      answer: "",
    },
    {
      question: "What industries can benefit from enterprise AI chatbot development?",
      answer: "",
    },
    {
      question: "How do your enterprise AI chatbots handle sensitive information and ensure data security?",
      answer: "",
    },
    {
      question: "Can enterprise AI chatbots provide personalized services to individual users?",
      answer: "",
    },
    {
      question: "What ongoing support and maintenance services do you offer for enterprise AI chatbots?",
      answer: "",
    },
    {
      question: "Can your enterprise AI chatbots be customized to align with my brand and unique business requirements?",
      answer: "",
    },
    {
      question: "How do enterprise AI chatbots handle multilingual support to cater to our diverse customer base?",
      answer: "",
    },
    {
      question: "How quickly can we deploy an enterprise AI chatbot for our organization?",
      answer: "",
    },
    {
      question: "Can LeewayHertz customize enterprise AI chatbots to suit my business needs?",
      answer: "",
    },
    {
      question: "What is the difference between a chatbot and an enterprise AI chatbot?",
      answer: "",
    },
    {
      question: "What are the benefits of enterprise AI chatbots?",
      answer: "",
    },
    {
      question: "How does the enterprise AI chatbot development process work?",
      answer: "",
    },
    {
      question: "How much does it cost to develop a chatbot?",
      answer: "",
    },
    {
      question: "How long does it take to develop a chatbot?",
      answer: "",
    },
    {
      question: "How does LeewayHertz ensure the security of chatbot interactions?",
      answer: "",
    },
    {
      question: "Can I integrate my chatbot with multiple platforms?",
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
              Enterprise AI Chatbot Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage our enterprise AI chatbot development expertise to build intelligent virtual assistants and chatbots that streamline workflows, boost customer satisfaction, and elevate your brand image. Our team of seasoned engineers design and develop AI chatbots that integrate seamlessly with your existing infrastructure to drive real business results.
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
                  alt="Enterprise AI Chatbot Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/ChatDev/Chat2.jpg"
                  alt="Enterprise AI Chatbot Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Enterprise Chatbot Solutions
            </h2>
          </div>

          {/* Solutions Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {solution.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise AI Chatbot Development Services We Offer
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

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span> for Enterprise AI Chatbot Development?
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

          {/* Additional Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {additionalReasons.map((reason, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
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
              Let&apos;s discuss how our enterprise AI chatbot development services can help
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

