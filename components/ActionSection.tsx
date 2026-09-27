import Image from "next/image";

const actions = [
  { title: "BUY A HOME", icon: "/assets/home.png" },
  { title: "SELL MY HOME", icon: "/assets/sold-banner.png" },
  { title: "INVEST", icon: "/assets/chart.png" },
  { title: "RENT", icon: "/assets/keys.png" },
];

export default function ActionSection() {
  return (
    <section className="w-full bg-[#D3F3D4] relative py-6 md:py-8 z-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center relative mb-5 w-full flex flex-col items-center">
          <div className="absolute left-0 md:-left-4 top-0 hidden sm:block">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-12">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>
          <div className="absolute left-[-20px] md:-left-10 top-6 hidden sm:block">
            <svg width="18" height="18" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>
          <div className="absolute right-0 md:-right-8 top-2 hidden sm:block">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#111] tracking-wider leading-none text-center">
            WHAT ARE YOU LOOKING TO DO?
          </h2>

          <div className="mt-1 w-full flex justify-center relative">
            <svg viewBox="0 0 450 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50%] md:w-[40%] h-auto">
              <path d="M5 8 Q 100 -2, 220 8 T 440 8" stroke="#ffcc00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Action Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {actions.map((action, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 md:pb-4 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center shadow-[0_8px_20px_-5px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-shadow relative border border-green-50">
              <div className="h-12 w-12 md:h-16 md:w-16 md:mb-4 relative shrink-0">
                <Image src={action.icon} alt={action.title} fill className="object-contain" />
              </div>

              <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wide leading-none ml-4 md:ml-0 flex-1 md:flex-none">{action.title}</h3>
              <div className="ml-auto md:w-full md:flex md:justify-end h-auto md:h-4">
                <span className="text-[#00cc66] font-bold text-2xl leading-none">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
