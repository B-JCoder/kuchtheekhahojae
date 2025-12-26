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
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#FAFAFA]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-50 to-green-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#D32F2F] text-sm font-bold"
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
                className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* RIGHT IMAGE */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                className="w-[460px] sm:w-[460px] lg:w-[660px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
