import React from "react";

export default function Innovation() {
  return (
    <section id="innovation" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Top Section - Heading and Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Side - Text and Button */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Crafting Tomorrow&apos;s Innovation Solution
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;re consistently pushing the boundaries of innovation to
              create groundbreaking solutions that effectively meet today&apos;s
              challenges.
            </p>
            <button className="btn-primary px-8 py-4 text-base font-semibold rounded-full">
              ABOUT US
            </button>
          </div>

          {/* Right Side - 2x2 Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Who We Are */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who We Are
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A team of passionate in-house experts, blending AI, design, and
                strategy.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What We Do
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We craft intelligent, scalable solutions that drive business
                growth and efficiency.
              </p>
            </div>

            {/* How We Work */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How We Work
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With a collaborative, transparent, and client-focused approach
                to every project.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why Choose Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trusted by global organizations for our innovation, reliability,
                and measurable impact.
              </p>
            </div>
          </div>
        </div>

        {/* Center Card */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-400 rounded-3xl w-full max-w-md aspect-video flex items-center justify-center">
            <span className="text-white text-lg font-medium"></span>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            Adrig thrives on creativity, integrity, and a relentless pursuit of
            excellence. Our approach is grounded in strategic thinking with
            cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
}
