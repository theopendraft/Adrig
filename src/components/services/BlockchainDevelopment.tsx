"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlockchainDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Custom Blockchain Development",
      description:
        "We build secure, efficient, and interoperable custom blockchains with tailored protocols, smart contracts, and scalable architectures to meet your unique business needs.",
    },
    {
      number: "02",
      title: "dApp Development",
      description:
        "We build secure, scalable, and interoperable dApps on Ethereum, Stellar, and Solana, seamlessly integrating with your systems to boost efficiency across finance, gaming, and supply chain sectors.",
    },
    {
      number: "03",
      title: "Blockchain Integration",
      description:
        "We seamlessly integrate blockchain into your systems to enhance security, efficiency, transparency, and data integrity while aligning with your business goals.",
    },
    {
      number: "04",
      title: "Ongoing Support and Maintenance",
      description:
        "We deliver continuous blockchain support and maintenance to ensure security, efficiency, compliance, and maximum uptime through proactive monitoring, updates, and expert assistance.",
    },
  ];

  const solutions = [
    { title: "Smart Contracts" },
    { title: "NFT Marketplaces" },
    { title: "Blockchain Bridges" },
    { title: "Decentralized Exchanges" },
    { title: "Metaverse Spaces" },
    { title: "DAOs" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise and Experience",
      description:
        "Our team comprises experienced blockchain developers with a proven track record of delivering successful projects across various industries. We have the knowledge and expertise to handle complex blockchain solutions, addressing unique business challenges.",
    },
    {
      number: "02.",
      title: "Customized Solutions",
      description:
        "We recognize that each client has unique requirements, goals, and challenges. That's why we take a personalized approach to every project, ensuring that you receive a solution that is not only technically robust and scalable but also perfectly aligned with your business objectives.",
    },
    {
      number: "03.",
      title: "End-to-end Services",
      description:
        "From initial consultation and ideation to design, development, deployment, and ongoing support, we offer a holistic approach to blockchain development, ensuring that you have a reliable partner by your side from start to finish.",
    },
  ];

  const faqs = [
    {
      question: "How can blockchain technology benefit my organization?",
      answer:
        "Blockchain technology is a decentralized and distributed ledger system that securely records transactions across multiple nodes in a network. It offers transparency, immutability, and security, making it suitable for various applications such as supply chain management, finance, and identity verification. Blockchain can benefit your organization by enhancing transparency, reducing costs, improving efficiency, and enabling new business models and revenue streams.",
    },
    {
      question: "What types of blockchain development services do you offer?",
      answer:
        "We offer comprehensive blockchain development services including custom blockchain development, dApp development, blockchain integration, and ongoing support and maintenance. We build solutions such as smart contracts, NFT marketplaces, blockchain bridges, decentralized exchanges, metaverse spaces, and DAOs across various blockchain protocols including Ethereum, Hyperledger, Stellar, Solana, and Cosmos.",
    },
    {
      question: "How do you approach blockchain development projects?",
      answer:
        "We take a holistic, end-to-end approach to blockchain development. Starting with initial consultation and ideation, we work closely with you to understand your requirements and goals. We then proceed with design, development, deployment, and provide ongoing support. Our personalized approach ensures that each solution is technically robust, scalable, and perfectly aligned with your business objectives.",
    },
    {
      question: "Which blockchain platforms do you specialize in?",
      answer:
        "We specialize in various blockchain protocols including Ethereum, Hyperledger, Stellar, Solana, and Cosmos. Our team has extensive experience building solutions on these platforms, enabling us to select the most suitable blockchain protocol for your specific use case and business requirements.",
    },
    {
      question: "How do you ensure the security of blockchain applications?",
      answer:
        "We implement comprehensive security measures throughout the blockchain development process including secure smart contract development, thorough testing and auditing, best practices for key management, and robust access controls. We ensure that your blockchain applications are secure, efficient, and compliant with industry standards.",
    },
    {
      question: "Can LeewayHertz customize blockchain development for specific industries?",
      answer:
        "Yes, absolutely. We build blockchain solutions for diverse industries including finance, gaming, supply chain, healthcare, and more. Our team understands industry-specific requirements and challenges, enabling us to deliver customized blockchain solutions that address unique business needs across various sectors.",
    },
    {
      question: "What sets your company apart from other blockchain development service providers?",
      answer:
        "What sets us apart is our combination of deep technical expertise, proven track record, personalized approach, and comprehensive end-to-end services. Our experienced team delivers technically robust solutions that are perfectly aligned with your business objectives, ensuring you have a reliable partner throughout your blockchain journey.",
    },
    {
      question: "How can I get started with LeewayHertz for blockchain development services?",
      answer:
        "Getting started is easy. Contact us for an initial consultation where we'll understand your requirements, assess your needs, and discuss your blockchain goals. We'll then provide a tailored proposal with strategy, timeline, and approach. Once approved, we proceed with development, keeping you informed throughout the process.",
    },
    {
      question: "How do you handle ongoing support and maintenance for blockchain applications?",
      answer:
        "We provide continuous blockchain support and maintenance services including proactive monitoring, security updates, performance optimization, compliance management, and expert assistance. Our ongoing support ensures your blockchain applications remain secure, efficient, and operate at maximum uptime.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Blockchain Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our comprehensive suite of blockchain development services empowers you to leverage blockchain technology effectively within your organization. We design and develop custom blockchain solutions for startups and enterprises using various blockchain protocols, including Ethereum, Hyperledger, Stellar, Solana and Cosmos. From smart contracts, NFTs, and DEXs to bridges, tokens, dApps and metaverse spaces, we build decentralized solutions that address diverse use cases across industries.
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
                  alt="Blockchain Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Blockchain Development"
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
              Our Blockchain Development Services
            </h2>
          </div>

          {/* Services Grid - 2x2 */}
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

      {/* Blockchain Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain Solutions We Build
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We build decentralized solutions including smart contracts, NFTs, DEXs, bridges, tokens, dApps and metaverse spaces that address diverse use cases across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Blockchain Solutions"
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

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span> for Blockchain
              Development?
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
              Let&apos;s discuss how our blockchain development services can help
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

