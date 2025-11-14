"use client";

import React, { useState } from "react";

interface InnovationCardProps {
  title: string;
  description: string;
  onHover: (isHovered: boolean) => void;
}

export default function InnovationCard({
  title,
  description,
  onHover,
}: InnovationCardProps) {
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
      className={` rounded-2xl transition-all duration-500 ease-in-out cursor-pointer h-full relative ${
        isExpanded ? "bg-gray-100 z-20" : "bg-white"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        flex: isExpanded ? "1.2" : "1",
      }}
    >
      {/* Card Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Arrow Icon */}
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

        {/* Title and Description Container */}
        <div className="flex-grow overflow-hidden">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

          {/* Description with smooth reveal */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
