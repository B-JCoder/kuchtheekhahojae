'use client';

import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import Image from 'next/image';

const AREAS = [
    "N/A", "Gulshan-e-Iqbal", "DHA", "Clifton", "North Nazimabad", "PECHS", "Bahria Town", "Johar"
];

export const CartSidebar = () => {
    const { isCartOpen, closeCart, items, updateQuantity, removeItem, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        area: '',
        address: ''
    });

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        setStep('checkout');
    };

    const handleBackToCart = () => {
        setStep('cart');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send data to API
        console.log("Order Placed:", { items, total: cartTotal, customer: formData });
        setStep('success');
        setTimeout(() => {
            clearCart();
            // Keep cart open for a moment to show success, then close or reset
        }, 2000); // Clear cart after 2s but keep success message
    };

    const handleClose = () => {
        closeCart();
        // Reset step after animation/closing if needed, but for now simple
        setTimeout(() => setStep('cart'), 500);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Sidebar */}
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between bg-brand-offwhite">
                    <div className="flex items-center gap-2">
                        {step === 'checkout' && (
                            <button onClick={handleBackToCart} className="mr-2 text-gray-600 hover:text-brand-dark">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}
                        <ShoppingBag className="w-5 h-5 text-brand-red" />
                        <h2 className="font-bold text-lg text-brand-dark">
                            {step === 'cart' ? 'Your Cart' : step === 'checkout' ? 'Checkout' : 'Order Placed'}
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    {step === 'cart' && (
                        <>
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                        <ShoppingBag className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Your cart is empty</h3>
                                        <p className="text-gray-500 text-sm mt-1">Add some delicious Golgappas to get started!</p>
                                    </div>
                                    <Button onClick={handleClose} variant="outline" className="mt-4">
                                        Browse Menu
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 p-3 border rounded-lg hover:shadow-sm transition-shadow bg-white">
                                            <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                                {/* Fallback image if no specific image is provided in mock data later */}
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">No Image</div>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-brand-dark line-clamp-1">{item.name}</h3>
                                                    <p className="text-brand-red font-bold">Rs. {item.price}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {step === 'checkout' && (
                        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                                    placeholder="0300 8269438"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                                <select
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none bg-white"
                                    value={formData.area}
                                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                                    required
                                >
                                    <option value="">Select Area</option>
                                    {AREAS.map(area => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                                <textarea
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                                    placeholder="House #, Street, Block..."
                                    rows={3}
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700">
                                <p><strong>Payment Method:</strong> Cash on Delivery (COD)</p>
                            </div>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-dark">Order Placed!</h2>
                            <p className="text-gray-600">
                                Thank you, {formData.name}. We have received your order. <br />
                                Our rider will contact you at {formData.phone} shortly.
                            </p>
                            <Button onClick={handleClose} className="mt-8">
                                Continue Shopping
                            </Button>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                {step !== 'success' && items.length > 0 && (
                    <div className="p-4 border-t bg-white safe-area-pb">
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>Rs. {cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery</span>
                                <span>{formData.area ? 'Rs. 150' : 'Calculated next'}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-brand-dark pt-2 border-t border-dashed">
                                <span>Total</span>
                                <span>Rs. {cartTotal + (formData.area ? 150 : 0)}</span>
                            </div>
                        </div>

                        {step === 'cart' ? (
                            <Button fullWidth size="lg" onClick={handleCheckout}>
                                Proceed to Checkout
                            </Button>
                        ) : (
                            <Button fullWidth size="lg" type="submit" form="checkout-form">
                                Confirm Order
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
