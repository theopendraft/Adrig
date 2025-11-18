"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "Miporis",
      text: "Adrig AI helped us automate our compliance workflows with precision. Their solutions improved our accuracy and reduced manual workload significantly.",
    },
    {
      company: "Licfo Books",
      text: "The team manages our entire tech ecosystem — from the website to backend support. Fast, reliable, and always available.",
    },
    {
      company: "Barron Tech",
      text: "The employee tracking app transformed our daily operations. We now have transparent movement logs and automated expense calculations.",
    },
    {
      company: "Southern Railways",
      text: "Adrig AI modernized core railway systems with scalable, intelligent solutions. Their contribution has improved our efficiency and safety.",
    },
    {
      company: "VIT Chennai",
      text: "Our research teams received exceptional support from Adrig AI. Their technical expertise accelerated our innovation projects.",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 pb-44">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Testimonials
        </h2>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 pr-14">
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight ">
              Hear What Our Clients Say About Us
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
Adrig AI's innovative approach and deep expertise were instrumental in transforming our operational processes. Their dedication to delivering high-quality, scalable AI solutions is truly commendable.
            </p>
            <Link href="/work">
              <button className="btn-primary px-4 sm:px-8 py-2 text-xs sm:text-sm font-semibold flex items-center gap-2 rounded-full mt-8">
                OUR WORK
                <img
                  src="/right-up-white.png"
                  alt="right-up"
                  className="w-6 h-6"
                />
              </button>
            </Link>
          </div>

          {/* Right Side - Testimonial Carousel */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gray-100 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between">
              {/* Company Name and Audio Icon */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentSlide].company}
                </h4>
                <div className="flex items-center gap-2">
                  {/* <button className="text-gray-900 hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button> */}
                  {/* <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-4 bg-gray-400 rounded-full"
                      ></div>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonials[currentSlide].text}
              </p>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-gray-900 w-8"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow opacity-0 lg:opacity-100"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow opacity-0 lg:opacity-100"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
