"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Client logos for the bottom row
const clientLogos = [
  {
    src: "/adrig client logos/Vit.png",
    alt: "VIT Chennai",
    name: "VIT CHENNAI",
    subtitle: "Vellore Institute of Technology",
    metrics: [
      { value: "+57%", label: "Research Acceleration" },
      { value: "+29%", label: "Automation of Academic Workflows" },
    ],
    products: [
      "AI Research Support",
      "Prototype Development",
      "Technical Consulting",
    ],
  },
  {
    src: "/adrig client logos/DMI.png",
    alt: "DMI Foundations",
    name: "DMI",
    subtitle: "FOUNDATIONS",
    metrics: [
      { value: "+42%", label: "Process Digitization" },
      { value: "+33%", label: "Operational Time Reduction" },
    ],
    products: [
      "RBMS (Rolling Block System)",
      "Data Analytics Platform",
      "AI Rule Clarifier",
    ],
  },
  {
    src: "/adrig client logos/Lifco.png",
    alt: "LIFCO",
    name: "LIFCO",
    subtitle: "",
    metrics: [
      { value: "+42%", label: "Process Digitization" },
      { value: "+33%", label: "Operational Time Reduction" },
    ],
    products: [
      "RBMS (Rolling Block System)",
      "Data Analytics Platform",
      "AI Rule Clarifier",
    ],
  },
  {
    src: "/adrig client logos/railway.png",
    alt: "Indian Railways",
    name: "Indian Railways",
    subtitle: "Southern Railway",
    metrics: [
      { value: "+42%", label: "Process Digitization" },
      { value: "+33%", label: "Operational Time Reduction" },
    ],
    products: [
      "RBMS (Rolling Block System)",
      "Data Analytics Platform",
      "AI Rule Clarifier",
    ],
  },
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance through clients every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Section Title - Centered */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Our Clients
        </h2>

        {/* Top Section: Content and Image */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center mb-8 md:mb-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {clientLogos[activeIndex].metrics.map((metric, index) => (
                  <div key={index}>
                    <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                      {metric.value}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {metric.label}
                    </p>
                  </div>
                ))}

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Products used</h3>
                  <ul className="space-y-2 mb-4">
                    {clientLogos[activeIndex].products.map((product, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base text-gray-700">{product}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/work">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
                    >
                      VIEW CLIENTS
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Wide Image Placeholder */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[16/10] bg-gray-500 rounded-2xl shadow-2xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-gray-500"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Client Logos Row */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    scale: activeIndex === index ? 1.05 : 1,
                    opacity: activeIndex === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
