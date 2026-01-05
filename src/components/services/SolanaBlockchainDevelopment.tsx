"use client";

import { useState } from "react";
import Link from "next/link";

export default function SolanaBlockchainDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Solana Blockchain Consulting",
      description:
        "Our Solana blockchain consulting services help enterprises understand the Solana ecosystem via strategic and technical analysis, allowing them to leverage the speed and scalability of the Solana.",
    },
    {
      number: "02",
      title: "NFT Marketplace",
      description:
        "We build and deploy customized NFT on Solana Blockchain, optimizing the marketplace to support features like decentralized NFT minting, storefronts, sales and other marketplace features.",
    },
    {
      number: "03",
      title: "SPL Token Development",
      description:
        "We help you secure and expedite the tokenization of your digital assets by creating new Solana Program Library (SPL) tokens for them. These tokens are DEX exchangeable and powers Solana dApps.",
    },
    {
      number: "04",
      title: "Node Development and Maintenance",
      description:
        "We build, launch and maintain nodes on the Solana mainnet, helping you to become a validator and contribute to network security and, in return, help you earn SOL.",
    },
    {
      number: "05",
      title: "Smart Contract Development and Audit",
      description:
        "Well-versed in Rust and C ++ programming, we offer Solana smart contract development and auditing services, enabling you to execute your business contracts in an automated and trustless way.",
    },
    {
      number: "06",
      title: "Defi Development",
      description:
        "We build scalable DeFi solutions on the Solana ecosystem, ranging from P2P decentralized lending platforms and crypto payment gateway to DEXs.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "In-depth Ecosystem Knowledge",
      description:
        "We have developed tools and utilities for different blockchain ecosystems. Our Solana developers have a thorough understanding of the intricacies of blockchain ecosystems.",
    },
    {
      number: "02.",
      title: "One-stop Blockchain Services",
      description:
        "We offer end-to-end Solana blockchain development services, from developing a large Defi or NFT marketplace project or a simple wallet integration.",
    },
    {
      number: "03.",
      title: "Long-term Collaborations",
      description:
        "We build scalable relationships with our clients. Through market analysis, research and development, we continue building business and technical strategies to help our clients further scale up their projects.",
    },
  ];

  const faqs = [
    {
      question: "What is Solana blockchain development?",
      answer:
        "Solana blockchain development involves building decentralized applications (dApps), smart contracts, NFT marketplaces, DeFi platforms, and other blockchain solutions on the Solana network. Solana is known for its high performance, scalability, and low transaction costs, making it an ideal platform for building fast and efficient blockchain applications.",
    },
    {
      question: "What services do you offer for Solana development?",
      answer:
        "We offer comprehensive Solana blockchain development services including Solana blockchain consulting, NFT marketplace development, SPL token development, node development and maintenance, smart contract development and audit, and DeFi development. Our team has expertise in Solana development workflows, client SDKs, and programs for building decentralized solutions.",
    },
    {
      question: "Why choose Solana for blockchain development?",
      answer:
        "Solana offers several advantages including high scalability, fast transaction speeds, low transaction costs, and strong security. Solana can handle thousands of transactions per second, making it ideal for high-performance dApps, DeFi platforms, and NFT marketplaces. Its Proof of History consensus mechanism ensures fast and secure transactions.",
    },
    {
      question: "What programming languages are used for Solana development?",
      answer:
        "Solana smart contracts (programs) are primarily written in Rust and C++. Our developers are well-versed in both Rust and C++ programming languages, enabling us to build secure and efficient Solana smart contracts and dApps.",
    },
    {
      question: "Do you provide ongoing support and maintenance for Solana projects?",
      answer:
        "Yes, we provide comprehensive ongoing support and maintenance for all Solana projects we develop. This includes node maintenance, smart contract updates, security audits, performance optimization, and technical support to ensure your Solana-based solutions continue to operate efficiently.",
    },
    {
      question: "Can you help migrate existing projects to Solana?",
      answer:
        "Yes, we can help migrate existing blockchain projects to Solana. Our team has experience in blockchain migration and can assist with porting smart contracts, dApps, and other components to the Solana ecosystem, taking advantage of Solana's high performance and scalability.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Solana Blockchain Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We design and develop user-friendly dApps powered by the Solana's scalability, speed and security. Our blockchain developers have expertise in Solana development workflows, client SDKs and programs for building decentralized solutions for DeFi to web3 and NFTs.
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
                  alt="Solana Blockchain Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Solana Blockchain Development"
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
              Our Solana Blockchain Development Services
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

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span> for Solana Development?
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
              Let&apos;s discuss how our Solana blockchain development services can help
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

