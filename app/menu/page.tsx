import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Menu | Kuch Theek Ho Jae",
    description: "Explore our menu of Ready-to-Eat Golgappa Kits, Party Combos, and Frozen Packs. Order online for delivery in Karachi.",
};

export default function MenuPage() {
    const readyToEat = products.filter(p => p.category === 'kits');
    const combos = products.filter(p => p.category === 'combos');
    const frozen = products.filter(p => p.category === 'frozen');

    return (
        <div className="min-h-screen bg-brand-offwhite pb-20">
            <div className="bg-brand-dark py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Choose from our wide range of hygienic Golgappa kits and party combos.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-16">
                {/* Ready to Eat - Highlighted Section */}
                <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-red/10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-8 w-1 bg-brand-red rounded-full"></div>
                        <div>
                            <span className="text-brand-red font-bold uppercase tracking-wider text-sm">Most Popular</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Ready-to-Eat Kits</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {readyToEat.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Party Combos */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-8 w-1 bg-brand-yellow rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Party Combos</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {combos.map(product => (
                            <div key={product.id} className={product.name.includes("Family") ? "transform md:-translate-y-4" : ""}>
                                {/* Simple lift for Family combo or just rely on the card contents */}
                                <ProductCard product={product} />
                                {product.name.includes("Family") && (
                                    <div className="mt-2 text-center text-sm font-bold text-brand-green">
                                        ⭐ Best Seller
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Frozen Packs */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Frozen / DIY Packs</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {frozen.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
