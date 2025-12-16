import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Kuch Theek Ho Jae",
    description: "Learn about our story, mission, and how we bring hygienic, authentic street-style Golgappas to your doorstep in Karachi.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-offwhite pb-20">
            <div className="bg-brand-dark py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Redefining the Golgappa experience with hygiene, taste, and convenience.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Kuch Teekha Ho Jaye started with a simple idea: to bring the authentic, street-style Golgappa taste to households without the worry of hygiene. We realized that while everyone loves Golgappas, the concern for cleanliness often stops them from enjoying this favorite snack.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        We source the freshest ingredients, prepare our pani with mineral water, and package everything in premium, spill-proof kits. Whether it is a family gathering, a party, or just a craving, we ensure you get the perfect crunch and tang every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💧</div>
                        <h3 className="font-bold text-xl mb-2">100% Hygienic</h3>
                        <p className="text-gray-600">Mineral water pani and clean preparation environment.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-yellow-50 text-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">⚡</div>
                        <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                        <p className="text-gray-600">Delivered fresh and crispy to your doorstep.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🥘</div>
                        <h3 className="font-bold text-xl mb-2">Authentic Taste</h3>
                        <p className="text-gray-600">Traditional recipes that hit the right spot.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
