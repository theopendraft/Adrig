"use client";

import Link from "next/link";
import Image from "next/image";

export default function DigitalTransformation() {
  const capabilities = [
    {
      number: "01",
      title: "Digital Transformation Consulting",
      description:
        "Our Digital Transformation Consulting Services help you create a comprehensive digital strategy to integrate next-generation emerging technologies with existing business ecosystem and infrastructure.",
    },
    {
      number: "02",
      title: "Business Model Transformation: From Physical to Digital",
      description:
        "We help you rebuild your legacy system, outline the plan and implement emerging technologies for further business transformation from physical to digital business.",
    },
    {
      number: "03",
      title: "Customer Experience Transformation",
      description:
        "By leveraging socially-informed understanding, analytics-based knowledge and cross-channel coherence, we deliver customer insights and help you build and enhance a customer-friendly digital solution.",
    },
    {
      number: "04",
      title: "Intelligent Automation",
      description:
        "We implement AI to deliver intelligent automation and digital transformation. Our team can help you automate processes and experiences and unlock the power of intelligent automation with extensive AI expertise.",
    },
    {
      number: "05",
      title: "Digital Risk Management",
      description:
        "We help you create and build digital risk strategies and develop various control measures designed according to the leading industry standards and practices",
    },
    {
      number: "06",
      title: "Security Transformation",
      description:
        "We understand that security is a significant part of business and technology transformation. We create the right security strategy for your business to stay ahead of changing techniques and accelerate new technology trends.",
    },
  ];

  const technologies = [
    { title: "Artificial Intelligence" },
    { title: "Internet of Things" },
    { title: "Blockchain" },
    { title: "Enterprise Mobility" },
    { title: "Robotic Process Automation" },
    { title: "Augmented Reality" },
  ];

  const approachSteps = [
    {
      number: "01.",
      title: "Research and Discovery",
      description:
        "We conduct in-depth research and discovery sessions to understand your business and identify key technology shifts, while analyzing legacy systems to define clear transformation requirements.",
    },
    {
      number: "02.",
      title: "Design and Prototyping",
      description:
        "After validating the project idea, we create high- and low-level designs along with a technical blueprint to define the solution's look and feel, supported by a Marvel prototype to demonstrate core functionality",
    },
    {
      number: "03.",
      title: "Support and Maintenance",
      description:
        "We provide post-launch support with continuous maintenance, enhancements, and new feature additions, ensuring stable performance and smooth scalability as user demand grows.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Digital Transformation <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We bring business, people and technology together by helping our clients create exceptional experiences using emerging technologies.
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
                  src="/Website/Service/DigitalTransform/digital1.jpg"
                  alt="Digital Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/DigitalTransform/digital2.jpg"
                  alt="Digital Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Digital Transformation Capabilities
            </h2>
          </div>

          {/* Capabilities Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {capability.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leveraging Emerging Technologies for Digital Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-300">
                <Image
                  src="/Website/Service/Softdev/SOFT3.jpg"
                  alt="Digital Transformation"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Technologies List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {tech.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Approach to Providing Digital Transformation Services
            </h2>
          </div>

          {/* Approach Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {step.number} {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {step.description}
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our digital transformation solutions can help
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
