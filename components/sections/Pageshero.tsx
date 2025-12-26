"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  highlighted?: string;
  description?: string;
  badge?: string;
  image?: string;
}

export default function PageHero({
  title,
  highlighted,
  description,
  badge,
  image,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-50 to-green-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-4 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold"
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark"
          >
            {title}{" "}
            {highlighted && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#d32f2f]/80">
                {highlighted}
              </span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
