import Link from "next/link";
import { ArrowRight, ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import HeroSlider from "@/components/layout/HeroSlider";
import HowToEat from "@/components/layout/howtoeat";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Kuch Theek Ho Jae",
  description: "Welcome to Kuch Theek Ho Jae - The best hygienic Golgappas in Karachi. Order our party kits now!",
};

export default function Home() {
  const bestsellers = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider />


      {/* How It Eat */}
      <HowToEat />
      {/* Bestsellers */}
      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-red mb-2">Bestsellers</h2>
              <p className="text-gray-500">Customer favorites you must try.</p>
            </div>
            <Link href="/menu">
              <Button variant="outline" className="hidden sm:inline-flex">
                View All Menu
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link href="/menu">
              <Button variant="outline" fullWidth>
                View All Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-red mb-6">Planning a Party?</h2>
          <p className="text-lg text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Get our special bulk rates for weddings, birthdays, and corporate events. We set up live stalls too!
          </p>
          <Link href="https://wa.me/923008269438" target="_blank">
            <Button size="lg" variant="secondary" className="text-white hover:bg-green-700 border-none">
              Chat on WhatsApp
            </Button>
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
}
