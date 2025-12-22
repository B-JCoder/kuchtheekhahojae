import React from 'react'
import { ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";

const HowToEat = () => {
    return (
        <section id="how-it-works" className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold tracking-wide mb-4">
                        Simplicity
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">How It Works</h2>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto">Get your favorite street food in 3 simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 -z-10" />

                    {[
                        {
                            icon: <ShoppingBag className="w-8 h-8 text-white" />,
                            title: "Choose Your Kit",
                            desc: "Select from our Family, Couple, or Party packs curated for your needs.",
                            color: "bg-[#D32F2F]",
                            shadow: "group-hover:shadow-[0_20px_40px_-10px_rgba(211,47,47,0.4)]"
                        },
                        {
                            icon: <Truck className="w-8 h-8 text-white" />,
                            title: "We Deliver",
                            desc: "Fast, safe delivery within 45 mins straight to your doorstep.",
                            color: "bg-[#F9A825]",
                            shadow: "group-hover:shadow-[0_20px_40px_-10px_rgba(249,168,37,0.4)]"
                        },
                        {
                            icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
                            title: "Assemble & Enjoy",
                            desc: "Fill the puris, dip in our signature pani, and enjoy the crunch!",
                            color: "bg-[#388E3C]",
                            shadow: "group-hover:shadow-[0_20px_40px_-10px_rgba(56,142,60,0.4)]"
                        }
                    ].map((step, idx) => (
                        <div key={idx} className="group relative bg-white p-8 rounded-[2rem] text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 shadow-sm">
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110 ${step.color} ${step.shadow}`}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowToEat
