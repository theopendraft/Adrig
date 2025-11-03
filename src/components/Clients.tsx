"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Client data structure
const clientsData = [
  {
    id: 1,
    logoSrc: "BMW",
    headline: "See how BMW increased efficiency by 25% with AI automation",
    stats: [
      { label: "+25%", description: "Efficiency Improvement" },
      { label: "+15%", description: "Cost Reduction" },
    ],
    products: ["AI Automation", "Workflow Optimization"],
  },
  {
    id: 2,
    logoSrc: "Amazon",
    headline:
      "See how Amazon improved customer satisfaction by 30% with intelligent chatbots",
    stats: [
      { label: "+30%", description: "Customer Satisfaction" },
      { label: "+40%", description: "Response Time Reduction" },
    ],
    products: ["Chatbot Development", "AI Consulting"],
  },
  {
    id: 3,
    logoSrc: "Maersk",
    headline:
      "See how Maersk optimized logistics operations with predictive analytics",
    stats: [
      { label: "+20%", description: "Operational Efficiency" },
      { label: "+18%", description: "Cost Savings" },
    ],
    products: ["Data Analysis", "LLM Development"],
  },
  {
    id: 4,
    logoSrc: "Twilio",
    headline:
      "See how Twilio increased authorization rates by 10% with Stripe integration",
    stats: [
      { label: "+5.5%", description: "Uplift from Global Infrastructure" },
      { label: "+1%", description: "Uplift from Adaptive Acceptance" },
    ],
    products: ["Payments", "Stripe Sigma"],
  },
  {
    id: 5,
    logoSrc: "Microsoft",
    headline:
      "See how Microsoft accelerated development cycles by 35% with AI-powered tools",
    stats: [
      { label: "+35%", description: "Development Speed" },
      { label: "+22%", description: "Team Productivity" },
    ],
    products: ["Software Development", "AI Automation"],
  },
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeClient = clientsData[activeIndex];

  // Animation variants for case study panel
  const panelVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Clients
        </h2>

        {/* Mobile View - Vertical Card Stack */}
        <div className="block lg:hidden mb-12">
          <div className="space-y-6">
            {/* Client Card with Slide Animation */}
            <div className="relative overflow-hidden rounded-3xl min-h-[500px] bg-gray-300">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Animated Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={panelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="relative z-10 p-6 h-full flex flex-col justify-end text-white"
                >
                  {/* Logo Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 self-start">
                    <span className="text-white font-bold">
                      {activeClient.logoSrc}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold mb-36 leading-tight">
                    {activeClient.headline}
                  </h3>

                  {/* Stats in Row */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {activeClient.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
                      >
                        <div className="text-2xl font-bold mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs opacity-90">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold mb-2">Products used</p>
                    <div className="flex flex-wrap gap-2">
                      {activeClient.products.map((product, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/20 rounded-full px-3 py-1"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Single Brand Name with Progress Bar */}
            <div className="space-y-2">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`mobile-progress-${activeIndex}`}
                />
              </div>

              {/* Active Brand Name */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  <span className="text-2xl font-bold text-gray-900">
                    {activeClient.logoSrc}
                  </span>
                  {/* <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex - 1 + clientsData.length) %
                            clientsData.length
                        )
                      }
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous client"
                    >
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % clientsData.length)
                      }
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next client"
                    >
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div> */}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 pt-2">
                {clientsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 w-2"
                    }`}
                    aria-label={`Go to client ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View - Original Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-[30%_1fr] gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Stats and Products (30%) */}
          <div className="space-y-8 max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${activeIndex}`}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Stats */}
                {activeClient.stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-lg">{stat.description}</p>
                  </div>
                ))}

                {/* Products Used */}
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-3">
                    Products used
                  </p>
                  <div className="space-y-2">
                    {activeClient.products.map((product, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-700 font-medium">{product}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Case Study Panel with Animation */}
          <div className="bg-gray-400 rounded-3xl aspect-video w-full flex items-center justify-between p-12 md:p-20 relative overflow-hidden">
            {/* Background Image Placeholder - Fixed */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Document Icon - Fixed Position */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 z-20">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* Animated Content Only */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="relative z-10 text-white "
              >
                {/* Logo */}
                <div className="mb-8">
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-white text-xl font-bold">
                      {activeClient.logoSrc}
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  {activeClient.headline}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Client Logos - Desktop Only */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-center">
          {clientsData.map((client, index) => (
            <div key={client.id} className="flex flex-col gap-2">
              {/* Progress Bar - Above the box */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                {activeIndex === index && (
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={`progress-${activeIndex}`}
                  />
                )}
              </div>

              {/* Logo Box */}
              <button
                onClick={() => setActiveIndex(index)}
                className={`bg-white rounded-xl p-6 flex items-center justify-center h-24 transition-all ${
                  activeIndex === index ? "  scale-105" : " hover:scale-105 "
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className={`text-lg font-bold ${
                      activeIndex === index ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {client.logoSrc}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
