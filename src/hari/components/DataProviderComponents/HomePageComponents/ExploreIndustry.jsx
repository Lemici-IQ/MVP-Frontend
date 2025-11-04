import React from "react";

import {
  FaUtensils,
  FaBusinessTime,
  FaDollarSign,
  FaBroom,
  FaKey,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaTools,
  FaDumbbell,
  FaShoppingBag,
  FaCog,
  FaDog,
  FaSpa,
  FaHamburger,
  FaWifi,
  FaLaptop,
  FaFish,
} from "react-icons/fa";
import { LuX } from "react-icons/lu";

const industries = [
  { name: "Dining Franchise", icon: FaUtensils },
  { name: "Business Franchise", icon: FaBusinessTime },
  { name: "Financial Franchise", icon: FaDollarSign },
  { name: "Cleaning Franchise", icon: FaBroom },
  { name: "Property Franchise", icon: FaKey },
  { name: "Learning Franchise", icon: FaGraduationCap },
  { name: "Health Franchise", icon: FaHeartbeat },
  { name: "Home Franchise", icon: FaHome },
  { name: "Services Franchise", icon: FaTools },
  { name: "Fitness Franchise", icon: FaDumbbell },
  { name: "Retail Franchise", icon: FaShoppingBag },
  { name: "Services Provider", icon: FaCog },
  { name: "Pet Franchise", icon: FaDog },
  { name: "Beauty Franchise", icon: FaSpa },
  { name: "Snack Franchise", icon: FaHamburger },
  { name: "Online Franchise", icon: FaWifi },
  { name: "Tech Franchise", icon: FaLaptop },
  { name: "Food Franchise", icon: FaFish },
];

const ExploreIndustry = () => {
  return (
    <div className="pt-10 pb-10 max-w-screen-xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Explore by Industry
          </h1>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#FFFDFD] border border-[#EDEDED] rounded-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gray-700" />
              <span className="truncate">{item.name}</span>
            </div>
            <LuX className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreIndustry;
