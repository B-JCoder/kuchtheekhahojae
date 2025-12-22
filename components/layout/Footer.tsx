"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#FAFAFA] pt-20 pb-8 text-brand-dark">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-50 to-green-50 rounded-full blur-3xl opacity-70 translate-y-1/3 -translate-x-1/4" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-20 h-20 bg-red-400/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-[10%] w-28 h-28 bg-yellow-400/10 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4">
              Kuch{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#b71c1c]">
                Teekha
              </span>{" "}
              Ho Jaye
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Hygienic, fresh & street-style golgappay delivered to your home.
              Taste the real chatkhara without compromise.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/share/1BvGuF5Ecm/"
                target="_blank"
              >
                <div className="p-3 rounded-full bg-white shadow hover:shadow-md transition hover:text-[#D32F2F]">
                  <Facebook className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/kuch.teekhahojaye"
                target="_blank"
              >
                <div className="p-3 rounded-full bg-white shadow hover:shadow-md transition hover:text-[#D32F2F]">
                  <Instagram className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VbC7r6s9mrGZK3Iopw2i"
                target="_blank"
              >
                <div className="p-3 rounded-full bg-white shadow hover:shadow-md transition hover:text-green-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>
                <Link href="/menu" className="hover:text-[#D32F2F]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D32F2F]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D32F2F]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D32F2F]">
                  Contact / Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D32F2F]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <div className="p-2 bg-white rounded-full shadow">
                <Phone className="w-4 h-4" />
              </div>
              <a
                href="tel:+923008269438"
                className="hover:text-[#D32F2F] font-medium"
              >
                +92 300 8269438
              </a>
            </div>

            <h5 className="font-semibold mb-2">Delivering In</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gulshan-e-Iqbal, DHA, Clifton, North Nazimabad, PECHS, Bahria Town
              & Johar
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 text-center space-y-2 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Kuch Teekha Ho Jaye. All rights
            reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.bshsolutionss.com/"
              target="_blank"
              className="font-semibold hover:text-[#D32F2F]"
            >
              BSH SOLUTIONS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
