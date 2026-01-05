"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubstrateDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Cross-Chain Bridges",
      description:
        "We build robust cross-chain bridges using the Substrate framework, which has XCMP (Cross-Chain Message Passing) to facilitate the unhindered exchange of assets and information across blockchains.",
    },
    {
      number: "02",
      title: "Sidechain Integration",
      description:
        "We can integrate an existing Substrate-powered relaychain or dApp to connect to other chains or Polkadot for improved interoperability.",
    },
    {
      number: "03",
      title: "Relaychain Development",
      description:
        "We understand how to build highly secure Substrate-based blockchains customized to suit a specific use case. With LeewayHertz, building a Substrate blockchain is safer and faster.",
    },
    {
      number: "04",
      title: "Smart Contract Development",
      description:
        "Using Parity's ink! We write smart contracts on substrate-based blockchain and execute business logic on a relay chain.",
    },
    {
      number: "05",
      title: "Parachain Development",
      description:
        "We build relay chains and parachain using Substrate framework and RUST. We understand each layer of the framework and how to use them for efficient blockchain development.",
    },
    {
      number: "06",
      title: "Pallets Development",
      description:
        "From writing a new Consensus algorithm to creating NFTs, we understand how to write new pallets in the Substrate framework using RUST. Our RUST developers have hands-on experience with creating Pallets and Relay Chains.",
    },
  ];

  const benefits = [
    { title: "Flexibility with WASM" },
    { title: "Popularity" },
    { title: "Customizable" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Extensive Expertise",
      description:
        "We have deep expertise in substrate-based development. Our profound technical knowledge and hands-on experience enable us to create future-ready blockchain solutions optimized for various use cases. We have built over 10 solutions, including blockchain, relay chains, PoCs, dapps solutions, relay chains and even Parachains on Substrate.",
    },
    {
      number: "02.",
      title: "Assured Quality",
      description:
        "We thoroughly check our Substrate projects for compatibility, performance and bugs. A series of tests are carried out on each product to make sure the final iteration is market ready.",
    },
    {
      number: "03.",
      title: "End-to-End Development",
      description:
        "From planning a project to designing and implementing it, we take care of every stage of the development process. Whatever your needs, whatever your demands, we have got you covered. Our full-stack RUST developers have experience with foundational RUST and its advanced features, including traits and macros combined with WASM and Cargo.",
    },
  ];

  const faqs = [
    {
      question: "What is Substrate development?",
      answer:
        "Substrate is a blockchain framework that enables developers to easily build future-proof blockchains in the fastest and most optimized way for any use case. Substrate development equips developers with open-source software built by Substrate's ecosystem, so developers don't need to start from scratch. For Substrate development, you can utilize the modular framework of Substrate, which is highly customizable and flexible. As Substrate's code is field-tested and academically researched, it helps developers build blockchains fast and efficiently.",
    },
    {
      question: "Why opt for Substrate development?",
      answer:
        "Substrate development offers several advantages including flexibility with WASM, allowing changes to blockchain logic even on live networks. It's a popular open-source framework used by major blockchain networks like Polkadot. The framework is highly customizable with data type flexibility and supports system libraries, making it ideal for building future-proof blockchains tailored to specific use cases.",
    },
    {
      question: "How does Substrate work?",
      answer:
        "Substrate works as a modular blockchain framework written in Rust that provides developers with pre-built components and libraries. It uses WebAssembly (WASM) for runtime execution, allowing for on-chain upgrades without hard forks. The framework includes consensus mechanisms, networking, and state management, enabling developers to build custom blockchains efficiently by combining and customizing these modules.",
    },
    {
      question: "What are the core concepts of Substrate development?",
      answer:
        "Core concepts of Substrate development include pallets (modular components), runtime (business logic), consensus mechanisms, state transitions, and the ability to build relay chains and parachains. Substrate uses Rust programming language and supports smart contract development through Parity's ink! framework. The framework emphasizes modularity, interoperability, and upgradability.",
    },
    {
      question: "Why choose ADRIG for Substrate development services?",
      answer:
        "We have built over 10 solutions, including blockchain, relay chains, PoCs, dapps solutions, relay chains and even Parachains on Substrate. We understand where the substrate framework works and where it doesn't. Our full-stack RUST developers have experience with foundational RUST and its advanced features, including traits and macros combined with WASM and Cargo. We provide extensive expertise, assured quality, and end-to-end development services.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Substrate Development <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We leverage the Substrate SDK framework's flexibility, interoperability and modularity, which is written using Rust, to build highly customized, future-proof blockchains and dApps.
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
                  alt="Substrate Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Substrate Development"
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
              Our Substrate Development Services
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

      {/* Why Use Substrate Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Substrate for Development?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Substrate offers flexibility, popularity, and customizability, making it an ideal framework for building future-proof blockchains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Substrate Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Benefits List */}
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      {benefit.title === "Flexibility with WASM" && (
                        <p className="text-gray-700 leading-relaxed">
                          Substrate is highly flexible for constructing a new blockchain and building new business logic. Using WASM allows changes to the blockchain logic for improvement or upgradation. Even on the LIVE network.
                        </p>
                      )}
                      {benefit.title === "Popularity" && (
                        <p className="text-gray-700 leading-relaxed">
                          It is an open-source framework upon which some of today's biggest blockchain networks, including Polkadot, have been built. We believe Substrate is one of the best blockchain frameworks built for future-proof changes in blockchain development.
                        </p>
                      )}
                      {benefit.title === "Customizable" && (
                        <p className="text-gray-700 leading-relaxed">
                          With Data type flexibility, the framework supports and frames system libraries, allowing high customization for building blockchains.
                        </p>
                      )}
                    </div>
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
              Why Choose <span className="text-primary">ADRIG</span>?
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
              Let&apos;s discuss how our Substrate development services can help
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

