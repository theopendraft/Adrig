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
        "Build intelligent conversational AI that engages users, automates support, and delivers personalized experiences across multiple platforms.",
    },
    {
      title: "Software\nDevelopment",
      description:
        "Custom software solutions tailored to your business needs. From web applications to enterprise systems, we deliver scalable and robust solutions.",
    },
    {
      title: "Workflow\nAutomations",
      description:
        "Streamline your operations with smart automation. Reduce manual tasks, increase efficiency, and let your team focus on what matters most.",
    },
    {
      title: "AI\nAutomation",
      description:
        "Harness the power of AI to automate complex processes. Transform your business with intelligent automation that learns and adapts.",
    },
    {
      title: "LLM\nDevelopment",
      description:
        "Leverage Large Language Models to create innovative AI solutions. Build custom models tailored to your domain and requirements.",
    },
    {
      title: "AI\nConsulting",
      description:
        "Strategic AI guidance to transform your business. We help you identify opportunities, plan implementation, and achieve measurable results.",
    },
    {
      title: "Data\nAnalysis",
      description:
        "Turn data into actionable insights. Our analytics solutions help you make informed decisions and uncover hidden opportunities.",
    },
    {
      title: "Talent\nAcquisition",
      description:
        "Find the right AI and tech talent for your team. We connect you with skilled professionals who drive innovation and growth.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        {/* Services Flex Layout - Two separate rows with dynamic heights */}
        <div className="space-y-2">
          {/* Row 1 - First 4 services */}
          <div
            className="flex gap-2 transition-all duration-500"
            style={{
              height: row1Hovered ? "308px" : row2Hovered ? "252px" : "280px",
            }}
          >
            {servicesData.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                onHover={(isHovered) => setRow1Hovered(isHovered)}
              />
            ))}
          </div>

          {/* Row 2 - Last 4 services */}
          <div
            className="flex gap-2 transition-all duration-500"
            style={{
              height: row2Hovered ? "308px" : row1Hovered ? "252px" : "280px",
            }}
          >
            {servicesData.slice(4, 8).map((service, index) => (
              <ServiceCard
                key={index + 4}
                title={service.title}
                description={service.description}
                onHover={(isHovered) => setRow2Hovered(isHovered)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
