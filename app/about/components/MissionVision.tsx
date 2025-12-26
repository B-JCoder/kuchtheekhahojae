export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
      <div>
        <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          To revolutionize the street food industry in Pakistan by proving that
          "street food" can be safe, hygienic, and premium without losing its
          soul. We want every family to enjoy Golgappas without the fear of
          getting sick.
        </p>
        <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become the household name for hygienic snacking across the country,
          setting supreme standards for quality and taste.
        </p>
      </div>
      <div className="bg-brand-red/5 p-8 rounded-2xl border border-brand-red/10">
        <h3 className="text-2xl font-bold text-brand-red mb-4">Our Promise</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">Freshly fried Golgappas daily</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">RO Purified Mineral Water</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">Gloves & Hairnets Mandatory</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">Premium Food-Grade Packaging</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
