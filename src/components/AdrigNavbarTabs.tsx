"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Dropdown tabs (Services and Product)
const DROPDOWN_TABS = [
  {
    id: 1,
    title: "Services",
    Component: ServicesContent,
  },
  {
    id: 2,
    title: "Product",
    Component: ProductContent,
  },
];

// Regular navigation links
const NAV_LINKS = [
  { name: "Work", href: "#process" },
  { name: "Plan", href: "#innovation" },
  { name: "Team", href: "#partnership" },
  { name: "Contact", href: "/contact" },
];

export default function AdrigNavbarTabs() {
  return (
    <header className="bg-[#0a1f5e]  backdrop-blur-sm absolute top-0 left-0 right-0 z-50">
      <nav className="container-custom my-2">
        <div className=" rounded-2xl">
          <div className="flex items-center justify-between px-2 py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center space-x-3">
                <img
                  src="/images/Adrig.PNG"
                  alt="Adrig Logo"
                  className="w-10 h-10 object-contain"
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

            {/* Navigation - Dropdowns + Links */}
            <div className="hidden lg:flex items-center gap-1">
              <Tabs tabs={DROPDOWN_TABS} />
              {NAV_LINKS.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-2 py-1 text-white hover:text-blue-200 font-medium transition-colors duration-200 rounded-full hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-2 py-1 text-white hover:text-blue-200 font-medium transition-colors duration-200 rounded-full hover:bg-white/10"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-1 text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200">
                LOGIN
              </button>
              <button className="px-6 py-1 bg-white text-primary font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
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
          </div>
        </div>
      </nav>
    </header>
  );
}

// Tabs Component with Shifting Dropdown
function Tabs({ tabs }: { tabs: typeof DROPDOWN_TABS }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex gap-2"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={tab}
        >
          {tab.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} tabs={tabs} />}
      </AnimatePresence>
    </div>
  );
}

// Individual Tab Component
function Tab({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: React.ReactNode;
  tab: (typeof DROPDOWN_TABS)[number];
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) {
  return (
    <button
      id={`shift-tab-${tab.id}`}
      onMouseEnter={() => handleSetSelected(tab.id)}
      onClick={() => handleSetSelected(tab.id)}
      className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium transition-colors ${
        selected === tab.id
          ? "bg-white/20 text-white"
          : "text-white hover:bg-white/10 hover:text-blue-200"
      }`}
    >
      <span>{children}</span>
      <svg
        className={`w-4 h-4 transition-transform ${
          selected === tab.id ? "rotate-180" : ""
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
  );
}

// Content Dropdown Component
function Content({
  selected,
  dir,
  tabs,
}: {
  selected: number | null;
  dir: null | "l" | "r";
  tabs: typeof DROPDOWN_TABS;
}) {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_16px)] w-[600px] rounded-2xl bg-white shadow-xl border border-gray-200"
    >
      <Bridge />
      <Nub selected={selected} tabs={tabs} />

      {tabs.map((tab) => {
        return (
          <div className="overflow-hidden" key={tab.id}>
            {selected === tab.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <tab.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

// Bridge - invisible element to connect tab to dropdown
function Bridge() {
  return <div className="absolute -top-4 left-0 right-0 h-4" />;
}

// Nub - small triangle indicator
function Nub({
  selected,
  tabs,
}: {
  selected: number | null;
  tabs: typeof DROPDOWN_TABS;
}) {
  const [left, setLeft] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const moveNub = () => {
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");

        if (!hoveredTab || !overlayContent) return;

        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();

        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

        setLeft(tabCenter);
      }
    };

    moveNub();

    window.addEventListener("resize", moveNub);

    return () => {
      window.removeEventListener("resize", moveNub);
    };
  }, [selected, isMounted]);

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-gray-200 bg-white"
    />
  );
}

// CONTENT COMPONENTS

// Services Content - 8 AI Solutions in 2-column grid
function ServicesContent() {
  const services = [
    { name: "Chatbot Development", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "Workflow Automations", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "LLM Development", href: "#services" },
    { name: "AI Consulting", href: "#services" },
    // { name: "Data Analysis", href: "#services" },
    // { name: "Talent Acquisition", href: "#services" },
  ];

  return (
    <div className="p-3">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Our AI Solutions</h3>
      <div className="grid grid-cols-2">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="group flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg
                className="w-4 h-4 text-blue-600"
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
            <span className="font-normal text-gray-700 group-hover:text-blue-600">
              {service.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Product Content - Solutions and Case Studies
function ProductContent() {
  const products = [
    { name: "Our Solutions", href: "#innovation" },
    { name: "Case Studies", href: "#clients" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Innovation Lab", href: "#innovation" },
    { name: "Client Portfolio", href: "#clients" },
    { name: "Technology Stack", href: "#services" },
  ];

  return (
    <div className="p-3">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Our Products</h3>
      <div className="grid grid-cols-2">
        {products.map((product, index) => (
          <a
            key={index}
            href={product.href}
            className="group flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <span className="font-normal text-gray-700 group-hover:text-purple-600">
              {product.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
