'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/components/product/ProductCard';

export const AddToCartSection = ({ product }: { product: Product }) => {
    const { addItem, updateQuantity, items } = useCart();
    const [tempQty, setTempQty] = useState(1);

    const cartItem = items.find(i => i.id === product.id);
    const inCart = !!cartItem;
    const currentQty = cartItem?.quantity || 0;

    const handleAddStart = () => {
        // If we want to add with quantity 1 directly
        addItem(product);
    };

    if (inCart) {
        return (
            <div className="flex flex-col gap-3">
                <span className="text-sm text-brand-green font-medium">Item in Cart!</span>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2 border border-gray-100">
                        <button
                            onClick={() => updateQuantity(product.id, currentQty - 1)}
                            className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 text-brand-dark transition-all"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="font-bold text-brand-dark w-8 text-center text-lg">{currentQty}</span>
                        <button
                            onClick={() => updateQuantity(product.id, currentQty + 1)}
                            className="w-10 h-10 flex items-center justify-center bg-brand-green text-white hover:bg-green-700 rounded-lg shadow-sm transition-all"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // If not in cart
    return (
        <div className="flex gap-4">
            {/* We can show a simple counter before adding, but requirement says "Add button with (+ / -) quantity counter" typically means once added. 
            So we just show big Add button.
        */}
            <Button size="lg" className="flex-1 max-w-xs text-lg" onClick={handleAddStart}>
                Add to Cart - Rs. {product.price}
            </Button>
        </div>
    );
};
