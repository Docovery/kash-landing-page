import Hero from "../components/Hero";
import LogosBar from "../components/LogosBar";
import Features from "../components/Features";
import ScanSection from "../components/ScanSection";
import CompareSection from "../components/CompareSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <Hero />
      <LogosBar />
      <Features />
      <ScanSection />
      <CompareSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </div>
  );
}
