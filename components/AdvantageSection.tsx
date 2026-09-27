import Image from "next/image";

export default function AdvantageSection() {
    return (
        <section className="w-full md:bg-[#B8E2FE] relative md:px-6 lg:px-8 z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center relative z-10">

                <div className="w-full md:w-[45%] lg:w-[38%] flex justify-center items-end h-full relative bg-[#B8E2FE]">
                    <div className="absolute top-[5%] left-[8%] md:left-20 transform -rotate-0 hidden sm:block">
                        <svg width="50" height="70" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round">
                            <path d="M40 20 L10 10 M35 50 L5 45 M35 80 L10 85" />
                        </svg>
                    </div>

                    <div className="absolute top-[6%] right-[8%] md:right-24 transform -rotate-20 hidden sm:block">
                        <svg width="50" height="70" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round">
                            <path d="M60 20 L90 10 M65 50 L95 45 M65 80 L90 85" />
                        </svg>
                    </div>

                    <Image
                        src="/assets/girl-poster.png"
                        alt='"NEW" CAN ACTUALLY BE YOUR ADVANTAGE'
                        width={600}
                        height={600}
                        className="w-full max-w-[400px] md:max-w-[460px] object-contain relative z-10 -mt-10"
                        priority
                    />
                </div>

                <div className="flex-1 flex flex-col items-start gap-8 relative md:pl-4 lg:pl-10 py-6 md:py-0 lg:py-10 px-4 md:px-0">

                    <ul className="space-y-2 sm:space-y-4">
                        <li className="flex items-start gap-3">
                            <Image src="/assets/circle-checkmark.png" alt="circle-checkmark" width={30} height={30} className="h-8 w-8 shrink-0 mt-0.5" />
                            <p className="text-lg md:text-xl text-[#222222] font-semibold">Experienced ≠ automatically<br className="hidden md:block" /> better for every client.</p>
                        </li>

                        <li className="flex items-start gap-3">
                            <Image src="/assets/circle-checkmark.png" alt="circle-checkmark" width={30} height={30} className="h-8 w-8 shrink-0 mt-0.5" />
                            <p className="text-lg md:text-xl text-[#222] font-semibold">A new realtor has something<br className="hidden md:block" /> powerful to prove.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src="/assets/circle-checkmark.png" alt="circle-checkmark" width={30} height={30} className="h-8 w-8 shrink-0 mt-0.5" />
                            <p className="text-lg md:text-xl text-[#222] font-semibold">Your goals → Their priority.</p>

                            <div className="absolute top-[60%] left-[300px] hidden xl:block">
                                <svg width="80" height="40" viewBox="0 0 100 40" fill="none" stroke="#444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M0 20 Q 40 40, 85 15" />
                                    <path d="M75 10 L85 15 L78 22" />
                                </svg>
                            </div>
                        </li>
                    </ul>

                    <button className="bg-[#0b1325] text-white px-4 sm:px-8 py-4.5 sm:py-3.5 rounded-xl cursor-pointer font-bold text-sm lg:text-base tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 w-full sm:w-fit">
                        WHY NEW REALTORS? <span className="font-sans text-xl leading-none">→</span>
                    </button>

                    {/* Yellow Post-it Note (Desktop Only) */}
                    <div className="hidden lg:flex absolute right-[-20px] xl:right-20 top-0 transform -rotate-5 bg-[#FDF6CB] py-8 px-4 w-[280px] flex-col z-20">
                        <h3 className="text-[30px] font-black font-heading leading-[1.05] uppercase transform mb-1 -rotate-1 text-center text-[#111] tracking-tight">
                            SAME TOOLS.<br />FRESH PERSPECTIVE.
                        </h3>

                        <svg width="150" height="10" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6 -rotate-1">
                            <path d="M5 8 Q 25 -2, 50 8 T 110 8 T 170 8 T 215 8" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>

                        <ul className="space-y-4 font-heading text-base pl-2 text-[#222] font-bold">
                            {[
                                "MLS access",
                                "Professional support",
                                "Market knowledge",
                                "Negotiation skills",
                                "And a lot of energy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform -rotate-2">
                                        <rect x="3" y="3" width="18" height="18" rx="1" ry="1"></rect>
                                        <path d="M8 12l3 3 6-8"></path>
                                    </svg>
                                    <span className="flex-1 uppercase transform -rotate-1">{item}</span>
                                    <span className="text-[#00cc66] font-bold text-lg leading-none ml-2 shrink-0">✓</span>
                                </li>
                            ))}
                        </ul>

                        {/* Star doodle below post-it */}
                        <div className="absolute bottom-2 -left-10">
                            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
