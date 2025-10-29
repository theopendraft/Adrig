export default function Partnership() {
  const stats = [
    {
      number: "30+",
      label: "Indian Clients",
    },
    {
      number: "10+",
      label: "International Clients",
    },
    {
      number: "15",
      label: "In-house Experts",
    },
    {
      number: "2+",
      label: "Years of Excellence",
    },
  ];

  return (
    <section id="partnership" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Large Image/Card Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-400 rounded-3xl shadow-2xl overflow-hidden">
              {/* Placeholder for image - can be replaced later */}
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <svg
                  className="w-32 h-32 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Proudly partnering with leading organizations{" "}
              <span className="text-primary">Internationally.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Delivering cutting-edge AI solutions that fuel growth and
              transformation with leading organizations in India, the UK, and
              the US.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
