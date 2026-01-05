"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModal from "./AuthModal";

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
  { name: "Work", href: "/work" },
  { name: "Plan", href: "#innovation" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function AdrigNavbarTabs() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthMode("signup");
    setIsAuthModalOpen(true);
  };

  const navbarBgClass =
    isHomePage && !isScrolled
      ? "bg-transparent"
      : "bg-[#0a1f5e] backdrop-blur-sm shadow-lg";

  return (
    <>
      <header
        className={`${navbarBgClass} fixed top-0 left-0 right-0 z-[9999] transition-all duration-300`}
        style={{ willChange: 'transform' }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-12 w-auto">
              <Link href="/" className="flex items-center space-x-3 h-12">
                <img
                  src="/images/Adrig.PNG"
                  alt="Adrig Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col justify-center h-12">
                  <span className="text-xl font-bold text-white leading-tight">
                    ADRIG AI
                  </span>
                  <span className="text-sm text-white leading-tight">
                    Technologies
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Tabs tabs={DROPDOWN_TABS} />
                {NAV_LINKS.map((link) =>
                  link.href.startsWith("#") ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-2 h-12 flex-shrink-0">
              <button
                onClick={handleLoginClick}
                className="px-3 py-1.5 h-9 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center min-w-[65px] text-xs"
              >
                LOGIN
              </button>
              <button
                onClick={handleSignupClick}
                className="px-3 py-1.5 h-9 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-1.5 min-w-[75px] text-xs"
              >
                <span>SIGN UP</span>
                <img src="/right-up-blue.png" alt="arrow" className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-white/20 mt-4 pt-4 pb-4 bg-[#0a1f5e]/15 backdrop-blur-md rounded-b-2xl -mx-2 px-2">
                {/* Services Accordion */}
                <div className="mb-3">
                  <details className="group">
                    <summary className="flex items-center justify-between px-4 py-2 text-white font-medium cursor-pointer hover:bg-white/10 rounded-lg">
                      Services
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
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
                    </summary>
                    <div className="mt-2 pl-4 space-y-1">
                      <Link
                        href="/services/saas-development"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Software Development
                      </Link>
                      <Link
                        href="/services/generative-ai"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Generative AI
                      </Link>
                      <Link
                        href="/services/ai-ml"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Artificial Intelligence and ML
                      </Link>
                      <Link
                        href="/services/data-engineering"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Data Engineering
                      </Link>
                      <Link
                        href="/services/blockchain"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blockchain
                      </Link>
                      <Link
                        href="/services/hire-developers"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Hire Developers
                      </Link>
                    </div>
                  </details>
                </div>

                {/* Products Accordion */}
                <div className="mb-3">
                  <details className="group">
                    <summary className="flex items-center justify-between px-4 py-2 text-white font-medium cursor-pointer hover:bg-white/10 rounded-lg">
                      Product
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
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
                    </summary>
                    <div className="mt-2 pl-4 space-y-1">
                      <Link
                        href="/products/rbms"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        RBMS
                      </Link>
                      <Link
                        href="/products/billsapp"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        BillsApp
                      </Link>
                      <a
                        href="https://aladdyn.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Aladdyn.io
                      </a>
                      <a
                        href="https://trackon-ruddy.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-blue-100 hover:bg-white/10 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Track-On
                      </a>
                    </div>
                  </details>
                </div>

                {/* Regular Links */}
                <Link
                  href="/work"
                  className="block px-4 py-2 text-white font-medium hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-white font-medium hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-white font-medium hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Auth Buttons - Mobile */}
                <div className="mt-4 space-y-2 px-4">
                  <button
                    onClick={() => {
                      handleLoginClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-2 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200 uppercase text-xs tracking-wide"
                  >
                    LOGIN
                  </button>
                  <button
                    onClick={() => {
                      handleSignupClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-2 bg-white text-primary font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl uppercase text-xs tracking-wide flex items-center justify-center gap-2"
                  >
                    <span>SIGN UP</span>
                    <img
                      src="/right-up-blue.png"
                      alt="right-up"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            )}
        </nav>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
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
      className="relative flex space-x-6 overflow-visible"
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
      className={`flex items-center space-x-1 font-medium transition-colors ${
        selected === tab.id
          ? "text-white"
          : "text-white hover:text-blue-200"
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
      className="absolute left-0 top-[calc(100%_+_16px)] rounded-2xl bg-white shadow-2xl border border-gray-200 z-[10000]"
      style={{ willChange: 'transform' }}
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

// Services Content - Mega Menu with Sub-dropdowns
function ServicesContent() {
  const servicesData = {
    "Software Development": {
      description: "Custom software solutions for your business",
      subOptions: [
        { name: "Software Development", description: "Custom software development services", href: "/services/software-development" },
        { name: "SAAS Development", description: "Software as a Service solutions", href: "/services/saas-development" },
        { name: "Software Consulting", description: "Expert software consulting services", href: "/services/software-consulting" },
        { name: "UI Design Services", description: "User interface and experience design", href: "/services/ui-design-services" },
        { name: "Enterprise Software Development", description: "Large-scale enterprise solutions", href: "/services/enterprise-software-development" },
        { name: "Web Application Development", description: "Modern web application solutions", href: "/services/web-application-development" },
        { name: "Digital Transformation", description: "Digital transformation consulting", href: "/services/digital-transformation" },
        { name: "Mobile App Development", description: "Native and cross-platform mobile apps", href: "/services/mobile-app-development" },
      ],
      href: "/services/software-development",
    },
    "Generative AI": {
      description: "Advanced AI solutions for content generation",
      subOptions: [
        { name: "Generative AI Development", description: "Build end-to-end GenAI solutions tailored to your business", href: "/services/generative-ai-development" },
        { name: "Generative AI Integration Services", description: "Embed GenAI into your existing products and workflows", href: "/services/generative-ai-integration-services" },
        { name: "Generative Consulting Company", description: "Strategic advisory for GenAI adoption and roadmap", href: "/services/generative-consulting-company" },
        { name: "Hire Generative AI Engineers", description: "Augment your team with expert GenAI engineers", href: "/services/hire-generative-ai-engineers" },
        { name: "AI Agent Development", description: "Custom AI agents that automate complex tasks", href: "/services/ai-agent-development" },
        { name: "AI Copilot Development", description: "Task-specific copilots that boost team productivity", href: "/services/ai-copilot-development" },
        { name: "AI in Marketing Agent Development", description: "AI agents for personalization, campaigns, and insights", href: "/services/ai-in-marketing-agent-development" },
        { name: "Hire Prompt Engineers", description: "Specialists to design, optimize, and maintain prompts", href: "/services/hire-prompt-engineers" },
        { name: "Adaptive AI Development Company", description: "Self-learning systems that adapt to changing needs", href: "/services/adaptive-ai-development-company" },
        { name: "ChatGPT Developers", description: "Custom solutions built on ChatGPT and OpenAI models", href: "/services/chatgpt-developers" },
        { name: "Stable Diffusion Developers", description: "Image generation pipelines with Stable Diffusion", href: "/services/stable-diffusion-developers" },
        { name: "Large Language Model Development", description: "Custom LLMs tuned to your domain and data", href: "/services/large-language-model-development" },
      ],
      href: "/services/generative-ai",
    },
    "Artificial Intelligence and ML": {
      description: "Machine learning and AI solutions",
      subOptions: [
        { name: "AI Development", description: "End-to-end AI solution design and delivery", href: "/services/ai-ml" },
        { name: "AI Consulting", description: "Strategy, roadmap, and advisory for AI adoption", href: "/services/ai-consulting" },
        { name: "AI Deployment Services", description: "Productionizing AI/ML models with MLOps best practices", href: "/services/ai-deployment-services" },
        { name: "Hire AI Engineers", description: "Augment teams with experienced AI engineers", href: "/services/hire-ai-engineers" },
        { name: "AI as a Service", description: "Managed AI services tailored to your stack", href: "/services/ai-as-a-service" },
        { name: "Hire Action Transformer Developers", description: "Specialists in modern transformer-based architectures", href: "/services/hire-action-transformer-developers" },
        { name: "Enterprise AI Development", description: "Scalable AI systems for enterprise workloads", href: "/services/enterprise-ai-development" },
        { name: "AI Chatbot Development Company", description: "Custom conversational AI tailored to your domain", href: "/services/ai-chatbot-development-company" },
        { name: "Enterprise AI Chatbot Development Company", description: "Enterprise-grade chatbots with compliance and security", href: "/services/enterprise-ai-chatbot-development-company" },
        { name: "Transformer Model Development", description: "Custom transformer and foundation model builds", href: "/services/transformer-model-development" },
        { name: "ML Ops Consulting Services", description: "Pipelines, monitoring, and CI/CD for ML in production", href: "/services/ml-ops-consulting-services" },
      ],
      href: "/services/ai-ml",
    },
    "Data Engineering": {
      description: "Robust data infrastructure and pipeline solutions",
      subOptions: [
        { name: "Data Engineering Services", description: "End-to-end data engineering for reliable pipelines" },
        { name: "Hire Data Scientists", description: "Augment teams with experienced data scientists" },
        { name: "Data Analytics Service", description: "Analytics solutions for insights and decision-making" },
        { name: "Data Annotation Services", description: "High-quality labeling for ML and AI workloads" },
        { name: "ML Model Engineering", description: "Production-grade ML model design and delivery" },
        { name: "Machine Learning Development", description: "Custom ML solutions from prototyping to production" },
        { name: "ML and Data Science Consulting", description: "Strategy and advisory for ML and data initiatives" },
        { name: "Big Data Consulting", description: "Architecture and optimization for large-scale data" },
      ],
      href: "/services/data-engineering",
    },
    "Blockchain": {
      description: "Blockchain solutions and development services",
      subOptions: [
        { name: "Blockchain Development", description: "Custom blockchain solutions for your business" },
        { name: "Blockchain Consulting Services", description: "Strategic advisory and consulting for blockchain adoption" },
        { name: "Substrate Development", description: "Build custom blockchains using Substrate framework" },
        { name: "Ethereum dApp Development Company", description: "Decentralized application development on Ethereum" },
        { name: "Hyperledger Development", description: "Enterprise blockchain solutions with Hyperledger" },
        { name: "Hire Golang Developers", description: "Expert Golang developers for blockchain projects" },
        { name: "Cosmos Blockchain Development Company", description: "Cosmos blockchain and interchain solutions" },
        { name: "Solana Development", description: "High-performance blockchain development on Solana" },
        { name: "Tezos Development", description: "Self-amending blockchain development on Tezos" },
        { name: "Stellar Development", description: "Payment and financial solutions on Stellar network" },
        { name: "Smart Contract Audit", description: "Comprehensive security audits for smart contracts" },
        { name: "Crypto Wallet Development Solution", description: "Secure cryptocurrency wallet development" },
      ],
      href: "/services/blockchain",
    },
    "Hire Developers": {
      description: "Find and hire top-tier development talent",
      subOptions: [
        { name: "Hire ML Developers", description: "Expert machine learning developers for your AI projects" },
        { name: "DevOps Engineers", description: "Skilled DevOps engineers for infrastructure and automation" },
        { name: "Offshore Engineers", description: "Cost-effective offshore development talent" },
        { name: "App Developer", description: "Mobile and web application developers" },
        { name: "Hire Golang Developers", description: "Experienced Go developers for scalable backend systems" },
        { name: "Blockchain Engineers", description: "Blockchain and cryptocurrency development experts" },
        { name: "Hire Dedicated Developers", description: "Dedicated developers for long-term projects" },
        { name: "Hire Cosmos Developers", description: "Cosmos blockchain development specialists" },
        { name: "Hire Stellar Developers", description: "Stellar blockchain and payment system developers" },
        { name: "Full Stack Developers", description: "Versatile full stack developers for end-to-end solutions" },
      ],
      href: "/services/hire-developers",
    },
  };

  const serviceKeys = Object.keys(servicesData) as (keyof typeof servicesData)[];
  const [hoveredService, setHoveredService] = useState<
    (typeof serviceKeys)[number] | null
  >(null);

  return (
    <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Left Side - Service Categories */}
      <div className={`w-72 bg-gradient-to-b from-gray-50 to-white transition-all duration-200 ${
        hoveredService ? "border-r border-gray-200" : ""
      }`}>
        <div className="py-3">
              {serviceKeys.map((serviceName) => (
            <button
              key={serviceName}
              onMouseEnter={() => setHoveredService(serviceName)}
              className={`w-full text-left px-5 py-3.5 transition-all duration-200 relative group ${
                hoveredService === serviceName
                  ? "bg-white text-blue-600 shadow-sm border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-white/60 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-medium text-sm leading-snug ${
                  hoveredService === serviceName ? "text-blue-600" : "text-gray-700"
                }`}>
                  {serviceName}
                </span>
                {hoveredService === serviceName && (
                  <svg
                    className="w-4 h-4 text-blue-600 ml-2"
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
                )}
              </div>
              {hoveredService === serviceName && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Sub Options Display */}
      <AnimatePresence mode="wait">
            {hoveredService && servicesData[hoveredService] && (
          <motion.div
            key={hoveredService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-[600px] p-8 bg-white min-h-[400px] flex-shrink-0"
          >
            <div className="space-y-6">
            {/* Sub Options Grid */}
            <div className="grid grid-cols-1 gap-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar" data-lenis-prevent>
                  {servicesData[hoveredService].subOptions.map(
                    (subOption, index) => (
                  <Link
                    key={index}
                        href={
                          "href" in subOption && subOption.href
                            ? subOption.href
                            : servicesData[hoveredService].href
                        }
                    className="group/item flex gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-white border border-gray-100 hover:border-blue-200 transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover/item:from-blue-700 group-hover/item:to-blue-600 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-300"
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
                      <h4 className="font-semibold text-gray-900 mb-1.5 text-base group-hover/item:text-blue-600 transition-colors duration-200">
                        {subOption.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {subOption.description}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex-shrink-0 flex items-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                    </div>
                  </Link>
                )
              )}
            </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Product Content - Solutions and Case Studies
function ProductContent() {
  const products = [
    { name: "RBMS", href: "/products/rbms", isExternal: false },
    { name: "BillsApp", href: "/products/billsapp", isExternal: false },
    { name: "Aladdyn.io", href: "https://aladdyn.io/", isExternal: true },
    {
      name: "Track-On",
      href: "https://trackon-ruddy.vercel.app/",
      isExternal: true,
    },
  ];

  return (
    <div className="p-3">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Our Products</h3>
      <div className="grid grid-cols-2">
        {products.map((product, index) => {
          const content = (
            <>
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
            </>
          );

          return product.isExternal ? (
            <a
              key={index}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
            >
              {content}
            </a>
          ) : (
            <Link
              key={index}
              href={product.href}
              className="group flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
