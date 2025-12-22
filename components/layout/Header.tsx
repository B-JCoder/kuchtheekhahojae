"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const { cartCount, toggleCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
          {/* LOGO (DOUBLE SIZE) */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/logobgre.png"
              alt="Kuch Teekha Ho Jaye"
              width={240}
              height={240}
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-brand-dark font-medium hover:text-[#D32F2F]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#D32F2F] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* WhatsApp – DESKTOP ONLY */}
            <Link
              href="https://wa.me/923008269438"
              target="_blank"
              className="hidden lg:inline-flex"
            >
              <Button
                size="sm"
                className="rounded-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-5 shadow-md shadow-red-200"
              >
                WhatsApp Us
              </Button>
            </Link>

            {/* CART */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full hover:bg-red-100"
            >
              <ShoppingBag className="w-6 h-6 text-[#D32F2F]" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D32F2F] text-white text-[11px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* MOBILE TOGGLE (RED) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-red-100"
            >
              {open ? (
                <X className="w-7 h-7 text-[#D32F2F]" />
              ) : (
                <Menu className="w-7 h-7 text-[#D32F2F]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-[5rem] left-0 w-full z-40 md:hidden"
          >
            <div className="mx-4 rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl p-6">
              <nav className="flex flex-col gap-5 text-lg font-semibold text-brand-dark">
                {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#D32F2F]"
                  >
                    {item}
                  </Link>
                ))}

                {/* WhatsApp – MOBILE ONLY */}
                <Link
                  href="https://wa.me/923008269438"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full mt-3 rounded-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white">
                    WhatsApp Us
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
