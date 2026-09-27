"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { YellowSquigglyLineThick, DoodleLines } from "./Icons";

const testimonials = [
  {
    text: "My realtor was incredibly responsive and really listened to what I was looking for. Highly recommend!",
    name: "Jennifer L.",
    location: "Toronto",
    stars: 5
  },
  {
    text: "I liked that I wasn't treated like just another transaction. My realtor genuinely cared and went the extra mile.",
    name: "Mark T.",
    location: "Vaughan",
    stars: 5
  },
  {
    text: "Fast, friendly, and knowledgeable. As a first-time home buyer, I felt supported every step of the way.",
    name: "Aisha R.",
    location: "Mississauga",
    stars: 5
  },
  {
    text: "The process was so smooth and transparent. I couldn't be happier with my new home!",
    name: "David C.",
    location: "Brampton",
    stars: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FBF7EB] relative py-6 md:py-8 z-0 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Title Area */}
        <div className="text-center relative mb-5 w-full flex flex-col items-center">

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#111] tracking-wider leading-none z-10">
            REAL PEOPLE. REAL RESULTS.
          </h2>

          <div className="mt-1 w-full max-w-[480px] relative z-0 flex justify-center">
            <YellowSquigglyLineThick className="w-[50%] md:w-[85%] h-auto" />
          </div>

          {/* Sparkles */}
          <div className="absolute left-[15%] top-2 hidden md:block">
            <DoodleLines className="transform -rotate-12" />
          </div>
          <div className="absolute right-[12%] top-4 hidden md:block">
            <DoodleLines className="transform rotate-12" />
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            className="w-full !flex [&_.swiper-wrapper]:items-stretch"
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i} className="!h-auto flex">
                <div className="bg-[#FCFDFB] rounded-3xl p-8 w-full flex flex-col justify-between text-center border border-gray-100 h-full">

                  <p className="text-gray-800 text-lg leading-[1.6] font-semibold">
                    "{testimonial.text}
                  </p>

                  <div>
                    <div className="flex gap-1 justify-center mt-4 mb-2">
                      {[...Array(testimonial.stars)].map((_, idx) => (
                        <svg key={idx} width="22" height="22" viewBox="0 0 24 24" fill="#ffcc00" stroke="#ffcc00" strokeWidth="1" className="h-6 w-6">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-gray-900">- {testimonial.name}</span>
                      <span className="text-gray-600 text-lg font-semibold">{testimonial.location}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}