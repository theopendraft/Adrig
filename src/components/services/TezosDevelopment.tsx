"use client";

import { useState } from "react";
import Link from "next/link";

export default function TezosDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Tezos Consulting",
      description:
        "Our Tezos Development Team helps you identify the feasibility of the Tezos Blockchain Platform for your business use case and how it can bring efficiency to your existing ecosystem. Once we discover the need for the Tezos Blockchain Platform, we identify off-chain, on-chain entities and the technology stack required to deliver a solution.",
    },
    {
      number: "02",
      title: "Smart Contracts Development",
      description:
        "Using Michelson language, our Tezos Developers create Tezos Smart Contracts that automate operations on the Tezos Blockchain network. With the experience in building smart contracts on different blockchain platforms, our blockchain developers ensure to develop an error-free smart contract for the private or public network.",
    },
    {
      number: "03",
      title: "Tezos Integration",
      description:
        "We use a wide range of Tezos APIs, SDKs and tools such as Taquito, Conseil, Morley, TezosKit, PyTezos and TezosJ to integrate your existing application or software with the Tezos blockchain network. While integrating different APIs or SDKs, we ensure high scalability, adaptability and traceability.",
    },
    {
      number: "04",
      title: "Token Development",
      description:
        "With a wide range of additional functionalities like post-deployment support and degradation, we help you develop a stable Tezos blockchain-based token. We ensure to implement proper testing and support at every step of the development process when building Tezos tokens.",
    },
    {
      number: "05",
      title: "Wallet Development",
      description:
        "We can develop custom Tezos wallets for your business on Tezos that support XTZ (Tezos) tokens. We have expertise in assisting enterprises and startups to integrate Tezos Wallet with their existing application or platform successfully.",
    },
    {
      number: "06",
      title: "Tezos dApp Development",
      description:
        "With technical skills and experience in blockchain app development, we can build robust and scalable Tezos dApps with emphasis on the tailored requirements of the client. As Tezos supports decentralized exchange inherently, we can also develop DEX applications.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "On-Chain Governance",
      description:
        "All stakeholders can take part in governing the protocol. The election cycle offers a systematic approach for stakeholders to reach an agreement on protocol amendments. Combining the on-chain mechanism and self-amendment, Tezos can modify the initial election process to implement better governance mechanisms.",
    },
    {
      number: "02.",
      title: "Self-amendment",
      description:
        "Tezos uses a self-amendment approach to upgrade itself without splitting the network into two different blockchains. Due to self-amendment, execution and coordination, costs for protocol upgrades are reduced and innovations in the future can also be implemented seamlessly.",
    },
    {
      number: "03.",
      title: "Smart Contracts and Formal Verification",
      description:
        "Tezos provides a platform to create dApps and smart contracts that cannot be shut down by third parties. By facilitating formal verification, Tezos can help improve security with mathematically proven properties about programs, for example, smart contracts.",
    },
  ];

  const faqs = [
    {
      question: "What is Tezos?",
      answer:
        "Tezos is a decentralized ledger using blockchain technology for assets and applications. It is supported by numerous validators, researchers and builders globally. Tezos is known for its self-amending blockchain architecture, on-chain governance, and formal verification capabilities that ensure smart contract safety and long-term upgradability.",
    },
    {
      question: "What is the purpose of Tezos?",
      answer:
        "The purpose of Tezos is to provide a secure, self-amending blockchain platform that enables the development of decentralized applications and smart contracts. Tezos aims to ensure smart contract safety, open participation, and long-term upgradability through its unique governance mechanism that allows stakeholders to propose and vote on protocol upgrades without hard forks.",
    },
    {
      question: "What makes Tezos different?",
      answer:
        "Tezos is different from other blockchain platforms due to its self-amending mechanism, on-chain governance, and formal verification capabilities. Unlike traditional blockchains that require hard forks for upgrades, Tezos can upgrade itself through a formalized voting process. This allows for seamless protocol improvements while maintaining network continuity and reducing coordination costs.",
    },
    {
      question: "What makes Tezos a significant platform for DeFi applications?",
      answer:
        "Tezos is significant for DeFi applications due to its inherent support for decentralized exchanges, formal verification capabilities that enhance security, low transaction costs, and energy-efficient consensus mechanism. The self-amending nature allows Tezos to adapt quickly to DeFi innovations, while formal verification provides mathematically proven security for smart contracts used in financial applications.",
    },
    {
      question: "What are your Tezos blockchain development services?",
      answer:
        "Our Tezos blockchain development services include Tezos consulting, smart contracts development using Michelson language, Tezos integration with existing applications using APIs and SDKs, token development, wallet development, and Tezos dApp development. We have expertise in building robust and scalable Tezos-based solutions tailored to client requirements.",
    },
    {
      question: "Can I create my own dedicated team for Tezos blockchain development?",
      answer:
        "Yes, we can help you create a dedicated team for Tezos blockchain development. Our Tezos development team consists of experienced blockchain developers skilled in Michelson, Tezos APIs, SDKs, and tools. We can provide team extension services where our developers work as part of your team, or we can build a complete dedicated team for your Tezos project.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tezos <span className="text-blue-600">Development</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Develop Tezos-based assets and applications to ensure smart contract safety, open participation and long-term upgradability.
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
                  alt="Tezos Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Tezos Development"
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
              Our Tezos Blockchain Development Services
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

      {/* Why Choose Tezos Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Tezos Development for dApps?
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
              Let&apos;s discuss how our Tezos development services can help
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

