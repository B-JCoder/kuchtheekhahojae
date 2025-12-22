import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Ahmed",
        role: "Foodie",
        content: "The most hygienic and crispy Golgappas I've ever had in Karachi! The packaging was perfect, and nothing spilled.",
        rating: 5,
        initial: "S",
        color: "bg-red-100 text-red-600"
    },
    {
        id: 2,
        name: "Omer Khan",
        role: "Regular Customer",
        content: "Ordered for a family gathering, and everyone loved it. The khatta pani is authentic and hits the spot!",
        rating: 5,
        initial: "O",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        id: 3,
        name: "Ayesha Bilgrami",
        role: "Event Planner",
        content: "Professional service and amazing taste. Their live stall setup at my sister's wedding was the highlight of the event.",
        rating: 5,
        initial: "A",
        color: "bg-green-100 text-green-600"
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold tracking-wide mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">What Our Customers Say</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here is what the Golgappa lovers of Karachi have to say about their experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100 fill-current" />

                            <div className="flex text-yellow-400 mb-6 space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
