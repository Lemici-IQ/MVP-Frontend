import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const ExploreSection = () => {
  const categories = [
    "Machinery",
    "Construction & Real",
    "Electronics",
    "Hospital & Medical",
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="px-6 py-4 max-w-screen-xl mx-auto">
      <h2 className="text-xl sm:text-2xl pb-4">Explore Products</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center gap-4 mb-6 text-center">
        {/* Category Buttons inside one round pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center border border-[#E0E0E0] rounded-full px-1 py-1 shadow-sm bg-[#FFFDFD] gap-1">
            {categories.map((item, idx) => {
              if (idx === 3) {
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(item)}
                    className={`hidden sm:inline-block px-4 sm:px-4 py-1 rounded-full text-sm transition-colors duration-200 ${activeCategory === item
                      ? "bg-[#6D3E93] text-white font-medium cursor-pointer"
                      : "text-gray-700 hover:bg-purple-50 hover:border-purple-300 cursor-pointer"
                      }`}
                  >
                    {item}
                  </button>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(item)}
                  className={`px-3 sm:px-4 py-1 sm:py-1 text-xs sm:text-sm rounded-full transition-colors duration-200 ${activeCategory === item
                    ? "bg-[#6D3E93] text-white font-medium cursor-pointer"
                    : "text-gray-700 hover:bg-purple-50 hover:border-purple-300 cursor-pointer"
                    }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* View all categories link on laptop*/}
          <div className="hidden sm:block">
            <Link
              to="/product-category"
              className="pr-0 text-sm text-[#6D3E93] hover:underline underline-offset-4 lg:text-sm w-full text-right"
            >
              View all categories →
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 rounded-full border-2 border-[#E0E0E0] px-5 pr-14 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0.5 focus:ring-[#6D3E93] focus:border-[#6D3E93]"
          />
          <button
            type="button"
            className="absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-8 bg-[#6D3E93] rounded-full flex items-center justify-center"
          >
            <FiSearch className="cursor-pointer text-white w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 sm:mb-10">
        {/* Card 1 */}
        <div className="rounded-xl p-5 border-2 border-[#6D3E93] bg-[#FFFDFD] hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Oxygen Gas & Accessories</h3>
          <div className="flex items-center justify-between">
            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              <li>Oxygen Concentrator</li>
              <li>Oxygen Flow Meter</li>
              <li>Compressed Oxygen</li>
              <li>O₂ Gas Cylinder - Steel</li>
              <li>HF Nasal O₂ Therapy Unit</li>
            </ul>
            <img src="/hari/eB2BImages/images/oxygen.png" alt="Oxygen Products" className="w-34 h-34 " />
          </div>
          <a href="#" className="text-[#6D3E93] text-sm font-medium">View All →</a>
        </div>
        {/* Card 2 */}
        <div className="rounded-xl p-5 border-2 border-[#EDEDED] bg-[#FFFDFD] hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Medical</h3>
          <div className="flex items-center justify-between">
            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              <li>Hand Sanitizer</li>
              <li>Air pollution Mask</li>
              <li>Surgical Gloves</li>
              <li>Covid-19 Kit from...</li>
              <li>Thermometer</li>
            </ul>
            <img src="/hari/eB2BImages/images/medical.png" alt="Medical Products" className="w-34 h-34 " />
          </div>
          <a href="#" className="text-[#6D3E93] text-sm font-medium">View All →</a>
        </div>
        {/* Card 3 */}
        <div className="rounded-xl p-5 border-2 border-[#EDEDED] bg-[#FFFDFD] hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Saras Collection</h3>
          <div className="flex items-center justify-between">
            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              <li>Handcrafts</li>
              <li>Handloom Texti...</li>
              <li>Personal Care</li>
              <li>Organic Soaps</li>
              <li>Accessories</li>
            </ul>
            <img src="/hari/eB2BImages/images/saras.png" alt="Saras Collection" className="w-34 h-34 " />
          </div>
          <a href="#" className="text-[#6D3E93] text-sm font-medium">View All →</a>
        </div>
      </div>
      {/* View all categories link on mobile*/}
      <div className="block sm:hidden w-full mb-4">
        <div className="w-full text-right">
          <Link
            to="/product-category"
            className="text-sm text-[#6D3E93] hover:underline underline-offset-4"
          >
            View all categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
