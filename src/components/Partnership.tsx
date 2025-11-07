"use client";

import { useState, useEffect, useRef } from "react";

export default function Partnership() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 30,
      suffix: "+",
      label: "Indian Clients",
    },
    {
      number: 10,
      suffix: "+",
      label: "International Clients",
    },
    {
      number: 15,
      suffix: "",
      label: "In-house Experts",
    },
    {
      number: 2,
      suffix: "+",
      label: "Years of Excellence",
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
      className="section-padding bg-gray-50"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Large Image/Card Placeholder */}
          <div className="relative">
            <div className=" aspect-[4/5] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
              {/* Placeholder for image - can be replaced later */}
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                {/* <svg
                  className="w-32 h-32 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg> */}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight lg:text-center">
              Proudly partnering with leading organizations{" "}
              <span className="text-primary">Internationally.</span>
            </h2>

            <p className="text-md text-gray-600 leading-relaxed lg:text-center lg:px-20">
              Delivering cutting-edge AI solutions that fuel growth and
              transformation with leading organizations in India, the UK, and
              the US.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-md p-4 lg:pt-16 transition-shadow duration-300"
                >
                  
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
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
