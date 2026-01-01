export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
      <div>
        <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our mission is to transform the street food culture of Pakistan by
          proving that golgappe and pani puri can be safe, hygienic, and premium
          without losing their original soul.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We want every household in Karachi to enjoy Karachi Golgappe without
          worrying about hygiene or health issues.
        </p>
        <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become Pakistan’s leading brand for hygienic pani puri, known for
          quality, trust, and authentic taste — starting with Karachi and
          expanding nationwide.
        </p>
      </div>
      <div className="bg-brand-red/5 p-8 rounded-2xl border border-brand-red/10">
        <h3 className="text-2xl font-bold text-brand-red mb-4">
          Our Hygiene Promise
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">
              Freshly fried Golgappas prepared daily
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">
              RO Purified Mineral Water Golgappe
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">
              GLoves & hairnets mandatory for staff
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </span>
            <span className="text-gray-700">
              Premium food-grade sealed packaging
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
