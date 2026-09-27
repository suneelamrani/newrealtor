import Image from "next/image";

export default function WhyNewRealtor() {
  return (
    <section className="bg-[#FDF7DD] pt-8 pb-16 px-4 md:px-6 lg:px-8 w-full relative overflow-hidden">
      {/* Decorative sparkles left */}
      <div className="absolute top-24 left-10 md:left-32 opacity-70 hidden sm:block">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>

        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" className="absolute -top-6 -right-6">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      {/* Decorative sparkles right */}
      <div className="absolute top-20 md:top-32 right-1 md:right-32 opacity-70">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" className="w-5 h-5 md:h-9 md:w-9">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" className="absolute top-2 md:top-10 right-5 md:right-10 w-5 h-5 md:h-9 md:w-9">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-16 opacity-70">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-heading text-[45px] md:text-[60px] lg:text-[75px] text-[#1a1a1a] mb-2 uppercase font-bold leading-none">
            Why Work With A <span className="relative inline-block px-1">
              <span className="relative z-10">New</span>
              {/* Brush Stroke SVG */}
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
            </span> Realtor?
          </h2>
          <p className="text-lg md:text-2xl text-[#333333] font-semibold mt-4">
            All the important stuff. With a lot more enthusiasm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6 lg:gap-y-10">
          {/* Item 1 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/fire.png" alt="Fire" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[28px] md:text-[32px] text-[#1a1a1a] uppercase leading-none font-bold mb-3">
                More <span className="relative inline-block">Motivation<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                Your business matters. We're building our reputation one happy client at a time.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/smartphone.png" alt="Smartphone" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[28px] md:text-[32px] text-[#1a1a1a] uppercase leading-none font-bold mb-3">
                More <span className="relative inline-block">Responsive<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                Quick communication,<br />texts, calls, emails —<br />we actually reply.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/money-bag.png" alt="Money Bag" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[28px] md:text-[32px] text-[#1a1a1a] uppercase leading-none font-bold mb-3">
                More <span className="relative inline-block">Value<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                Competitive service<br />and a fresh approach.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/pastle-house.png" alt="House" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[28px] md:text-[32px] text-[#1a1a1a] uppercase leading-none font-bold mb-3">
                More <span className="relative inline-block">Attention<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                You're not just another client.<br />We have time for you.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/laptop.png" alt="Laptop" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[28px] md:text-[32px] text-[#1a1a1a] uppercase leading-none font-bold mb-3">
                Modern <span className="relative inline-block">Approach<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                Tech-savvy marketing,<br />modern tools and creative<br />strategies.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-[70px] h-[70px] relative">
              <Image src="/assets/bullseye-target.png" alt="Target" fill className="object-contain" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-heading text-[24px] md:text-[28px] text-[#1a1a1a] uppercase leading-[1.1] font-bold mb-3 max-w-[200px]">
                Hungry To Prove <span className="relative inline-block">Themselves<div className="absolute -bottom-1 left-0 w-[105%] h-[3px] bg-[#1a1a1a] rounded-sm transform -rotate-1"></div><div className="absolute -bottom-2 left-0 w-[95%] h-[2px] bg-[#1a1a1a] rounded-sm transform rotate-1"></div></span>
              </h3>
              <p className="text-[#333333] font-semibold text-lg leading-snug">
                Your success leads<br />to our next opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
