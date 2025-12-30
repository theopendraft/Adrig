"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Partnership() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 3,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      number: 20,
      suffix: "+",
      label: "Countries",
    },
    {
      number: 25,
      suffix: "+",
      label: "In-house Experts",
    },
    {
      number: 250,
      suffix: "+",
      label: "Projects",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="partnership"
      className="section-padding bg-white"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Large Image/Card Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/Website/Home/Scroll.jpg"
                alt="Partnership"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Proudly partnering with leading organizations{" "}
              <span className="text-blue-600">Internationally.</span>
            </h2>

            <p className="text-md text-gray-600 leading-relaxed">
              Delivering cutting-edge AI solutions that fuel growth and
              transformation with leading organizations in India, the UK, and
              the US.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className={`font-bold text-gray-900 mb-2 ${
                    stat.number >= 100 
                      ? "text-3xl lg:text-4xl" 
                      : "text-4xl lg:text-5xl"
                  }`}>
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                      duration={2000}
                      delay={index * 200}
                    />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CountUp Component
function CountUp({
  end,
  suffix,
  isVisible,
  duration,
  delay,
}: {
  end: number;
  suffix: string;
  isVisible: boolean;
  duration: number;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Ease out cubic function for smooth deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(
          easeOutCubic * (end - startValue) + startValue
        );

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, end, duration, delay]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
