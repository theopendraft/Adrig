"use client";

import { useState } from "react";
import Link from "next/link";

export default function BillsApp() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    "Centralized Inventory Management - Track stock in real time across main warehouse, sub stores, and distribution points, with clear visibility of in and out movement.",
    "Automated Billing and Invoicing - Generate accurate invoices instantly, support multiple payment methods, and streamline the complete billing workflow.",
    "Multi Store Management - Manage multiple locations from a single dashboard with centralized control over pricing, stock, and promotions.",
    "Sales and Performance Analytics - Get detailed reports on product wise sales, store wise performance, margins, and trends over time.",
    "Stock Forecasting and Reorder Management - Forecast demand using historical data, set intelligent reorder levels, and prevent both stockouts and overstocking.",
    "Role Based Access and Audit Trails - Define user roles for store staff, managers, and admins, and maintain complete logs of key actions for compliance and security.",
  ];

  const benefits = [
    {
      number: "01",
      title: "Real time control over stock - Always know what's available, where, and in what quantity across warehouses, sub-stores, and outlets.",
    },
    {
      number: "02",
      title: "Faster, error free billing - Automate bill creation, tax calculations, and discounts to significantly reduce manual errors and counter time.",
    },
    {
      number: "03",
      title: "Better multi location coordination - Standardize processes and pricing across locations while still allowing store level flexibility where needed.",
    },
    {
      number: "04",
      title: "Stronger cash flow and profitability - Reduce leakages, speed up billing and collections, and optimize stock so money isn't locked in slow moving inventory.",
    },
    {
      number: "05",
      title: "Data driven decisions - Use live dashboards and reports to decide what to stock, where to stock, and when to run promotions.",
    },
    {
      number: "06",
      title: "Reduced operational overheads - Automate repetitive tasks for store staff and back office teams, freeing them to focus on growth and customer service.",
    },
  ];

  const methodologies = [
    {
      title: "Inventory and Stock Ledger",
      description:
        "Product wise, batch wise stock tracking with GRN, stock adjustments, transfers, and returns.",
    },
    {
      title: "Billing and POS Engine",
      description:
        "Fast invoice generation with support for multiple tax structures, discounts, schemes, and payment modes.",
    },
    {
      title: "Multi Store and Warehouse Management",
      description:
        "Centralized control for multiple branches with transfers, inter branch stock movement, and consolidated reporting.",
    },
    {
      title: "Sales and Profitability Analytics",
      description:
        "Store wise, product wise, and time based analytics to understand performance and improve assortment and pricing.",
    },
    {
      title: "Demand Forecasting and Replenishment",
      description:
        "Forecast future demand from historical data and auto suggest purchase or transfer quantities.",
    },
    {
      title: "Integrations and Exports",
      description:
        "Integrations or exports for popular accounting and ERP tools and configurable reports for finance and audit teams.",
    },
  ];

  const faqs = [
    {
      question: "How does Billzapp handle multiple store locations?",
      answer:
        "Billzapp is built for multi store environments. Each store operates on the same centralized system, with location specific stock, pricing rules if needed, and user roles. HO teams get consolidated views, while store managers see only their own location data.",
    },
    {
      question: "Can Billzapp integrate with existing accounting software?",
      answer:
        "Yes. Billzapp can integrate with popular accounting and ERP tools or export data in standard formats. This allows you to continue using your existing finance workflows while automating front end billing and inventory.",
    },
    {
      question: "How does the inventory forecasting work?",
      answer:
        "Billzapp analyzes historical sales, seasonality, and store wise demand patterns to estimate future requirements. Based on this, it recommends reorder points and quantities so you can avoid stockouts and reduce excess inventory.",
    },
    {
      question: "What kind of reporting and analytics do you provide?",
      answer:
        "Billzapp provides detailed reports on sales, margins, top performing products, low moving items, store wise comparisons, stock aging, and more. Dashboards can be tailored by role with owners, managers, and store leads each seeing the metrics that matter most to them.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              BillsApp - <span className="text-primary">Smart Billing Solution</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Billzapp is a comprehensive billing and inventory management system designed for FMCG suppliers, distributors, and multi-store retail chains. It centralizes stock management, billing, and store operations across all sub-stores and distribution centers, giving you real time visibility into inventory, sales, and performance. Billzapp connects your warehouses, outlets, sales teams, and finance systems so you can run leaner operations, reduce errors, and make better decisions from a single, unified platform.
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
                We craft workflow automations and bespoke AI solutions for forward-thinking companies.
              </p>
            </div>

            {/* Right Side - Features List */
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
              We craft workflow automations and bespoke AI solutions for forward-thinking companies.
            </p>
          </div>

          {/* Benefits Grid */
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
              Core Modules and Capabilities
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              Advanced modules tailored for FMCG operations.
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
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how Billzapp FMCG Billing and Inventory Management can centralize your operations, improve inventory control, and grow your margins.
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
