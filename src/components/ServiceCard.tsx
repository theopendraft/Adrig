"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface ServiceCardProps {
  title: string;
  description: string;
  onHover: (isHovered: boolean) => void;
}

interface ServiceCardProps {
  title: string;
  description: string;
  onHover: (isHovered: boolean) => void;
}

export default function ServiceCard({
  title,
  description,
  onHover,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    onHover(false);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer h-full relative ${
        isExpanded ? "shadow-xl z-20" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        flex: isExpanded ? "1.2" : "1",
      }}
    >
      {/* Card Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Title and Description Container */}
        <div className="flex-grow overflow-hidden">
          <h3 className="text-xl font-bold text-gray-900 mb-3 whitespace-pre-line">
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
        <div className="flex justify-end mt-4">
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
