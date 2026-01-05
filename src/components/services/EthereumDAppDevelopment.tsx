"use client";

import { useState } from "react";
import Link from "next/link";

export default function EthereumDAppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Scalable dApps Development",
      description:
        "Be it NFT marketplaces, DEX or banking & payment solutions, our experts adopt agile methodologies to design and develop scalable and user-friendly Ethereum dApps that are purpose-built for your business needs.",
    },
    {
      number: "02",
      title: "Smart Contract Audit",
      description:
        "Our Ethereum developers conduct detailed analysis and testing to ensure that your smart contract codes are authentic and error-proof without bugs or security vulnerabilities before it is deployed on the mainnet.",
    },
    {
      number: "03",
      title: "Custom dApps for Private Network",
      description:
        "Our smart contract development and on-chain permissioning services can help enterprises seamlessly regulate their dApps as per the intended functionalities of the private network's ecosystem.",
    },
    {
      number: "04",
      title: "Ethereum dApp Porting",
      description:
        "From writing new smart contracts to modifying existing contracts, we provide complete support to help you port your existing mobile or web-based dApp from a different blockchain to Ethereum, allowing you to revamp your business infrastructure.",
    },
    {
      number: "05",
      title: "Smart Contract Development",
      description:
        "Having developed 100+ customized smart contracts for diverse projects, our blockchain developers can design and implement the best self-executing contracts for your Ethereum dApps in Solidity.",
    },
    {
      number: "06",
      title: "dApp Maintenance and Upgrade",
      description:
        "We offer end-to-end maintenance and upgrade for your dApp. Our team examines the rules related to business logic and the ecosystem to enhance the features and maintain the integrity and reliability of your decentralized applications deployed and running on the Ethereum blockchain.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Experience in Diverse Projects",
      description:
        "As experienced Ethereum developers, we have worked on diverse dApp projects for industries like gaming, finance, NFTs and more on the Ethereum and blockchain ecosystems popular across enterprises.",
    },
    {
      number: "02.",
      title: "Framework and SDKs Expertise",
      description:
        "Our Ethereum developers are versed with Ethereum dApp frameworks, programming languages, web3 tools and software development kits (SDKs) required to create scalable dApps with out-of-the-box features.",
    },
    {
      number: "03.",
      title: "One-stop Ethereum Services",
      description:
        "We are a 'one-stop' Ethereum dApp development company with 100+ full-stack developers. From simple wallet integration to building a vast private network, we offer end-to-end Ethereum development services.",
    },
  ];

  const faqs = [
    {
      question: "What is Ethereum dApp development?",
      answer:
        "Ethereum dApp development involves building decentralized applications on the Ethereum blockchain. These applications leverage Ethereum's anti-censorship, zero downtime, and immutable attributes to ensure high resilience and business continuity. dApps can span various industries including Web3, NFTs, gaming, metaverse, DeFi, and supply chain.",
    },
    {
      question: "What types of Ethereum dApps can you develop?",
      answer:
        "We develop various types of Ethereum dApps including NFT marketplaces, decentralized exchanges (DEX), banking and payment solutions, gaming applications, DeFi platforms, and supply chain solutions. Our experts adopt agile methodologies to design and develop scalable and user-friendly Ethereum dApps that are purpose-built for your business needs.",
    },
    {
      question: "How do you ensure the security of Ethereum dApps?",
      answer:
        "We ensure security through comprehensive smart contract audits, detailed analysis and testing to ensure that your smart contract codes are authentic and error-proof without bugs or security vulnerabilities before deployment on the mainnet. Our team conducts thorough security assessments and follows best practices throughout the development process.",
    },
    {
      question: "Can you port existing dApps to Ethereum?",
      answer:
        "Yes, we provide complete Ethereum dApp porting services. From writing new smart contracts to modifying existing contracts, we help you port your existing mobile or web-based dApp from a different blockchain to Ethereum, allowing you to revamp your business infrastructure.",
    },
    {
      question: "What programming languages and frameworks do you use for Ethereum dApp development?",
      answer:
        "Our Ethereum developers are versed with Ethereum dApp frameworks, programming languages like Solidity, web3 tools, and software development kits (SDKs) required to create scalable dApps. We have developed 100+ customized smart contracts for diverse projects using Solidity and other Ethereum development tools.",
    },
    {
      question: "Do you provide maintenance and upgrade services for Ethereum dApps?",
      answer:
        "Yes, we offer end-to-end maintenance and upgrade services for your dApp. Our team examines the rules related to business logic and the ecosystem to enhance the features and maintain the integrity and reliability of your decentralized applications deployed and running on the Ethereum blockchain.",
    },
    {
      question: "What industries have you worked with for Ethereum dApp development?",
      answer:
        "We have worked on diverse dApp projects for industries including gaming, finance, NFTs, Web3, metaverse, DeFi, and supply chain. Our experience spans various sectors, enabling us to deliver tailored Ethereum dApp solutions that meet industry-specific requirements.",
    },
    {
      question: "How long does it take to develop an Ethereum dApp?",
      answer:
        "The timeline for Ethereum dApp development varies based on complexity, features, and project requirements. Simple dApps may take 6-12 weeks, while complex applications with extensive features can take 3-6 months. We provide detailed timelines during the initial consultation based on your specific needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ethereum dApp Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build and launch customized Ethereum-powered dApps for industries spanning Web3, NFTs, gaming, metaverse, DeFi, supply chain, etc. Our blockchain developers power your dApps with Ethereum's anti-censorship, zero downtime and immutable attributes to ensure high resilience and business continuity.
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
                  alt="Ethereum dApp Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Ethereum dApp Development"
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
              Our End-to-end Ethereum dApp Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With extensive experience of working on hundreds of innovative Ethereum dApp projects, our Ethereum blockchain developers are ready to provide you with a full spectrum of Ethereum Web3 applications designed specifically to suit your enterprise's needs.
            </p>
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

      {/* Why Choose LeewayHertz Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">LeewayHertz</span> for Ethereum dApp
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
              Let&apos;s discuss how our Ethereum dApp development services can help
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

