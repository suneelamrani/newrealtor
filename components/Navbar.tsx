"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 relative z-50 py-2 sm:py-3 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Logo & Tagline */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-heading text-3xl lg:text-[40px] relative leading-none font-bold">
              <span className="relative z-10 text-[#1a1a1a]">NEW</span>
              <span className="absolute inset-0 bg-[#ffe14f] transform -rotate-2 scale-110 -z-0 rounded-sm top-1"></span>
            </span>
            <span className="font-heading text-3xl lg:text-[40px] tracking-wide leading-none text-[#1a1a1a] ml-1 font-bold">
              REALTOR.CA
            </span>
            <svg className="w-5 h-5 text-[#ff6b9e] ml-1 mb-2" viewBox="0 0 512 512" fill="currentColor">
              <path d="M495.2 245.9c-8.9-8.4-23.7-5.9-29.4 4.5l-23 41.5-62.1-125.8c-3.9-7.9-12.7-12.3-21.6-10.6-8.8 1.6-15.6 8.3-17.5 17l-22.1 106.8-51.5-165.7c-3-9.5-12.1-15.9-22-15.9s-19 6.4-22 15.9L172.5 279.3l-22.1-106.8c-1.9-8.8-8.7-15.4-17.5-17-8.8-1.6-17.7 2.7-21.6 10.6L49.2 291.9l-23-41.5c-5.7-10.4-20.5-12.9-29.4-4.5-8.9 8.3-11.4 22.3-5.2 33l54.8 93.4c5.1 8.8 14.8 14.1 24.9 13.9H236v83c0 9.8 7.9 17.8 17.8 17.8h4.4c9.8 0 17.8-7.9 17.8-17.8v-83h164.7c10.1 .2 19.8-5.1 24.9-13.9l54.8-93.4c6.2-10.7 3.7-24.7-5.2-33z" />
            </svg>
          </Link>
          <p className="text-[10px] lg:text-[13px] text-gray-700 mt-1.5 tracking-wide font-extrabold">
            New Realtors. Fresh Perspective. Your Best Move.
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-10 font-bold text-base lg:text-lg text-[#1a1a1a]">
          <Link href="/" className="flex items-center gap-2 relative group pb-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M12 17.5l-3-3a2.5 2.5 0 0 1 3.5-3.5 2.5 2.5 0 0 1 3.5 3.5l-4 4z" fill="#ff6b9e" stroke="#ff6b9e" strokeWidth="1" />
            </svg>
            Find a Realtor
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b9e]"></div>
          </Link>
          <Link href="/buy" className="hover:text-gray-500 transition-colors">Buy</Link>
          <Link href="/sell" className="hover:text-gray-500 transition-colors">Sell</Link>
          <Link href="/about" className="hover:text-gray-500 transition-colors">About</Link>
          <Link href="/faq" className="hover:text-gray-500 transition-colors">FAQ</Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/find" className="bg-[#0b132a] text-white px-4 lg:px-7 py-3 rounded-full text-sm lg:text-[15px] font-bold flex items-center gap-2 hover:bg-[#1a2b5e] transition-colors">
            Find a Realtor
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1a1a1a] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col transition-all">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M12 17.5l-3-3a2.5 2.5 0 0 1 3.5-3.5 2.5 2.5 0 0 1 3.5 3.5l-4 4z" fill="#ff6b9e" stroke="#ff6b9e" strokeWidth="1" />
            </svg>
            Find a Realtor
          </Link>
          <Link
            href="/buy"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            Buy
          </Link>
          <Link
            href="/sell"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            Sell
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            About
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1a1a1a] py-2 border-b border-gray-100 hover:text-gray-500"
          >
            FAQ
          </Link>

          {/* Mobile CTA Button inside Drawer */}
          <div className="pt-2">
            <Link
              href="/find"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0b132a] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#1a2b5e] transition-colors shadow-md"
            >
              Find a Realtor
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}