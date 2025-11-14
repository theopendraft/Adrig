"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "A genuine conversation",
      description:
        "No scripts or sales talk, just a real discussion about your vision.",
    },
    {
      number: "02",
      title: "Discovery",
      description:
        "We take time to learn about your business, audience, and what sets you apart.",
    },
    {
      number: "03",
      title: "Creative direction",
      description:
        "We provide insightful and aesthetic ideas and possibilities tailored to your project.",
    },
    {
      number: "04",
      title: "Strategy presentation",
      description:
        "We share a focused plan that aligns creativity with purpose.",
    },
    {
      number: "05",
      title: "Proposal",
      description:
        "You receive a detailed outline of scope, deliverables, and investment.",
    },
    {
      number: "06",
      title: "Build and execute",
      description:
        "Once approved, we bring your vision to life with precision and care.",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    try {
      console.log("Form Data Submitted:", formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success state
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* SECTION 1: Contact Form Section */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container-custom">
          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT SECTION - Text & Icons Only */}
            <div className="flex flex-col justify-center space-y-8 p-14">
              {/* Hero Text */}
              <div className=" flex justify-between flex-col h-full">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Speak with an <span className="text-primary">Expert</span>,
                  <br />
                  not a salesperson
                </h1>

                <div className="space-y-6">
                  {/* Description */}
                  <p className="text-base font-semibold md:text-md text-gray-700 leading-relaxed max-w-xl">
                    Whether you&apos;re exploring an idea, planning a project,
                    or just curious about how we work, you&apos;ll always speak
                    with someone who can guide you with clarity, experience, and
                    genuine creative perspective.
                  </p>

                  {/* Contact Icons */}
                  <div className="flex items-center gap-4">
                    {/* Email Icon */}
                    <a
                      href="mailto:contact@adrigai.com"
                      className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                      aria-label="Email us"
                    >
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>

                    {/* Phone Icon */}
                    <a
                      href="tel:+919942105301"
                      className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                      aria-label="Call us"
                    >
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION - Contact Form */}
            <div className="flex items-center">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Get in touch
                </h3>
                {/* <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p> */}

                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-green-600 flex-shrink-0"
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
                      <p className="text-green-800 font-medium">
                        Message sent successfully! We&apos;ll be in touch soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-md border border-none ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-primary focus:ring-primary/20"
                      } focus:outline-none focus:ring-2 transition-all duration-200 bg-gray-100`}
                    />

                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="adrig@example.com"
                      className={`w-full px-4 py-3 rounded-md border border-none ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-primary focus:ring-primary/20"
                      } focus:outline-none focus:ring-2 transition-all duration-200 bg-gray-100`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-md border-none border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 bg-gray-100"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      rows={4}
                      className={`w-full px-4 py-3 rounded-md border-none ${
                        errors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-primary focus:ring-primary/20"
                      } focus:outline-none focus:ring-2 transition-all duration-200 resize-none bg-gray-100`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className=" bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <img
                            src="/right-up-white.png"
                            alt="Arrow Right"
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Process Grid Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Here&apos;s What To Expect
              </h2>
              <p className="text-lg font-medium md:text-lg text-gray-900 max-w-3xl mx-auto">
                A clear, thoughtful process designed to understand your vision,
                refine your ideas, and bring them to life with precision and
                purpose.
              </p>
            </div>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-gray-100 rounded-lg p-8 group lg:h-[280px] justify-between flex flex-col"
                >
                  {/* Title with Number */}
                  <div className="flex items-baseline justify-between mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 ml-4">
                      {step.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
