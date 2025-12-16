import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { AddToCartSection } from './AddToCart';

import { Metadata } from 'next';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return {
            title: "Product Not Found | Kuch Theek Ho Jae",
        };
    }

    return {
        title: `${product.name} | Kuch Theek Ho Jae`,
        description: product.description.substring(0, 160),
        openGraph: {
            title: product.name,
            description: product.description,
            // images: [product.image], // Add image if full URL is available or handle accordingly
        }
    };
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/menu">
                        <Button variant="outline">Back to Menu</Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Mock "What's inside" data
    const whatsInside = [
        `${product.serves ? product.serves * 10 : 50} Crispy Puris`,
        "1 Bottle Khatta Pani (1.5L)",
        "1 Packet Meethi Chutney",
        "1 Packet Special Masala",
        "Fresh Boiled Chana & Alu"
    ];

    return (
        <div className="min-h-screen bg-white pb-20 pt-8">
            <div className="container mx-auto px-4">
                <Link href="/menu" className="inline-flex items-center text-gray-500 hover:text-brand-red mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Menu
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {product.isVeg && (
                            <span className="absolute top-4 right-4 bg-brand-green text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                Pure Veg
                            </span>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{product.name}</h1>
                        <p className="text-xl text-brand-red font-bold mb-6">Rs. {product.price}</p>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            {product.description}
                        </p>

                        <div className="bg-brand-offwhite p-6 rounded-xl mb-8 border border-gray-100">
                            <h3 className="font-bold text-brand-dark mb-4 text-lg">What&apos;s inside this kit?</h3>
                            <ul className="space-y-3">
                                {whatsInside.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-brand-green">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <AddToCartSection product={product} />
                        </div>

                        {/* Cross Sell */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-brand-dark mb-4">Add Extras</h4>
                            <div className="flex flex-wrap gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-colors text-sm font-medium">
                                    <Plus className="w-4 h-4" />
                                    Extra Khatta Pani (+Rs. 150)
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-colors text-sm font-medium">
                                    <Plus className="w-4 h-4" />
                                    Meethi Chutney (+Rs. 100)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
