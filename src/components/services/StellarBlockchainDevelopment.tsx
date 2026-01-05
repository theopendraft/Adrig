"use client";

import { useState } from "react";
import Link from "next/link";

export default function StellarBlockchainDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Stellar Consulting",
      description:
        "Our experienced consultants offer expert guidance on the latest Stellar developments, including Stellar Protocol 20 and Soroban smart contracts, for seamless project development. We also provide assistance in navigating Stellar's comprehensive development tools, ensuring a compliant and future-proof solution from concept to implementation.",
    },
    {
      number: "02",
      title: "Stellar dApp Development",
      description:
        "We leverage Stellar SDKs, Horizon API and other Stellar development tools to build decentralized applications on the Stellar network. Our expertise in SEPs like SEP-0007 and SEP-0024 enables us to seamlessly develop highly secure and interoperable dApps suited for diverse use cases across industries.",
    },
    {
      number: "03",
      title: "Stellar Token Development",
      description:
        "By transforming both real-world and virtual assets like fiat currencies and loyalty points into digital tokens, we ensure their seamless integration with the Stellar network for faster transactions. We ensure that our tokenization process aligns with SEP-0008 standards for regulated assets to ensure the tokens' security and compliance.",
    },
    {
      number: "04",
      title: "Stellar Wallet Development",
      description:
        "We build secure Stellar wallets that can store any digital currency. Our developers leverage SEPs like SEP-24 and SEP-31 and the Stellar Wallet SDK to integrate fast on-and-off ramping functionalities into your wallet application. This empowers users with global payments and access to a variety of Stellar assets.",
    },
    {
      number: "05",
      title: "Stellar Smart Contract Development",
      description:
        "We leverage Soroban, enabled by Protocol 20, to build highly sophisticated and secure smart contracts for a wide range of use cases, from tokenized securities to escrow services and DeFi applications. Our developers are proficient in Rust and WASM-supported languages, ensuring a seamless development process.",
    },
    {
      number: "06",
      title: "Stellar Maintenance and Upgrade",
      description:
        "Ensure seamless operation of your Stellar applications with our expert maintenance and upgrade services. We proactively monitor network updates and protocol upgrades to keep the deployed solutions up-to-date and running smoothly. Our team efficiently implements necessary changes, minimizing downtime and maximizing the performance of your Stellar solutions.",
    },
  ];

  const solutions = [
    {
      title: "Cross-border Payments",
      description:
        "Our Stellar blockchain solution for cross-border payments ensures frictionless and fast transactions with reduced turnaround time.",
    },
    {
      title: "Asset Management",
      description:
        "Using our Stellar-based asset management solution, you can transfer, exchange and track your assets in real time, ensuring there is no scope for data manipulation.",
    },
    {
      title: "Remittances",
      description:
        "Our Stellar remittance solution offers quick and traceable transactions by directly connecting to licensed fiat acceptance and distribution partners called Anchors.",
    },
    {
      title: "Global Trade",
      description:
        "Smart contracts built by our Stellar developers can ensure speedy and trustworthy global trade, facilitating streamlined shipping of goods and assets with automated settlement.",
    },
    {
      title: "Payment and Money",
      description:
        "Utilizing our Stellar blockchain payment solutions, you can conduct frictionless, peer-to-peer transactions worldwide, ensuring higher security and transparency",
    },
    {
      title: "Asset-backed Token",
      description:
        "Leverage our Stellar blockchain development solutions to implement asset-backed tokens that can be stored safely on the Stellar blockchain.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Extensive Experience",
      description:
        "Having worked on 50+ blockchain projects, we understand the Stellar blockchain and ensure that you get the best Stellar blockchain development services for your business.",
    },
    {
      number: "02.",
      title: "Agile Approach",
      description:
        "Our team of experts follows the agile methodology, which allows them to respond instantly to even the slightest changes. We are open to reconsidering our work strategy to meet any new demand.",
    },
    {
      number: "03.",
      title: "An Expert in-house Development Team",
      description:
        "We have a strong in-house team of Stellar blockchain developers with deep skills and experience to accomplish complex blockchain projects with the latest technologies and tools.",
    },
  ];

  const faqs = [
    {
      question: "What makes Stellar the ideal choice for my project?",
      answer:
        "Stellar presents several advantages for those aiming to build applications and solutions using the platform: Fast and low-cost transactions: Enables quick and inexpensive transactions, ideal for various financial use cases. This is particularly useful for cross-border payments, where fees can be high with traditional methods. Scalability: Designed to manage a high volume of transactions efficiently. Security: Built with robust security features to safeguard user assets and data. Decentralization: Offers a decentralized network with no single point of failure. Rich development toolkit: Provides a comprehensive set of tools and resources for developers, such as Stellar SDKs, Horizon API, and Stellar Laboratory, simplifying development and integration. Interoperability: Supports SEPs, which define standardized ways for different services to interact seamlessly on the network. This allows for easier integration with existing financial infrastructure.",
    },
    {
      question: "How are your Stellar blockchain development services beneficial for my business?",
      answer:
        "Our Stellar blockchain development services offer numerous benefits including fast and low-cost transactions, scalability for high-volume operations, enhanced security, seamless cross-border payments, asset tokenization capabilities, and interoperability with existing financial infrastructure. We leverage Stellar's comprehensive toolkit including Horizon API, Stellar Wallet SDK, and Soroban to build feature-rich solutions that can help your business reduce transaction costs, improve efficiency, and expand globally.",
    },
    {
      question: "Does adrig use Stellar Ecosystem Proposals (SEPs) in their development process?",
      answer:
        "Yes, we extensively use Stellar Ecosystem Proposals (SEPs) in our development process. We leverage various SEPs such as SEP-0007, SEP-0024, SEP-0031, and SEP-0008 to ensure seamless integration with the Stellar ecosystem. SEPs define standardized ways for different services to interact on the Stellar network, enabling us to build interoperable solutions that can easily connect with other Stellar-based services and financial infrastructure.",
    },
    {
      question: "How do you build apps on the Stellar blockchain?",
      answer:
        "We build apps on the Stellar blockchain using a comprehensive set of tools and technologies. Our development process involves leveraging Stellar SDKs, Horizon API for network interaction, Stellar Wallet SDK for wallet integration, and Soroban for smart contract development. We use SEPs to ensure interoperability and compliance. Our developers are proficient in Rust and WASM-supported languages for smart contract development, and we follow agile methodologies to ensure rapid development and deployment of secure, scalable Stellar applications.",
    },
    {
      question: "Can I create my own dedicated team for Stellar blockchain development?",
      answer:
        "Yes, we can help you create a dedicated team for Stellar blockchain development. Our in-house team consists of experienced Stellar blockchain developers with deep expertise in Stellar SDKs, Horizon API, Soroban smart contracts, SEPs, and related technologies. We offer team extension services where our developers work as part of your team, or we can build a complete dedicated team for your Stellar project, ensuring you have the right expertise to accomplish complex blockchain projects.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stellar Blockchain Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We help you tap into the unmatched speed and scalability of Stellar with our comprehensive Stellar blockchain development services. We leverage various Stellar offerings, like Horizon API, Stellar Wallet SDK and Soroban, to build feature-rich decentralized applications, smart contracts and solutions for diverse needs. We seamlessly connect your solutions with the broader Stellar ecosystem using the relevant Stellar Ecosystem Proposals (SEPs), ensuring frictionless cross-border transactions and efficient digital asset trading.
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
                  alt="Stellar Blockchain Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Stellar Blockchain Development"
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
              Our Stellar Blockchain Development Services
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

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Stellar Blockchain Solutions
            </h2>
          </div>

          {/* Solutions Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LeewayHertz Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">LeewayHertz</span> for Stellar Blockchain Development Services?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
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
      <section className="py-20 md:py-32 bg-gray-100">
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
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 "
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
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our Stellar blockchain development services can help
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

