"use client";

import { useState } from "react";
import Link from "next/link";

export default function CosmosBlockchainDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Cosmos Blockchain Consulting",
      description:
        "We collaborate closely with our clients to assess the applicability of Cosmos for their specific business needs and enhance organizational functionality. We offer strategic guidance on architecture design, consensus mechanisms, and smart contract development, enabling effective navigation of decentralized ecosystems. Through our tailored guidance, clients can confidently leverage the capabilities of the Cosmos blockchain to drive innovation and efficiency.",
    },
    {
      number: "02",
      title: "dApp development",
      description:
        "Leveraging Cosmos's comprehensive development toolkit, we craft decentralized applications that excel in speed, interoperability, security, and scalability. By combining our profound understanding of the Cosmos blockchain with extensive development experience, we ensure that the dApps we build deliver unparalleled performance and functionality, empowering you to achieve your goals in the decentralized landscape with confidence and efficiency.",
    },
    {
      number: "03",
      title: "Wallet Development",
      description:
        "We craft versatile crypto wallets that integrate with multiple blockchain ecosystems, empowering users to effortlessly manage their digital assets, check balances, and trace transaction history. Our wallets prioritize support for core tokens like ATOM, which are essential for navigating the Cosmos ecosystem. The wallets are also compatible with non-Cosmos tokens, such as ERC-20, and tokens built on other blockchains created with the Cosmos SDK.",
    },
    {
      number: "04",
      title: "Smart Contract Development",
      description:
        "Whether facilitating DeFi transactions or enabling token swaps, our smart contracts empower organizations to achieve their goals. Leveraging Neutron and CosmWasm, we build secure and scalable smart contracts that can interact with various Cosmos blockchains. Built on secure Rust libraries and compiled with efficient WASM technology, these robust smart contracts help users tap into the full potential of the Cosmos ecosystem.",
    },
    {
      number: "05",
      title: "NFT Marketplace Development",
      description:
        "We harness the power of Cosmos tools, such as the Cosmos SDK and the IBC protocol, to develop secure and interoperable NFT marketplaces. These marketplaces are expertly crafted to facilitate seamless NFT minting, trading, and interchain asset transfer, ensuring a smooth and efficient user experience. We also implement robust smart contract functionalities within these marketplaces, ensuring transparency and reliability in NFT transactions.",
    },
    {
      number: "06",
      title: "DeFi Applications Development",
      description:
        "Whether it's automated market makers, decentralized exchanges, or lending protocols, our DeFi solutions are designed to be IBC-compliant, ensuring seamless interoperability between diverse blockchain networks. Leveraging the robustness of Tendermint consensus and the interoperability of IBC, our platforms offer users secure and efficient financial experiences, empowering them to transact, trade, and participate in decentralized finance with ease.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise in Cosmos Ecosystem",
      description:
        "With Cosmos SDK's unmatched security, composability, and modularity, we build robust interchain networks, multi-asset dApps, application-specific blockchains and other decentralized solutions. Our deep understanding of Cosmos enables us to deliver innovative solutions tailored to your business needs.",
    },
    {
      number: "02.",
      title: "Interoperability Focus",
      description:
        "Through seamless communication and data exchange facilitated by the Interchain Communication Protocol (IBC), our solutions seamlessly interact with each other and exchange information across the Cosmos blockchain ecosystem. This interoperability ensures your solutions can connect with other Cosmos-based blockchains.",
    },
    {
      number: "03.",
      title: "Comprehensive Development Services",
      description:
        "We offer end-to-end Cosmos development services from consulting and architecture design to dApp development, smart contract development, and ongoing support. Our comprehensive approach ensures you have a reliable partner throughout your Cosmos blockchain journey.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of using Cosmos for blockchain development?",
      answer:
        "Cosmos offers several advantages, including: Modularity and composability: Cosmos enables developers to build custom blockchains tailored to specific needs using pre-built modules. Interoperability: IBC protocol allows seamless communication and data exchange between different Cosmos-based blockchains. Scalability: Scalability is a key feature of Cosmos, allowing businesses to handle a growing user base with Cosmos' efficient architecture. Security: Security is ensured through the Tendermint Byzantine Fault Tolerance (BFT) consensus engine, guaranteeing secure and reliable transactions.",
    },
    {
      question: "Can you integrate Cosmos into my existing applications?",
      answer:
        "Yes, we can integrate Cosmos blockchain capabilities into your existing applications. Our team specializes in seamless integration, ensuring that Cosmos functionality enhances your current systems without disrupting operations. We work closely with you to understand your existing architecture and design integration solutions that align with your business objectives.",
    },
    {
      question: "How do you ensure the security of Cosmos blockchain solutions?",
      answer:
        "We ensure security through multiple layers including the Tendermint Byzantine Fault Tolerance (BFT) consensus engine, secure smart contract development using Rust libraries and WASM technology, comprehensive security audits, and best practices throughout the development process. Our smart contracts built with Neutron and CosmWasm undergo rigorous testing to ensure they are secure and reliable.",
    },
    {
      question: "Do you offer support and maintenance services for the Cosmos blockchain solutions you build?",
      answer:
        "Yes, we provide comprehensive support and maintenance services for all Cosmos blockchain solutions we build. This includes monitoring, updates, bug fixes, performance optimization, and ongoing technical support to ensure your Cosmos-based solutions continue to operate efficiently and securely.",
    },
    {
      question: "What are some of the real-world applications of Cosmos blockchain technology?",
      answer:
        "Cosmos blockchain technology has various real-world applications including custom blockchains, DeFi platforms, NFT marketplaces, interchain networks, multi-asset dApps, and application-specific blockchains. Cosmos offers a rich toolkit for building innovative solutions tailored to the ever-evolving needs of businesses across industries.",
    },
    {
      question: "Can you help me migrate my existing blockchain project to Cosmos?",
      answer:
        "Yes, we can help you migrate your existing blockchain project to Cosmos. Our team has expertise in blockchain migration and can assist with porting smart contracts, dApps, and other blockchain components to the Cosmos ecosystem. We ensure a smooth transition while maintaining functionality and improving interoperability through Cosmos's IBC protocol.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Cosmos Blockchain Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              With Cosmos SDK's unmatched security, composability, and modularity, we build robust interchain networks, multi-asset dApps, application-specific blockchains and other decentralized solutions. Cosmos offers a rich toolkit for building innovative solutions tailored to the ever-evolving needs of businesses, whether it's custom blockchains, DeFi platforms, or NFT marketplaces. Through seamless communication and data exchange facilitated by the Interchain Communication Protocol (IBC), our solutions seamlessly interact with each other and exchange information across the Cosmos blockchain ecosystem.
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
                  alt="Cosmos Blockchain Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Cosmos Blockchain Development"
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
              Our Cosmos Development Services
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
              Why Choose <span className="text-primary">ADRIG</span> for Cosmos Blockchain
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
              Let&apos;s discuss how our Cosmos blockchain development services can help
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

