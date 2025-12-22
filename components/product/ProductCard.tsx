'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    serves?: number;
    image: string;
    isVeg?: boolean;
    category?: string;
}

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addItem, updateQuantity, items } = useCart();
    const cartItem = items.find(item => item.id === product.id);
    const quantity = cartItem?.quantity || 0;

    const handleAdd = () => {
        addItem(product);
    };

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                        No Image
                    </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {product.isVeg && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-green-100 z-10">
                        Veg
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-1 relative">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-brand-dark leading-tight group-hover:text-[#D32F2F] transition-colors">{product.name}</h3>
                    <span className="text-xl font-bold text-[#D32F2F]">Rs.{product.price}</span>
                </div>

                {product.serves && (
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        Serves {product.serves} People
                    </p>
                )}

                {product.description && (
                    <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed flex-grow">{product.description}</p>
                )}

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            size="lg"
                            onClick={handleAdd}
                            className="w-full bg-brand-dark hover:bg-[#D32F2F] text-white rounded-xl py-6 font-bold shadow-lg shadow-gray-200 hover:shadow-red-200 transition-all flex items-center justify-center gap-2 group-hover/btn:translate-y-0"
                        >
                            <ShoppingBag className="w-5 h-5" /> Add to Cart
                        </Button>
                    ) : (
                        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 border border-gray-100">
                            <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-red-50 hover:text-[#D32F2F] rounded-lg shadow-sm text-brand-dark transition-all"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-brand-dark text-lg w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center bg-[#D32F2F] text-white hover:bg-red-700 rounded-lg shadow-md transition-all"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
