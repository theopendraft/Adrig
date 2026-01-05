"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlockchainConsultingServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Strategic Consulting",
      description:
        "Our blockchain experts craft tailored strategies and provide practical solutions, aligned with your business model. From market research and feasibility assessments to project implementation, our end-to-end service ensures that every aspect of your blockchain initiative is carefully planned and executed. Whether you are exploring blockchain adoption or refining current solutions, our consulting boosts your strategic advantage in today's dynamic market.",
    },
    {
      number: "02",
      title: "dApp Development",
      description:
        "With deep expertise in blockchain technology and a steadfast focus on security, we create decentralized applications for diverse use cases across industries. We implement robust security measures and rigorous testing protocols to fortify your dapp and protect user data, and emphasize user-centric design to enhance the overall experience. Our commitment to cross-platform compatibility ensures seamless operation across different devices and operating systems, maximizing accessibility.",
    },
    {
      number: "03",
      title: "Custom Blockchain Development",
      description:
        "We create secure and scalable blockchain platforms that are custom-built to suit your business's individual requirements. Whether you prefer a public, private, or consortium blockchain model, we tailor the solution to align with your privacy and regulatory needs. Our team selects the most appropriate consensus mechanism to align with your objectives perfectly. Additionally, we develop robust smart contracts to automate key workflows and optimize operations.",
    },
    {
      number: "04",
      title: "Blockchain Audit",
      description:
        "We identify potential security gaps in your blockchain platform, smart contracts, and dApps through thorough code reviews, architecture evaluations, penetration testing, and vulnerability assessments. Our audits provide actionable insights and concrete steps for risk mitigation, fostering trust among users and stakeholders. This ensures that your blockchain ecosystem is robust, secure, and resilient against cyber threats, ultimately safeguarding your digital assets and reputation.",
    },
    {
      number: "05",
      title: "Blockchain Integration",
      description:
        "We offer a comprehensive blockchain integration service designed to empower businesses with the transformative capabilities of blockchain technology. Our expert team specializes in seamlessly incorporating blockchain technology into existing systems, applications, or processes to enhance their functionality, security, and transparency. From selecting the right blockchain platform to optimizing performance and scalability, we take care of the entire integration process.",
    },
    {
      number: "06",
      title: "Support and Maintenance",
      description:
        "Our dedicated team doesn't just stop at implementation; we are committed to providing continuous support and maintenance to ensure your blockchain solutions operate at their peak performance. Through thorough monitoring, regular updates, and swift issue resolution, we proactively safeguard your systems, keeping them secure and up-to-date. By minimizing downtime and maximizing value, we empower you to focus on what matters most: growing your business.",
    },
  ];

  const solutions = [
    { title: "NFT Marketplaces" },
    { title: "Decentralized Exchanges" },
    { title: "Tokens" },
    { title: "Blockchain Bridges" },
    { title: "Metaverse Spaces" },
    { title: "DAOs" },
  ];

  const process = [
    { title: "Discovery and Feasibility Analysis" },
    { title: "Strategy Development" },
    { title: "Design and Architecture" },
    { title: "Development" },
    { title: "Testing and Quality Assurance" },
    { title: "Deployment and Integration" },
    { title: "Maintenance and Support" },
    { title: "Optimization and Enhancement" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Customized Solutions",
      description:
        "Understanding that no two businesses are the same, we tailor our blockchain solutions to meet each client's specific needs and goals. This personalized approach ensures optimal outcomes for your blockchain projects, helping us deliver robust, scalable solutions perfectly aligned with your business objectives. From smart contracts to NFTs, DEX, tokens, dApps, and the metaverse, our decentralized solutions cater to diverse industry use cases.",
    },
    {
      number: "02.",
      title: "End-to-end Services",
      description:
        "We offer end-to-end services to help you unlock the full potential of blockchain technology and drive innovation and growth for your business. From strategic planning to solution implementation, our experienced team handles every step with precision and expertise. We ensure seamless development and maintenance of your blockchain solutions, delivering peak performance and ongoing support to keep you ahead in today's dynamic digital landscape.",
    },
    {
      number: "03.",
      title: "Speed, Security and Reliability",
      description:
        "Through thorough testing and rigorous quality assurance measures, we guarantee that our solutions meet the highest standards of performance and reliability. With a focus on speed, we enable our clients to quickly realize the benefits of blockchain technology, while our unwavering commitment to security ensures that their data and transactions remain protected at all times. Partner with us for blockchain solutions that will drive innovation and success for your business.",
    },
  ];

  const faqs = [
    {
      question: "What is blockchain consulting?",
      answer:
        "Blockchain consulting is a comprehensive service that offers expert guidance to businesses seeking to harness the potential of blockchain technology. It includes assessing the viability of blockchain adoption, creating strategic roadmaps, designing and implementing blockchain solutions, planning audits, and providing continuous support.",
    },
    {
      question: "What does a blockchain consultant do?",
      answer:
        "A blockchain consultant helps businesses identify areas where blockchain can improve operations, map out implementation plans, and craft tailored solutions to address specific requirements. They provide strategic guidance, technical expertise, and ongoing support to ensure successful blockchain adoption and implementation.",
    },
    {
      question: "Which blockchain platforms do you specialize in?",
      answer:
        "We specialize in various blockchain platforms including Ethereum, Hyperledger, Stellar, Solana, Cosmos, and Tezos. Our team has extensive experience working with these platforms, enabling us to select the most suitable blockchain platform for your specific use case and business requirements.",
    },
    {
      question: "What is the blockchain consulting process followed at LeewayHertz?",
      answer:
        "Our blockchain consulting process includes discovery and feasibility analysis, strategy development, design and architecture, development, testing and quality assurance, deployment and integration, maintenance and support, and optimization and enhancement. This comprehensive approach ensures successful blockchain implementation from start to finish.",
    },
    {
      question: "How do you approach blockchain development projects?",
      answer:
        "We begin by identifying areas where blockchain can improve your operations and map out an implementation plan. We then craft tailored solutions to address your specific requirements and provide ongoing support and maintenance post-implementation. This integrated approach ensures your organization has what it needs to grow and achieve lasting results.",
    },
    {
      question: "Can LeewayHertz customize blockchain development for specific industries?",
      answer:
        "Yes, absolutely. We customize blockchain solutions for various industries including finance, healthcare, supply chain, gaming, and more. Our team understands industry-specific requirements and challenges, enabling us to deliver tailored blockchain solutions that address unique business needs across different sectors.",
    },
    {
      question: "Is blockchain suitable for businesses of all sizes?",
      answer:
        "Yes, blockchain technology can benefit businesses of all sizes. Whether you're a startup exploring blockchain adoption or an enterprise refining current solutions, our consulting services are tailored to your specific needs and scale. We help businesses of all sizes leverage blockchain technology to improve operations and drive growth.",
    },
    {
      question: "Which is the right blockchain platform for my use case?",
      answer:
        "The right blockchain platform depends on your specific use case, requirements, and business objectives. Our blockchain experts assess your needs, evaluate different platforms, and recommend the most suitable solution. We consider factors such as scalability, security, consensus mechanisms, and regulatory compliance to ensure the best fit for your project.",
    },
    {
      question: "Why should I choose LeewayHertz for blockchain consulting and development?",
      answer:
        "We offer customized solutions, end-to-end services, and a focus on speed, security, and reliability. Our experienced team provides strategic guidance, technical expertise, and ongoing support to ensure successful blockchain adoption. We leverage the expertise and deep tech background of the best minds at Adrig to solve your hardest technology challenges.",
    },
    {
      question: "How do I get started with LeewayHertz for blockchain services consulting?",
      answer:
        "Getting started is straightforward. Contact us for an initial consultation where we'll assess your current operations, identify blockchain opportunities, and understand your business objectives. We'll then develop a tailored blockchain strategy and implementation plan, guiding you through each step of your blockchain journey.",
    },
    {
      question: "How can LeewayHertz help in ensuring the security of my blockchain solution?",
      answer:
        "We ensure security through comprehensive blockchain audits, thorough code reviews, architecture evaluations, penetration testing, and vulnerability assessments. Our security measures include robust smart contract development, rigorous testing protocols, and continuous monitoring to protect your digital assets and maintain the integrity of your blockchain ecosystem.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Blockchain Consulting <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Leverage the expertise and deep tech background of the best minds at Adrig to solve your hardest technology challenges and acquire the capabilities needed to excel in the blockchain space. We begin by identifying areas where blockchain can improve your operations and map out an implementation plan. We then craft tailored solutions to address your specific requirements and provide ongoing support and maintenance post-implementation. This integrated approach ensures your organization has what it needs to grow and achieve lasting results.
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
                  alt="Blockchain Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Blockchain Consulting"
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
              Our Blockchain Consulting Services
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

      {/* Blockchain Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain Solutions We Build
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We build comprehensive blockchain solutions including NFT marketplaces, DEXs, tokens, bridges, metaverse spaces, and DAOs tailored to diverse industry use cases.
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

      {/* Our Consulting Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blockchain Consulting Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach to blockchain consulting that ensures successful implementation from discovery to optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Content */}
            <div>
              {/* Process List */}
              <div className="grid grid-cols-1 gap-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Blockchain Consulting Process"
                  className="w-full h-full object-cover"
                />
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
              Consulting?
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
              Let&apos;s discuss how our blockchain consulting services can help
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

