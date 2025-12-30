import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/%3Ahero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional subtle overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto relative z-10 pt-32 pb-16 px-6 lg:px-8 flex items-center min-h-screen">
        {/* Left Content Only */}
        <div className="max-w-2xl w-full">
          <h1 className="mb-6 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Driving growth with AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-xl leading-relaxed">
            We craft workflow automations and bespoke AI solutions for forward thinking companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#services" className="inline-block">
              <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200 uppercase text-sm tracking-wide">
                OUR SERVICES
              </button>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl uppercase text-sm tracking-wide flex items-center justify-center"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
