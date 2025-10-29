import Button from "./ui/Button";

export default function About() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interface designs",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>

              {/* Main content box */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-white opacity-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Stats overlay */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              About Adrig
            </div>
            <h2 className="mb-6 text-gray-900">
              Building the Future of Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Adrig, we're passionate about transforming businesses through
              innovative technology solutions. With over 15 years of experience,
              we've helped hundreds of companies achieve their digital
              transformation goals.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, designers, and consultants work
              collaboratively to deliver solutions that not only meet but exceed
              expectations.
            </p>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {service.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" href="#contact">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
