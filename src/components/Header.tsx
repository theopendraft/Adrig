"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  const servicesDropdown = [
    { name: "Chatbot Development", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "Workflow Automations", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "LLM Development", href: "#services" },
    { name: "AI Consulting", href: "#services" },
    { name: "Data Analysis", href: "#services" },
    { name: "Talent Acquisition", href: "#services" },
  ];

  const productDropdown = [
    { name: "Our Solutions", href: "#innovation" },
    { name: "Case Studies", href: "#clients" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  const navItems = [
    { name: "Work", href: "#process" },
    { name: "Plan", href: "#innovation" },
    { name: "Team", href: "#partnership" },
    { name: "Contact", href: "#footer" },
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
            {/* Services Dropdown */}
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
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {servicesDropdown.map((item) => (
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200 from-neutral-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
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
            className=" p-2.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg hover:bg-white/30 transition-all duration-200 z-1000"
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
                  {servicesDropdown.map((item) => (
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

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-primary font-semibold py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

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
