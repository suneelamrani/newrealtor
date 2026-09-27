import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNewRealtor from "@/components/WhyNewRealtor";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyNewRealtor />
    </div>
  );
}
