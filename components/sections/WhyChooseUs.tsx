import { ShieldCheck, Utensils, Heart } from "lucide-react";

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
                        Our Promise
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-600">Kuch Theek Ho Jae?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are not just another street stall. We bring you a{" "}
                        <span className="font-semibold text-brand-dark">premium, hygienic, and authentic</span> Golgappa
                        experience — straight to your doorstep.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Card 1 */}
                    <div className="group relative bg-white rounded-[2rem] p-10 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(211,47,47,0.15)] hover:-translate-y-2 transition-all duration-300">
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-[#D32F2F] shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck className="h-10 w-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-[#D32F2F] transition-colors">
                            100% Hygienic
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Prepared in a sterilized kitchen using mineral water and premium ingredients. We prioritize your health above all.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-white rounded-[2rem] p-10 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(251,192,45,0.2)] hover:-translate-y-2 transition-all duration-300">
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 text-[#FBC02D] shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Utensils className="h-10 w-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-[#FBC02D] transition-colors">
                            Premium Packaging
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Spill-proof, elegant custom boxes that keep your Golgappas crispy, fresh, and perfectly organized for the trip.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-white rounded-[2rem] p-10 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(56,142,60,0.15)] hover:-translate-y-2 transition-all duration-300">
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-[#388E3C] shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Heart className="h-10 w-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-[#388E3C] transition-colors">
                            Authentic Taste
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The classic street-style flavor you crave, refined for family enjoyment. Perfectly balanced sweet, sour, and spicy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
