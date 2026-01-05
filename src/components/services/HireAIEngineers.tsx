"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HireAIEngineers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const expertise = [
    {
      number: "01",
      title: "Diverse AI Technologies",
      description:
        "ADRIG's AI engineers leverage deep expertise in machine learning, computer vision, and natural language processing to build scalable, industry-agnostic AI solutions.",
    },
    {
      number: "02",
      title: "Programming Languages & Frameworks",
      description:
        "Our engineers use Python, R, and frameworks like TensorFlow, PyTorch, and Scikit-Learn to build high-performance AI solutions that maximize business value.",
    },
    {
      number: "03",
      title: "Data Engineering",
      description:
        "Our AI engineers excel in data engineering, efficiently managing data preparation and transformation to support machine learning training, advanced analytics, and accurate predictions.",
    },
    {
      number: "04",
      title: "LLM Fine-tuning",
      description:
        "Our AI experts are proficient with models like GPT and Llama 2, enabling them to select and fine-tune the most suitable architecture to meet your specific business needs.",
    },
    {
      number: "05",
      title: "Machine Learning Techniques",
      description:
        "Our AI engineers specialize in supervised, unsupervised, deep, and reinforcement learning to deliver machine learning solutions tailored to specific business needs.",
    },
    {
      number: "06",
      title: "Prompt Engineering",
      description:
        "Our AI engineers excel in context-aware prompt engineering to deliver seamless, accurate, and high-value conversational AI experiences.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Highly Skilled",
      description:
        "Our highly skilled AI engineers bring years of hands-on industry experience to deliver expertly crafted, best-in-class AI solutions.",
    },
    {
      number: "02.",
      title: "Diverse Expertise",
      description:
        "Our AI engineers offer broad expertise across NLP, computer vision, predictive analytics, and other AI domains to meet diverse project needs.",
    },
    {
      number: "03.",
      title: "Timely Delivery",
      description:
        "Our dedicated AI engineers ensure reliable, on-time deployment of AI solutions that meet your business objectives and delivery timelines.",
    },
  ];

  const additionalReasons = [
    {
      title: "Quality Assurance",
      description:
        "We uphold the highest quality standards through rigorous testing to deliver reliable, high-performance AI solutions.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our proven portfolio reflects consistent delivery of innovative, high-quality AI solutions across diverse industries.",
    },
    {
      title: "End-to-end Support",
      description:
        "We offer end-to-end AI support from concept to deployment, with our engineers managing the entire development lifecycle to ensure a seamless experience.",
    },
  ];

  const faqs = [
    {
      question: "What are AI engineers?",
      answer: (
        <>
          AI engineers are professionals who design, develop, and implement artificial intelligence systems and solutions. They combine their computer science, mathematics, and engineering knowledge to build systems that can perform tasks that normally require human intelligence, such as recognizing patterns in data, making predictions, and making decisions.
          <br /><br />
          They work on a wide range of projects, from developing recommendation systems, natural language processing applications, computer vision technologies, and more. Their role is to harness AI and ML to solve complex problems, automate tasks, and improve processes in various industries, including healthcare, finance, manufacturing, and technology, among others.
        </>
      ),
    },
    {
      question: "What technologies are your AI engineers proficient in?",
      answer: "",
    },
    {
      question: "Why should I hire LeewayHertz's AI engineers?",
      answer: "",
    },
    {
      question: "What types of AI tools does LeewayHertz build?",
      answer: "",
    },
    {
      question: "Does LeewayHertz provide post-deployment services?",
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
              Hire AI <span className="text-blue-600">Engineers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Whether you want to initiate or advance your AI journey, trust our AI engineers to provide the expertise you need. With knowledge and experience spanning diverse AI domains such as machine learning, deep learning, natural language processing, computer vision, and data science, our AI engineers build custom AI models and solutions tailored to your unique business needs. We follow a comprehensive approach that goes beyond AI development, encompassing the seamless integration of AI solutions into your existing systems, and offering consulting services to guide you through the intricate AI landscape.
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
                  alt="Hire AI Engineers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Hire AI Engineers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expertise of Our AI Engineers
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              When you choose LeewayHertz, you join forces with a team of highly skilled AI engineers with a wealth of knowledge and expertise in various areas, including
            </p>
          </div>

          {/* Expertise Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Our AI Engineers Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Hire Our AI Engineers?
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
              Let&apos;s discuss how our AI engineers can help
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

