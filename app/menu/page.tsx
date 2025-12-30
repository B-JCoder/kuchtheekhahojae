import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { Metadata } from "next";
import PageHero from "@/components/sections/Pageshero";

export const metadata: Metadata = {
  title: "Menu | Kuch Theek Ho Jae",
  description:
    "Explore our menu of Ready-to-Eat Golgappa Kits, Party Combos, and Frozen Packs. Order online for delivery in Karachi.",
};

export default function MenuPage() {
  const readyToEat = products.filter((p) => p.category === "kits");
  const combos = products.filter((p) => p.category === "combos");
  const frozen = products.filter((p) => p.category === "frozen");

  return (
    <div className="min-h-screen bg-brand-offwhite pb-20">
      <PageHero
        badge="Our Special Menu"
        title="Explore"
        highlighted="Menu"
        description="Discover our crispy golgappas, fresh fillings & hygienic packaging made for every craving."
        image="/bgremoveimages/1.png"
      />

      <div className="container mx-auto px-4 space-y-16">
        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="mb-6 md:mb-0">
            <span className="bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Limited Time
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Buy 2 Family Combos, Get Free Delivery!
            </h2>
            <p className="text-red-100">
              Ordering for a big gathering? We have got you covered with free
              shipping.
            </p>
          </div>
        </div>

        {/* Ready to Eat - Highlighted Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-red/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-red rounded-full"></div>
            <div>
              <span className="text-brand-red font-bold uppercase tracking-wider text-sm">
                Most Popular
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                Ready-to-Eat Kits
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyToEat.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Party Combos */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-yellow rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
              Party Combos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((product) => (
              <div
                key={product.id}
                className={
                  product.name.includes("Family")
                    ? "transform md:-translate-y-4"
                    : ""
                }
              >
                {/* Simple lift for Family combo or just rely on the card contents */}
                <ProductCard product={product} />
                {product.name.includes("Family") && (
                  <div className="mt-2 text-center text-sm font-bold text-brand-green">
                    ⭐ Best Seller
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Catering Block */}
        <section className="bg-brand-dark text-white rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want a Live Golgappa Stall?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Make your wedding, birthday, or corporate event unforgettable with
            our hygienic live stall. We bring the entire setup, servers, and
            unlimited Golgappas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923008269438"
              target="_blank"
              className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
            Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">Delivery Areas</h3>
              <p className="text-gray-600 text-sm">
                Gulshan-e-Iqbal, Gulistan-e-Jauhar, DHA, Clifton, PECHS,
                Bahadurabad, North Nazimabad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">Delivery Timings</h3>
              <p className="text-gray-600 text-sm">
                12:00 PM to 12:00 AM (Daily)
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Orders usually delivered within 45-60 mins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">Delivery Charges</h3>
              <p className="text-gray-600 text-sm">
                Fixed Rs. 150 - Rs. 300 depending on the distance from our
                kitchen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
