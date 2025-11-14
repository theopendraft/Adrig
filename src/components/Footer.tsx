export default function Footer() {
  const leftLinks = [
    { name: "Home", href: "#home" },
    { name: "Service", href: "#services" },
    { name: "Product", href: "#product" },
    { name: "Work", href: "#work" },
    { name: "Plan", href: "#plan" },
  ];

  const rightLinks = [
    { name: "AI Automation", href: "#ai-automation" },
    { name: "Software Development", href: "#software" },
    { name: "Data Analysis", href: "#data-analysis" },
    { name: "Chatbot Development", href: "#chatbot" },
    { name: "Workflow Automations", href: "#workflow" },
  ];

  return (
    <div id="footer" className="bg-gray-50 border-none">
      <footer className="bg-[#1a1a1a] text-gray-300 rounded-t-[3rem] overflow-hidden">
        <div className="container-custom py-16">
          {/* Top Section with Logo and Tagline */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left: Logo and Contact Info */}
            <div className="max-w-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                  <img
                    src="/images/Adrig.PNG"
                    alt="Adrig Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white leading-tight">
                    ADRIG AI
                  </span>
                  <span className="text-xs text-gray-400 leading-tight">
                    Technologies
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-400 mb-12 pt-12">
                <p>2, Sangothi Amman, Kovil,</p>
                <p>3rd Cross St, Sembakkam,</p>
                <p>Chennai, Tamil Nadu 600073</p>
                <p className="mt-3">+91 9942105301</p>
                <p>contact@adrig.co.in</p>
              </div>
            </div>

            {/* Right: Tagline and Button */}
            <div className=" items-center gap-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-md leading-tight">
                  Empowering businesses with cutting-edge AI solutions.
                </h2>
                <button className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-all duration-200 shadow-lg">
                  <svg
                className="w-8 h-8"
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
                </button>
              </div>
              {/* Links Section */}
              <div className="grid md:grid-cols-2 gap-12 mb-12 pt-12 border-t border-gray-700">
                {/* Left Column Links */}
                <div className="grid grid-cols-1">
                  {leftLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Right Column Links */}
                <div className="grid grid-cols-1">
                  {rightLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Adrig AI Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
