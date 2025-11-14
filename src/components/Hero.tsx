import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0a1f5e] via-[#1a3a8a] to-[#2463eb] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 items-center">
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f5e]/80 via-[#1a3a8a]/70 to-[#2463eb]/80"></div>

      <div className="container-custom relative z-10 pt-24 pb-16 px-6 md:pt-80 md:pb-40 lg:pt-80 flex items-center min-h-screen">
        {/* Left Content Only */}
        <div className="max-w-4xl w-full">
          <h1 className="mb-4 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Driving growth with AI
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-8 max-w-md leading-relaxed">
            We craft workflow automations and bespoke AI solutions for forward
            thinking companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200 uppercase text-xs sm:text-sm tracking-wide">
              OUR SERVICES
            </button>
            <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl uppercase text-xs sm:text-sm tracking-wide flex items-center justify-center">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
