export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white relative py-6 md:py-8 px-4 md:px-6 lg:px-8 z-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="text-center relative mb-10 md:mb-14 w-full">
          <div className="absolute left-[15%] top-12 hidden md:block">
            <svg width="34" height="34" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" />
            </svg>
          </div>

          <div className="absolute right-[15%] bottom-6 hidden md:block">
            <svg width="50" height="70" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round">
              <path d="M60 20 L90 10 M65 50 L95 45 M65 80 L90 85" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-black tracking-wider leading-none">
            HOW IT WORKS
          </h2>

          <div className="w-full flex justify-center mt-1 relative z-10">
            <svg width="250" height="10" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8 Q 25 -2, 50 8 T 110 8 T 170 8 T 215 8" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <p className="mt-4 text-[#222222] text-lg lg:text-lg font-semibold">
            Simple. Fast. No awkward small talk required (unless you want to).
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-start gap-6 relative">

          {/* Step 01 */}
          <div className="flex flex-col items-start gap-2 sm:gap-4 w-full">
            <div className="flex items-center gap-4">
              <h1 className="w-16 h-16 rounded-full bg-[#67CCFD] flex items-center justify-center text-3xl rotate-3 font-extrabold text-black shrink-0">
                01
              </h1>

              <h3 className="font-sans text-lg lg:text-xl font-bold text-black uppercase tracking-wide">
                TELL US WHAT<br />YOU NEED
              </h3>
            </div>

            <div className="flex items-start gap-4 pl-[2px]">
              <div className="w-[56px] flex justify-start shrink-0">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>

              <p className="text-gray-800 font-bold text-base sm:text-sm lg:text-base leading-[1.4] max-w-[260px] sm:max-w-[160px] w-full">
                Buying? Selling? Investing? Renting? Let us know what you're looking for.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-4">
              <h1 className="w-16 h-16 rounded-full bg-[#F969C0] flex items-center justify-center text-3xl rotate-3 font-extrabold text-black shrink-0">
                02
              </h1>

              <h3 className="font-sans text-lg lg:text-xl font-bold text-black uppercase tracking-wide">
                GET MATCHED<br />WITH A REALTOR
              </h3>
            </div>

            <div className="flex items-start gap-4 pl-[2px]">
              <div className="w-[56px] flex justify-start shrink-0">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-gray-800 font-bold text-base sm:text-sm lg:text-base leading-[1.4] max-w-[260px] sm:max-w-[160px] w-full">
                We connect you with a suitable new realtor in your area.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-4">
              <h1 className="w-16 h-16 rounded-full bg-[#95F4BE] flex items-center justify-center text-3xl rotate-3 font-extrabold text-black shrink-0">
                03
              </h1>
              <h3 className="font-sans text-lg lg:text-xl font-bold text-black uppercase tracking-wide">
                MEET YOUR<br />REALTOR
              </h3>
            </div>
            <div className="flex items-start gap-4 pl-[2px]">
              <div className="w-[56px] flex justify-start shrink-0">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-24">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <p className="text-gray-800 font-bold text-base sm:text-sm lg:text-base leading-[1.4] max-w-[260px] sm:max-w-[160px] w-full">
                Choose who you want to work with. Message, meet, and go from there!
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center mt-6 shrink-0 px-2  absolute left-[24%]">
            <svg width="30" height="16" viewBox="0 0 30 16" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 8 L24 8 M18 2 L26 8 L18 14" />
            </svg>
          </div>

          <div className="hidden md:flex items-center justify-center mt-6 shrink-0 px-2 absolute right-[33%] lg:right-[37%]">
            <svg width="30" height="16" viewBox="0 0 30 16" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 8 L24 8 M18 2 L26 8 L18 14" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
