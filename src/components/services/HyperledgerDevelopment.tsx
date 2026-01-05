"use client";

import { useState } from "react";
import Link from "next/link";

export default function HyperledgerDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Hyperledger consulting",
      description:
        "We assess your business use case and examine the blockchain potential for your specific use cases. Our Hyperledger consulting team identifies which Hyperledger project will fit your business solution and what benefits it will bring to your organization and customers.",
    },
    {
      number: "02",
      title: "User experience and technical design",
      description:
        "As a part of UI/UX design services, we deliver high fidelity designs, ensuring a seamless user experience. Before a workflow is designed, we provide you with a technical design that includes a system blueprint that defines technical components, user stories and database design.",
    },
    {
      number: "03",
      title: "Hyperledger application development",
      description:
        "Our team of Hyperledger blockchain developers builds dApps for multiple industries using Hyperledger Frameworks. With the agile software development methodology, clients get different versions of apps before it is deployed to the main network.",
    },
    {
      number: "04",
      title: "Smart Contracts and chaincode development",
      description:
        "Smart Contracts are referred to as chaincodes on the Hyperledger blockchain platform. Chaincodes are required to develop asset definitions, business contracts and decentralized applications on Hyperledger Fabric. Our Hyperledger developers write chaincodes that ensure robustness and complete security.",
    },
    {
      number: "05",
      title: "Maintenance and support",
      description:
        "Our Hyperledger application development services are not only focused on developing and deploying an enterprise blockchain app on the Hyperledger, but we also provide maintenance and support post-development. Our maintenance services aim to minimize downtime and ensure efficient performance.",
    },
    {
      number: "06",
      title: "Migration and upgrades",
      description:
        "Get assistance for migrating or integrating your existing solution to the Hyperledger Framework. Also, we can incorporate any changes if any alteration is made to the Hyperledger-based blockchain app.",
    },
  ];

  const industries = [
    {
      title: "Supply Chain",
      description:
        "With Hyperledger blockchain projects designed for permissioned networks, the assets in the supply chain can be tracked easily from their origin to the destination. The transparency offered by the Hyperledger blockchain platform establishes the authenticity of the transaction, lowers the risks of thefts and enhances the recall process.",
    },
    {
      title: "Identity Management",
      description:
        "Hyperledger Indy, one of the Hyperledger Projects, is designed to overcome the problems with centralized identity by making it decentralized. An identity built on Hyperledger Indy is based on zero-knowledge proofs, which avoid unwanted identity attribute disclosure.",
    },
    {
      title: "Healthcare",
      description:
        "Hyperledger blockchain platforms are ideal for building healthcare applications that only allow authorized users to access health services. Patients can own their health records by enabling specific users to access their immutable records stored on the distributed ledger.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Certified Hyperledger Developers",
      description:
        "We are a team of certified Hyperledger developers building fast and secure blockchain apps using frameworks hosted by Hyperledger. We have worked on hybrid (off-chain and on-chain) projects with Hyperledger Fabric and Sawtooth framework.",
    },
    {
      number: "02.",
      title: "Proven Track Record",
      description:
        "Facilitating storage on IPFS and CDN and hosting infrastructure on AWS and IBM Bluemix, we have developed over a dozen blockchain apps for enterprises and startups. Our extensive experience enables us to deliver reliable Hyperledger solutions.",
    },
    {
      number: "03.",
      title: "End-to-End Services",
      description:
        "From Hyperledger consulting and technical design to application development, smart contract development, and ongoing maintenance and support, we provide comprehensive Hyperledger blockchain development services tailored to your business needs.",
    },
  ];

  const faqs = [
    {
      question: "What is Hyperledger Framework?",
      answer:
        "The Hyperledger Official Website defines Hyperledger as: 'Hyperledger is an open-source collaborative effort created to advance cross-industry blockchain technologies.' Though Linux Foundation has hosted the Hyperledger Framework, the Hyperledger project collaborates with industry leaders in finance, IoT, banking, manufacturing, and technology.",
    },
    {
      question: "Is Hyperledger Private Blockchain?",
      answer:
        "Yes, Hyperledger is designed for private, permissioned blockchain networks. Unlike public blockchains, Hyperledger allows organizations to control who can participate in the network, making it ideal for enterprise applications where privacy, security, and regulatory compliance are important. Hyperledger frameworks like Fabric and Sawtooth support permissioned networks.",
    },
    {
      question: "How to find a Hyperledger Blockchain Development Company?",
      answer:
        "When looking for a Hyperledger blockchain development company, consider factors such as: certified Hyperledger developers, proven track record with enterprise blockchain projects, experience with Hyperledger frameworks (Fabric, Sawtooth, Indy), comprehensive services from consulting to maintenance, and industry-specific expertise. Look for companies that have successfully delivered Hyperledger solutions for businesses similar to yours.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hyperledger Blockchain Development <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Develop and deploy cross-industry Hyperledger blockchain applications with the expert development and orchestration services.
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
                  alt="Hyperledger Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Hyperledger Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise in Hyperledger Blockchain Development
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are a team of certified Hyperledger developers building fast and secure blockchain apps using frameworks hosted by Hyperledger. We have worked on hybrid (off-chain and on-chain) projects with Hyperledger Fabric and Sawtooth framework. Facilitating storage on IPFS and CDN and hosting infrastructure on AWS and IBM Bluemix, we have developed over a dozen blockchain apps for enterprises and startups.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hyperledger Blockchain Development Services
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

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries Using Hyperledger Blockchain Platforms
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hyperledger blockchain platforms are ideal for building enterprise applications across various industries with permissioned networks and enhanced security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Hyperledger Industries"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Industries List */}
              <div className="grid grid-cols-1 gap-6">
                {industries.map((industry, index) => (
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
                        {industry.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {industry.description}
                      </p>
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
              Why Choose <span className="text-primary">ADRIG</span> for Hyperledger
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
              Let&apos;s discuss how our Hyperledger development services can help
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

