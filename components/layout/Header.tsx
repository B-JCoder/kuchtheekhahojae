'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export const Header = () => {
    const { cartCount, toggleCart } = useCart();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logobgre.png" alt="Logo" width={100} height={100} className="object-contain h-10 w-auto" />

                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        Home
                    </Link>
                    <Link href="/menu" className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        Menu
                    </Link>
                    <Link href="/gallery" className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        Gallery
                    </Link>
                    <Link href="/about" className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="https://wa.me/923008269438" target="_blank">
                        <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
                            WhatsApp Us
                        </Button>
                    </Link>

                    <button
                        onClick={toggleCart}
                        className="relative p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Open Cart"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button className="md:hidden p-2 text-brand-dark">
                        <Menu className="w-6 h-6" />
                    </button>
                </div >
            </div >
        </header >
    );
};
