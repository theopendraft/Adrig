"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Innovation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Scroll distance for scaling animation (within Innovation section)
  // Increased for smoother, more gradual animation
  const SCROLL_DISTANCE = 800;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoContainerRef.current) return;

      const section = sectionRef.current;
      const videoContainer = videoContainerRef.current;
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get position of video container relative to viewport
      const rect = videoContainer.getBoundingClientRect();

      // Calculate the center position of the video container in viewport
      const videoContainerCenterInViewport = rect.top + rect.height / 2;

      // Calculate the center of viewport
      const viewportCenter = windowHeight / 2;

      // Distance from viewport center (negative means above center, positive means below)
      const distanceFromCenter =
        videoContainerCenterInViewport - viewportCenter;

      // Animation range: starts SCROLL_DISTANCE pixels before center, ends at center
      // When card is SCROLL_DISTANCE pixels above center → progress = 0
      // When card is at center → progress = 1
      const progress = 1 - distanceFromCenter / SCROLL_DISTANCE;

      // Clamp between 0 and 1, and apply easing for smoother animation
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      // Apply ease-out curve for more natural scaling
      const easedProgress = 1 - Math.pow(1 - clampedProgress, 3);

      setScrollProgress(easedProgress);

      // Check if section is in view
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionInView =
        windowScrollY + windowHeight > sectionTop &&
        windowScrollY < sectionTop + sectionHeight;
      setIsInView(sectionInView);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Small delay to ensure DOM is ready
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate scale: starts at 0.6 (60%) and scales to 1.0 (100%)
  // More conservative range to prevent unexpected scaling
  const baseScale = 0.4 + scrollProgress * 0.8; // 0.6 to 1.0

  // Card is always visible (opacity 1)
  const opacity = 1;

  return (
    <section
      id="innovation"
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
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

        {/* Scroll Animation Video/Card Container */}
        <div
          ref={videoContainerRef}
          className="flex justify-center  py-32 mt-10"
        >
          <motion.div
            className="w-full max-w-4xl"
            style={{
              scale: baseScale,
              opacity: opacity,
            }}
            transition={{
              scale: { duration: 0.05, ease: "linear" },
            }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl w-full aspect-video flex items-center justify-center shadow-2xl overflow-hidden">
              {/* Video placeholder - Replace with actual video */}
              {/* <motion.div
                className="text-white text-center p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  animate={{
                    rotate: isInView ? 360 : 0,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-20 h-20 mx-auto mb-4 border-4 border-white/30 border-t-white rounded-full"
                />
                <p className="text-lg font-semibold">Innovation in Motion</p>
                <p className="text-sm text-white/80 mt-2">
                  Scroll to experience
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Progress: {Math.round(scrollProgress * 100)}%
                </p> 
              </motion.div>*/}

              {/* Uncomment to use video instead of placeholder */}
              {/* <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video> */}
            </div>
          </motion.div>
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
