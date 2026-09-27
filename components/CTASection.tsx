import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full relative px-4 sm:px-6 lg:px-8 z-0 overflow-hidden bg-[#0a152e] md:pt-2">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/newsletter-background.png" alt="City Background" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10 h-full min-h-[300px]">

        {/* Left Content */}
        <div className="w-full md:w-[50%] lg:w-[60%] flex flex-col items-center md:items-center text-center relative z-20 pb-64 md:pb-0 pt-8 md:pt-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#111] tracking-wider -rotate-2 leading-[1] uppercase">
            READY TO FIND A REALTOR<br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-[#111] px-2">WHO'S HUNGRY FOR YOUR BUSINESS?</span>
              <svg
                className="absolute -z-0 pointer-events-none left-0 right-0 mx-auto top-auto -bottom-2 w-[40%] xl:w-[90%] h-[10%]"
                viewBox="0 0 250 50"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 23 L12 19 L9 14 L25 16 L31 11 L46 15 L58 10 L73 14 L87 10 L101 14 L117 9 L132 13 L148 9 L162 14 L179 11 L193 16 L209 13 L218 18 L234 17 L239 24 L235 31 L241 38 L236 46 L240 54 L234 61 L238 69 L229 75 L231 82 L214 80 L204 86 L188 82 L174 87 L158 83 L143 89 L127 84 L111 89 L96 84 L80 88 L65 84 L49 88 L36 83 L21 86 L23 78 L10 77 L14 68 L7 62 L12 53 L7 45 L12 37 L5 30 Z"
                  fill="#FFE14F"
                />
              </svg>
            </span>
          </h2>

          <button className="bg-[#ff0066] max-w-[300px] lg:max-w-[400px] w-full border-2 border-black text-white px-8 py-3 rounded-xl font-bold text-lg md:text-xl cursor-pointer tracking-wide hover:bg-[#d40055] transition-colors flex items-center justify-center gap-3 mt-8">
            FIND MY ROOKIE <span className="font-sans text-xl leading-none">→</span>
          </button>
        </div>

        {/* Right Content - Dog */}
        <div className="w-full md:w-[50%] lg:w-[40%] absolute bottom-0 md:relative flex justify-center md:justify-start items-start z-10 pointer-events-none left-0 md:left-auto">
          <div className="relative w-full max-w-[250px] md:max-w-[300px] h-[250px] md:h-[350px] absolute bottom-0">
            <Image src="/assets/cat.png" alt="Rookie Realtor Dog" fill className="object-contain object-bottom" />
          </div>

          {/* Floating text & heart */}
          <div className="absolute top-[25%] md:top-[15%] right-0 xl:right-[10%] transform rotate-30 xl:rotate-3 flex flex-col items-center">
            <span className="font-heading text-xs sm:text-base md:text-[22px] font-black text-[#111] leading-none tracking-wide">BIG DREAMS.</span>
            <span className="font-heading text-xs sm:text-base md:text-[22px] font-black text-[#111] leading-none tracking-wide">NEW BEGINNINGS.</span>
            <div className="absolute -bottom-16 md:right-0 xl:right-20 md:bottom-[-120px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff0066" stroke="#111" strokeWidth="1.5" className="transform -rotate-12">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>

            {/* Sparkles */}
            <div className="absolute -left-4 -top-2">
              <svg width="16" height="16" viewBox="0 0 100 100" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-[20deg]">
                <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
