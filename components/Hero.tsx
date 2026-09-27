import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center bg-white h-auto">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt="Dog with For Sale Sign"
          fill
          className="object-cover object-[center_right] lg:object-bottom"
          priority
        />
        {/* White blur / fade shadow on the left side behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 md:via-white/85 lg:via-white/75 to-transparent md:w-[75%]" />
      </div>

      {/* Main Content Container with Max Width 7xl and No Left Padding */}
      <div className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-16">

        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
          {/* Main Heading with Highlight Boxes */}
          <h1 className="font-heading text-[50px] md:text-[60px] lg:text-[72px] xl:text-[92px] leading-[0.95] text-[#1a1a1a] mb-5 font-bold uppercase z-25">
            Looking To<br />
            <span className="relative inline-block mr-3 lg:mr-4">
              <span className="relative z-10">Buy</span>
              <span className="absolute inset-x-[-12px] top-[12px] bottom-[4px] bg-[#ffe14f] transform -rotate-2 -z-0 rounded-sm"></span>
            </span>
            Or
            <span className="relative inline-block ml-3 lg:ml-4">
              <span className="relative z-10">Sell</span>
              <span className="absolute inset-x-[-12px] top-[12px] bottom-[4px] bg-[#ff6b9e] transform rotate-2 -z-0 rounded-sm"></span>
            </span><br />
            A Home?
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] md:text-[19px] lg:text-[25px] font-bold text-gray-800 mb-5 max-w-[420px] leading-tight z-20">
            Work with a newly licensed realtor who's ready to go the extra mile.
          </p>

          {/* Handwritten Tagline Block */}
          <div className="font-heading text-[21px] md:text-[24px] text-[#1a1a1a] mb-8 transform -rotate-2 w-fit z-20 font-bold leading-snug">
            New doesn't mean inexperienced.<br />
            — It means <span className="relative inline-block">hungry.<span className="absolute -bottom-1 left-0 w-[110%] h-[3px] bg-[#ff6b9e] rounded-full rotate-1"></span></span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mb-8 z-20">
            <Link href="/find" className="bg-[#FCD935] text-[#1a1a1a] px-10 py-2.5 rounded-lg font-bold text-lg tracking-wide flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-[0_4px_14px_0_rgba(255,217,59,0.39)] border-2 border-[#1a1a1a] uppercase w-full sm:w-auto">
              Find my realtor
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="/realtor" className="bg-white text-[#1a1a1a] px-8 py-2.5 rounded-lg font-bold text-lg tracking-wide flex items-center justify-center hover:bg-gray-50 transition-colors border-2 border-[#1a1a1a] uppercase w-full sm:w-auto shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]">
              I'm a new realtor
            </Link>
          </div>

          {/* Features / Checkmarks Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-2 z-20 max-w-[350px] lg:max-w-[550px] w-full">
            {[
              "Highly motivated", "Responsive", "Local",
              "Tech-savvy", "Personalized", "Dedicated"
            ].map((trait, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image src="/assets/verified-checkmark-badge.png" alt="Check" width={22} height={22} className="rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base font-bold text-[#1a1a1a]">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-[8%] right-[34%] lg:right-[40%] z-20 pointer-events-none">
        <div className="relative font-heading text-[22px] lg:text-[26px] text-[#1a1a1a] transform -rotate-6 font-bold leading-tight text-center">
          SAME HOUSES.<br />DIFFERENT ENERGY.
          <svg className="absolute -bottom-20 left-[60%] transform -translate-x-1/2 w-20 h-20 text-[#1a1a1a]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 25 15 Q 50 60, 78 72" />
            <path d="M 68 76 L 78 72 L 73 62" />
          </svg>
        </div>
      </div>
    </section>
  );
}