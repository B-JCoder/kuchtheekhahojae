import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import HeroSlider from "@/components/layout/HeroSlider";
import HowToEat from "@/components/layout/howtoeat";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home | Kuch Theek Ho Jae",
    description: "Welcome to Kuch Theek Ho Jae - The best hygienic Golgappas in Karachi. Order our party kits now!",
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
                            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight">Our Bestsellers</h2>
                            <p className="text-lg text-gray-500 max-w-lg">Customer favorites you must try. Perfect for any gathering.</p>
                        </div>

                        <Link href="/menu" className="hidden md:block">
                            <Button variant="outline" className="border-gray-200 text-brand-dark hover:border-[#D32F2F] hover:text-[#D32F2F] rounded-full px-8">
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
                            <Button variant="outline" fullWidth className="rounded-full border-gray-200">
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
            <section className="py-32 relative overflow-hidden">
                {/* Colorful Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F] via-[#c62828] to-[#b71c1c] z-0" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-sm">
                        Planning a Party?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                        Get our special bulk rates for weddings, birthdays, and corporate events. <br className="hidden md:block" />
                        We set up live stalls too!
                    </p>
                    <Link href="https://wa.me/923008269438" target="_blank">
                        <Button size="lg" className="bg-white text-[#D32F2F] hover:bg-gray-50 border-none px-12 py-7 text-lg rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
                            Chat on WhatsApp
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
