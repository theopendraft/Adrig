"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Consultation & Strategy Building",
      description:
        "Navigate the complexities of AI adoption with expert-led consultation tailored to your business needs.",
    },
    {
      number: "02",
      title: "AI Workflow Automation",
      description:
        "Identify bottlenecks and implement automation systems that reduce manual work and increase operational efficiency.",
    },
    {
      number: "03",
      title: "Predictive Data Insights",
      description:
        "Leverage machine learning models to forecast trends, customer behavior, and business outcomes with accuracy.",
    },
    {
      number: "04",
      title: "Custom AI Model Development",
      description:
        "From recommendation systems to anomaly detection, we build AI models designed around your exact requirements.",
    },
    {
      number: "05",
      title: "AI Integration with Existing Systems",
      description:
        "Seamlessly integrate AI capabilities into your current software, tools, or cloud systems to enhance performance.",
    },
    {
      number: "06",
      title: "Monitoring & Optimization",
      description:
        "Continuous performance tracking, model tuning, and updates to ensure your AI systems remain accurate and reliable.",
    },
  ];

  const solutions = [
    { title: "Predictive Analytics Platforms" },
    { title: "Chatbots & Virtual Assistants" },
    { title: "Fraud Detection Systems" },
    { title: "Recommendation Engines" },
    { title: "Intelligent Process Automation" },
    { title: "Customer Behavior Analysis" },
    { title: "Computer Vision Solutions" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Tailored AI Strategies",
      description:
        "Every business is unique-our AI solutions are built exclusively around your workflows and goals.",
    },
    {
      number: "02.",
      title: "End-to-End Implementation",
      description:
        "From strategy to deployment, we handle the complete lifecycle of your AI initiative.",
    },
    {
      number: "03.",
      title: "Long-Term Support",
      description:
        "We continuously monitor and optimize your AI systems to ensure consistent, high-performance results.",
    },
  ];

  const faqs = [
    {
      question: "How can AI consulting benefit my business?",
      answer:
        "AI consulting helps you identify inefficiencies, automate manual tasks, enhance decision-making, and unlock new revenue opportunities through data-driven insights.",
    },
    {
      question: "Do we need technical expertise to work with you?",
      answer:
        "No. Our team handles everything-from strategy to deployment. You don't need an internal tech or data science team to start.",
    },
    {
      question: "How long does it take to see results from AI solutions?",
      answer:
        "Initial improvements are often visible within 4–8 weeks, depending on the complexity of the workflow and data availability.",
    },
    {
      question: "Can AI be integrated with our existing software?",
      answer:
        "Yes. We specialize in building AI systems that seamlessly integrate with your current tools, platforms, or cloud environments.",
    },
    {
      question: "Is AI consulting expensive for small businesses?",
      answer:
        "Not at all. We design scalable solutions so even small and mid-sized businesses can adopt AI without heavy upfront costs.",
    },
    {
      question: "Do you provide long-term support after implementation?",
      answer:
        "Absolutely. We continuously monitor, optimize, and update your AI models to ensure consistent, high-quality performance.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Consulting <span className="text-primary">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We craft AI-driven strategies and intelligent automation systems
              that help modern businesses operate faster, smarter, and more
              efficiently.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              SCHEDULE A CONSULTATION
              <img
                src="/right-up-white.png"
                alt="right-up"
                className="w-6 h-6 "
              />
            </Link>
          </div>

          {/* Two Image Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Left Box */}
          <div className="relative"> 
              <div className="aspect-[4/2] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/Website/Service/AI/ai1.jpg"
                  alt="AI_2"
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* Right Box */}
          <div className="relative">
              <div className="aspect-[4/2] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/Website/Service/AI/ai2.jpg"
                  alt="AI_2"
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              AI Consulting Services We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We craft AI-driven strategies and intelligent automation systems
              that help modern businesses operate faster, smarter, and more
              efficiently.
            </p>
          </div>

          {/* Services Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded mb-6">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
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

      {/* Types of AI Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-500 to-gray-600">
                {/* Placeholder for image */}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of AI Solutions We Build
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                We design AI solutions that help businesses make data-driven
                decisions and operate with precision.
              </p>

              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src="/right-up-blue.png"
                      alt="Arrow"
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span className="text-lg text-primary font-medium">
                      {solution.title}
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
              Why Choose <span className="text-primary">Adrig</span> for Your
              Next
              <br />
              AI Consulting Project?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index}>
                <div className="bg-white rounded-3xl p-10 flex flex-col">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-32">
                    {reason.number} {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Button - only show on middle card (index 1) */}
                {index === 1 && (
                  <Link href="/contact">
                    <button className="mt-6 w-full bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm tracking-wider">
                      GET STARTED
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
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
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>

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
                      <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
                        <img src="/plus.png" alt="plus" className="w-4 h-4" />
                      </div>
                    )}
                  </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our AI consulting and intelligent
              automation solutions can help your business operate smarter,
              reduce costs, and scale faster.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              GET IN TOUCH
              <img
                src="/right-up-white.png"
                alt="Arrow Right"
                className="w-6 h-6 "
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
