"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import  coachBook from './../../public/images/the-predprof-playbook.webp'
import Image from "next/image";
interface Testimonial {
  author: string;
  quote: string;
  stars: number;
}

export default function Promo() {
  const testimonials: Testimonial[] = [
    {
      author: "Dr Marc Duncan",
      quote:
        '"I loved all the stories used througout that illustrated every single step along the way to predictable profits"',
      stars: 5,
    },
    {
      author: "Jane Smith",
      quote:
        '"This book transformed how I approach business strategy. Highly recommended!"',
      stars: 5,
    },
    {
      author: "Robert Johnson",
      quote:
        '"A must-read for any entrepreneur looking to scale their business predictably."',
      stars: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="w-full max-w-[1320px]  mx-auto mb-20 px-4">
      <div className="flex-col md:flex-row flex gap-5 md:gap-8 ">
        {/* Left dark section */}
        <div className="gap-5 md:gap-8 flex flex-col max-w-[529.4px] w-full">
          <div className="bg-[#132528] text-white px-14 pt-[52px] pb-[70px] flex flex-col justify-center rounded-sm h-[424.9px]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight  mb-6">
              TURN THE PAGE,
              <br />
              TURN MORE PROFIT
            </h2>
            <p className="text-base md:text-lg mb-8 text-white">
              Discover real-world examples and repeatable strategies that show
              how to create opportunity in any economic environment.
            </p>
            <button className="bg-[#C0E247] text-[#132528] hover:bg-[#132528] hover:text-[#C0E247] font-bold w-fit uppercase text-sm py-3 px-8">
              GET YOUR FREE PLAYBOOK
            </button>
          </div>

          {/* Yellow testimonial slider section */}
          <div className="bg-[#C0E247] px-14 pt-[52px] pb-[70px] flex flex-col justify-center relative rounded-sm h-[416.35px]">
            <div className="h-full flex flex-col">
              <div ref={sliderRef} className="keen-slider flex-grow">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="keen-slider__slide">
                    <div className="mb-7">
                     
                    </div>
                    <h3 className="text-2xl font-medium mb-5">
                      {testimonial.author}
                    </h3>
                    <p className="text-lg font-medium text-[#132528] mb-12 ">
                      {testimonial.quote}
                    </p>
                  </div>
                ))}
              </div>

              {loaded && instanceRef.current && (
                <div className="flex gap-2 ">
                  <button
                    className="rounded-full border-2  border-black "
                    onClick={(e) => {
                      e.stopPropagation();
                      instanceRef.current?.prev();
                    }}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-7 w-7" />
                  </button>
                  <button
                    className="rounded-full  border-2 border-black "
                    onClick={(e) => {
                      e.stopPropagation();
                      instanceRef.current?.next();
                    }}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-7 w-7" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#e8d7c0]">
          <Image
            src={coachBook}
            alt="The Predictable Profits Playbook by Charles E. Gaudet II"
            className="h-auto md:h-[876px]"
          />
        </div>
      </div>
    </section>
  );
}
