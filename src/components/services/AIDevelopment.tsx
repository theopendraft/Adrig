"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "AI/ML Strategy Consulting",
      description:
        "Rely on LeewayHertz's AI expertise to deliver strategic development, continuous R&D, and sustained business growth through AI/ML.",
    },
    {
      number: "02",
      title: "PoC and MVP Development",
      description:
        "Our experts build PoCs to validate AI app feasibility and develop MVPs with core features for real-world validation, rapid iteration, and faster market entry.",
    },
    {
      number: "03",
      title: "Custom AI App Development",
      description:
        "We build secure, ethical AI-powered web and mobile apps, engineered end to end to align with your business needs and deliver optimal performance.",
    },
    {
      number: "04",
      title: "AI Integration",
      description:
        "We seamlessly integrate AI applications into your existing workflows, ensuring minimal downtime while enhancing efficiency, productivity, and innovation.",
    },
    {
      number: "05",
      title: "AI Agent/Copilot Development",
      description:
        "We build intelligent AI agents and copilots using leading tools and LLMs like GPT-4o and Gemini to automate workflows, analyze data, generate code, and enhance customer support.",
    },
    {
      number: "06",
      title: "Data Engineering",
      description:
        "Our data engineering services cover the full data lifecycle, ensuring clean, structured, and enriched data optimized for accurate and reliable AI model training.",
    },
  ];

  const aiKnowhow = [
    { title: "Machine Learning" },
    { title: "Deep Learning" },
    { title: "Predictive Analytics" },
    { title: "Natural Language Processing" },
    { title: "Data Science" },
    { title: "Computer Vision" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Extensive Experience in AI",
      description:
        "Proven AI expertise, enterprise-grade solutions, and a results-driven approach to delivering scalable, secure, and high-impact AI systems.",
    },
    {
      number: "02.",
      title: "End-to-end AI Development",
      description:
        "We provide comprehensive AI development services from strategy to deployment, ensuring seamless integration and optimal performance throughout your AI journey.",
    },
    {
      number: "03.",
      title: "Expert AI Professionals",
      description:
        "Our team of skilled AI engineers and data scientists brings years of experience in building cutting-edge AI solutions that drive real business value.",
    },
  ];

  const industries = [
    { title: "Media & Entertainment" },
    { title: "E-commerce" },
    { title: "Real Estate" },
  ];

  const faqs = [
    {
      question: "Why should I opt for custom AI development?",
      answer: (
        <>
          Choosing custom AI development offers several advantages:
          <br /><br />
          <strong>Tailored Solutions:</strong> Custom AI development allows you to create solutions specifically designed to address your unique business challenges and objectives. Off-the-shelf AI solutions may not fully meet your needs or may not be flexible enough to adapt to your evolving requirements.
          <br /><br />
          <strong>Competitive Advantage:</strong> With custom AI product development, you can differentiate yourself from competitors who may be using similar off-the-shelf tools. Tailored AI applications can give you a competitive edge by providing unique functionalities or insights that are specific to your business.
          <br /><br />
          <strong>Integration with Existing Systems:</strong> Custom AI development enables seamless integration with your existing systems, databases, and workflows. This ensures that the AI solution aligns with your business processes and can easily exchange data with other tools and applications.
          <br /><br />
          <strong>Control and Ownership:</strong> With custom AI development, you have full control and ownership of the solution, including the underlying algorithms, data models, and intellectual property. This allows you to fine-tune the AI system as needed and maintain control over sensitive data.
          <br /><br />
          <strong>Scalability and Flexibility:</strong> Custom AI solutions can be designed with scalability and flexibility in mind, allowing them to grow and adapt as your business evolves. You can add new features, scale up the system to handle larger datasets, or integrate additional functionalities as your needs change over time.
          <br /><br />
          <strong>Privacy and Security:</strong> Building custom AI solutions gives you greater control over data privacy and security. You can implement robust security measures and compliance protocols tailored to your specific requirements, ensuring that sensitive data is protected and regulatory requirements are met.
        </>
      ),
    },
    {
      question: "Why should I integrate AI into my business?",
      answer: "",
    },
    {
      question: "How do AI models work?",
      answer: "",
    },
    {
      question: "What are the types of AI solutions you build?",
      answer: "",
    },
    {
      question: "What does your tech stack for AI application development entail?",
      answer: "",
    },
    {
      question: "How much time is required to lay out the project scope, devise a plan, and execute an AI project?",
      answer: "",
    },
    {
      question: "How do you ensure the security of an AI project?",
      answer: "",
    },
    {
      question: "How much does it cost to develop an AI-based app?",
      answer: "",
    },
    {
      question: "How long does it take to build an AI-based product?",
      answer: "",
    },
    {
      question: "How to choose the best AI app development company?",
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
              AI Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Maximize your business potential with our AI development services, designed to streamline your business workflows and amplify operational efficiency. From AI consulting to building custom AI apps and seamlessly integrating them into your workflows, we offer a comprehensive suite of AI services.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage Our AI Development Services to Create Next-generation Enterprise Solutions. Enhance your business performance with our data-driven AI solutions crafted leveraging advanced AI technologies like deep learning, machine learning, computer vision and natural language processing.
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
                  alt="AI Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="AI Development"
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
              AI Development Services We Offer
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

      {/* AI Know-how Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unlock Strategic Growth for Your Business With Our AI Know-how
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Harness our AI expertise to accelerate innovation, optimize operations, and drive measurable, long-term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="AI Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* AI Know-how List */}
              <div className="grid grid-cols-2 gap-4">
                {aiKnowhow.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {item.title}
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
              Why Choose <span className="text-primary">LeewayHertz</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Proven AI expertise, enterprise-grade solutions, and a results-driven approach to delivering scalable, secure, and high-impact AI systems.
            </p>
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

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Elevate Your Industry to the Next Level With Our AI Development Solutions
            </h2>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                {index === 0 && (
                  <p className="text-gray-700 leading-relaxed">
                    Transform and innovate content creation, personalize viewer experiences, and optimize distribution with our advanced AI analytics tools, recommendation systems and other solutions.
                  </p>
                )}
                {index === 1 && (
                  <p className="text-gray-700 leading-relaxed">
                    Enhance customer service, streamline inventory management, boost sales conversions and increase operational efficiency with AI-driven personalization and predictive analytics.
                  </p>
                )}
                {index === 2 && (
                  <p className="text-gray-700 leading-relaxed">
                    Our real estate AI solutions help optimize property pricing, enhance customer interactions, and drive strategic decisions for real estate businesses.
                  </p>
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
              Let&apos;s discuss how our AI development solutions can help
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

