import Image from "next/image";
import { Metadata } from "next";
import Pageshero from "@/components/sections/Pageshero";
import AboutStory from "./components/AboutStory";
import JourneyTimeline from "./components/JourneyTimeline";
import MissionVision from "./components/MissionVision";
import HealthyPaniPuriSEO from "./components/HealthyPaniPuriSEO";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowToEat from "@/components/layout/howtoeat";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "About Us | Hygienic Pani Puri & Golgappe in Karachi",
  description:
    "Learn how Kuch Theek Ho Jae delivers hygienic golgappe & mineral water pani puri in Karachi with authentic street taste and premium hygiene.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite pb-20">
      <Pageshero
        title="About Kuch Theek Ho Jae"
        highlighted=""
        description="Kuch Theek Ho Jae is Karachi’s trusted name for hygienic Golgappe and pani puri made with mineral water and premium-quality ingredients. We specialize in delivering authentic Karachi Golgappe and Karachi pani puri straight to your doorstep — safely, hygienically, and fresh.

If you’re searching for pani puri near me that is clean, safe, and delicious, Kuch Teekha Ho Jaye is your go-to destination. We bring traditional street-style taste without the health risks of roadside food."
        badge="About Us"
      />

      <div className="container mx-auto px-4 py-12">
        <AboutStory />
        <WhyChooseUs />
        <HowToEat />

        <MissionVision />

        <HealthyPaniPuriSEO />
        <JourneyTimeline />
        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />

        {/* Our Journey Timeline */}
      </div>
    </div>
  );
}
