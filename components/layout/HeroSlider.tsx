"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-[#FAFAFA]">
            {/* Background Gradients/Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-50 to-green-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4" />

            {/* Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-24 h-24 bg-yellow-400/10 rounded-full blur-xl z-0"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-[5%] w-32 h-32 bg-red-400/10 rounded-full blur-xl z-0"
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center pt-24 lg:pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
                    {/* LEFT CONTENT */}
                    <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 relative">
                        {/* Background Logo Watermark - positioned relative to content */}
                        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] opacity-5 pointer-events-none -z-10 hidden lg:block">
                            <Image src="/images/logobgre.png" alt="watermark" width={400} height={400} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold tracking-wide mb-4">
                                #1 Hygienic Golgappas in Karachi
                            </span>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark tracking-tight">
                                Ghar Bethay <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#d32f2f]/80">
                                    Chatkhara
                                </span>{" "}
                                <br />
                                Golgappay
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Hygienic, crispy aur bilkul street-style golgappay ab ghar bethay
                            enjoy karo with family & friends.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                            <Link href="/menu">
                                <Button
                                    size="lg"
                                    className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-red-200 transition-all hover:scale-105"
                                >
                                    Order Now
                                </Button>
                            </Link>

                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-gray-200 text-gray-700 hover:border-[#D32F2F] hover:text-[#D32F2F] px-8 py-6 text-lg rounded-full bg-white/50 backdrop-blur-sm transition-all"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium"
                        >
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500" /> 100% Hygienic
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500" /> Premium Packing
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="relative w-[320px] sm:w-[500px] lg:w-[600px] xl:w-[700px] z-10"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/bgremoveimages/2.png"
                                    alt="Golgappa Plate"
                                    width={1200}
                                    height={1200}
                                    priority
                                    className="w-full h-auto drop-shadow-2xl object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Simple shadow fix */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/20 blur-2xl rounded-[100%] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
