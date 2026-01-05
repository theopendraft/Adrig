"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EnterpriseAIDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Strategic AI Consulting",
      description:
        "Navigate the complexities of AI integration with our expert consultation. We don't just develop AI solutions; we strategize their alignment with your enterprise goals, ensuring sustainable growth. Our approach emphasizes responsible AI practices and data governance, ensuring your AI implementations are ethical and compliant with relevant regulations.",
    },
    {
      number: "02",
      title: "PoC and MVP Development",
      description:
        "Our team of experts meticulously crafts Proof of Concepts to validate the feasibility of your AI solution's concept, showcasing its potential through scaled-down versions. Moving forward, we design Minimum Viable Products that deliver essential functionalities, enabling real user validation, iterative enhancements and swift market entry.",
    },
    {
      number: "03",
      title: "Enterprise-grade AI Solutions Development",
      description:
        "Our experienced team collaborates closely with your enterprise to craft customized AI solutions, offering end-to-end development from ideation to deployment. We prioritize scalability, performance, and robust security, ensuring your AI systems meet your current needs and adapt well to future challenges.",
    },
    {
      number: "04",
      title: "Custom AI Solutions Development",
      description:
        "We collaborate with you to create AI-powered web and mobile apps that precisely align with your unique business needs. From the user interface to the algorithm, we meticulously engineer every aspect of your solution to guarantee optimal performance. Committed to both security and ethical AI, our AI development approach prioritizes responsible innovation.",
    },
    {
      number: "05",
      title: "Custom Model Development",
      description:
        "We handle the entire custom AI model development process for our clients. This encompasses meticulous data preparation, rigorous model training, multi-level testing, and seamless deployment of the model. With deep expertise in fine-tuning AI models for specific tasks and domains, we ensure the models precisely match your business needs.",
    },
    {
      number: "06",
      title: "AI Integration and Deployment",
      description:
        "We go beyond crafting robust AI solutions by seamlessly integrating and deploying them into your existing infrastructure, empowering your business with AI capabilities that align with your established processes. With AI embedded into your operational framework, you witness remarkable gains in efficiency, productivity, and innovation.",
    },
  ];

  const solutions = [
    { title: "Conversational AI Solutions" },
    { title: "AI Image & Speech Recognition Solutions" },
    { title: "Predictive Analysis Solutions" },
    { title: "Fraud Detection & Prevention Solutions" },
    { title: "Customer Service Automation Solutions" },
    { title: "Recommendation Systems" },
  ];

  const process = [
    { title: "Assessment & Requirement Gathering" },
    { title: "Exploration & Use Case Definition" },
    { title: "Pilot Implementation" },
    { title: "Model Integration" },
    { title: "Testing & Quality Assurance" },
    { title: "Deployment, Integration and maintenance" },
  ];

  const faqs = [
    {
      question: "What is an enterprise AI solution?",
      answer: (
        <>
          An enterprise AI solution is a software system designed to provide artificial intelligence capabilities to businesses, organizations, and other entities. These solutions can be used to analyze large amounts of data, automate processes, make predictions, and improve decision-making in various business areas, including finance, marketing, customer service, and operations.
          <br /><br />
          Enterprise AI solutions often incorporate machine learning algorithms, natural language processing, computer vision, and other AI technologies. They may be cloud-based, on-premises, or a hybrid of both and may integrate with existing software systems.
          <br /><br />
          The goal of an enterprise AI solution is to help businesses operate more efficiently and effectively by leveraging the power of AI to gain insights, automate tasks, and make better decisions. Some examples of enterprise AI solutions include chatbots for customer service, predictive analytics for supply chain management, and fraud detection systems for financial institutions.
        </>
      ),
    },
    {
      question: "What industries can benefit from enterprise AI development services?",
      answer: "",
    },
    {
      question: "What AI technologies do you use in your enterprise AI development process?",
      answer: "",
    },
    {
      question: "What is your process for developing enterprise AI solutions?",
      answer: "",
    },
    {
      question: "What security features do your enterprise AI solutions have?",
      answer: "",
    },
    {
      question: "Do you integrate AI solutions into clients' existing systems as part of your enterprise AI services?",
      answer: "",
    },
    {
      question: "Do you provide post-development support?",
      answer: "",
    },
    {
      question: "How do you ensure the quality of your enterprise AI solutions?",
      answer: "",
    },
    {
      question: "What are the components that constitute enterprise AI?",
      answer: "",
    },
    {
      question: "How do you ensure that your AI solutions align with clients' business goals?",
      answer: "",
    },
    {
      question: "Why choose LeewayHertz for your enterprise AI development needs?",
      answer: "",
    },
    {
      question: "What industries can benefit from enterprise AI, and what are some specific applications for each industry?",
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
              Enterprise AI Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Eliminate workflow pain points and accelerate your digital transformation journey with our enterprise AI development services. We use advanced AI techniques like machine learning, predictive analytics, deep learning, and NLP to develop robust AI-powered solutions. Our solutions, deployable at scale, enable enterprises to handle diverse tasks from predictive maintenance and fraud detection to inventory optimization and improving customer services.
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
                  alt="Enterprise AI Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Enterprise AI Development"
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
              Enterprise AI Development Services We Offer
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

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise AI Solutions We Develop
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empower your enterprise with our comprehensive suite of AI-driven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Enterprise AI Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {solution.title}
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
              Our Enterprise AI Development Process
            </h2>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/right-up-white.png"
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
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
              Let&apos;s discuss how our enterprise AI development services can help
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

