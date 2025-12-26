import Image from "next/image";
import { Metadata } from "next";
import Pageshero from "@/components/sections/Pageshero";

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
        image="/bgremoveimages/3.png"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Kuch Teekha Ho Jaye started with a simple idea: to bring the
            authentic, street-style Golgappa taste to households without the
            worry of hygiene. We realized that while everyone loves Golgappas,
            the concern for cleanliness often stops them from enjoying this
            favorite snack.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We source the freshest ingredients, prepare our pani with mineral
            water, and package everything in premium, spill-proof kits. Whether
            it is a family gathering, a party, or just a craving, we ensure you
            get the perfect crunch and tang every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              💧
            </div>
            <h3 className="font-bold text-xl mb-2">100% Hygienic</h3>
            <p className="text-gray-600">
              Mineral water pani and clean preparation environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-yellow-50 text-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ⚡
            </div>
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Delivered fresh and crispy to your doorstep.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🥘
            </div>
            <h3 className="font-bold text-xl mb-2">Authentic Taste</h3>
            <p className="text-gray-600">
              Traditional recipes that hit the right spot.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To revolutionize the street food industry in Pakistan by proving
              that "street food" can be safe, hygienic, and premium without
              losing its soul. We want every family to enjoy Golgappas without
              the fear of getting sick.
            </p>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the household name for hygienic snacking across the
              country, setting supreme standards for quality and taste.
            </p>
          </div>
          <div className="bg-brand-red/5 p-8 rounded-2xl border border-brand-red/10">
            <h3 className="text-2xl font-bold text-brand-red mb-4">
              Our Promise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-700">
                  Freshly fried Golgappas daily
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-700">RO Purified Mineral Water</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-700">
                  Gloves & Hairnets Mandatory
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-700">
                  Premium Food-Grade Packaging
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-xs">2023</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">The Idea</div>
                </div>
                <div className="text-slate-500">
                  It all started with a craving and a stomach ache. We decided
                  to fix the hygiene problem in the market.
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-yellow text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-xs">2024</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">First Kitchen</div>
                </div>
                <div className="text-slate-500">
                  Opened our first cloud kitchen in Gulshan-e-Iqbal, serving 50+
                  orders daily within the first month.
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-xs">Now</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Expansion</div>
                </div>
                <div className="text-slate-500">
                  Expanding to events, weddings, and aiming to cover the entire
                  city of Karachi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
