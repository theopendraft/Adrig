"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StableDiffusionDevelopers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Custom Stable Diffusion Model-powered Solution Development",
      description:
        "We customize Stable Diffusion models using the latest technologies, working closely with you to deliver a seamless, end-to-end development experience.",
    },
    {
      number: "02",
      title: "Model Integration and Deployment",
      description:
        "We evaluate your requirements to ensure secure, end-to-end Stable Diffusion model integration and deployment, covering model selection, configuration, testing, and production rollout.",
    },
    {
      number: "03",
      title: "Consulting and Strategy Building",
      description:
        "Our AI experts identify relevant Stable Diffusion use cases for your domain, build or integrate tailored solutions, and provide ongoing optimization recommendations post-deployment.",
    },
    {
      number: "04",
      title: "Support and Maintenance",
      description:
        "Our AI engineers provide continuous support, upgrades, and maintenance to keep your Stable Diffusion–powered solution current and performing at its best.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Machine Learning",
      description:
        "Our developers use advanced ML, NLP, and deep learning to create Stable Diffusion solutions that transform text into visuals.",
    },
    {
      title: "Fine tuning",
      description:
        "Stable Diffusion models can be fine-tuned using transfer learning on smaller datasets to efficiently deliver high-quality results for specific use cases.",
    },
    {
      title: "Transfer Learning",
      description:
        "We specialize in transfer learning, leveraging pre-trained models to solve specific problems efficiently while improving performance and reducing training time.",
    },
  ];

  const faqs = [
    {
      question: "What is Stable Diffusion, and how does it function?",
      answer: (
        <>
          Stable Diffusion is an AI model launched publicly by Stability.ai in 2022. It is a text-to-image generative AI model designed to produce images matching input text prompts. Employing the latent diffusion model, a variant of the diffusion model, stable diffusion models effectively remove even the most intrusive noise from data. Using various subsets of Machine Learning like deep learning, our stable diffusion models have been trained by taking image-text pairs from the LAION-5B, a dataset that has over 5.85 billion image-text pairs.
        </>
      ),
    },
    {
      question: "What Stable Diffusion Model-powered Solution Development services do you provide?",
      answer: "",
    },
    {
      question: "What is the process for deploying Stable Diffusion models?",
      answer: "",
    },
    {
      question: "What are some potential applications of the Stable Diffusion model?",
      answer: "",
    },
    {
      question: "What is the cost of developing a custom fine-tuned stable diffusion model?",
      answer: "",
    },
    {
      question: "Why choose LeewayHertz as your AI development company?",
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
              Stable Diffusion <span className="text-blue-600">Developers</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              As specialists in creating Stable Diffusion model powered solutions, we bring your vision to reality through innovative solutions like LensaAI, an image-to-image generative AI application. Our team has extensive experience in building both text-to-image and image-to-image generative AI models, incorporating advanced technologies such as machine learning and natural language processing. This expertise enables us to deliver AI solutions tailored to your specific project requirements, helping you to achieve your AI goals with ease.
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
              Our Stable Diffusion Model-powered Solution Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              As a leading provider of Stable Diffusion–powered development services, our experienced AI developers possess deep expertise across platforms and frameworks. Leveraging the latest Stable Diffusion models, we build custom, finely tuned AI solutions aligned with your specific business needs.
            </p>
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

      {/* Our AI Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Expertise for Stable Diffusion Model-powered Solution Development
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our proficiency in diverse AI technologies like the undermentioned enables us to create robust stable diffusion model-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Stable Diffusion Development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Expertise Areas List */}
            <div>
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
              Let&apos;s discuss how our Stable Diffusion development solutions can help
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


