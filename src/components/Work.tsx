"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [industriesCount, setIndustriesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Projects Delivered to 20
          let projects = 0;
          const projectsInterval = setInterval(() => {
            projects += 1;
            setProjectsCount(projects);
            if (projects >= 20) clearInterval(projectsInterval);
          }, 50);

          // Animate Ongoing Projects to 5
          let ongoing = 0;
          const ongoingInterval = setInterval(() => {
            ongoing += 1;
            setOngoingCount(ongoing);
            if (ongoing >= 5) clearInterval(ongoingInterval);
          }, 200);

          // Animate Industries Served to 10
          let industries = 0;
          const industriesInterval = setInterval(() => {
            industries += 1;
            setIndustriesCount(industries);
            if (industries >= 10) clearInterval(industriesInterval);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const projects = [
    {
      id: 1,
      name: "Miporis",
      slug: "miporis",
      image: "/Website/Work/works/Mipors.jpg",
    },
    {
      id: 2,
      name: "Southern Railways (RBMS)",
      slug: "southern-railways",
      image: "/Website/Work/works/RBMS.jpg",
    },
    {
      id: 3,
      name: "Dagala Analytics",
      slug: "dagala-analytics",
      image: "/Website/Work/works/Dagala analytics.jpg",
    },
    {
      id: 4,
      name: "Barron Tech Serve",
      slug: "barron-tech-serve",
      image: "/Website/Work/works/Barron.jpg",
    },
    {
      id: 5,
      name: "Aladdyn",
      slug: "aladdyn",
      image: "/Website/Work/works/aladdyn.jpg",
    },
    {
      id: 6,
      name: "BillsApp",
      slug: "billsapp",
      image: "/Website/Work/works/Bills app.jpg",
    },
    {
      id: 7,
      name: "Dagala",
      slug: "dagala",
      image: "/Website/Work/works/dagala.jpg",
    },
    {
      id: 8,
      name: "TrackOn (Southern Railways)",
      slug: "trackon",
      image: "/Website/Work/works/Trackon.jpg",
    },
    {
      id: 9,
      name: "Rail Rules (Southern Railways)",
      slug: "rail-rules",
      image: "/Website/Work/works/Rail Rules.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Our <span className="text-primary">Work</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 font-semibold">
                We craft workflow automations and bespoke AI solutions for
                forward thinking companies. We craft workflow automations and
                bespoke AI solutions for forward thinking companies. We craft
                workflow automations and bespoke AI solutions.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg mb-12"
              >
                WORK WITH US
                <img
                  src="/right-up-white.png"
                  alt="Arrow Right"
                  className="w-4 h-4"
                />
              </Link>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6">
                <div className="relative bg-gray-200 rounded-lg p-6 min-h-[180px] flex flex-col justify-end overflow-hidden">
                  <Image
                    src="/Website/Work/stats1.jpg"
                    alt="Projects Delivered"
                    fill
                    className="absolute inset-0 object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
                      {projectsCount}+
                    </div>
                    <div className="text-xs text-gray-700 font-semibold">
                      Projects Delivered
                    </div>
                  </div>
                </div>
                <div className="relative bg-gray-200 rounded-lg p-6 min-h-[180px] flex flex-col justify-end overflow-hidden">
                  <Image
                    src="/Website/Work/stats2.jpg"
                    alt="On-going Projects"
                    fill
                    className="absolute inset-0 object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
                      {ongoingCount < 10 ? `0${ongoingCount}` : ongoingCount}
                    </div>
                    <div className="text-xs text-gray-700 font-semibold">
                      On-going Projects
                    </div>
                  </div>
                </div>
                <div className="relative bg-gray-200 rounded-lg p-6 min-h-[180px] flex flex-col justify-end overflow-hidden">
                  <Image
                    src="/Website/Work/stats3.jpg"
                    alt="Industries Served"
                    fill
                    className="absolute inset-0 object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
                      {industriesCount}+
                    </div>
                    <div className="text-xs text-gray-700 font-semibold">
                      Industries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Box */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-500 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/Website/Work/team-business-people-stacking-hands.jpg"
                  alt="Partnership"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-base font-semibold md:text-xl text-gray-700 max-w-2xl mx-auto px-14">
              We craft workflow automations and bespoke AI solutions for forward
              thinking companies.
            </p>
          </div>

          {/* Projects Grid - 3x3 */}
          <div className="mx-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="relative bg-gray-100 rounded-lg p-8 min-h-[280px] flex flex-col justify-between group transition-all overflow-hidden"
              >
                {/* Background Image with Scale Effect */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay from Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Project Name */}
                <h3 className="relative z-10 text-xl font-bold text-white drop-shadow-lg">
                  {project.name}
                </h3>

                {/* Plus Button */}
                <div className="relative z-10 flex justify-end">
                  <div className="w-10 h-10 bg-primary text-white rounded flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg">
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
