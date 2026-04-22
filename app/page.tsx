import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import HeroSlider from "@/components/layout/HeroSlider";
import HowToEat from "@/components/layout/howtoeat";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hygienic Golgappe & Pani Puri in Karachi | Kuch Teekha Hojaye",
  description:
    "Order hygienic golgappe & mineral water pani puri in Karachi. Safe, fresh & authentic Karachi pani puri delivered near you by Kuch Teekha Hojaye.",
};

export default function Home() {
  const bestsellers = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <HeroSlider />

      {/* Why Choose Us - Moved up for better flow */}
      <WhyChooseUs />

      {/* How It Eat */}
      <HowToEat />

      {/* Bestsellers */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-center md:text-left w-full md:w-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold tracking-wide mb-3">
                Menu
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight">
                Our Bestsellers
              </h2>
              <p className="text-lg text-gray-500 max-w-lg">
                Customer favorites you must try. Perfect for any gathering.
              </p>
            </div>

            <Link href="/menu" className="hidden md:block">
              <Button
                variant="outline"
                className="border-gray-200 text-brand-dark hover:border-[#D32F2F] hover:text-[#D32F2F] rounded-full px-8"
              >
                View All Menu
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link href="/menu">
              <Button
                variant="outline"
                fullWidth
                className="rounded-full border-gray-200"
              >
                View All Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
    </div>
  );
}
