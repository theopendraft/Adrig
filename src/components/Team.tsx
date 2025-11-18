"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import AdrigNavbarTabs from "./AdrigNavbarTabs";
import Footer from "./Footer";

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };
  const teamMembers = [
    {
      name: "Vijay Murugadoss",
      role: "Founder & CEO",
      image: "/Website/Teams/members/Vijay.jpg",
      linkedin: "https://www.linkedin.com/in/vijayasvj/",
    },
    {
      name: "Sarakesh Ramesh",
      role: "Project Manager",
      image: "/Website/Teams/members/Sarakesh.png",
      linkedin: "https://www.linkedin.com/in/sarakesh-r-8b8942270/",
    },
    {
      name: "Nishaanth M S",
      role: "Senior Architect",
      image: "/Website/Teams/members/Nishant.jpg",
      linkedin: "https://www.linkedin.com/in/nishaaanth2/",
    },
    {
      name: "Devadharsanp",
      role: "Project Manager",
      image: "/Website/Teams/members/Deva.jpg",
      linkedin: "https://www.linkedin.com/in/devadharsan-p-481a972a4/",
    },
    {
      name: "Sneha",
      role: "Director",
      image: "/Website/Teams/members/Sneha.jpg",
      linkedin: "https://www.linkedin.com/in/d-a-sneha-046551151/",
    },
    {
      name: "Jerome Ignatius",
      role: "Director",
      image: "/Website/Teams/members/Jerome.jpg",
      linkedin: "https://www.linkedin.com/in/jeromeignatius/",
    },
    {
      name: "Rohan Murmu",
      role: "Full Stack Developer",
      image: "/Website/Teams/members/Rohan.jpg",
      linkedin: "https://www.linkedin.com/in/rohan-murmu/",
    },
    {
      name: "Sridhar Jeyakumar",
      role: "Full Stack Developer",
      image: "/Website/Teams/members/Sridhar.jpg",
      linkedin: "https://www.linkedin.com/in/sridhar-jeyakumar-41522621a/",
    },
    {
      name: "Jagatheswar R V",
      role: "Data Analyst",
      image: "/Website/Teams/members/Jagatheswar.png",
      linkedin: "https://www.linkedin.com/in/jagatheswarrv/",
    },
    {
      name: "Yokesh Selevakumar",
      role: "Full Stack Developer",
      image: "/Website/Teams/members/Yogesh.jpg",
      linkedin: "https://www.linkedin.com/in/yogeshwaran-k-a44342275/",
    },
    {
      name: "Yogeshwaram",
      role: "Full Stack Developer",
      image: "/Website/Teams/members/Yogesh2.jpg",
      linkedin: "#",
    },
  ];

  const metrics = [
    {
      number: "4.8/5",
      label: "Customer satisfaction",
      description:
        "Our clients consistently rate us high for trust, support, and performance.",
    },
    {
      number: "1000+",
      label: "Businesses Powered Across India",
      description:
        "From Bangalore to Chennai to Mumbai - we serve a diverse range of industries and company sizes.",
    },
    {
      number: "95%",
      label: "Client Retention",
      description:
        "We build long-term partnerships and value that keeps our customers coming back.",
    },
    {
      number: "Instant",
      label: "Insights, Real-Time Decisions",
      description:
        "Live dashboards and automated reporting for timely actions.",
    },
  ];

  const whyChoose = [
    {
      title: "Built for India",
      description: "Local use cases, local integrations, and local support",
    },
    {
      title: "Cost-Effective",
      description: "Pricing that works for SMEs and large enterprises",
    },
    {
      title: "Scalable",
      description:
        "Grow with us - as your data volume and needs increase, so does our platform",
    },
    {
      title: "Trust-first",
      description: "Security, transparency, and a partnership mindset",
    },
  ];

  const offerings = [
    {
      title: "Live Analytics Dashboard",
      description:
        "Monitor key metrics in real-time, with full customisation for your business needs.",
      icon: "📊",
    },
    {
      title: "Automated Reports",
      description:
        "Schedule reports for daily, weekly, or monthly delivery straight to your inbox or Slack / Teams.",
      icon: "📈",
    },
    {
      title: "Predictive Analytics & AI Insights",
      description:
        "Use machine-learning models to forecast trends, identify anomalies, and uncover growth opportunities.",
      icon: "🔮",
    },
    {
      title: "Strong Data Security",
      description:
        "GDPR-style practices adapted for India. Your data is encrypted, backed up, and protected with role-based access controls.",
      icon: "🔒",
    },
    {
      title: "Mobile First",
      description:
        "Access your dashboards on the go with a mobile-optimised interface - perfect for business leaders on the move.",
      icon: "📱",
    },
    {
      title: "Integrations",
      description:
        "Seamlessly connect with your CRM, ERP, marketing tools, and more - right where your data already lives.",
      icon: "🔗",
    },
  ];

  const testimonials = [
    {
      text: "Adrig AI has changed how we make decisions. Data is no more a burden, but a growth lever.",
      author: "Neha Reddy",
      role: "Operations Lead",
    },
    {
      text: "Automated weekly reports help us save hours. The insights are sharp and very relevant to our business.",
      author: "Arjun Mehta",
      role: "Product Manager",
    },
    {
      text: "Their dashboard is intuitive and the customer support is truly responsive. Highly recommended.",
      author: "Priyanka Sharma",
      role: "CFO",
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Rating Badge */}
              {/* <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-900 font-semibold">
                  4.97/5 reviews
                </span>
              </div> */}

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover our journey and what drives us
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by data experts, we create cutting-edge SaaS analytics
                platforms tailored for businesses of all sizes.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="btn-primary px-8 py-4 text-base font-semibold flex items-center gap-2 rounded-full">
                    Get Started
                    <svg
                      className="w-5 h-5"
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
                </Link>
                {/* <Link href="/contact">
                  <button className="px-8 py-4 text-base font-semibold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                    Free trial
                  </button>
                </Link> */}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Website/Teams/Teams1.jpg"
                  alt="Team"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Hero / Intro (About Us) */}
      <section className="relative bg-gray-100 py-20 md:py-32 hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Indian Businesses with{" "}
              <span className="text-primary">Smart AI Analytics</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 font-semibold">
              At Adrig AI Technologies, we transform complex business data into
              simple, actionable insights - helping Indian companies make
              intelligent, real-time decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary px-8 py-3 text-base font-semibold flex items-center gap-2 rounded-full">
                  Try Free for 14 Days
                  <svg
                    className="w-5 h-5"
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
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 text-base font-semibold border-2 border-gray-300 text-gray-700 rounded-full hover:border-primary hover:text-primary transition-colors">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Impact (Trust / Metrics) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[45%_1fr] gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-300 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/Website/Teams/Teams2.jpg"
                  alt="Our Impact"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="text-4xl md:text-5xl font-bold text-gray-900">
                        {metric.number}
                      </div>
                      <div className="text-base md:text-lg font-semibold text-gray-900 mt-2">
                        {metric.label.split(" ").map((word, i, arr) => {
                          const midpoint = Math.ceil(arr.length / 2);
                          if (i === midpoint) {
                            return (
                              <span key={i}>
                                <br />
                                {word}{" "}
                              </span>
                            );
                          }
                          return (
                            <span key={i}>
                              {word}
                              {i < arr.length - 1 ? " " : ""}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed md:pt-2">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Old Impact Section - Hidden */}
      <section className="section-padding bg-white hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across India to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-4xl font-bold text-primary mb-3">
                  {metric.number}
                </div>
                <div className="text-gray-900 font-semibold text-lg mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Meet the Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header with Navigation Buttons */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet the team
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="rounded-full btn-primary px-4 py-4 text-base font-semibold gap-2"
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="rounded-full btn-primary px-4 py-4 text-base font-semibold gap-2"
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6"
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
              </button>
            </div>
          </div>

          {/* Scrollable Team Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[380px]"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/3.2] bg-gray-300 rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={380}
                    height={506}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Info */}
                <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-4 text-base font-semibold gap-2"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who We Are */}
      <section className="section-padding bg-white hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image Box */}
            <div className="aspect-[4/4.2] bg-gray-500 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>

            {/* Content Side */}
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Innovation, Driven by Data
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Adrig AI Technologies is more than just a data analytics company
                - we&apos;re your strategic AI partner. We believe in harnessing
                the power of artificial intelligence to simplify analytics. In a
                fast-paced Indian business landscape, decision-makers need
                clarity and speed. Our platform helps teams translate raw data
                into meaningful insights so they can grow confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Journey */}
      <section className="section-padding bg-white hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                From Bangalore Garage to Intelligent Analytics Hub
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our story began in a small co-working space in Bangalore. As
                founders, we saw how many Indian businesses struggled with their
                data: silos, delayed reports, and unclear trends. We set out to
                change that.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a lean team of data scientists and engineers, we built our
                first prototype - a real-time analytics dashboard tailored for
                SMEs. Feedback was strong, and soon we scaled. Today, Adrig AI
                Technologies supports hundreds of Indian companies, helping them
                become data-driven. And we&apos;re still growing - expanding,
                innovating, and building smarter AI-powered tools for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What We Offer */}
      <section className="section-padding bg-gray-50 hidden">
        <div className="container-custom">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 px-32">
              Key Features Designed for Indian Business Realities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto px-32">
              We craft workflow automations and bespoke AI solutions for
              forward-thinking companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold mb-6">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
                  {offering.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Our Clients Say */}
      <section className="section-padding bg-gray-50 hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-primary text-4xl mb-4">&quot;</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Adrig AI */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Adrig AI
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We understand the challenges Indian businesses face - rapid
                scaling, tight margins, talent gaps, and evolving markets.
                That&apos;s why our product is:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our predictive analytics solutions can help
              your business gain a competitive edge and drive growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              GET IN TOUCH
              <img
                src="/right-up-white.png"
                alt="Arrow Right"
                className="w-6 h-6 "
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
