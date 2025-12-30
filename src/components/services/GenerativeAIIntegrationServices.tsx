"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GenerativeAIIntegrationServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const benefits = [
    {
      number: "01",
      title: "Customer Support Automation",
      description:
        "Provide instant and accurate responses to customer queries, reducing the workload on support teams, improving customer satisfaction and saving customer support costs.",
    },
    {
      number: "02",
      title: "Content Generation",
      description:
        "Automate creating engaging and personalized content such as blog articles, social media posts, and product descriptions, saving time and effort while maintaining quality and consistency.",
    },
    {
      number: "03",
      title: "Data Analysis and Insights",
      description:
        "Utilize generative AI to analyze large datasets and extract valuable insights to make data-driven decisions more efficiently and effectively.",
    },
    {
      number: "04",
      title: "Virtual Training and Simulations",
      description:
        "Develop interactive training modules and simulations using generative AI, allowing employees to enhance their skills and knowledge in a virtual environment, leading to improved performance and reduced training cost",
    },
    {
      number: "05",
      title: "Natural Language Processing (NLP)",
      description:
        "Automate diverse NLP-based tasks like sentiment analysis, summarizing and language translation, driving efficiency and productivity within your organization.",
    },
    {
      number: "06",
      title: "Creative Design and Art",
      description:
        "Explore generative AI in the field of creative design, allowing businesses to generate unique visuals, artwork, and graphic designs, opening up new possibilities for branding and marketing campaigns.",
    },
  ];

  const services = [
    { title: "Custom Generative AI Application Development" },
    { title: "Generative AI Consulting" },
    { title: "Generative AI Integration Into Workflows" },
    { title: "Ongoing Maintenance and Support" },
  ];

  const industries = [
    { title: "Banking and Finance" },
    { title: "Real Estate" },
    { title: "Supply Chain and Logistics" },
    { title: "Automotive" },
    { title: "Media and Entertainment" },
    { title: "Insurance" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understanding Client Needs",
      description:
        "We work closely with clients to understand their business goals and challenges, identifying key processes where generative AI can add value and improve efficiency.",
    },
    {
      number: "02",
      title: "Model Selection",
      description:
        "Based on identified requirements, we select the most suitable pre-trained generative AI models—such as GPT-3, GPT-4, or specialized image-generation models—to best fit the use case.",
    },
    {
      number: "03",
      title: "Data Integration",
      description:
        "We integrate client data—text, images, and other formats—into the generative AI system through seamless connections with databases, cloud storage, APIs, and real-time data sources.",
    },
    {
      number: "04",
      title: "Fine-tuning",
      description:
        "We customize and fine-tune the selected generative AI models using domain-specific client data, ensuring optimal performance and alignment with specific business use cases.",
    },
    {
      number: "05",
      title: "Deployment and Monitoring",
      description:
        "After testing and approval, we deploy the generative AI solution into production with continuous monitoring to ensure optimal performance, reliability, and scalability.",
    },
    {
      number: "06",
      title: "Support and Maintenance",
      description:
        "We provide ongoing support, maintenance, and updates to keep generative AI integrations secure, efficient, and aligned with evolving business and technology needs.",
    },
  ];

  const faqs = [
    {
      question: "What is a Generative AI integration service?",
      answer: (
        <>
          A Generative AI integration service involves seamlessly incorporating generative AI-powered solutions into businesses&apos; existing systems and workflows. It enables businesses to leverage AI models like GPT-3 or GPT-4 to automate tasks, enhance decision-making, and drive efficiency, all while integrating AI-generated outputs into their workflows. This service encompasses understanding client requirements, selecting the right AI model, fine-tuning it, integrating data sources, and ensuring a smooth integration process. Ultimately, it empowers businesses to optimize operations and achieve scalability through the power of generative AI.
        </>
      ),
    },
    {
      question: "How can my business benefit from Generative AI integration?",
      answer: "",
    },
    {
      question: "How will Generative AI contribute to business value?",
      answer: "",
    },
    {
      question: "How secure is your service?",
      answer: "",
    },
    {
      question: "Do I need any technical knowledge to use your service?",
      answer: "",
    },
    {
      question: "How long does the integration process take?",
      answer: "",
    },
    {
      question: "Do you offer customer support?",
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
              Generative AI <span className="text-blue-600">Integration Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build robust generative AI-powered solutions tailored to your unique business requirements and seamlessly integrate them into your existing workflows. Streamline your processes, drive innovation, and maximize productivity through the limitless potential of generative AI.
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

      {/* Benefits Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Can Generative AI Integration Benefit Your Business?
            </h2>
          </div>

          {/* Benefits Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {benefit.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Generative AI Integration Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We seamlessly integrate generative AI into your existing systems and workflows. Ensuring scalability, security, and minimal disruption to operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="GenAI Integration"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Services List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Generative AI Solutions Cater to a Wide Array of Industries
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Industry-specific generative AI solutions designed to address unique business challenges.
              <br />
              Built to scale across sectors with measurable impact.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Generative AI Integration Process
            </h2>
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

                {/* Button - only show on middle card (index 2) */}
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
              Let&apos;s discuss how our GenAI integration solutions can help
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
