"use client";

import { useState } from "react";
import Link from "next/link";

export default function MLDataScienceConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Machine Learning Development",
      description:
        "Leveraging domain-specific data, ADRIG's ML engineers build adaptive, self-learning ML solutions for predictive analytics, NLP, and deep learning use cases.",
    },
    {
      number: "02",
      title: "Big Data Consulting Services",
      description:
        "Our big data consultants provide end-to-end guidance—from architecture assessment and ETL best practices to data pipeline design, tool selection, and tailored data infrastructure solutions.",
    },
    {
      number: "03",
      title: "Predictive Analytics",
      description:
        "Our data scientists build predictive ML models to forecast trends, uncover patterns, and drive data-driven decisions across use cases like demand forecasting and customer behavior analysis.",
    },
    {
      number: "04",
      title: "Business Intelligence (BI) Solutions",
      description:
        "Our BI experts deliver custom dashboards, reports, and visualizations that provide clear performance insights, track KPIs, and support informed business decisions.",
    },
    {
      number: "05",
      title: "Data Preprocessing and Wrangling",
      description:
        "Our data engineers organize, clean, transform, and integrate data to ensure analysis-ready datasets that drive meaningful insights and better business outcomes.",
    },
    {
      number: "06",
      title: "Integration Management Services",
      description:
        "Our integration experts configure Hadoop clusters, integrate big data applications, build real-time data pipelines, and manage seamless transitions from relational to NoSQL databases.",
    },
  ];

  const expertise = [
    { title: "Supervised and Unsupervised Learning" },
    { title: "Deep Learning" },
    { title: "Natural Language Processing (NLP)" },
    { title: "Reinforcement Learning" },
    { title: "Big Data Analytics" },
    { title: "Data Visualization" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Expertise Across the Board",
      description:
        "Our team of data scientists and machine learning experts brings a wealth of experience in solving complex business problems using data-driven approaches.",
    },
    {
      number: "02.",
      title: "Proven Results",
      description:
        "We have helped numerous clients, including Fortune 500 firms, unlock the potential of their data and achieve remarkable results with tailor-made AI solutions.",
    },
    {
      number: "03.",
      title: "Collaborative Approach",
      description:
        "We work closely with your team to understand your big data challenges and objectives. Together, we develop data strategies that drive success.",
    },
  ];

  const faqs = [
    {
      question: "What are the machine learning and data science consulting services you provide?",
      answer:
        "As a leading machine Learning consulting company, we offer comprehensive services tailored to your business needs. Our expertise spans data collection, preprocessing, and selection of suitable algorithms, including supervised and unsupervised learning, deep learning, NLP, and reinforcement learning. We also excel in data visualization, making insights accessible. Additionally, our machine learning development capabilities enable us to create custom AI solutions such as image recognition tools, NLP-based chatbots, and predictive models, ensuring your data-driven objectives are met efficiently.",
    },
    {
      question: "What sets LeewayHertz apart in the realm of data-driven solutions?",
      answer:
        "LeewayHertz stands out through our comprehensive expertise across ML algorithms, data preprocessing, and advanced analytics. Our team combines deep domain knowledge with proven methodologies to deliver robust AI solutions. We offer end-to-end consulting services, from strategy development to implementation, ensuring solutions are built on meticulously engineered data and tailored to your specific business needs.",
    },
    {
      question: "What industries have you served with your ML and data science consulting services?",
      answer:
        "We serve a wide range of industries including healthcare, finance, retail, e-commerce, manufacturing, technology, logistics, and more. Our team has extensive experience working with Fortune 500 firms and businesses of all sizes across various sectors, helping them unlock the potential of their data and achieve remarkable results.",
    },
    {
      question: "How do your experts handle big data analytics?",
      answer:
        "Our big data consultants provide end-to-end guidance including architecture assessment, ETL best practices, data pipeline design, tool selection, and tailored data infrastructure solutions. We configure Hadoop clusters, integrate big data applications, build real-time data pipelines, and manage seamless transitions from relational to NoSQL databases, ensuring efficient handling of vast volumes of data.",
    },
    {
      question: "How can LeewayHertz empower organizations to harness the full potential of their data assets?",
      answer:
        "We empower organizations through comprehensive data strategies that include data preprocessing, predictive analytics, business intelligence solutions, and custom ML development. Our team works closely with your organization to understand challenges and objectives, developing tailored data strategies that transform raw data into actionable insights and drive informed business decisions.",
    },
    {
      question: "How do I get started with your machine learning consulting services?",
      answer:
        "Getting started is straightforward. Contact us for an initial consultation where we'll assess your current data landscape, understand your business objectives, and identify ML opportunities. We'll then develop a tailored strategy and roadmap, guiding you through each step of your AI journey from initial assessment to implementation and ongoing support.",
    },
    {
      question: "How does LeewayHertz ensure data security and privacy in its solutions?",
      answer:
        "We implement comprehensive data security and privacy measures including encryption, access controls, compliance with regulations (GDPR, HIPAA), secure data handling protocols, and regular security audits. We ensure your data is protected throughout the consulting and development process, maintaining the highest standards of data security and privacy.",
    },
    {
      question: "How does LeewayHertz assist businesses in overcoming data-related challenges?",
      answer:
        "We assist businesses by providing expert guidance on data preprocessing, wrangling, and integration. Our team helps organize, clean, transform, and integrate data to ensure analysis-ready datasets. We also provide big data consulting services, predictive analytics, and business intelligence solutions that help businesses overcome data challenges and drive meaningful insights for better business outcomes.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Machine Learning and Data Science <span className="text-blue-600">Consulting Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Specializing in ML algorithms, data preprocessing, and advanced analytics, we ensure the delivery of robust AI solutions built upon meticulously engineered data. Whether you want to embark on or further your AI journey, our team of data scientists, machine learning engineers, and AI experts will help you with their extensive experience and deep domain expertise.
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                SCHEDULE A CONSULTATION
                <img
                  src="/right-up-white.png"
                  alt="right-up"
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Two Large Image Boxes with Gap and Padding */}
        <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai1.jpg"
                  alt="ML and Data Science Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="ML and Data Science Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Machine Learning and Data Science Consulting Services
            </h2>
          </div>

          {/* Services Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full mb-4">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Machine Learning and Data Science Consulting Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our team excels in various ML and data science domains, delivering tailored AI solutions built on meticulously engineered data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="ML and Data Science Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Expertise List */}
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ADRIG Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ADRIG</span>?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {reason.number} {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Button - only show on middle card (index 1) */}
                {index === 1 && (
                  <Link href="/contact" className="mt-6">
                    <button className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      GET STARTED
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-5 h-5"
                      />
                    </button>
                  </Link>
                )}
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
                  className="w-full flex items-center gap-4 p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
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
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-sm">
                        <img src="/plus.png" alt="plus" className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <span className="font-bold text-gray-900 flex-1">
                    {faq.question}
                  </span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our ML and data science consulting services can help
              your business scale, innovate, and drive growth.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                GET IN TOUCH
                <img
                  src="/right-up-white.png"
                  alt="Arrow Right"
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

