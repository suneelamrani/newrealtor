"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50 py-2 sm:py-3 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">

        <div className="flex items-center md:hidden order-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1a1a1a] focus:outline-none p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center md:items-start order-2 md:order-1 flex-1 md:flex-none ml-5 sm:ml-0">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-heading text-[28px] md:text-3xl lg:text-[40px] relative leading-none font-bold">
              <span className="relative z-10 text-[#1a1a1a]">ROOKIE</span>
              <svg className="absolute -top-4 left-[30%] w-5 h-5 md:w-6 md:h-6 text-[#1a1a1a] z-20 transform -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l3-9 4 4 2-8 2 8 4-4 3 9Z" />
              </svg>

              <svg
                className="absolute -z-0 pointer-events-none left-[-12%] top-[-8%] w-[125%] h-[120%]"
                viewBox="0 0 250 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 23 L12 19 L9 14 L25 16 L31 11 L46 15 L58 10 L73 14 L87 10 L101 14 L117 9 L132 13 L148 9 L162 14 L179 11 L193 16 L209 13 L218 18 L234 17 L239 24 L235 31 L241 38 L236 46 L240 54 L234 61 L238 69 L229 75 L231 82 L214 80 L204 86 L188 82 L174 87 L158 83 L143 89 L127 84 L111 89 L96 84 L80 88 L65 84 L49 88 L36 83 L21 86 L23 78 L10 77 L14 68 L7 62 L12 53 L7 45 L12 37 L5 30 Z"
                  fill="#FFE14F"
                />
                <path
                  d="M15 25 C45 17 72 20 100 17 C130 14 160 19 188 17 C207 16 222 20 234 24"
                  fill="none" stroke="#F4D735" strokeWidth="3" strokeLinecap="round" opacity="0.65"
                />
              </svg>
            </span>
            <span className="font-heading text-[28px] md:text-3xl lg:text-[40px] tracking-wide leading-none text-[#1a1a1a] ml-1 font-bold">
              REALTOR.CA
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#ff6b9e] ml-1 mb-2" viewBox="0 0 512 512" fill="currentColor">
              <path d="M495.2 245.9c-8.9-8.4-23.7-5.9-29.4 4.5l-23 41.5-62.1-125.8c-3.9-7.9-12.7-12.3-21.6-10.6-8.8 1.6-15.6 8.3-17.5 17l-22.1 106.8-51.5-165.7c-3-9.5-12.1-15.9-22-15.9s-19 6.4-22 15.9L172.5 279.3l-22.1-106.8c-1.9-8.8-8.7-15.4-17.5-17-8.8-1.6-17.7 2.7-21.6 10.6L49.2 291.9l-23-41.5c-5.7-10.4-20.5-12.9-29.4-4.5-8.9 8.3-11.4 22.3-5.2 33l54.8 93.4c5.1 8.8 14.8 14.1 24.9 13.9H236v83c0 9.8 7.9 17.8 17.8 17.8h4.4c9.8 0 17.8-7.9 17.8-17.8v-83h164.7c10.1 .2 19.8-5.1 24.9-13.9l54.8-93.4c6.2-10.7 3.7-24.7-5.2-33z" />
            </svg>
          </Link>
          <p className="text-[9px] md:text-[10px] lg:text-sm text-gray-700 mt-1.5 tracking-wide font-extrabold text-center md:text-left">
            New Realtors. A Fresh Perspective. Your Best Move.
          </p>
        </div>

        <div className="w-7 md:hidden order-3"></div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 font-bold text-base lg:text-lg text-[#1a1a1a] order-2">
          <Link href="/" className="flex items-center gap-2 relative group pb-1">
            Find a Realtor
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff6b9e]"></div>
          </Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">Buy</Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">Sell</Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">About</Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">FAQ</Link>
        </nav>

        <div className="hidden md:block order-3">
          <Link href="#" className="bg-[#0b132a] text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-[15px] font-bold flex items-center gap-2 hover:bg-[#1a2b5e] transition-colors">
            Find a Rookie <span className="text-lg leading-none font-normal ml-0.5">&rarr;</span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col transition-all">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 flex items-center gap-2"
          >
            Find a Realtor
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            Buy
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            Sell
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            About
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            FAQ
          </Link>

          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0b132a] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#1a2b5e] transition-colors shadow-md"
            >
              Find a Rookie <span className="text-lg leading-none font-normal">&rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}