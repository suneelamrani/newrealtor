import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center bg-white h-auto">
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/assets/hero-background.png"
          alt="Dog with For Sale Sign"
          fill
          className="object-cover object-[center_right] lg:object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 md:via-white/85 lg:via-white/75 to-transparent md:w-[75%]" />
      </div>

      <div className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-16">

        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
          <h1 className="font-heading text-center sm:text-left text-[60px] md:text-[60px] lg:text-[72px] xl:text-[110px] leading-[0.95] text-[#1a1a1a] mb-5 font-bold uppercase relative z-20">
            Looking To
            <br />

            {/* BUY */}
            <span className="relative inline-block mr-3 lg:mr-4">
              <svg
                className="absolute -z-0 pointer-events-none
        left-[-13%] top-[-9%]
        w-[126%] h-[128%]"
                viewBox="0 0 250 100"
                preserveAspectRatio="none"
              >
                <path
                  d="
          M5 23
          L12 19
          L9 14
          L25 16
          L31 11
          L46 15
          L58 10
          L73 14
          L87 10
          L101 14
          L117 9
          L132 13
          L148 9
          L162 14
          L179 11
          L193 16
          L209 13
          L218 18
          L234 17
          L239 24

          L235 31
          L241 38
          L236 46
          L240 54
          L234 61
          L238 69
          L229 75
          L231 82
          L214 80
          L204 86
          L188 82
          L174 87
          L158 83
          L143 89
          L127 84
          L111 89
          L96 84
          L80 88
          L65 84
          L49 88
          L36 83
          L21 86
          L23 78
          L10 77
          L14 68
          L7 62
          L12 53
          L7 45
          L12 37
          L5 30
          Z
        "
                  fill="#FFE14F"
                />

                {/* rough inner stroke */}
                <path
                  d="
          M15 25
          C45 17 72 20 100 17
          C130 14 160 19 188 17
          C207 16 222 20 234 24
        "
                  fill="none"
                  stroke="#F4D735"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>

              <span className="relative z-10">Buy</span>
            </span>

            Or

            {/* SELL */}
            <span className="relative inline-block ml-3 lg:ml-4">
              <svg
                className="absolute -z-0 pointer-events-none
        left-[-12%] top-[-9%]
        w-[125%] h-[128%]"
                viewBox="0 0 250 100"
                preserveAspectRatio="none"
              >
                <path
                  d="
          M6 22
          L14 18
          L11 13
          L28 16
          L39 11
          L53 15
          L68 10
          L84 14
          L100 10
          L116 14
          L131 9
          L147 13
          L164 9
          L180 14
          L196 11
          L211 16
          L226 13
          L238 19
          L233 27
          L240 34
          L235 42
          L241 50
          L235 58
          L239 67
          L231 73
          L233 81
          L217 79
          L205 86
          L189 82
          L174 88
          L158 83
          L142 89
          L126 84
          L110 88
          L95 84
          L78 88
          L64 83
          L48 87
          L35 82
          L20 85
          L23 77
          L10 75
          L14 66
          L7 60
          L12 51
          L7 44
          L12 35
          L5 29
          Z
        "
                  fill="#FF6B9E"
                />

                <path
                  d="
          M15 24
          C45 17 72 21 101 17
          C130 14 160 19 189 17
          C207 16 223 20 234 24
        "
                  fill="none"
                  stroke="#F45188"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>

              <span className="relative z-10">Sell</span>
            </span>

            <br />

            A Home?
          </h1>

          {/* Mobile image  */}
          <div className="block sm:hidden w-[100vw] relative left-1/2 -translate-x-1/2 z-0 my-4">
            <img
              src="/assets/hero-background-mobile.png"
              alt="Dog with For Sale Sign"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute -bottom-1 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent" />
          </div>

          <p className="text-left text-lg md:text-[19px] lg:text-3xl font-bold text-gray-800 mb-5 max-w-[520px] mx-auto sm:mx-0 leading-tight z-20">
            Work with a newly licensed realtor who's ready to go the extra mile.
          </p>

          <div className="hidden sm:block font-heading text-[21px] md:text-3xl text-[#1a1a1a] mb-8 transform -rotate-2 w-fit z-20 font-bold leading-snug">
            New doesn't mean inexperienced.<br />
            — It means <span className="relative inline-block">hungry.<span className="absolute -bottom-1 left-0 w-[110%] h-[3px] bg-[#ff6b9e] rounded-full rotate-1"></span></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-5 z-20 w-full sm:w-auto">
            <Link href="/find" className="bg-[#FCD935] text-[#1a1a1a] px-10 py-2.5 rounded-xl sm:rounded-lg font-bold text-lg tracking-wide flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-[0_4px_14px_0_rgba(255,217,59,0.39)] border-2 border-[#1a1a1a] uppercase w-full sm:w-auto">
              Find my rookie
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="/realtor" className="bg-white text-[#1a1a1a] px-8 py-2.5 rounded-xl sm:rounded-lg font-bold text-lg tracking-wide flex items-center justify-center hover:bg-gray-50 transition-colors border-2 border-[#1a1a1a] uppercase w-full sm:w-auto shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]">
              I'm a new realtor
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-2 z-20 max-w-[350px] lg:max-w-[550px] w-full mx-auto sm:mx-0">
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

      <div className="hidden md:block absolute top-[4%] right-[38%] lg:right-[34%] z-20 pointer-events-none">
        <div className="relative font-heading text-[22px] lg:text-[26px] text-[#1a1a1a] transform -rotate-6 font-bold leading-tight text-center">
          SAME HOUSES.<br />WAY NICER VIBES.
          <svg className="absolute -bottom-20 left-[60%] transform -translate-x-1/2 w-20 h-20 text-[#1a1a1a]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 25 15 Q 50 60, 78 72" />
            <path d="M 68 76 L 78 72 L 73 62" />
          </svg>
        </div>
      </div>
    </section>
  );
}