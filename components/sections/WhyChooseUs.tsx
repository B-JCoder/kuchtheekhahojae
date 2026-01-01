import { ShieldCheck, Droplets, Package, Heart } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-50 text-yellow-600 text-sm font-bold tracking-wide mb-4 border border-yellow-100">
            Why Choose Us?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Premium Hygienic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-600">
              Golgappe Experience
            </span>{" "}
            in Karachi
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are not just another golgappa stall. We are a premium hygienic
            pani puri brand in Karachi committed to quality, cleanliness, and
            authentic taste.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(211,47,47,0.15)] hover:-translate-y-2 transition-all duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-[#D32F2F] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-[#D32F2F] transition-colors">
              100% Hygienic Golgappe
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              All our hygienic Golgappe are prepared in a sterilized kitchen
              using mineral water pani puri recipes and food-grade equipment.
              Your health comes first.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(33,150,243,0.15)] hover:-translate-y-2 transition-all duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#2196F3] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Droplets className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-[#2196F3] transition-colors">
              Mineral Water Pani Puri
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              We strictly use RO purified mineral water in both khatta and
              meetha pani, making us one of the safest mineral water pani puri
              providers in Karachi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(251,192,45,0.2)] hover:-translate-y-2 transition-all duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 text-[#FBC02D] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Package className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-[#FBC02D] transition-colors">
              Premium Packaging
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our spill-proof and airtight packaging keeps your Karachi Golgappe
              crispy, fresh, and perfectly organized during delivery.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(56,142,60,0.15)] hover:-translate-y-2 transition-all duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-[#388E3C] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-[#388E3C] transition-colors">
              Authentic Karachi Taste
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Enjoy the classic Karachi pani puri flavor — perfectly balanced
              sweet, sour, and spicy — just like street food, but cleaner and
              safer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
