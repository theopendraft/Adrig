"use client";

import Link from "next/link";
import Image from "next/image";

export default function UIDesignServices() {
  const services = [
    {
      number: "01",
      title: "High-fidelity Prototype",
      description:
        "We create a prototype to demonstrate the behavior of the application and show how it would work in reality. We design fully-interactive prototypes to give you an idea of the workflow of your project.",
    },
    {
      number: "02",
      title: "Wireframes",
      description:
        "We design wireframes to provide you an outline of a mobile or web app by demonstrating content, structure and functionality that will exist on your app's and software's pages.",
    },
    {
      number: "03",
      title: "Mobile and Web User Interface Design",
      description:
        "We deliver our best efforts to ingeniously convert your ideas and thoughts into a clear and fully functional design. We design user interfaces that conform to what the user requires and understands.",
    },
    {
      number: "04",
      title: "Cross-Platform Compatibility",
      description:
        "Focusing on the core principles of UI design and functionality implementation, we design and deliver responsive and cross-platform compatible designs to ensure that it works across different platforms.",
    },
    {
      number: "05",
      title: "Technical Design",
      description:
        "We create detailed technical designs to clearly define the application's architecture and workflow. This includes selecting the technology stack, third-party integrations, and service and API interactions.",
    },
    {
      number: "06",
      title: "Software Redesign",
      description:
        "We redesign existing websites and applications to enhance their visual appeal and professionalism. By evaluating your product and user needs, we create engaging and modern experiences.",
    },
  ];

  const approachSteps = [
    "Market Research & Analysis",
    "Concept Presentation",
    "UI/UX Wireframes",
    "Fully Functional UX/UI",
    "Prototype Testing",
    "Front-end Development",
    "UI Testing Process",
  ];

  const reasons = [
    {
      number: "01.",
      title: "Wide-ranging Expertise",
      description:
        "Our design team has created various types of apps and software for a wide range of industries, including healthcare, retail, finance, entertainment, insurance and many more.",
    },
    {
      number: "02.",
      title: "Transparent, Communicative and Collaborative",
      description:
        "We provide complete project visibility and multiple open lines of communication from the day project is initiated. We organize weekly calls with clients and update them on the project's status from time to time.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              UI/UX Design <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              We are specialized in creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined projects which strive for better results.
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
                  src="/Website/Service/UIDesign/uidesign1.avif"
                  alt="UI/UX Design Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/UIDesign/uidesign2.jpg"
                  alt="UI/UX Design Services"
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
              Our UI/UX Design Services
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

      {/* Our Approach Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our approach to providing UI/UX Design Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A structured, user-focused design approach that aligns business goals with user needs.
              <br />
              We combine research, strategy, and design to deliver intuitive digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/UIDesign/uidesign3.jpg"
                  alt="UI/UX Design Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Approach Steps List */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {approachSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Services Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              What makes our UI/UX Design Services Astounding?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

                {/* Button - only show on first card (index 0) */}
                {index === 0 && (
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
              Let&apos;s discuss how our UI/UX design services can help
              your business create engaging user experiences and drive growth.
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
