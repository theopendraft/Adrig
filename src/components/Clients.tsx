import React from "react";

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Clients
        </h2>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Text Content */}
          <div className="space-y-8 max-w-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Title here
              </h3>
              <p className="text-gray-600 text-lg">
                Proudly partnering with leading organizations growth and
                transformation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                And here
              </h3>
              <p className="text-gray-600 text-lg">
                Proudly partnering with leading organizations growth and
                transformation.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium">
                Application
                <br />
                Design
              </p>
            </div>

            <button className="btn-primary px-8 py-4 text-base font-semibold rounded-full">
              VIEW CLIENTS
            </button>
          </div>

          {/* Right Side - Landscape Card */}
          <div className="bg-gray-400 rounded-3xl aspect-video w-full flex items-center justify-center">
            <span className="text-white text-lg font-medium"></span>
          </div>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
