"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Client logos for the bottom row
const clientLogos = [
  {
    src: "/Website/Home/client/RBMS.png",
    alt: "Indian Railways - Southern Railway",
    name: "Indian Railways",
    subtitle: "Southern Railway",
  },
  {
    src: "/Website/Home/client/VIT.jpg",
    alt: "VIT Chennai",
    name: "VIT CHENNAI",
    subtitle: "Vellore Institute of Technology",
  },
  {
    src: "/adrig client logos/1.png",
    alt: "DMI Engineering College",
    name: "DMI",
    subtitle: "ENGINEERING COLLEGE",
  },
  {
    src: "/adrig client logos/2.png",
    alt: "LIFCO",
    name: "LIFCO",
    subtitle: "",
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
            <div className="space-y-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Title here
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Proudly partnering with leading organizations growth and
                  transformation.
                </p>
                  </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  And here
                  </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Proudly partnering with leading organizations growth and
                  transformation.
                </p>
                  </div>

              <div>
                <p className="text-sm text-gray-600 mb-4">Application Design</p>
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
            </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
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
