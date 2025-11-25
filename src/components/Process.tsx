"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Custom hook to detect mobile view
function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export default function Process() {
  const processes = [
    {
      number: "01.",
      title: "Analyse &\nDefine",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "02.",
      title: "Design &\nStrategize",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "03.",
      title: "Build &\nImplement",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
    {
      number: "04.",
      title: "Maintain &\nImprove",
      description:
        "Seamless development, automation, and continuous innovation.",
    },
  ];

  const isMobile = useIsMobile(1024);

  return (
    <section id="process" className="section-padding bg-[#1a1a1a]">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-center text-white mb-16">
          Our Process
        </h2>

        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {processes.map((process, index) => (
              <ProcessCard key={index} process={process} />
            ))}
          </div>
        )}

        {/* Mobile: Swipable Card Stack */}
        {isMobile && <MobileSwipableCardStack processes={processes} />}

        {/* Bottom Horizontal Card */}
        <div className="bg-gray-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Circular Profiles */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/adrig client logos/18.png"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/adrig client logos/11.png"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/adrig client logos/2.png"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-900 ml-2">
              Align with businesses that choose excellence
            </p>
          </div>

          {/* Right Side - Button */}
          <Link
            href="/contact"
            className="btn-primary px-4 py-2 text-base flex items-center gap-2 whitespace-nowrap rounded-full"
          >
            GET IN TOUCH
            <img src="/right-up-white.png" alt="right-up" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Mobile Swipable Card Stack Component
function MobileSwipableCardStack({
  processes,
}: {
  processes: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  const [isInitialized, setIsInitialized] = useState(false);

  const CARD_WIDTH = 280; // Width of each card
  const CARD_SPACING = 20; // Space between cards
  const TOTAL_CARDS = processes.length;

  // Create an infinite loop of cards by tripling the array
  const infiniteProcesses = [...processes, ...processes, ...processes];

  // Start from the middle set to allow looping in both directions
  const [currentSet, setCurrentSet] = useState(1); // 0, 1, or 2 (representing which set of cards)

  // Calculate drag constraints - much wider to allow continuous dragging
  const dragConstraints = {
    left: -(CARD_WIDTH + CARD_SPACING) * (infiniteProcesses.length - 1),
    right: 0,
  };

  // Handle drag end to snap to nearest card
  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    let newIndex = activeIndex;

    // Calculate which card to snap to based on drag distance and velocity
    if (Math.abs(offset) > CARD_WIDTH / 4 || Math.abs(velocity) > 500) {
      if (offset > 0) {
        newIndex = activeIndex - 1;
      } else if (offset < 0) {
        newIndex = activeIndex + 1;
      }
    }

    // Handle looping logic
    const actualIndex = newIndex % TOTAL_CARDS;
    const normalizedIndex =
      actualIndex < 0 ? actualIndex + TOTAL_CARDS : actualIndex;

    // Reset position if we've moved too far in either direction
    if (newIndex < 0) {
      // Looped to the left, jump to the end of middle set
      newIndex = TOTAL_CARDS + normalizedIndex;
      const targetX = -newIndex * (CARD_WIDTH + CARD_SPACING);
      x.jump(targetX); // Jump without animation
      setActiveIndex(newIndex);
    } else if (newIndex >= TOTAL_CARDS * 2) {
      // Looped to the right, jump to the start of middle set
      newIndex = TOTAL_CARDS + normalizedIndex;
      const targetX = -newIndex * (CARD_WIDTH + CARD_SPACING);
      x.jump(targetX); // Jump without animation
      setActiveIndex(newIndex);
    } else {
      // Normal case
      const targetX = -newIndex * (CARD_WIDTH + CARD_SPACING);
      x.set(targetX);
      setActiveIndex(newIndex);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isInitialized) return;

    const interval = setInterval(() => {
      const newIndex = activeIndex + 1;
      const actualIndex = newIndex % TOTAL_CARDS;
      const normalizedIndex =
        actualIndex < 0 ? actualIndex + TOTAL_CARDS : actualIndex;

      // Reset position if we've moved too far
      if (newIndex >= TOTAL_CARDS * 2) {
        const resetIndex = TOTAL_CARDS + normalizedIndex;
        const resetX = -resetIndex * (CARD_WIDTH + CARD_SPACING);
        x.jump(resetX); // Jump without animation
        setActiveIndex(resetIndex);
      } else {
        const targetX = -newIndex * (CARD_WIDTH + CARD_SPACING);
        x.set(targetX);
        setActiveIndex(newIndex);
      }
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex, x, CARD_WIDTH, CARD_SPACING, TOTAL_CARDS, isInitialized]);

  // Initialize position to middle set
  useEffect(() => {
    const initialX = -TOTAL_CARDS * (CARD_WIDTH + CARD_SPACING);
    x.jump(initialX); // Jump without animation
    setActiveIndex(TOTAL_CARDS);
    setIsInitialized(true);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden mb-6"
      style={{ height: "380px" }}
    >
      <motion.div
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
        onDragEnd={handleDragEnd}
        style={{ x }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="flex gap-5 absolute left-0 cursor-grab active:cursor-grabbing"
      >
        {infiniteProcesses.map((process, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          const isFuture = index > activeIndex;

          return (
            <MobileProcessCard
              key={`${process.number}-${index}`}
              process={process}
              isActive={isActive}
              isPast={isPast}
              isFuture={isFuture}
              cardWidth={CARD_WIDTH}
              activeIndex={activeIndex}
              cardIndex={index}
            />
          );
        })}
      </motion.div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {processes.map((_, index) => {
          const normalizedActiveIndex = activeIndex % TOTAL_CARDS;
          const isActive =
            index === normalizedActiveIndex ||
            index === normalizedActiveIndex - TOTAL_CARDS ||
            index === normalizedActiveIndex + TOTAL_CARDS;

          return (
            <button
              key={index}
              onClick={() => {
                const targetIndex = TOTAL_CARDS + index; // Always go to middle set
                const targetX = -targetIndex * (CARD_WIDTH + CARD_SPACING);
                x.set(targetX);
                setActiveIndex(targetIndex);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-white w-8" : "bg-white/40"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Mobile Process Card Component with tap animation
function MobileProcessCard({
  process,
  isActive,
  isPast,
  isFuture,
  cardWidth,
  activeIndex,
  cardIndex,
}: {
  process: {
    number: string;
    title: string;
    description: string;
  };
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
  cardWidth: number;
  activeIndex: number;
  cardIndex: number;
}) {
  const [isPressed, setIsPressed] = useState(false);
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);

  // Track direction of change
  const direction = activeIndex > prevActiveIndex ? "left" : "right";

  useEffect(() => {
    setPrevActiveIndex(activeIndex);
  }, [activeIndex]);

  // Calculate transform based on position with slide-in animation
  const getTransform = () => {
    const distance = cardIndex - activeIndex;

    if (isActive) {
      return {
        scale: 1,
        x: 0,
        opacity: 1,
        rotateY: 0,
      };
    }

    if (isPast) {
      return {
        scale: 0.9,
        x: -20,
        opacity: 0.5,
        rotateY: -5,
      };
    }

    if (isFuture) {
      return {
        scale: 0.95,
        x: 20,
        opacity: 0.8,
        rotateY: 5,
      };
    }

    return {
      scale: 0.95,
      x: distance > 0 ? 20 : -20,
      opacity: 0.6,
      rotateY: distance > 0 ? 5 : -5,
    };
  };

  const transform = getTransform();

  return (
    <motion.div
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      initial={false}
      animate={{
        scale: isPressed ? 0.98 : transform.scale,
        x: transform.x,
        opacity: transform.opacity,
        rotateY: transform.rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        opacity: { duration: 0.3 },
        scale: { duration: 0.2 },
      }}
      style={{
        width: cardWidth,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="w-32 h-72 bg-gray-100 rounded-3xl p-6 flex flex-col justify-between select-none"
    >
      {/* Top Content */}
      <div>
        <p className="text-lg font-bold text-gray-900 mb-2">{process.number}</p>
        <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line">
          {process.title}
        </h3>
      </div>

      {/* Bottom Description */}
      <div className="mt-8">
        <p className="text-sm text-gray-600 leading-relaxed">
          {process.description}
        </p>
      </div>
    </motion.div>
  );
}

// Desktop ProcessCard Component with Corner Press Effect
function ProcessCard({
  process,
}: {
  process: {
    number: string;
    title: string;
    description: string;
  };
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max 15 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between aspect-[4/5] transition-all duration-300 ease-out cursor-pointer"
        style={{
          transform: isHovering
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Top Content */}
        <div>
          <p className="text-xl font-bold text-gray-900 mb-2">
            {process.number}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line">
            {process.title}
          </h3>
        </div>

        {/* Bottom Description */}
        <div>
          <p className="text-gray-600 leading-relaxed">{process.description}</p>
        </div>
      </div>
    </div>
  );
}
