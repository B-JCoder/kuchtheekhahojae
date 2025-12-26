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
            q="Do you deliver all over Karachi?"
            a="Yes, we deliver to most areas in Karachi including DHA, Clifton, Gulshan, North Nazimabad, PECHS, and more. Delivery charges may vary based on location."
          />
          <Question
            q="Is the Pani mineral water based?"
            a="Absolutely! We strictly use mineral water for both our Khatta and Meetha pani to ensure maximum hygiene and safety."
          />
          <Question
            q="How long do the Golgappas stay crispy?"
            a="Our Golgappas are packed in airtight containers. If kept sealed, they stay crispy for up to 24 hours. For best taste, consume immediately!"
          />
          <Question
            q="Do you offer catering for weddings?"
            a="Yes! We have special live stall setups for weddings, birthdays, and corporate events. Contact us on WhatsApp for a quote."
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
