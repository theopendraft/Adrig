import React from "react";

export default function Services() {
  const services = [
    { title: "Chatbot\nDevelopment" },
    { title: "Software\nDevelopment" },
    { title: "Workflow\nAutomations" },
    { title: "AI\nAutomation" },
    { title: "LLM\nDevelopment" },
    { title: "AI\nConsulting" },
    { title: "Data\nAnalysis" },
    { title: "Talent\nAcquisition" },
  ];

  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        {/* Services Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow group relative min-h-[200px] flex flex-col"
            >
              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-auto whitespace-pre-line">
                {service.title}
              </h3>

              {/* Plus Icon Button */}
              <div className="flex justify-end mt-4">
                <button className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
