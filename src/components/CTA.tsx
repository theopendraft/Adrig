import Button from "./ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary to-blue-600 pb-32"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="mb-6 text-white animate-slide-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-slide-up">
            Join hundreds of satisfied clients who have already taken their
            business to the next level with Adrig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div>
              <svg
                className="w-8 h-8 mx-auto mb-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="font-semibold mb-1">Email Us</div>
              <div className="text-blue-100">contact@adrig.com</div>
            </div>

            <div>
              <svg
                className="w-8 h-8 mx-auto mb-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="font-semibold mb-1">Call Us</div>
              <div className="text-blue-100">+1 (555) 123-4567</div>
            </div>

            <div>
              <svg
                className="w-8 h-8 mx-auto mb-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="font-semibold mb-1">Visit Us</div>
              <div className="text-blue-100">123 Business St, City</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
