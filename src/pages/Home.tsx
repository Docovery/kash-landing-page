import Hero from "../components/Hero";
// import LogosBar from "../components/LogosBar";
import Features from "../components/Features";
import MerchantSection from "../components/MerchantSection";
import CustomerSection from "../components/CustomerSection";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";

// Le JSON-LD FAQPage est injecté dans <head> (voir src/site.ts).
export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <Hero />
      <Features />
      <MerchantSection />
      <CustomerSection />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <CTAFinal />
    </div>
  );
}
