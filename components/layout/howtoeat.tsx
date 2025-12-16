import React from 'react'
import { ArrowRight, ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";

const howtoeat = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">How It Works</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Get your favorite street food in 3 simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShoppingBag className="w-8 h-8 text-brand-red" />,
                            title: "Choose Your Kit",
                            desc: "Select from our Family, Couple, or Party packs."
                        },
                        {
                            icon: <Truck className="w-8 h-8 text-brand-red" />,
                            title: "We Deliver",
                            desc: "Fast delivery within 45 mins to your doorstep."
                        },
                        {
                            icon: <UtensilsCrossed className="w-8 h-8 text-brand-red" />,
                            title: "Assemble & Enjoy",
                            desc: "Fill the puris, dip in pani, and enjoy the crunch!"
                        }
                    ].map((step, idx) => (
                        <div key={idx} className="bg-brand-offwhite p-8 rounded-2xl text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default howtoeat