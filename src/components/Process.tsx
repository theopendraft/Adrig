import React from "react";

export default function Process() {
  const processes = [
    {
      number: "01.",
      title: "Analyse &\nDefine",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "02.",
      title: "Design &\nStrategize",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "03.",
      title: "Build &\nImplement",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "04.",
      title: "Maintain &\nImprove",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#1a1a1a]">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Process
        </h2>

        {/* Process Cards Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between aspect-[4/5]"
            >
              {/* Top Content */}
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">
                  {process.number}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line">
                  {process.title}
                </h3>
              </div>

              {/* Bottom Description */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Card */}
        <div className="bg-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Circular Profiles */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-400 border-4 border-gray-100"></div>
              <div className="w-12 h-12 rounded-full bg-gray-500 border-4 border-gray-100"></div>
              <div className="w-12 h-12 rounded-full bg-gray-600 border-4 border-gray-100"></div>
            </div>
            <p className="text-lg font-semibold text-gray-900 ml-2">
              Align with businesses that choose excellence
            </p>
          </div>

          {/* Right Side - Button */}
          <button className="btn-primary px-8 py-4 text-base font-semibold flex items-center gap-2 whitespace-nowrap rounded-full">
            GET IN TOUCH
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>
    </section>
  );
}
