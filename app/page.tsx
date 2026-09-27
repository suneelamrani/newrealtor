import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNewRealtor from "@/components/WhyNewRealtor";
import AdvantageSection from "@/components/AdvantageSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyNewRealtor />
      <AdvantageSection />
      <HowItWorksSection />
    </div>
  );
}
