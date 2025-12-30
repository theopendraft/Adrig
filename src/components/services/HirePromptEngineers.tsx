"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HirePromptEngineers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Strategy and Consulting",
      description:
        "Elevate your users' AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.",
    },
    {
      number: "02",
      title: "Analysis Service",
      description:
        "Elevate your users' AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.",
    },
    {
      number: "03",
      title: "Design and Testing",
      description:
        "Elevate your users' AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.",
    },
    {
      number: "04",
      title: "Integration and Optimization",
      description:
        "Elevate your users' AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        "We start by understanding your requirements and objectives, gathering all necessary details to tailor prompt engineering precisely to your generative AI needs.",
    },
    {
      number: "02",
      title: "Integration and Optimization",
      description:
        "We seamlessly integrate and optimize generative AI models within your existing systems to ensure efficient and reliable performance.",
    },
    {
      number: "03",
      title: "Delivery and Deployment",
      description:
        "We deliver and deploy the finalized generative AI solution, providing training and support to ensure effective adoption and usage.",
    },
  ];

  const faqs = [
    {
      question: "What is Prompt engineering?",
      answer: (
        <>
          Prompt engineering involves crafting instructions and examples that guide Large Language Models (LLMs) to perform specific tasks. It provides clear directions to these powerful language tools, enabling them to generate desired outputs or responses based on input prompts.
        </>
      ),
    },
    {
      question: "What industries can benefit from your prompt engineering consulting services?",
      answer: "",
    },
    {
      question: "Does LeewayHertz offer ongoing support and maintenance after completing a project?",
      answer: "",
    },
    {
      question: "How does LeewayHertz ensure the security of sensitive data during the consulting process?",
      answer: "",
    },
    {
      question: "How does your company stay updated on the latest advancements and trends in prompt engineering?",
      answer: "",
    },
    {
      question: "Can your prompt engineering consultants work collaboratively with our in-house team?",
      answer: "",
    },
    {
      question: "Can LeewayHertz offer custom solutions to unique engineering challenges?",
      answer: "",
    },
    {
      question: "What skills are crucial for success in prompt engineering, especially in a prompt engineering company?",
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
              Hire Prompt <span className="text-blue-600">Engineers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              As experts in developing, training, and deploying generative models, we provide top-notch prompt engineering services to help you unlock the full potential of your generative AI models. Our dedicated prompt engineers have extensive experience in tailoring prompts for a variety of models, such as OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion. With our expertise, we help you achieve the best possible results for your generative AI projects.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Unlock the Power of Generative AI Models with Our Prompt Engineering Service. Elevate your users' AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.
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
              Unlock the Power of Generative AI Models with Our Prompt Engineering Service
            </h2>
          </div>

          {/* Services Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Process Flow Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Process Flow That Our Prompt Engineers Follow to Develop Solutions
            </h2>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Let&apos;s discuss how our prompt engineering services can help
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

