"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HireGenerativeAIEngineers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Data Analysis",
      description:
        "ADRIG's generative AI engineers combine expertise in data analytics and machine learning to unlock the full potential of your data, delivering actionable insights through advanced statistics, programming, and data visualization.",
    },
    {
      number: "02",
      title: "Domain-specific LLM Development",
      description:
        "Experience domain-specific LLMs tailored to your business language. We fine-tune foundation models with your proprietary data to deliver highly relevant, industry-aware understanding and content generation.",
    },
    {
      number: "03",
      title: "Generative AI Solution Development",
      description:
        "Whether optimizing workflows, personalizing engagement, or enhancing customer systems, our generative AI solutions are built end to end—from design and development to testing and deployment—to meet your exact business needs.",
    },
    {
      number: "04",
      title: "Strategy Development and Consulting",
      description:
        "Our generative AI experts provide strategic consulting—from technology assessment and roadmap planning to risk mitigation and scalability—helping you make informed, future-ready AI decisions aligned with your business goals.",
    },
    {
      number: "05",
      title: "Integration and Optimization",
      description:
        "Our generative AI engineers seamlessly integrate and optimize GenAI solutions within your existing workflows, ensuring peak performance, maximum value, and enhanced operational efficiency.",
    },
    {
      number: "06",
      title: "Performance Monitoring and Maintenance",
      description:
        "Our experts provide ongoing care and optimization for GenAI systems through continuous monitoring, fine-tuning, and regular updates, ensuring peak performance and long-term business value",
    },
  ];

  const skills = [
    { title: "Collaborative Excellence & Problem-solving Skills" },
    { title: "Knowledge of ML and Other Relevant Technologies" },
    { title: "Proficiency in Key Generative AI Tools" },
    { title: "Expertise in Generative AI Algorithms" },
    { title: "Knowledge of Data Mining and Analytics" },
    { title: "Commitment to Excellence" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Assessment",
      description:
        "Identify and document the specific needs, objectives, and constraints of the project. It's crucial to understand what stakeholders expect from the final product or system",
    },
    {
      number: "02",
      title: "Strategy Building",
      description:
        "Develop a strategic plan outlining the generative AI model selection, training approach, resource allocation, and deployment strategy tailored to the project's goals.",
    },
    {
      number: "03",
      title: "Design and Development",
      description:
        "Detailed specifications and architectural designs for the solution are crafted, followed by its development using a fine-tuned model, ensuring its alignment with the client's unique requirements",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Rigorously test the generative AI solution, improving it through iterative cycles to ensure better output quality and minimize biases.",
    },
    {
      number: "05",
      title: "Deployment and Optimization",
      description:
        "The generative AI solution is deployed into the production environment, and continuous optimization efforts are undertaken to enhance its performance and output quality.",
    },
    {
      number: "06",
      title: "Integration and Support",
      description:
        "Integrate the generative AI solution into the client's existing ecosystem, followed by ongoing support and maintenance to ensure its alignment with evolving requirements.",
    },
  ];

  const faqs = [
    {
      question: "What roles LeewayHertz's generative AI engineers perform?",
      answer: (
        <>
          LeewayHertz&apos;s generative AI engineers excel at crafting domain-specific generative AI models that generate unique outputs relevant to your business, spanning visuals, text, and music. Through advanced techniques such as deep learning, our experts enable machines to emulate human-like creative abilities. Beyond this, our team specializes in building genAI solutions tailored to your specific needs. We seamlessly integrate these solutions into your existing tech infrastructure and provide comprehensive consultation to ensure their optimal utilization.
        </>
      ),
    },
    {
      question: "How can generative AI benefit my business?",
      answer: "",
    },
    {
      question: "What sets LeewayHertz's generative AI engineers apart?",
      answer: "",
    },
    {
      question: "What skills do your generative AI engineers possess?",
      answer: "",
    },
    {
      question: "Why hire LeewayHertz's generative AI engineers?",
      answer: "",
    },
    {
      question: "How to hire LeewayHertz's generative AI engineers?",
      answer: "",
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "",
    },
    {
      question: "Can your generative AI engineers work remotely?",
      answer: "",
    },
    {
      question: "How does LeewayHertz choose generative AI developers and ensure their ongoing proficiency?",
      answer: "",
    },
    {
      question: "What ongoing support and maintenance can I expect after hiring generative AI developers?",
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
              Hire Generative AI <span className="text-blue-600">Engineers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Hire our team of expert generative AI engineers to unlock the full potential of generative AI for your business. Specializing in domain-specific models and advanced technologies like GANs, neural networks and LLMs, we provide seamless integration with your existing infrastructure and expert consultation to navigate your AI journey. Our deep expertise in foundational models like GPT-4, Llama 3, and Mistral enables us to fuse cutting-edge technology with human creativity. Enhance your operations with our industry-leading AI experts, who adhere to the highest standards and offer the flexibility to collaborate across time zones.
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
              Our Generative AI Engineering Services
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

      {/* Why Hire Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Hire LeewayHertz for Generative AI Engineers?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Expert generative AI talent focused on performance, reliability, and impact. Built to support complex, enterprise-grade AI initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Hire Generative AI Engineers"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Skills List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {skill.title}
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
              The Process Our Engineers Follow to Develop Generative AI Solutions
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
              Let&apos;s discuss how our generative AI engineers can help
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

