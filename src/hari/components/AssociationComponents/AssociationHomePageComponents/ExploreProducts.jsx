import React from "react";
import {
  FiMonitor,
  FiDollarSign,
  FiHome,
  FiShoppingCart,
  FiUsers,
  FiTool,
  FiBookOpen,
  FiMoreHorizontal,
  FiPlusSquare,
} from "react-icons/fi";

import { MdPrecisionManufacturing } from "react-icons/md";

const categories = [
  { label: "Technology", icon: <FiMonitor /> },
  { label: "Finance", icon: <FiDollarSign /> },
  { label: "Healthcare", icon: <FiPlusSquare /> },
  { label: "Manufacturing", icon: <MdPrecisionManufacturing /> },
  { label: "Real Estate", icon: <FiHome /> },
  { label: "Retail", icon: <FiShoppingCart /> },
  { label: "Consulting", icon: <FiUsers /> },
  { label: "Construction", icon: <FiTool /> },
  { label: "Education", icon: <FiBookOpen /> },
  { label: "View All", icon: <FiMoreHorizontal /> },
];

const ExploreProducts = () => {
  return (
    <section className="w-full py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Explore by <span className="text-[#01719E]">Industry</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Find associations tailored to your business sector
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {categories.map((item, i) => (
          <div
            key={i}
            className="bg-[#E6F5FB] rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer border border-transparent hover:border-blue-00 hover:bg-[#D4EEF7] transition-all"
          >
            <div className="text-3xl text-gray-700 mb-3">{item.icon}</div>
            <p className="text-gray-800 font-medium text-sm text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProducts;
