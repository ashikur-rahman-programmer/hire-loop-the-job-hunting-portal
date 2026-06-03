import Banner from "@/components/public/Banner";
import CTASection from "@/components/public/CTASection";
import JobDiscoverySection from "@/components/public/JobDiscoverySection";
import PricingSection from "@/components/public/PricingSection";
import StatsSection from "@/components/public/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <StatsSection />
      <JobDiscoverySection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
