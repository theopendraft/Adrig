"use client";

import { useState } from "react";
import Link from "next/link";

export default function RBMS() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    "Centralized Booking Engine - Unified handling of reservations, cancellations, modifications, and PNRs across counters, web, and mobile.",
    "Real-Time Train and Seat Status - Live updates on train location, coach occupancy, available seats, and platform information.",
    "AI-Driven Seat Allocation and Optimization - Smart seat assignment to reduce conflicts, improve utilization, and handle peak loads smoothly.",
    "Secure Payment and Fraud Protection - Integration with multiple payment gateways with strong encryption, audit trails, and anomaly detection.",
    "Role-Based Admin and Operations Dashboards - Dashboards for supervisors, station masters, and back-office teams with granular access control.",
    "Comprehensive Reporting and Analytics - Reports on passenger flow, revenue, load factors, delays, and operational KPIs.",
  ];

  const benefits = [
    {
      number: "01",
      title:
        "Faster, smoother bookings - Reduce ticket booking and confirmation time significantly across counters and digital channels.",
    },
    {
      number: "02",
      title:
        "Higher operational efficiency - Automate manual workflows, reduce paperwork, and streamline coordination between stations and control rooms.",
    },
    {
      number: "03",
      title:
        "Better asset utilization - Optimize seat allocation, coach usage, and train capacity to improve yields per train.",
    },
    {
      number: "04",
      title:
        "Data-driven decision making - Use detailed analytics to plan routes, schedules, pricing, and staffing with confidence.",
    },
    {
      number: "05",
      title:
        "Improved passenger experience - Provide clear, timely information on train status, platforms, and delays, boosting satisfaction and trust.",
    },
    {
      number: "06",
      title:
        "Stronger revenue and compliance - Increase ticket revenue through optimization while maintaining auditability, security, and regulatory compliance.",
    },
  ];

  const methodologies = [
    {
      title: "Centralized Booking and Reservation Engine",
      description:
        "Handles reservations, RAC/WL logic, quotas, and real-time seat inventory across all sales channels.",
    },
    {
      title: "AI-Based Seat Allocation",
      description:
        "Models that dynamically assign and reassign seats to minimize conflicts and maximize occupancy.",
    },
    {
      title: "Dynamic Pricing and Revenue Management",
      description:
        "Optional module for adjusting fares based on demand, seasonality, and occupancy.",
    },
    {
      title: "Real-Time Operations and Tracking Dashboard",
      description:
        "Live views of train positions, delays, platform assignments, and alerts for operations teams.",
    },
    {
      title: "Fraud Detection and Security Layer",
      description:
        "Detection of suspicious transactions and misuse patterns, with detailed logs and audit trails.",
    },
    {
      title: "Passenger Communication and Notifications",
      description:
        "SMS/app/email alerts for booking confirmations, coach/berth info, platform changes, and delays.",
    },
  ];

  const faqs = [
    {
      question: "How does RBMS handle peak booking periods?",
      answer:
        "RBMS is designed to scale horizontally, supporting high transaction volumes during festival seasons, tatkal windows, and special train bookings. Load-balancing, caching, and optimized database queries ensure low latency and minimal failures even under heavy load.",
    },
    {
      question: "What security measures are in place for payment processing?",
      answer:
        "RBMS integrates with PCI-DSS-compliant payment gateways and uses strong encryption for all sensitive data. Role-based access, detailed audit logs, and anomaly detection help prevent fraud and unauthorized access.",
    },
    {
      question: "Can RBMS integrate with our existing railway systems?",
      answer:
        "Yes. RBMS is built with APIs and connectors to integrate with legacy reservation systems, timetable databases, accounting tools, and third-party apps. We work with your IT team to map data flows and ensure a smooth, phased rollout.",
    },
    {
      question: "What kind of support and maintenance do you provide?",
      answer:
        "We offer implementation support, user training, and ongoing maintenance. This includes monitoring, performance tuning, security patches, feature updates, and SLA-based support channels for your operations team.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              RBMS -{" "}
              <span className="text-primary">
                Railway Booking Management System
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Our Railway Booking Management System (RBMS) is a modern, end to
              end platform designed for large railway networks such as Southern
              Railways. It centralizes ticket booking, reservation management,
              seat allocation, and passenger communication while providing real
              time train tracking and deep operational analytics. RBMS connects
              stations, ticket counters, web portals, and mobile apps into a
              single, secure ecosystem so passengers get a seamless experience
              and railway teams get full visibility and control.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              SCHEDULE A CONSULTATION
              <img
                src="/right-up-white.png"
                alt="right-up"
                className="w-6 h-6 "
              />
            </Link>
          </div>

          {/* Two Image Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Left Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>

            {/* Right Box */}
            <div className="aspect-video bg-gray-400 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Heading and Description */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies.
              </p>
            </div>

            {
              /* Right Side - Features List */
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className=" flex items-start gap-4  p-4 rounded-xl "
                  >
                    {/* Blue Arrow Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded flex items-center justify-center">
                      <img
                        src="/right-up-white.png"
                        alt="right-up"
                        className="w-8 h-8"
                      />
                    </div>
                    {/* Feature Text */}
                    <p className="text-lg text-gray-900 leading-relaxed flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Your Business Benefits
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
            </p>
          </div>

          {
            /* Benefits Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="h-48 bg-gray-100 rounded-xl p-6 justify-between flex flex-col"
                >
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded mb-4">
                    {benefit.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-gray-700 leading-relaxed">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          }
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Core Modules & Capabilities
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              Advanced modules tailored for modern railway operations.
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {methodologies.map((methodology, index) => (
              <div key={index} className="">
                <div className="flex items-start gap-4">
                  {/* Blue Arrow Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded flex items-center justify-center">
                    <img
                      src="/right-up-white.png"
                      alt="right-up"
                      className="w-6 h-6"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {methodology.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {methodology.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 "
                onMouseEnter={() => setOpenFaq(index)}
                onMouseLeave={() => setOpenFaq(null)}
              >
                {/* Question */}
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded">
                        <img
                          src="/remove.png"
                          alt="remove"
                          className="w-4 h-4"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
                        <img src="/plus.png" alt="plus" className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Contact our team today to explore how our RBMS - Railway Booking
              Management System services can help you achieve your business
              goals.
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
