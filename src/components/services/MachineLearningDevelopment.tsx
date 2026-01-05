"use client";

import { useState } from "react";
import Link from "next/link";

export default function MachineLearningDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "ML Consulting & Strategy Building",
      description:
        "We assess your technology landscape to identify ML opportunities and deliver tailored strategies that streamline processes, enhance customer experiences, and drive competitive advantage.",
    },
    {
      number: "02",
      title: "MLOps Consulting",
      description:
        "We help organizations adopt MLOps best practices by streamlining workflows and configuring tools for versioning, testing, deployment, and monitoring to accelerate ML model production.",
    },
    {
      number: "03",
      title: "Data Engineering",
      description:
        "Our data engineering services ensure high-quality, task-ready data through end-to-end processes including data collection, cleaning, feature engineering, and data augmentation.",
    },
    {
      number: "04",
      title: "Custom ML Model Development",
      description:
        "We fine-tune pre-trained models such as BERT, GPT, and Llama 2 to build domain-specific ML solutions that deliver highly accurate, context-aware results.",
    },
    {
      number: "05",
      title: "ML-powered Solutions Development",
      description:
        "Our data scientists and AI developers build customized ML solutions—such as predictive models and recommendation systems—to optimize operations, enhance user experiences, and enable data-driven decisions.",
    },
    {
      number: "06",
      title: "Integration Into Workflows",
      description:
        "We ensure seamless ML integration into your workflows and provide ongoing support and maintenance to sustain optimal performance over time.",
    },
  ];

  const expertise = [
    { title: "Deep Learning" },
    { title: "Big Data Technologies" },
    { title: "Machine Learning Algorithms" },
    { title: "Data Preprocessing" },
    { title: "Machine Learning Frameworks" },
    { title: "AutoML" },
  ];

  const approach = [
    {
      number: "01.",
      title: "Assessment Phase",
      description:
        "We assess your organization's existing state and needs to establish a sound ML strategy, laying a strong foundation for future success.",
    },
    {
      number: "02.",
      title: "Data Collection and Preparation",
      description:
        "High-quality, pertinent data plays a pivotal role in ensuring ML success. Our meticulous data collection and preparation processes are designed to set the stage for effective model training.",
    },
    {
      number: "03.",
      title: "Model Integration/Solution Development",
      description:
        "After fine-tuning the model, we leverage it to create solutions such as chatbots or recommendation systems, effectively streamlining and enhancing your workflow processes.",
    },
  ];

  const faqs = [
    {
      question: "How can ADRIG help my business with machine learning development?",
      answer:
        "ADRIG boasts extensive expertise in developing tailored machine learning solutions. We work closely with you to understand your unique needs, design custom models, and implement them to drive efficiency and innovation within your organization. We develop a variety of machine learning solutions, including predictive analytics tools for forecasting, classification tools for categorization, recommendation systems, natural language processing solutions, and more, tailored to your specific requirements.",
    },
    {
      question: "What range of machine learning services does LeewayHertz provide?",
      answer:
        "We provide comprehensive machine learning services including ML consulting and strategy building, MLOps consulting, data engineering, custom ML model development, ML-powered solutions development, and seamless integration into workflows. Our services cover the entire ML lifecycle from strategy to deployment and maintenance.",
    },
    {
      question: "Why is it opportune to engage in machine learning services at this time?",
      answer:
        "Machine learning has become essential for businesses seeking competitive advantage. With advances in AI technology, increased data availability, and proven ROI, now is the ideal time to leverage ML services to optimize operations, predict trends, enhance customer experiences, and drive data-driven decision-making.",
    },
    {
      question: "What industries can benefit from your machine learning development services?",
      answer:
        "Our machine learning development services benefit a wide range of industries including healthcare, finance, retail, e-commerce, manufacturing, technology, logistics, and more. Any industry that generates data and seeks to optimize operations, predict trends, or enhance customer experiences can benefit from our ML solutions.",
    },
    {
      question: "What customization and flexibility do you offer to integrate ML solutions into an organization's existing technology stack or infrastructure?",
      answer:
        "We offer extensive customization and flexibility to integrate ML solutions seamlessly into your existing technology stack. Our team works closely with you to understand your infrastructure, ensuring ML solutions integrate smoothly with your current systems, workflows, and technology platforms without disrupting operations.",
    },
    {
      question: "What is the typical timeline for a machine learning development project?",
      answer:
        "The timeline varies based on project complexity, data availability, and specific requirements. Simple ML projects may take 4-8 weeks, while complex custom ML solutions can take 3-6 months. We provide detailed timelines during the initial consultation based on your specific needs and project scope.",
    },
    {
      question: "What measures do you take to ensure that ML models remain accurate and relevant as industry trends and data evolve over time?",
      answer:
        "We implement continuous monitoring, regular model retraining, and performance tracking to ensure ML models remain accurate and relevant. Our maintenance services include periodic model updates, data refresh, and adaptation to evolving industry trends and data patterns.",
    },
    {
      question: "How do you manage the potential bias in machine learning models, and what steps are taken to ensure fairness and inclusivity in your solutions?",
      answer:
        "We implement rigorous bias detection and mitigation strategies throughout the ML development process. This includes diverse dataset curation, fairness metrics evaluation, bias auditing, and continuous monitoring to ensure our ML solutions are fair, inclusive, and unbiased.",
    },
    {
      question: "What data sources and formats do you typically work with, and how do you ensure data quality and integrity throughout the development process?",
      answer:
        "We work with various data sources and formats including structured data (databases, CSV), unstructured data (text, images, audio), and semi-structured data (JSON, XML). We implement comprehensive data quality checks, validation processes, and integrity measures throughout the development lifecycle to ensure high-quality, reliable data for model training.",
    },
    {
      question: "How can businesses identify the most suitable machine learning development company for their specific needs?",
      answer:
        "Businesses should evaluate ML development companies based on their expertise, track record, industry experience, technical capabilities, and ability to understand and address specific business needs. Look for companies with proven experience in your industry, comprehensive ML services, and a collaborative approach to solution development.",
    },
    {
      question: "What are the key steps to successfully implement machine learning solutions within a business?",
      answer:
        "Key steps include: 1) Assessment and strategy development, 2) Data collection and preparation, 3) Model development and training, 4) Testing and validation, 5) Deployment and integration, 6) Monitoring and maintenance. We guide businesses through each step to ensure successful ML implementation.",
    },
    {
      question: "How do LeewayHertz's machine learning development services handle data security and privacy?",
      answer:
        "We implement comprehensive data security and privacy measures including encryption, access controls, compliance with regulations (GDPR, HIPAA), secure data handling protocols, and regular security audits. We ensure your data is protected throughout the ML development process.",
    },
    {
      question: "What is the process for initiating collaboration with LeewayHertz for machine learning solutions?",
      answer:
        "The process begins with an initial consultation where we understand your needs, assess your data and infrastructure, and discuss your goals. We then provide a tailored proposal with strategy, timeline, and approach. Once approved, we proceed with development, keeping you informed throughout the process.",
    },
    {
      question: "Do you provide ongoing support and maintenance for the machine learning solutions you build?",
      answer:
        "Yes, we provide comprehensive ongoing support and maintenance services including performance monitoring, model updates, retraining, troubleshooting, and optimization to ensure your ML solutions continue to perform optimally and adapt to changing business needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Machine Learning Development <span className="text-blue-600">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Unlock the potential of data-driven intelligence with our machine learning development service. Whether you require data engineering expertise, need a pre-trained LLM fine-tuned, or seek to build and deploy powerful ML-based applications for optimizing operations, predicting trends, or enhancing customer experiences, our machine learning development service is meticulously designed to meet your unique demands.
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
                  alt="Machine Learning Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Machine Learning Development"
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
              Our Machine Learning Services
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

      {/* Our ML Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our ML Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our proficiency in various ML technologies and frameworks enables us to create and optimize models efficiently, accelerating the development and deployment of intelligent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="ML Expertise"
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

      {/* Our Approach Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Approach to Building Innovative Machine Learning Solutions
            </h2>
          </div>

          {/* Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col flex-1">
                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {step.number} {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {step.description}
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
              Let&apos;s discuss how our machine learning development services can help
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

