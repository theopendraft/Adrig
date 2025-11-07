"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  onHover: (isHovered: boolean) => void;
  isMobile?: boolean;
}

export default function ServiceCard({
  title,
  description,
  onHover,
  isMobile = false,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
      onHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
      onHover(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-lg border border-gray-200 cursor-pointer relative ${
        isExpanded ? "z-20" : ""
      } ${isMobile ? "" : "h-full"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{
        flex: !isMobile && isExpanded ? 1.2 : !isMobile ? 1 : undefined,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 1.8,
      }}
    >
      {/* Card Content */}
      <div
        className={`${isMobile ? "p-4" : "p-6"} ${
          isMobile ? "" : "h-full"
        } flex flex-col relative`}
      >
        {/* Title and Description Container */}
        <div
          className={isMobile ? "" : "flex-grow overflow-hidden pb-20 md:pb-24"}
        >
          <h3
            className={`${
              isMobile ? "text-lg" : "text-xl"
            } font-bold text-gray-900 ${
              isMobile ? "mb-2" : "mb-3"
            } whitespace-pre-line`}
          >
            {title}
          </h3>

          {/* Description with smooth reveal */}
          <motion.div
            className="overflow-hidden text-gray-700 absolute left-4 right-4 bottom-12 md:left-6 md:right-6 md:bottom-16 h-16"
            animate={{
              y: isExpanded ? 0 : 12,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 28 },
              opacity: { duration: 0.25, delay: isExpanded ? 0 : 0 },
            }}
          >
            <p className="text-sm leading-relaxed">{description}</p>
          </motion.div>
        </div>

        {/* Plus/Minus Icon Button */}
        <div className={`flex justify-end ${isMobile ? "mt-2" : "mt-4"}`}>
          <motion.div
            className={`p-2 rounded-lg ${
              isExpanded
                ? "bg-gray-200 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
            animate={{
              scale: isExpanded ? 1 : 1,
              rotate: isExpanded ? 0 : 0,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {isExpanded ? (
                <FiMinus className="w-5 h-5" />
              ) : (
                <FiPlus className="w-5 h-5" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
