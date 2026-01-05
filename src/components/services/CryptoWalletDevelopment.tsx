"use client";

import { useState } from "react";
import Link from "next/link";

export default function CryptoWalletDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      number: "01",
      title: "Business & technical analysis",
      description:
        "We start by reviewing the technical and business perspectives of your blockchain projects and realize the purpose and specification of the wallet you need.",
    },
    {
      number: "02",
      title: "Architecture design",
      description:
        "During the architecture design of your wallet app, we create the blueprint to define the interactions between frontend, backend, transaction, data storage and retrieval.",
    },
    {
      number: "03",
      title: "Fidelity design",
      description:
        "Next, we create a low-fidelity prototype to specify the wallet's look through a rough outline of the UI/UX elements. On your validation, we create the high-fidelity design",
    },
    {
      number: "04",
      title: "Smart contract development",
      description:
        "To add functionalities to the wallet, such as bundle transactions, account recovery, transfer limits, and more, we develop smart contracts depending on your project specifications.",
    },
    {
      number: "05",
      title: "Frontend-backend development",
      description:
        "Our blockchain experts use programming languages like JavaScript, TypeScript, Go, Solidity, Node.js, Frameworks like Angular, React, React-Native, Ionic for frontend and backend development.",
    },
    {
      number: "06",
      title: "Deployment",
      description:
        "After thorough testing of any bugs or omissions, we complete the final steps of wallet development and deploy it on the blockchain, making it available to the users.",
    },
  ];

  const offerings = [
    {
      title: "Mobile Wallet",
      description:
        "Accessible over mobile devices, our crypto mobile wallets are compatible with iOS and Android platforms. The interface of these wallets is designed to promote usage-convenience to the on-the-go users while ensuring that they have easy access to all the wallet functionalities.",
    },
    {
      title: "Desktop Wallet",
      description:
        "Our desktop crypto wallets are ready-to-install applications compatible with any regular Windows, Linux and Mac operating systems like desktops and laptops. With desktop wallets, users can store their private keys on their systems.",
    },
    {
      title: "Web Wallet as browser extensions",
      description:
        "Our web wallets are stored as browser extensions. Users can access their web wallets from any computer through web interfaces that unlock with authenticated log-in. Log-insecurity and encryption protect the users' private keys.",
    },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Enhanced Security",
      description:
        "We build non-custodial crypto wallets that give users total control of their crypto assets. Our wallets feature advanced security measures including keyless wallets with facial biometrics, encryption, and secure key management.",
    },
    {
      number: "02.",
      title: "Multi-Platform Support",
      description:
        "We develop crypto wallets as Desktop Apps, Mobile Apps (iOS and Android), and Web Browser Extensions, ensuring your users can access their wallets across all platforms and devices.",
    },
    {
      number: "03.",
      title: "Advanced Features",
      description:
        "Our crypto wallets come with specialized features like multi-coin support, QR scanner, cross-platform compatibility, automatic conversion rates, bundle transactions, account recovery, and transfer limits to enhance user experience.",
    },
  ];

  const faqs = [
    {
      question: "What is a crypto wallet?",
      answer:
        "A crypto wallet is a digital tool that allows users to store, send, and receive cryptocurrencies. It consists of a public key (wallet address) and a private key (used to sign transactions). We build decentralized, non-custodial crypto wallets that give users full control over their private keys and crypto assets, ensuring enhanced security and user autonomy.",
    },
    {
      question: "What types of crypto wallets do you develop?",
      answer:
        "We develop three types of crypto wallets: Mobile Wallets compatible with iOS and Android platforms, Desktop Wallets for Windows, Linux, and Mac operating systems, and Web Wallets as browser extensions that can be accessed from any computer through authenticated web interfaces.",
    },
    {
      question: "What features do your crypto wallets include?",
      answer:
        "Our crypto wallets include advanced features such as keyless wallets with facial biometrics, multi-coin support, QR scanner for easy transactions, cross-platform compatibility, automatic conversion rates, bundle transactions, account recovery options, transfer limits, and secure key management. We customize features based on your project specifications.",
    },
    {
      question: "How secure are your crypto wallets?",
      answer:
        "Our crypto wallets are built with security as a top priority. We develop non-custodial wallets where users have full control over their private keys. Security features include encryption, secure key storage, biometric authentication, login security, and protection against vulnerabilities. We follow best practices in blockchain security throughout the development process.",
    },
    {
      question: "What blockchain platforms do you support for wallet development?",
      answer:
        "We build crypto wallets for various blockchain projects, DEXs, DeFi trading platforms, and investment platforms. Our wallets can support multiple blockchain networks and cryptocurrencies, depending on your project requirements. We work with popular blockchain platforms and can integrate support for multiple chains.",
    },
    {
      question: "How long does it take to develop a crypto wallet?",
      answer:
        "The development timeline for a crypto wallet depends on various factors including the complexity of features, platform (mobile, desktop, or web), number of supported cryptocurrencies, and customization requirements. Typically, a basic wallet can take several weeks to months, while more complex wallets with advanced features may take longer. We provide detailed timelines after analyzing your specific requirements.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Crypto Wallet Development <span className="text-blue-600">Solution</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We build decentralized crypto wallets for Blockchain projects, DEXs, Defi Trading and Investment platforms. For end-users convenience, we launch wallets as Desktop Apps, Mobile Apps and Web Browser Extensions.
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
                  alt="Crypto Wallet Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Crypto Wallet Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Crypto Wallet Development Process
            </h2>
          </div>

          {/* Process Steps Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decentralized Crypto Wallet Development Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Decentralized Crypto Wallet Development
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Building the gateway to fast, secure and seamless crypto payment, loan and trading experiences. We help you launch non-custodial crypto wallets and expand your Defi portfolio to a wider base of customers by offering them enhanced security, faster transactions and total control of their crypto assets. We customise, deploy and launch your crypto wallet with specialized features like keyless wallets with facial biometrics, multi-coin support, QR scanner, cross-platform compatibility, automatic conversion rates and much more.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span> for Crypto Wallet Development?
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
              Let&apos;s discuss how our crypto wallet development services can help
              you build secure, user-friendly wallets for your blockchain project.
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

