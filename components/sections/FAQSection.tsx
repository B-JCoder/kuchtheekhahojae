"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-600">
              Asked Questions
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Got questions? We have got answers.
          </p>
        </div>

        <div className="space-y-4">
          <Question
            q="Do you deliver pani puri all over Karachi?"
            a="Yes, we deliver pani puri near you in DHA, Clifton, Gulshan, North Nazimabad, PECHS, and more."
          />
          <Question
            q="Is your pani made with mineral water?"
            a="Yes! All our pani puri is prepared using RO purified mineral water for maximum safety."
          />
          <Question
            q="How long do Golgappas stay crispy?"
            a="Our airtight packaging keeps Karachi Golgappe crispy for up to 24 hours if sealed."
          />
          <Question
            q="Do you offer catering?"
            a="Yes! We provide hygienic golgappa live stalls for weddings, birthdays, and corporate events."
          />
        </div>
      </div>
    </section>
  );
}

function Question({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-2xl p-6 cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`font-bold text-lg transition-colors duration-300 ${
            isOpen ? "text-[#D32F2F]" : "text-brand-dark"
          }`}
        >
          {q}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? "bg-red-100 text-[#D32F2F]" : "bg-gray-100 text-gray-500"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 mt-4 leading-relaxed pr-8 border-t border-gray-50 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
