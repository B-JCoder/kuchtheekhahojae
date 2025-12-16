'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
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
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-brand-yellow flex flex-col h-full">
            <div className="relative h-48 w-full bg-gray-100 group">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                        No Image
                    </div>
                )}

                {product.isVeg && (
                    <span className="absolute top-2 right-2 bg-brand-green text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Veg
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-brand-dark mb-1 leading-tight">{product.name}</h3>

                {product.serves && (
                    <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Serves {product.serves} People</p>
                )}

                {product.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                )}

                <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xl font-bold text-brand-red">Rs. {product.price}</span>

                    {quantity === 0 ? (
                        <Button size="sm" onClick={handleAdd}>
                            Add
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center bg-white hover:bg-gray-50 rounded shadow-sm text-brand-dark transition-all"
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-brand-dark w-4 text-center text-sm">{quantity}</span>
                            <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center bg-brand-green text-white hover:bg-green-700 rounded shadow-sm transition-all"
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
