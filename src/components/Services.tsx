"use client";

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [row1Hovered, setRow1Hovered] = useState(false);
  const [row2Hovered, setRow2Hovered] = useState(false);

  const servicesData = [
    {
      title: "Chatbot\nDevelopment",
      description:
        "Build intelligent conversational AI that engages users, automates support, and delivers experiences.",
    },
    {
      title: "Software\nDevelopment",
      description:
        "Custom software solutions tailored to your business needs. From web applications to enterprise systems.",
    },
    {
      title: "Workflow\nAutomations",
      description:
        "Streamline your operations with smart automation. Reduce manual tasks & increase efficiency.",
    },
    {
      title: "AI\nAutomation",
      description:
        "Harness the power of AI to automate complex processes. Transform your business with intelligent automation.",
    },
    {
      title: "LLM\nDevelopment",
      description:
        "Leverage Large Language Models to create innovative AI solutions & Build custom models.",
    },
    {
      title: "AI\nConsulting",
      description:
        "Strategic AI guidance to transform your business. We help you identify opportunities & plan implementation.",
    },
    {
      title: "Data\nAnalysis",
      description:
        "Turn data into actionable insights. Our analytics solutions help you make informed decisions.",
    },
    {
      title: "Talent\nAcquisition",
      description:
        "Find the right AI and tech talent for your team. We connect you with skilled professionals.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        {/* Mobile View - Grid Layout */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                onHover={() => {}}
                isMobile={true}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Flex Layout with Row Hover Effect */}
        <div className="hidden lg:block space-y-1">
          {/* Row 1 - First 4 services */}
          <div
            className="flex gap-1 transition-all duration-500"
            style={{
              height: row1Hovered ? "260px" : row2Hovered ? "200px" : "230px",  
            }}
          >
            {servicesData.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                onHover={(isHovered) => setRow1Hovered(isHovered)}
                isMobile={false}
              />
            ))}
          </div>

          {/* Row 2 - Last 4 services */}
          <div
            className="flex gap-1 transition-all duration-500"
            style={{
              height: row2Hovered ? "260px" : row1Hovered ? "200px" : "230px",
            }}
          >
            {servicesData.slice(4, 8).map((service, index) => (
              <ServiceCard
                key={index + 4}
                title={service.title}
                description={service.description}
                onHover={(isHovered) => setRow2Hovered(isHovered)}
                isMobile={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
