import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand & About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-brand-yellow">Kuch Teekha Ho Jaye</h3>
                        <p className="text-gray-400 mb-4">
                            Fresh & Hygienic Golgappay delivered to your doorstep. We bring the street food experience home with zero compromise on quality.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/share/1BvGuF5Ecm/" target="_blank" className="text-white hover:text-brand-yellow transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/kuch.teekhahojaye?igsh=MTlscnIzZ3M5Mzh4aQ==" target="_blank" className="text-white hover:text-brand-yellow transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://whatsapp.com/channel/0029VbC7r6s9mrGZK3Iopw2i" target="_blank" className="text-white hover:text-brand-yellow transition-colors" title="Join our WhatsApp Channel">
                                <MessageCircle className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-brand-yellow">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/menu" className="hover:text-white">Our Menu</Link></li>
                            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact / Bulk Orders</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Areas */}
                    <div>
                        <h4 className="font-bold mb-4 text-brand-yellow">Contact Us</h4>
                        <div className="flex items-center gap-2 text-gray-300 mb-4">
                            <Phone className="w-4 h-4" />
                            <a href="tel:+923008269438" className="hover:text-white transition-colors">+92 300 8269438</a>
                        </div>

                        <h5 className="font-bold text-sm mb-2 text-white">Delivering In:</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Gulshan-e-Iqbal, DHA, Clifton, North Nazimabad, PECHS, Bahria Town, and Johar.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Kuch Teekha Ho Jaye. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
