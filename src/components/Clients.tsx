"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// All 21 client logos
const clientLogos = [
  "/adrig client logos/1.png",
  "/adrig client logos/2.png",
  "/adrig client logos/3.png",
  "/adrig client logos/4.png",
  "/adrig client logos/5.png",
  "/adrig client logos/6.png",
  "/adrig client logos/7.png",
  "/adrig client logos/8.png",
  "/adrig client logos/9.png",
  "/adrig client logos/10.png",
  "/adrig client logos/11.png",
  "/adrig client logos/12.png",
  "/adrig client logos/13.png",
  "/adrig client logos/14.png",
  "/adrig client logos/15.png",
  "/adrig client logos/16.png",
  "/adrig client logos/17.png",
  "/adrig client logos/18.png",
  "/adrig client logos/19.png",
  "/adrig client logos/20.png",
  "/adrig client logos/21.png",
];

// Client data structure - 21 clients matching the logos
const clientsData = [
  {
    id: 1,
    logoSrc: clientLogos[0],
    logoAlt: "Client 1",
    image: "/Website/Home/client/RBMS.png",
    headline: "Southern Railways – Advanced Railway Digital Systems",
    stats: [
      { label: "+42%", description: "Process Digitization" },
      { label: "+33%", description: "Operational Time Reduction" },
    ],
    products: [
      "RBMS (Rolling Block System)",
      "Data Analytics Platform",
      "AI Rule Clarifier",
    ],
  },
  {
    id: 3,
    logoSrc: clientLogos[2],
    logoAlt: "Client 3",
    image: "/Website/Home/client/VIT.jpg",
    headline: "VIT Chennai – Research & Innovation Collaboration",
    stats: [
      { label: "+57%", description: " Research Acceleration" },
      { label: "+29%", description: "Automation of Academic Workflows" },
    ],
    products: [
      "AI Research Support",
      "Prototype Development",
      "Technical Consulting",
    ],
  },
  {
    id: 11,
    logoSrc: clientLogos[10],
    logoAlt: "Client 11",
    image: "/Website/Home/client/Barron.jpg",
    headline: "Barron Tech – Employee Tracking & Expense Automation",
    stats: [
      { label: "+39%", description: "Operational Transparency" },
      { label: "+46%", description: "Field Team Efficiency" },
    ],
    products: [
      "Mobile App Development",
      "GPS & Movement Tracking",
      " Expense Automation AI",
    ],
  },
  {
    id: 18,
    logoSrc: clientLogos[17],
    logoAlt: "Client 18",
    image: "/Website/Home/client/Miporis.jpg",
    headline: "Mipors – Financial Compliance Enhancement",
    stats: [
      { label: "+48%", description: "Operational Accuracy" },
      { label: "+37%", description: "Compliance Efficiency Improvement" },
    ],
    products: [
      "AI Automation",
      "Financial Compliance Tools",
      "Custom Dashboard Development",
    ],
  },
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-advance case study every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % clientsData.length;
        // Update carousel to center the active logo
        setCarouselIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

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
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-16">
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
                    <Image
                      src={activeClient.logoSrc}
                      alt={activeClient.logoAlt}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
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

            {/* Single Brand Name */}
            <div className="space-y-2">
              {/* Active Brand Logo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <Image
                      src={activeClient.logoSrc}
                      alt={activeClient.logoAlt}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
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
          <div className="group bg-gray-400 rounded-3xl aspect-video w-full flex items-center justify-between p-12 md:p-20 relative overflow-hidden">
            {/* Background Image with Scale Effect */}
            <div className="absolute inset-0">
              <Image
                src={activeClient.image}
                alt={activeClient.headline}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>

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
                    <Image
                      src={activeClient.logoSrc}
                      alt={activeClient.logoAlt}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
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

        {/* Client Logos Carousel - Desktop Only */}
        <div className="hidden lg:block relative">
          <div className="flex gap-4 justify-center">
            {clientsData.map((client, index) => (
              <div key={client.id} className="flex-shrink-0 w-[18%]">
                <div className="flex flex-col gap-2 px-2">
                  {/* Logo Box */}
                  <button
                    onClick={() => {
                      setActiveIndex(index);
                      setCarouselIndex(index);
                    }}
                    className={`bg-white rounded-xl p-6 flex items-center justify-center h-28 transition-all ${
                      activeIndex === index
                        ? "scale-105 shadow-lg"
                        : "hover:scale-105 shadow-sm"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logoSrc}
                        alt={client.logoAlt}
                        width={100}
                        height={60}
                        className={`object-contain transition-all ${
                          activeIndex === index ? "opacity-100" : "opacity-60"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Carousel - Mobile View */}
        <div className="block lg:hidden relative overflow-hidden mt-8">
          <div className="relative">
            <motion.div
              className="flex gap-4"
              animate={{
                x: `calc(-${
                  ((carouselIndex % clientsData.length) + clientsData.length) *
                  (100 / 3)
                }% + ${(100 / 3) * 1}%)`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {/* Triple the logos for seamless infinite loop */}
              {[...clientsData, ...clientsData, ...clientsData].map(
                (client, index) => {
                  const originalIndex = index % clientsData.length;
                  return (
                    <div
                      key={`${client.id}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: `${100 / 3}%` }}
                    >
                      <div className="flex flex-col gap-2 px-2">
                        {/* Logo Box */}
                        <button
                          onClick={() => {
                            setActiveIndex(originalIndex);
                            setCarouselIndex(originalIndex);
                          }}
                          className={`bg-white rounded-xl p-3 flex items-center justify-center h-16 transition-all ${
                            activeIndex === originalIndex
                              ? "scale-105 shadow-lg"
                              : "shadow-sm"
                          }`}
                        >
                          <Image
                            src={client.logoSrc}
                            alt={client.logoAlt}
                            width={60}
                            height={40}
                            className={`object-contain transition-all ${
                              activeIndex === originalIndex
                                ? "opacity-100"
                                : "opacity-60"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                }
              )}
            </motion.div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <button
            onClick={() => {
              const newIndex =
                (activeIndex - 1 + clientsData.length) % clientsData.length;
              setActiveIndex(newIndex);
              setCarouselIndex(newIndex);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous logos"
          >
            <svg
              className="w-4 h-4 text-gray-700"
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
            onClick={() => {
              const newIndex = (activeIndex + 1) % clientsData.length;
              setActiveIndex(newIndex);
              setCarouselIndex(newIndex);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Next logos"
          >
            <svg
              className="w-4 h-4 text-gray-700"
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
        </div>
      </div>
    </section>
  );
}
