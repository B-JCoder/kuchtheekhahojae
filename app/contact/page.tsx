'use client';

import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import FAQSection from '@/components/sections/FAQSection';

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! We will get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-brand-offwhite pb-20">
            <div className="bg-brand-dark py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Have a question or want to book for a huge party? Reach out to us!
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-red shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Phone & WhatsApp</h3>
                                        <p className="text-gray-600 mt-1">+92 300 8269438</p>
                                        <p className="text-sm text-gray-500">Available 11:00 AM - 11:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-red shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email</h3>
                                        <p className="text-gray-600 mt-1">hello@kuchteekhahojaye.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-red shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Kitchen Location</h3>
                                        <p className="text-gray-600 mt-1">
                                            Plot 123, Block 5, Gulshan-e-Iqbal,<br />Karachi, Pakistan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-yellow/10 p-6 rounded-xl border border-brand-yellow/20">
                            <h3 className="font-bold text-brand-dark mb-2">Planning an Event?</h3>
                            <p className="text-gray-700 mb-4">
                                We specialize in live Golgappa stalls for weddings and corporate events. Contact us directly on WhatsApp for customized packages.
                            </p>
                            <a href="https://wa.me/923008269438" target="_blank">
                                <Button className="w-full sm:w-auto">Chat on WhatsApp</Button>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-brand-dark mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red outline-none" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red outline-none" placeholder="0300..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red outline-none" placeholder="General Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea required rows={5} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <Button type="submit" fullWidth size="lg">Send Message</Button>
                        </form>
                    </div>
                </div>

                {/* FAQ */}
                <FAQSection />

                {/* Service Area Map Placeholder */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Service Areas</h2>
                    <div className="bg-gray-200 w-full h-80 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Karachi_districts_map.svg')] bg-cover bg-center"></div>
                        <span className="relative z-10">Map Loading... (Delivering to all major areas in Karachi)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
