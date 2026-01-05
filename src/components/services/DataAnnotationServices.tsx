"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataAnnotationServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      number: "01",
      title: "Image Annotation",
      description:
        "Our AI experts employ advanced image annotation techniques, including bounding boxes, polygon annotation, key point annotation, LiDar, semantic segmentation, semantic annotation, and image classification, for labeling general as well as industry-specific images. They deliver high-quality results by scrutinizing every pixel of an image.",
    },
    {
      number: "02",
      title: "Video Annotation",
      description:
        "Our expertise in video footage labeling enables us to train computer vision models in object detection and identification efficiently. We use diverse video annotation techniques, such as bounding boxes, polygon annotation, key point annotation and semantic segmentation, to cater to various industries for use cases like self-driving cars, drones and robotics.",
    },
    {
      number: "03",
      title: "Text Annotation",
      description:
        "Our text annotation service can be tailored for use in natural language processing and machine learning models and is valuable for tasks such as sentiment analysis, intent analysis and named entity recognition (NER). Our expert team, proficient in advanced annotation tools and techniques, can annotate large volumes of data quickly and efficiently, saving businesses time and resources.",
    },
    {
      number: "04",
      title: "Audio Transcription and Annotation",
      description:
        "Unlock the full potential of your audio data with our audio transcription and annotation service and leverage it for various applications, including market research and speech recognition. We first convert the audio content into a machine-readable text format which is then labeled for tasks like named entity recognition, sentiment analysis and conversation categorization.",
    },
  ];

  const techniques = [
    { title: "Bounding Boxes" },
    { title: "3D Cuboid Annotation" },
    { title: "Landmark Annotation" },
    { title: "Skeletal Annotation" },
    { title: "Polygon Annotation" },
    { title: "Polyline Annotation" },
  ];

  const reasons = [
    {
      number: "01.",
      title: "Domain Knowledge",
      description:
        "The extensive domain knowledge of our data annotation team enables them to deliver meticulously annotated datasets, empowering clients to derive maximum value from their data.",
    },
    {
      number: "02.",
      title: "Caters to Diverse Industries",
      description:
        "With a team of experts and advanced annotation technology, we have the cross-industry capabilities to provide customized data annotation services that meet the specific needs of each industry and business.",
    },
    {
      number: "03.",
      title: "A Dedicated Team",
      description:
        "Our dedicated data annotation team's commitment and attention to detail enable us to consistently deliver accurate and insightful annotations, giving our clients the confidence to make informed decisions based on their data.",
    },
  ];

  const faqs = [
    {
      question: "What is a data annotation service?",
      answer:
        "A data annotation service involves manual or automated data labeling for training machine learning models. The process of labeling data involves tagging images, text and other types of data with relevant metadata or annotations.",
    },
    {
      question: "Why do I need a data annotation service?",
      answer:
        "Data annotation is essential for training accurate AI and ML models. High-quality annotated data helps models recognize patterns, relationships, and meaning in data, leading to better performance and more reliable predictions. Our annotation services ensure your models are trained on precise, well-labeled datasets.",
    },
    {
      question: "What types of data can be annotated?",
      answer:
        "We can annotate various types of data including images, videos, text, and audio. Our services cover image annotation (bounding boxes, polygons, semantic segmentation), video annotation, text annotation (NER, sentiment analysis), and audio transcription and annotation.",
    },
    {
      question: "How does a data annotation service work?",
      answer:
        "Our data annotation process involves analyzing your raw data, applying appropriate annotation techniques based on your requirements, and adding metadata or labels. We use advanced tools and techniques to ensure accuracy and quality control throughout the annotation process, delivering high-quality training data for your AI models.",
    },
    {
      question: "How do you ensure the quality of your annotations?",
      answer:
        "We maintain strict quality control processes including multiple review stages, expert validation, and accuracy checks. Our dedicated team scrutinizes every annotation to ensure precision and consistency, delivering meticulously annotated datasets that meet the highest quality standards.",
    },
    {
      question: "How much does a data annotation service cost?",
      answer:
        "The cost of data annotation services varies based on the volume of data, complexity of annotation required, and specific project requirements. We provide customized pricing based on your needs. Contact us for a detailed quote tailored to your project.",
    },
    {
      question: "How long does the data annotation process take?",
      answer:
        "The timeline depends on the volume and complexity of data to be annotated. Simple annotations may take a few days, while large-scale projects with complex requirements can take several weeks. We provide estimated timelines during the initial consultation based on your specific needs.",
    },
    {
      question: "Can I request specific types of annotations for my data?",
      answer:
        "Yes, absolutely. We offer customized annotation services tailored to your specific requirements. Whether you need bounding boxes, polygon annotations, semantic segmentation, text annotation, or any other annotation technique, we can accommodate your needs.",
    },
    {
      question: "How do I get started with your data annotation service?",
      answer:
        "Getting started is easy. Simply contact us to discuss your data annotation needs. We'll review your data, understand your requirements, and provide a customized solution and timeline. Our team will guide you through the entire process from initial consultation to delivery of annotated datasets.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32 overflow-hidden pt-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Data Annotation <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Enhance the performance of your Artificial Intelligence (AI) models by precisely annotating your text, image, audio and video data. Our data annotation service involves adding annotations or metadata to raw data using different annotation techniques to help AI models recognize and interpret patterns, relationships and meaning in the data. We specialize in creating high-quality AI training data to maintain accuracy and quality control throughout the model training process.
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
                  alt="Data Annotation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai2.jpg"
                  alt="Data Annotation"
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
              Our Data Annotation Services
            </h2>
          </div>

          {/* Services Grid - 2x2 */}
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

      {/* Data Annotation Techniques Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Annotation Techniques We Use
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              These data annotation techniques ensure accuracy and quality control throughout the AI training data development process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* Left Side - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Website/Service/AI/ai3.jpg"
                  alt="Data Annotation Techniques"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Techniques List */}
              <div className="grid grid-cols-2 gap-4">
                {techniques.map((technique, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/right-up-white.png"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-base text-gray-900 font-medium">
                      {technique.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LeewayHertz Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">LeewayHertz</span>?
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
              Let&apos;s discuss how our data annotation services can help
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

