"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Star,
    Users,
    Calendar,
} from "lucide-react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        image: "/images/heroimage1.jpeg",
        // Keyword Focus: Brand Name + Main Service (Delivery)
        title: "Ghar Bethay Chatkhara – Best Golgappay Delivery",
        subtitle: "100% Hygienic, Crispy & Street-Style Taste",
        description:
            "Craving street food but worried about hygiene? Order our premium Golgappa kits online. We deliver the crunchiest puris and tangiest pani right to your doorstep.",
        cta: "View Menu",
        link: "/menu",
        // Updated stats to be realistic for a growing startup
        stats: { delivery: "Fast", hygiene: "100%", taste: "5/5" },
    },
    {
        id: 2,
        image: "/images/heroimage4.jpeg",
        // Keyword Focus: Product Type (DIY Kits/Ready to Eat)
        title: "The Ultimate DIY Golgappa Experience",
        subtitle: "Assemble, Eat & Enjoy with Family",
        description:
            "Get everything in one box! Our Ready-to-Eat kits come with crispy Puris, Chatpata Pani, Sweet & Sour Chutneys, and fresh Filling. Just fill and eat!",
        cta: "Order Kits",
        link: "/packages",
        stats: { items: "Fresh", rating: "4.9", orders: "1K+" },
    },
    {
        id: 3,
        image: "/images/heroimage6.jpeg",
        // Keyword Focus: Use Case (Parties/Gatherings)
        title: "Make Your Parties 'Kuch Teekha'",
        subtitle: "Perfect Family & Party Combos",
        description:
            "Hosting a birthday or family gathering? Our Family & Party Combos (50-100 pcs) are the perfect spicy treat to impress your guests.",
        cta: "Order Party Deal",
        link: "/order",
        stats: { serves: "Big Groups", rating: "5.0", joy: "Unlimited" },
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentSlide((current) => (current + 1) % slides.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative h-screen overflow-hidden flex flex-col justify-between">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
            ))}



            {/* Content Centered for Mobile */}
            <div className="relative z-10 flex items-center justify-center text-center h-full px-4 sm:px-6">
                <div className="max-w-4xl w-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-1000 ${index === currentSlide
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                        >
                            {index === currentSlide && (
                                <>


                                    {/* Main Content */}
                                    <div className="space-y-3 sm:space-y-6">


                                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red leading-tight">
                                            {slide.title}
                                        </h1>

                                        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                                            {slide.subtitle}
                                        </h2>

                                        <p className="text-sm sm:text-lg md:text-xl text-white  max-w-2xl mx-auto leading-relaxed">
                                            {slide.description}
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center">
                                            <Button

                                                size="lg"

                                            >
                                                <Link href={slide.link}>{slide.cta}</Link>
                                            </Button>
                                            <Button

                                                variant="outline"
                                                size="lg"
                                                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-transparent w-full sm:w-auto order-2"
                                            >
                                                <Link href="/contact">Contact Us</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls & Arrows at Bottom for Mobile */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 sm:gap-4 w-full">
                {/* Play/Pause & Indicators */}
                <div className="opacity-0 pointer-events-none flex items-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3">
                    <button
                        onClick={togglePlayPause}
                        className="text-white hover:text-brand-yellow transition-colors"
                        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                        title={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                        {isPlaying ? (
                            <Pause className="w-3 sm:w-5 h-3 sm:h-5" />
                        ) : (
                            <Play className="w-3 sm:w-5 h-3 sm:h-5" />
                        )}
                    </button>

                    <div className="flex space-x-1 sm:space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className="relative w-6 sm:w-12 h-1 sm:h-2 bg-white/30 rounded-full overflow-hidden"
                                aria-label={`Go to slide ${index + 1}`}
                                title={`Slide ${index + 1}`}
                            >
                                <div
                                    className={`absolute left-0 top-0 h-full bg-brand-yellow transition-all duration-100 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                        }`}
                                    style={{
                                        width: index === currentSlide ? `${progress}%` : "0%",
                                    }}
                                />
                                <div
                                    className={`absolute left-0 top-0 h-full transition-all duration-300 ${index === currentSlide ? "bg-brand-yellow" : "bg-white/50"
                                        }`}
                                    style={{ width: index < currentSlide ? "100%" : "0%" }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Arrows Centered Below */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all"
                        aria-label="Previous slide"
                        title="Previous slide"
                    >
                        <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all"
                        aria-label="Next slide"
                        title="Next slide"
                    >
                        <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6" />
                    </button>
                </div>
            </div>
        </div>

    );
}
