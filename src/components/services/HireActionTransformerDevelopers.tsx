"use client";

import { useState } from "react";
import Link from "next/link";

export default function HireActionTransformerDevelopers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Dialog Management System Development",
      description:
        "Our Action Transformer experts build end-to-end conversational agents using NLP and frameworks like RASA and Microsoft Bot Framework to execute computer actions from high-level user prompts.",
    },
    {
      number: "02",
      title: "Action Transformer-based Custom Solutions",
      description:
        "Our AI experts align with your business goals to build custom action transformer solutions using deep learning frameworks like PyTorch, TensorFlow, and related tools.",
    },
    {
      number: "03",
      title: "Enterprise Integration",
      description:
        "Our AI experts understand your business objectives to build custom, action transformer-powered solutions using deep learning frameworks like PyTorch, TensorFlow, and related tools.",
    },
    {
      number: "04",
      title: "Ongoing Maintenance and Support",
      description:
        "We provide end-to-end model monitoring and maintenance, including performance tracking, retraining, and updates to ensure optimal, ongoing performance.",
    },
  ];

  const expertise = [
    { title: "Machine Learning" },
    { title: "Natural Language Processing" },
    { title: "Intent Recognition" },
    { title: "Data Engineering" },
    { title: "Human Action Recognition" },
    { title: "Deep Neural Network" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Domain Expertise",
      description:
        "Our developers bring extensive cross-industry experience in building AI solutions using the right technology stacks for finance, healthcare, logistics, and more.",
    },
    {
      number: "02.",
      title: "Use of Advanced Technologies",
      description:
        "Our developers are proficient in advanced AI frameworks like TensorFlow, deployment tools such as Docker, multiple programming languages, and neural networks including CNN",
    },
    {
      number: "03.",
      title: "End-to-end Solution Development",
      description:
        "Hire Action Transformer developers from ADRIG for end-to-end AcT solution development, from ideation to deployment, tailored to your unique business needs.",
    },
  ];

  const additionalReason = {
    title: "Proven Track Record",
    description:
      "With a proven track record across industries, our developers deliver high-quality AI solutions that drive measurable business value.",
  };

  const faqs = [
    {
      question: "How much does it cost to hire Action Transformer developers?",
      answer: (
        <>
          The cost of hiring an Action Transformer developer can vary depending on several factors, including their experience level, the project's complexity, and the length of the engagement. We offer competitive rates and will work with you to determine the best pricing structure for your needs.
        </>
      ),
    },
    {
      question: "How do I know if an Action Transformer developer is right for my project?",
      answer: "",
    },
    {
      question: "What kind of support do you offer after the project is complete?",
      answer: "",
    },
    {
      question: "What is the typical engagement length when working with an Action Transformer development company?",
      answer: "",
    },
    {
      question: "What kind of communication can I expect from your team during the project?",
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
              Hire Action Transformer <span className="text-blue-600">Developers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage our AI expertise to build powerful Action Transformer-powered solutions and apps that can perform diverse tasks based on user inputs. From securing an optimal property deal to scheduling a dental appointment, this multifunctional tool is designed to take any high-level user request and implement it. Our AcT developers' proficiency in multiple AI subsets, including ML, NLP and deep learning, ensures exceptional development output.
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
                  alt="Hire Action Transformer Developers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Hire Action Transformer Developers"
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
              Our Action Transformer Development Services
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

      {/* Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Action Transformer Development Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Action Transformer Development Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Expertise List */}
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
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

      {/* Why Hire Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Hire Action Transformer Developers From <span className="text-primary">LeewayHertz</span>?
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
              Let&apos;s discuss how our Action Transformer developers can help
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

