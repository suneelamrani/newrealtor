"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { YellowBrushStroke, PinkUnderline, SparkleStar, PinIcon, StarBadgeIcon } from "./Icons";

const realtors = [
  {
    name: "Sarah M.",
    location: "Toronto",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "First-time buyers are my passion! Let's find your perfect home."
  },
  {
    name: "Daniel K.",
    location: "Vaughan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Local knowledge. Big energy. Your goals, my priority."
  },
  {
    name: "Priya P.",
    location: "Mississauga",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Modern strategies, personalized service and lots of coffee to keep up with you!"
  },
  {
    name: "Michael T.",
    location: "Brampton",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    description: "Dedicated to finding exactly what you need with an honest approach."
  }
];

export default function MeetRealtorSection() {
  return (
    <section className="w-full bg-[#FBE0EB] px-4 sm:px-6 lg:px-8 relative py-4 sm:py-8 z-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Title Area */}
        <div className="text-center relative mb-5 w-full flex flex-col items-center">

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#111] tracking-wider leading-none flex items-center justify-center flex-wrap gap-x-3 z-10">
            MEET YOUR <span className="relative inline-block px-2">
              <span className="relative z-10">NEXT</span>
              <YellowBrushStroke className="absolute -z-0 pointer-events-none left-[-15%] top-[-10%] w-[130%] h-[120%]" />
            </span> REALTOR
          </h2>

          <p className="mt-2 md:mt-4 text-[#222222] text-lg lg:text-lg font-semibold">
            Passionate. Local. Ready to help.
          </p>

          {/* Floating Handwritten Text */}
          <div className="hidden lg:flex absolute right-[2%] top-0 transform rotate-[10deg] flex-col items-start z-10">
            <span className="font-heading text-[22px] font-black text-[#111] tracking-wide leading-none">REAL PEOPLE.</span>
            <span className="font-heading text-[22px] font-black text-[#111] tracking-wide leading-none mt-1 relative">
              REAL AMBITION.
              <PinkUnderline className="absolute -bottom-3 left-0" />
            </span>
          </div>

          {/* Sparkles Top Left */}
          <div className="absolute left-[8%] top-0 hidden md:block">
            <SparkleStar className="transform -rotate-12" />
          </div>
          <div className="absolute left-[12%] top-8 hidden md:block">
            <SparkleStar width={32} height={32} className="transform rotate-12" />
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full relative mt-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            className="w-full !pb-5 !flex [&_.swiper-wrapper]:items-stretch"
          >
            {realtors.map((realtor, i) => (
              <SwiperSlide key={i} className="!h-auto flex">
                <div className="bg-white rounded-3xl p-5 w-full flex flex-col justify-between border border-gray-100 h-full">
                  <div className="flex gap-4 items-stretch">
                    {/* Image */}
                    <div className="w-[50%] h-[250px] rounded-2xl overflow-hidden shrink-0 relative bg-gray-100">
                      <Image src={realtor.image} alt={realtor.name} fill className="object-cover" sizes="120px" />
                    </div>

                    {/* Info & Description */}
                    <div className="flex flex-col justify-between flex-1 py-3">
                      <div>
                        <h3 className="font-bold text-2xl text-gray-900 leading-tight">{realtor.name}</h3>

                        <div className="flex items-center gap-1.5 mt-3 text-gray-600 text-base font-semibold">
                          <PinIcon className="h-5 w-5" />
                          <span>{realtor.location}</span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-2 text-gray-900 font-bold text-base">
                          <StarBadgeIcon className="w-5 h-5" />
                          <span>New Agent</span>
                        </div>
                      </div>

                      <p className="mt-3 text-gray-700 text-[13px] leading-[1.4] font-medium pr-1">
                        {realtor.description}
                      </p>
                    </div>
                  </div>

                  <button className="w-[80%] mx-auto mt-6 py-2 cursor-pointer border-2 border-[#0b1325] rounded-xl font-bold text-base sm:text-lg text-[#0b1325] tracking-wide hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    VIEW PROFILE <span className="text-lg leading-none">→</span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <button className="bg-[#0b1325] text-white cursor-pointer px-8 py-2.5 rounded-full font-bold text-base sm:text-lg tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 relative z-20">
          VIEW ALL REALTORS <span className="font-sans text-xl leading-none">→</span>
        </button>

        {/* Bottom Sparkles */}
        <div className="absolute left-[10%] bottom-8 hidden md:block">
          <SparkleStar width={32} height={32} className="transform rotate-12" />
        </div>
        <div className="absolute left-[14%] bottom-2 hidden md:block">
          <SparkleStar width={20} height={20} className="transform -rotate-12" />
        </div>

        <div className="absolute right-[10%] bottom-4 hidden md:block">
          <SparkleStar width={40} height={40} className="transform -rotate-[30deg]" />
        </div>
      </div>
    </section>
  );
}