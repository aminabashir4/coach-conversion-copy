"use client";

import { useEffect, useRef, useState } from "react";
import Element from "./../../public/images/element.svg"; 
import Image from "next/image";
import ArrowDown from './../../public/images/arrow-down1.svg'

const services = [
  {
    id: 1,
    title: "SETUP",
    description:
      "You'll Get: A systematic approach to generating qualified leads monthly without founder involvement.",
    image: "/images/predictableprofits.com(6).svg",
  },
  {
    id: 2,
    title: "SALES",
    description:
      "You'll Get: A high-performing sales system that converts with or without your direct involvement.",
    image: "/images/predictableprofits.com(4).svg",
  },
  {
    id: 3,
    title: "SCALE",
    description:
      "You'll Get: Operational systems that deliver quality results while freeing you from day-to-day management.",
    image: "/images/predictableprofits.com(5).svg",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const refs = services.map(() => useRef<HTMLDivElement | null>(null));
  const [inViews, setInViews] = useState(services.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            setInViews((prev) => {
              const newViews = [...prev];
              newViews[index] = entry.isIntersecting;
              return newViews;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  useEffect(() => {
    const firstInViewIndex = inViews.findIndex((val) => val);
    if (firstInViewIndex !== -1) {
      setActiveService(services[firstInViewIndex]);
    }
  }, [inViews]);

  return (
    <div className="mx-auto px-4 py-16 bg-black">
      <div className="max-w-[1160px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-32 relative z-10">
          <Image
            src={Element}
            alt=""
            className="absolute right-32 -top-4 w-[25px] h-[120px]"
          />
          <h2 className="text-6xl font-bold text-[#F8FCEC] mb-12 relative z-10 ">
            THE PREDICTABLE PROFITS® GROWTH SYSTEM
          </h2>
          <p className="text-[21px] text-[#E2E8F0] max-w-[490px] mx-auto">
            Unlike tactical coaching that creates temporary spikes, our Growth
            System helps you transform random success into predictable,
            sustainable results month after month, year after year.
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          {/* Left: Scrollable service list */}
          <div className="max-w-sm space-y-32 pb-44">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={refs[index]}
                className="h-[30vh] md:h-[90vh] flex flex-col items-center"
              >
                <div className="transition-all duration-300">
                  <h3 className="text-[32px] font-bold mb-4 text-[#BECEB7] text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="text-[#E2E8F0] text-[21px]">
                    {service.description}
                  </p>
                </div>

                {(index === 0 || index === 1) && (
                  <div className="mt-16 animate-bounce">
                    <Image
                      src={ArrowDown} 
                      alt="Arrow Down"
                      className="mx-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Sticky image section */}
          <div className="lg:w-1/2 relative mb-10 md:mb-0">
            <div className="sticky top-24 h-[10vh] md:h-[80vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
