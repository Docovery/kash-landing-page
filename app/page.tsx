import Hero from "../components/Hero";
import LogosBar from "../components/LogosBar";
import Features from "../components/Features";
import MerchantSection from "../components/MerchantSection";
import CustomerSection from "../components/CustomerSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";
import { faqData } from "../components/faqData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <LogosBar />
      <Features />
      <MerchantSection />
      <CustomerSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </div>
  );
}
