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
  title: "About Us | Kuch Theek Ho Jae",
  description:
    "Learn about our story, mission, and how we bring hygienic, authentic street-style Golgappas to your doorstep in Karachi.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite pb-20">
      <Pageshero
        title="About Us"
        highlighted="Kuch Theek Ho Jae"
        description="Learn about our story, mission, and how we bring hygienic, authentic street-style Golgappas to your doorstep in Karachi."
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
