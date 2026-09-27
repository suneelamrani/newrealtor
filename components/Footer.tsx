import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b132a] py-6 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-heading text-3xl md:text-5xl relative leading-none font-bold">
              <span className="relative z-10 text-black">ROOKIE</span>
              {/* Crown Icon */}
              <svg className="absolute -top-4 left-[30%] w-5 h-5 text-white z-20 transform -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l3-9 4 4 2-8 2 8 4-4 3 9Z" />
              </svg>
              {/* Yellow Background SVG */}
              <svg
                className="absolute -z-0 pointer-events-none left-[-12%] top-[-8%] w-[125%] h-[120%]"
                viewBox="0 0 250 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 23 L12 19 L9 14 L25 16 L31 11 L46 15 L58 10 L73 14 L87 10 L101 14 L117 9 L132 13 L148 9 L162 14 L179 11 L193 16 L209 13 L218 18 L234 17 L239 24 L235 31 L241 38 L236 46 L240 54 L234 61 L238 69 L229 75 L231 82 L214 80 L204 86 L188 82 L174 87 L158 83 L143 89 L127 84 L111 89 L96 84 L80 88 L65 84 L49 88 L36 83 L21 86 L23 78 L10 77 L14 68 L7 62 L12 53 L7 45 L12 37 L5 30 Z"
                  fill="#FFE14F"
                />
              </svg>
            </span>
            <span className="font-heading text-[28px] md:text-[32px] tracking-wide leading-none text-white ml-2 font-bold">
              REALTOR.CA
            </span>
          </Link>
          <p className="text-sm text-white mt-3 tracking-wide font-sembold">
            New Realtors. A Fresh Perspective. Your Best Move.
          </p>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-3 md:gap-5 md:text-lg text-white font-medium flex-wrap justify-center">
          <Link href="#" className="hover:text-yellow-500 transition-colors">Find a Realtor</Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Buy</Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Sell</Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-yellow-500 transition-colors">About</Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-yellow-500 transition-colors">FAQ</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white">
          <Link href="#" aria-label="Instagram" className="hover:text-yellow-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-yellow-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          <Link href="#" aria-label="TikTok" className="hover:text-yellow-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </Link>
          <Link href="#" aria-label="YouTube" className="hover:text-yellow-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-yellow-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
        </div>

      </div>
    </footer>
  );
}
