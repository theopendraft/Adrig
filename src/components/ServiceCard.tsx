"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
    <div
      className={`bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer relative ${
        isExpanded ? "shadow-xl z-20" : ""
      } ${isMobile ? "" : "h-full"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        flex: !isMobile && isExpanded ? "1.2" : !isMobile ? "1" : undefined,
      }}
    >
      {/* Card Content */}
      <div
        className={`${isMobile ? "p-4" : "p-6"} ${
          isMobile ? "" : "h-full"
        } flex flex-col`}
      >
        {/* Title and Description Container */}
        <div className={isMobile ? "" : "flex-grow overflow-hidden"}>
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
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-700 ${
              isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Plus/Minus Icon Button */}
        <div className={`flex justify-end ${isMobile ? "mt-2" : "mt-4"}`}>
          <div
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isExpanded
                ? "bg-gray-200 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
          >
            {isExpanded ? (
              <FiMinus className="w-5 h-5" />
            ) : (
              <FiPlus className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
