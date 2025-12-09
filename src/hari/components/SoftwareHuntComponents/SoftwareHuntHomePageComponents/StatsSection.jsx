import React from "react";
import { FaUser } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      value: "2.5M+",
      label: "User reviews",
      bg: "bg-[#E7FFEF]", // pastel green
      iconBg: "bg-[#05A454]",
    },
    {
      value: "45,000+",
      label: "Software Solution",
      bg: "bg-[#EEF0FF]", // pastel purple
      iconBg: "bg-[#3C4BFF]",
    },
    {
      value: "1000+",
      label: "Software Type",
      bg: "bg-[#FFE9F4]", // pastel pink
      iconBg: "bg-[#FF4BB6]",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-3xl p-10 flex flex-col items-center text-center`}
          >
            {/* Icon */}
            <div
              className={`${item.iconBg} w-10 h-10 flex items-center justify-center rounded-lg text-white mb-4`}
            >
              <FaUser size={18} />
            </div>

            {/* Number */}
            <h2 className="text-4xl font-extrabold text-black mb-1">
              {item.value}
            </h2>

            {/* Label */}
            <p className="text-gray-800 font-medium text-[15px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
