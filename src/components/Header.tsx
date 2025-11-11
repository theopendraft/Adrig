"use client";

import { useState } from "react";
import Link from "next/link";

type ServiceData = {
  description: string;
  subOptions: Array<{
    name: string;
    description: string;
  }>;
  href: string;
};

type ServicesDataType = {
  [key: string]: ServiceData;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const servicesData: ServicesDataType = {
    "Chatbot Development": {
      description: "Build intelligent conversational AI solutions",
      subOptions: [
        {
          name: "Custom AI Chatbots",
          description: "Tailored chatbot solutions for your business needs",
        },
        {
          name: "Voice Assistants",
          description: "Natural language voice-enabled assistants",
        },
        {
          name: "Multi-platform Integration",
          description: "Deploy across web, mobile, and messaging apps",
        },
      ],
      href: "#services",
    },
    "Software Development": {
      description: "Custom software solutions for your business",
      subOptions: [
        {
          name: "Web Applications",
          description: "Scalable and responsive web solutions",
        },
        {
          name: "Mobile Apps",
          description: "Native and cross-platform mobile development",
        },
        {
          name: "Enterprise Systems",
          description: "Complex enterprise-grade software solutions",
        },
      ],
      href: "#services",
    },
    "Workflow Automations": {
      description: "Streamline operations with smart automation",
      subOptions: [
        {
          name: "Process Automation",
          description: "Automate repetitive business processes",
        },
        {
          name: "Integration Services",
          description: "Connect and sync your business tools",
        },
        {
          name: "Custom Workflows",
          description: "Design workflows tailored to your needs",
        },
      ],
      href: "#services",
    },
    "AI Automation": {
      description: "Intelligent automation powered by AI",
      subOptions: [
        {
          name: "Predictive Analytics",
          description: "AI-driven insights and forecasting",
        },
        {
          name: "Smart Decision Making",
          description: "Automated intelligent decision systems",
        },
        {
          name: "ML Model Deployment",
          description: "Production-ready machine learning models",
        },
      ],
      href: "#services",
    },
    "LLM Development": {
      description: "Custom Large Language Model solutions",
      subOptions: [
        {
          name: "Fine-tuned Models",
          description: "Domain-specific language models",
        },
        {
          name: "RAG Systems",
          description: "Retrieval-augmented generation solutions",
        },
        {
          name: "Prompt Engineering",
          description: "Optimized prompts for better results",
        },
      ],
      href: "#services",
    },
    "AI Consulting": {
      description: "Strategic AI guidance for your business",
      subOptions: [
        {
          name: "AI Strategy",
          description: "Develop comprehensive AI roadmaps",
        },
        {
          name: "Technology Assessment",
          description: "Evaluate and select the right AI tools",
        },
        {
          name: "Implementation Support",
          description: "Hands-on guidance for AI adoption",
        },
      ],
      href: "#services",
    },
    "Data Analysis": {
      description: "Turn data into actionable insights",
      subOptions: [
        {
          name: "Business Intelligence",
          description: "Comprehensive BI dashboards and reports",
        },
        {
          name: "Data Visualization",
          description: "Interactive charts and visual analytics",
        },
        {
          name: "Predictive Modeling",
          description: "Statistical models for forecasting",
        },
      ],
      href: "#services",
    },
    "Talent Acquisition": {
      description: "Find the right AI and tech talent",
      subOptions: [
        {
          name: "Technical Recruitment",
          description: "Source skilled AI and software engineers",
        },
        {
          name: "Team Augmentation",
          description: "Scale your team with experts",
        },
        {
          name: "Contract Specialists",
          description: "Flexible hiring for project needs",
        },
      ],
      href: "#services",
    },
  };

  const servicesDropdown = Object.keys(servicesData);

  const productDropdown = [
    { name: "Our Solutions", href: "#innovation" },
    { name: "Case Studies", href: "#clients" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  const navItems = [
    { name: "Work", href: "#process" },
    { name: "Plan", href: "#innovation" },
    { name: "Team", href: "#partnership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container-custom my-4 md:my-10 bg-gradient-to-b from-navy/90 to-navy/60 backdrop-blur-md rounded-2xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-3">
              <img
                src="/images/Adrig.PNG"
                alt="Adrig Logo"
                className="w-10 h-10 object-contain flex items-center justify-center"
              />

              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  ADRIG AI
                </span>
                <span className="text-xs text-blue-200 leading-tight">
                  Technologies
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Mega Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-blue-200 font-medium transition-colors duration-200">
                <span>Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Menu Container */}
              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden">
                  {/* Left Side - Service Categories */}
                  <div className="w-64 py-2 border-r border-gray-100">
                    {servicesDropdown.map((serviceName) => (
                      <button
                        key={serviceName}
                        onMouseEnter={() => setHoveredService(serviceName)}
                        className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                          hoveredService === serviceName
                            ? "bg-blue-50 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {serviceName}
                      </button>
                    ))}
                  </div>

                  {/* Right Side - Sub Options Display */}
                  <div className="w-96 p-6 bg-gray-50">
                    {hoveredService && servicesData[hoveredService] && (
                      <div className="space-y-4">
                        {/* Heading */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {hoveredService}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {servicesData[hoveredService].description}
                          </p>
                        </div>

                        {/* Sub Options */}
                        <div className="space-y-3">
                          {servicesData[hoveredService].subOptions.map(
                            (subOption, index) => (
                              <a
                                key={index}
                                href={servicesData[hoveredService].href}
                                className="flex gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group/item"
                              >
                                {/* Blue Rectangle Icon */}
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover/item:bg-blue-700 transition-colors">
                                  <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                                    {subOption.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 line-clamp-2">
                                    {subOption.description}
                                  </p>
                                </div>
                              </a>
                            )
                          )}
                        </div>

                        {/* View All Link */}
                        <div className="pt-4 border-t border-gray-200">
                          <a
                            href={servicesData[hoveredService].href}
                            className="flex items-center justify-between text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <span>View all {hoveredService}</span>
                            <svg
                              className="w-4 h-4"
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
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-blue-200 font-medium transition-colors duration-200">
                <span>Product</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {productDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Regular Nav Items */}
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 from-neutral-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 from-neutral-50 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2.5 text-white from-neutral-50 hover:text-blue-200 transition-colors duration-200 border border-white/30 rounded-full hover:bg-white/10">
              LOGIN
            </button>
            <button className="px-6 py-2.5 bg-white text-primary font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
              <span>SIGN UP</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg hover:bg-white/30 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[800px] opacity-100 pb-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 bg-white/98 backdrop-blur-md rounded-lg mt-2 shadow-xl">
            <div className="flex flex-col space-y-1 px-4">
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary font-semibold py-3 transition-colors duration-200"
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`pl-4 space-y-1 transition-all duration-300 overflow-hidden ${
                    mobileServicesOpen
                      ? "max-h-96 opacity-100 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {servicesDropdown.map((serviceName) => (
                    <a
                      key={serviceName}
                      href={servicesData[serviceName].href}
                      className="block text-gray-700 hover:text-primary hover:bg-blue-50 py-2 px-2 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {serviceName}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary font-semibold py-3 transition-colors duration-200"
                >
                  <span>Product</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileProductOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`pl-4 space-y-1 transition-all duration-300 overflow-hidden ${
                    mobileProductOpen
                      ? "max-h-96 opacity-100 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {productDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-700 hover:text-primary hover:bg-blue-50 py-2 px-2 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-primary font-semibold py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-primary font-semibold py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4 space-y-2 border-t border-gray-200">
                <button className="w-full px-6 py-2.5 text-primary font-medium border-2 border-primary rounded-full hover:bg-blue-50 transition-colors duration-200">
                  LOGIN
                </button>
                <button className="w-full px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
