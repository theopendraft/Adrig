"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import InnovationCard from "./InnovationCard";

export default function Innovation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [row1Hovered, setRow1Hovered] = useState(false);
  const [row2Hovered, setRow2Hovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Scroll distance for scaling animation (within Innovation section)
  // Increased for smoother, more gradual animation
  const SCROLL_DISTANCE = 600;

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

          {/* Right Side - 2x2 Grid of Cards with Interactive Effects */}
          <div className="space-y-2">
            {/* Row 1 - Top 2 cards */}
            <div
              className="flex gap-2 transition-all duration-500"
              style={{
                height: row1Hovered ? "220px" : row2Hovered ? "180px" : "200px",
              }}
            >
              <InnovationCard
                title="Who We Are"
                description="A team of passionate in-house experts, blending AI, design, and strategy to deliver exceptional solutions."
                onHover={(isHovered) => setRow1Hovered(isHovered)}
              />
              <InnovationCard
                title="What We Do"
                description="We craft intelligent, scalable solutions that drive business growth and efficiency through innovative technology."
                onHover={(isHovered) => setRow1Hovered(isHovered)}
              />
            </div>

            {/* Row 2 - Bottom 2 cards */}
            <div
              className="flex gap-2 transition-all duration-500"
              style={{
                height: row2Hovered ? "220px" : row1Hovered ? "180px" : "200px",
              }}
            >
              <InnovationCard
                title="How We Work"
                description="With a collaborative, transparent, and client-focused approach to every project, ensuring success at every step."
                onHover={(isHovered) => setRow2Hovered(isHovered)}
              />
              <InnovationCard
                title="Why Choose Us"
                description="Trusted by global organizations for our innovation, reliability, and measurable impact in transforming businesses."
                onHover={(isHovered) => setRow2Hovered(isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Scroll Animation Video/Card Container */}
        <div
          ref={videoContainerRef}
          className="flex justify-center py-12 md:py-32 mt-4 md:mt-10 px-4 md:px-0"
        >
          <motion.div
            className="w-full max-w-2xl"
            style={{
              scale: baseScale,
              opacity: opacity,
            }}
            transition={{
              scale: { duration: 0.05, ease: "linear" },
            }}
          >
            <div className="bg-gray-900 rounded-2xl md:rounded-3xl w-full aspect-video flex items-center justify-center shadow-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/Introduction.mp4" type="video/mp4" />
                <source src="/Introduction.mp4" type="video/webm" />
                <p className="text-white">
                  Your browser does not support the video tag.
                </p>
              </video>
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
