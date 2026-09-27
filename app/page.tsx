import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNewRealtor from "@/components/WhyNewRealtor";
import AdvantageSection from "@/components/AdvantageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MeetRealtorSection from "@/components/MeetRealtorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ActionSection from "@/components/ActionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyNewRealtor />
      <AdvantageSection />
      <HowItWorksSection />
      <MeetRealtorSection />
      <ActionSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
