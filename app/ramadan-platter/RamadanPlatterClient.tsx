"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  MessageCircle,
  Star,
  Share2,
  TrendingUp,
  Clock,
  ShoppingBag,
  Timer,
  Users,
  ShieldCheck,
  Package,
  ArrowRight,
  HelpCircle,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

import HealthyPaniPuriSEO from "../about/components/HealthyPaniPuriSEO";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowToEat from "@/components/layout/howtoeat";

const images = [
  "/ramadanplater/Packing.jpeg",
  "/ramadanplater/plater.jpeg",
  "/ramadanplater/golgappeandplater.jpeg",
  "/ramadanplater/golgappe.jpeg",
  "/ramadanplater/packing2.jpeg",
];

export default function RamadanPlatterClient() {
  const platterProduct = products.find((p) => p.id === "5") || products[0];
  const { addItem, openCheckout } = useCart();
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });
  const [showSticky, setShowSticky] = useState(false);

  // Auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener for sticky bar
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Ramadan Golgappe Platter - Kuch Teekha Ho Jaye",
        text: "Order the best Ramadan Golgappe Platter in Karachi for just Rs. 1,999!",
        url: window.location.href,
      });
    }
  };

  const whatsappLink = `https://wa.me/923008269438?text=${encodeURIComponent(
    "Hi! I want to order the Ramadan Golgappe Platter for Rs. 1,999. Please provide delivery details.",
  )}`;

  const faqs = [
    {
      q: "Is the pani made with mineral water?",
      a: "Yes, we exclusively use premium mineral water for our tangy pani and all preparation.",
    },
    {
      q: "How many people does the platter serve?",
      a: "This platter is designed for family gatherings and easily serves 5-7 persons.",
    },
    {
      q: "Is the packaging safe for transport?",
      a: "We use food-grade, premium packaging that ensures the golgappe stay crispy and avoid any leakage.",
    },
    {
      q: "Can I add extra items?",
      a: "Yes! You can add extra khatta pani or chutneys from our menu section.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-offwhite overflow-hidden">
      {/* Background Gradients (Similar to other pages) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-50 to-green-50 rounded-full blur-3xl opacity-60 -translate-y-1/3 -translate-x-1/4" />

      {/* Page Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* LEFT: Image Gallery */}
          <section className="flex flex-col items-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white border-4 md:border-8 border-white group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImage]}
                    alt="Ramadan Golgappe Platter"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-4 left-0 w-full px-6 flex gap-1.5">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${currentImage === idx ? "bg-brand-red" : "bg-white/30"}`}
                  />
                ))}
              </div>

              {/* Float Badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="bg-brand-red text-white text-[10px] md:text-xs font-black px-4 py-2 rounded-full tracking-tighter shadow-xl flex items-center gap-2">
                  Ramadan Special
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    currentImage === idx
                      ? "border-brand-red scale-110 shadow-lg"
                      : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Platter"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Social Proof Bar */}
            <div className="mt-10 w-full max-w-[480px] p-4 bg-white rounded-3xl border border-orange-50 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
                    >
                      <Image
                        src={`/bgremoveimages/${i}.png`}
                        alt="Reviewer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-brand-dark uppercase tracking-tight">
                    Recent Orders
                  </span>
                  <span className="text-[9px] text-gray-400 font-medium">
                    Updated 5m ago
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand-red">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-black tracking-tighter">
                  1,248 Sold Recently
                </span>
              </div>
            </div>
          </section>

          {/* RIGHT: Product Details */}
          <section className="flex flex-col">
            {/* Scarcity Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="px-3 py-1 bg-red-50 text-brand-red rounded-lg border border-red-100 flex items-center gap-2">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-black tracking-widest uppercase">
                  Deal Ends In: {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-black text-brand-dark mb-4 leading-[0.9] md:leading-tight">
              Ramadan <br className="hidden md:block" />
              <span className="text-brand-red italic">Golgappe</span> Platter
            </h1>

            <div className="flex items-end gap-4 mb-8">
              <div className="flex flex-col leading-none">
                <span className="text-gray-400 line-through text-base font-bold mb-1">
                  Rs. 2,499
                </span>
                <span className="text-5xl font-black text-brand-dark tracking-tighter">
                  Rs. 1,999
                </span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full mb-1 self-end uppercase">
                Save 20%
              </span>
            </div>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
              Bring the signature street-food magic home this Ramadan. Our
              premium Golgappe Platter is Karachi&apos;s favorite choice for a
              hygienic, crispy, and chatpata Iftar. Everything you need for the
              perfect gathering!
            </p>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="sm:col-span-2">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { duration: 1.5, repeat: Infinity },
                  }}
                >
                  <Button
                    onClick={() => {
                      addItem(platterProduct);
                      openCheckout();
                    }}
                    className="w-full h-16 md:h-16 text-xl font-black bg-brand-red hover:bg-brand-red text-white border-none rounded-[1.5rem] shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-7 h-7" />
                    ORDER NOW
                  </Button>
                </motion.div>
              </div>
              <Button
                onClick={() => addItem(platterProduct)}
                className="h-16 text-lg font-bold bg-brand-dark hover:bg-black text-white rounded-[1.2rem] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                ADD TO CART
              </Button>
              <button
                onClick={handleShare}
                className="h-16 border-2 border-dashed border-gray-200 rounded-[1.2rem] text-sm font-bold text-gray-500 hover:text-brand-red hover:border-brand-red transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                SHARE WITH FRIENDS
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 mb-12">
              {[
                {
                  icon: <Package className="w-4 h-4" />,
                  title: "Premium Pack",
                  sub: "Food-Grade",
                },
                {
                  icon: <ShieldCheck className="w-4 h-4" />,
                  title: "100% Pure",
                  sub: "Mineral Water",
                },
                {
                  icon: <Users className="w-4 h-4" />,
                  title: "Large Size",
                  sub: "Serves 5-7",
                },
              ].map((h, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-2xl border border-gray-50 text-center flex flex-col items-center"
                >
                  <div className="text-brand-red mb-1.5">{h.icon}</div>
                  <span className="text-[10px] font-black text-brand-dark uppercase tracking-tight leading-none mb-1">
                    {h.title}
                  </span>
                  <span className="text-[8px] text-gray-400 font-medium">
                    {h.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Content List Card */}
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Star className="w-32 h-32 text-brand-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-8 flex items-center gap-3">
                <Package className="w-6 h-6 text-brand-red" />
                What&apos;s Inside the Box?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "50 Jumbo Crispy Golgappa Puris",
                  "Freshly Boiled Masala Potatoes",
                  "Spicy Black & White Channas",
                  "Sweet & Sour Meethi Chutney",
                  "Signature 1.5L Tangy Imli Water",
                  "Crispy Namkeen Topping",
                  "Disposable Serving Bowls",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 font-medium group"
                  >
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 shrink-0 text-brand-green group-hover:scale-110 transition-transform">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* INTEGRATED SECTIONS */}
        <div className="space-y-24 mt-20">
          <HowToEat />
          <WhyChooseUs />
          <HealthyPaniPuriSEO />
        </div>

        {/* FAQ & SEO CONTENT */}
        <section className="mt-28 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* FAQ */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-brand-dark mb-10 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-brand-red" />
              FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm transition-all overflow-hidden"
                  open={idx === 0}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-brand-dark list-none">
                    {faq.q}
                    <Plus className="w-5 h-5 text-brand-red group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* SEO Text Sidebar */}
          <div className="bg-orange-50/50 p-8 rounded-[2.5rem] h-fit">
            <h3 className="text-lg font-black text-brand-dark mb-4">
              Best Golgappa Deal in Karachi
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Our <strong>Ramadan Golgappe Platter</strong> is meticulously
              crafted for large gatherings. Searching for the{" "}
              <em>best golgappa deal Karachi</em>? Look no further! We serve
              thousands of orders daily during Ramadan because we prioritize
              hygiene, fresh ingredients, and authentic taste.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              From <strong>DHA to North Nazimabad</strong>, we deliver the
              chatpata magic across Karachi. Join our community of happy
              customers and make your Iftar table stand out!
            </p>
          </div>
        </section>
      </div>

      {/* Sticky Mobile Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[100] md:hidden px-4 pb-6"
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-[2rem] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-white/20 flex items-center justify-between gap-4">
              <div className="flex flex-col pl-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Ramadan Price
                </span>
                <span className="text-xl font-black text-brand-dark">
                  Rs. 1,999
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => addItem(platterProduct)}
                  className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <div
                  onClick={() => {
                    addItem(platterProduct);
                    openCheckout();
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { duration: 1.2, repeat: Infinity },
                    }}
                  >
                    <Button className="h-12 px-6 rounded-2xl bg-[#25D366] text-white font-black text-xs shadow-lg flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      ORDER NOW
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
