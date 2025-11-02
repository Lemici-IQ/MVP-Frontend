import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹ 7,888",
    freq: "/mo",
    features: [
      "1 User access",
      "5 GB cloud space",
      "1 project/month",
      "Basic analytics dashboard",
      "Free onboarding guide",
    ],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "₹ 22,888",
    freq: "/mo",
    features: [
      "Up to 5 user access",
      "50 GB cloud space",
      "5 project/month",
      "Analytics dashboard",
      "Monthly strategy call",
    ],
    isPopular: false,
  },
  {
    name: "Plus",
    price: "₹ 78,888",
    freq: "/mo",
    features: [
      "10 user includes",
      "200 GB cloud space",
      "Unlimited project",
      "Team collaboration tool",
      "API access",
    ],
    isPopular: false,
  },
  {
    name: "Premium",
    price: "₹ 18,888",
    freq: "/mo",
    features: [
      "Unlimited user",
      "1 TB+ cloud space",
      "24/7 premium support",
      "Enterprise-level security",
      "Full platform access",
    ],
    isPopular: false,
  },
  {
    name: "Enterprise",
    price: "FREE",
    freq: "",
    features: [
      "1 User access",
      "1 GB cloud space",
      "1 project/month",
      "Basic analytics dashboard",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("Monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  // keep plans in state so we can toggle "isPopular" on click
  const [plansState, setPlansState] = useState(plans);

  const handleCardClick = (idx) => {
    setPlansState((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, isPopular: !p.isPopular } : p))
    );
    // keep selectedPlan in sync so styles that depend on it still work
    setSelectedPlan((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-4 max-w-4xl">
        <h1 className="font-spacegrotesk font-bold text-3xl sm:text-4xl lg:text-[56px] leading-[110%]">
          Plans & Pricing
        </h1>
        <p className="font-spacegrotesk font-normal text-sm sm:text-base lg:text-[17px] leading-[145%] text-gray-600 px-4 sm:px-0">
          Choose the plan that fits your needs. All plans include essential
          features to get you started, with options to scale as you grow. No
          hidden fees and the flexibility to change anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex flex-col items-center">
          <div className="flex items-center bg-gray-200 gap-2 sm:gap-4 rounded-full p-1 shadow-sm">
            {["Monthly", "Annual"].map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={`flex items-center justify-center text-xs sm:text-sm font-medium py-2 px-3 sm:px-5 ${
                  billing === mode
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600"
                } rounded-full transition`}
              >
                {mode}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-blue-600 text-center px-4">
            {billing === "Annual"
              ? "-15% off on annual payments. Try LeMiVerse for 14 days."
              : "\u00A0"}
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      {/* Plan Cards */}
      <div className="w-full">
        <style>{`
        /* Hide scrollbar but keep scroll functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        {/* Desktop/Tablet View */}
        <div className="hidden sm:flex sm:justify-center sm:space-x-4 lg:space-x-6 sm:overflow-x-auto sm:px-4 lg:px-8 pb-12 pt-8 items-stretch scrollbar-hide">
          {plansState.map((p, idx) => (
            <div key={idx} className="relative flex-shrink-0 h-full">
              {(p.isPopular || selectedPlan === idx) && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 px-4 lg:px-6 py-1 lg:py-2 rounded-full text-[10px] lg:text-[12px] font-semibold text-white z-10">
                  MOST POPULAR
                </div>
              )}
              <div
                onClick={() => handleCardClick(idx)}
                className={`w-[200px] sm:w-[220px] lg:w-[250px] bg-white cursor-pointer transition-all duration-200 mt-6 rounded-[20px] lg:rounded-[24px] ${
                  selectedPlan === idx
                    ? "border-4 lg:border-[6px] border-orange-500 shadow-orange-200 shadow-lg"
                    : p.isPopular
                    ? "border-2 lg:border-4 border-orange-500"
                    : "border border-gray-200"
                } shadow-md hover:shadow-lg flex flex-col h-[480px] sm:h-[420px] lg:h-[460px]`}
              >
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col space-y-3 lg:space-y-4 h-full">
                  <h3 className="text-lg lg:text-xl font-bold font-spacegrotesk">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-spacegrotesk">
                      {p.price}
                    </span>
                    {p.freq && (
                      <span className="text-sm sm:text-base lg:text-lg font-bold font-spacegrotesk">
                        {p.freq}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 flex-1">
                    {p.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-gray-700 text-xs lg:text-sm"
                      >
                        <span className="mt-1 text-green-600">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-3 lg:mt-4 w-full py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-medium transition-colors ${
                      selectedPlan === idx
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Start plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Stack cards vertically */}
        <div className="sm:hidden space-y-6 px-4 pb-8 pt-4">
          {plansState.map((p, idx) => (
            <div key={idx} className="relative">
              {(p.isPopular || selectedPlan === idx) && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-[10px] font-semibold text-white z-10">
                  MOST POPULAR
                </div>
              )}
              <div
                onClick={() => handleCardClick(idx)}
                className={`w-full bg-white cursor-pointer transition-all duration-200 mt-2 rounded-[20px] ${
                  selectedPlan === idx
                    ? "border-4 border-orange-500 shadow-orange-200 shadow-lg"
                    : p.isPopular
                    ? "border-2 border-orange-500"
                    : "border border-gray-200"
                } shadow-md hover:shadow-lg flex flex-col h-[480px]`}
              >
                <div className="p-6 flex flex-col space-y-4 h-full">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold font-spacegrotesk">
                      {p.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold font-spacegrotesk">
                        {p.price}
                      </span>
                      {p.freq && (
                        <span className="text-sm font-bold font-spacegrotesk">
                          {p.freq}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {p.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-gray-700 text-sm"
                      >
                        <span className="mt-1 text-green-600">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${
                      selectedPlan === idx
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Start plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded" />
          <div>
            <p className="font-inter font-medium text-lg sm:text-xl">
              Education &gt;
            </p>
            <p className="text-sm text-gray-600">
              A powerful, free tool for classrooms, district and students.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded" />
          <div>
            <p className="font-inter font-medium text-lg sm:text-xl">
              Not for‑profit &gt;
            </p>
            <p className="text-sm text-gray-600">
              Canva Pro is free for all registered nonprofits. Apply today.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-screen-lg mt-12 sm:mt-16 border-t pt-3 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600">Comparing pricing &gt;</p>
      </div>
    </div>
  );
}
