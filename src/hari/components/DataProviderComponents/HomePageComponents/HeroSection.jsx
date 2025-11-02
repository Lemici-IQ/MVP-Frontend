import React, { useState } from "react";

const HeroSection = () => {
  const [activeButton, setActiveButton] = useState("Survey");

  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <section
        id="home"
        className="min-h-fit flex flex-col items-center space-y-4 pt-16 md:pt-24"
      >
        {/* Main Heading */}
        <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl md:mb-3">
          Discover Data, Sources
        </h1>
        <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl md:mb-3">
          and Providers Opportunities
        </h1>

        {/* Toggle Buttons */}
        <div className="flex space-x-4 pt-4 pb-4">
          {["Survey", "Database", "API"].map((label) => (
            <button
              key={label}
              onClick={() => setActiveButton(label)}
              className={`px-3 py-1.5 rounded-md text-xs md:text-sm cursor-pointer transition-all duration-200 ${
                activeButton === label
                  ? "bg-[#FF6105] text-white border border-[#FF6105]"
                  : "border border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-[#FFFDFD] px-8 py-8 rounded-[4rem] shadow-md border-2 border-gray-300 flex flex-col gap-4">
          {/* Input with Mic and Cube */}
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Ask anything (Industry/Company/Sector)"
              className="w-full text-gray-700 placeholder:text-gray-400 text-base focus:outline-none bg-transparent"
            />
            <div className="flex gap-3 ml-4 cursor-pointer">
              <img
                src="/hari/DataProviderImages/icons/mic.png"
                alt="mic"
                className="w-6 h-6"
              />
              <img
                src="/hari/DataProviderImages/icons/cube.png"
                alt="cube"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Icon Row */}
          <div className="flex gap-3 mt-3 cursor-pointer justify-start">
            {/* Plus Icon */}
            <div className="w-8 h-8 rounded-xl bg-[#13A3B54D] flex items-center justify-center">
              <img
                src="/hari/DataProviderImages/icons/plus.png"
                alt="plus"
                className="w-5 h-5"
              />
            </div>

            {/* Location + AI */}
            <div className="h-8 px-3 rounded-xl bg-[#FCEFE0] flex items-center gap-2">
              <img
                src="/hari/DataProviderImages/icons/location.png"
                alt="location"
                className="w-5 h-5"
              />
              <img
                src="/hari/DataProviderImages/icons/ai.png"
                alt="ai"
                className="w-5 h-5"
              />
            </div>

            {/* Group + Filter */}
            <div className="h-8 px-3 rounded-xl bg-[#F0EAF4] flex items-center gap-2">
              <img
                src="/hari/DataProviderImages/icons/Group.png"
                alt="group"
                className="w-5 h-5"
              />
              <img
                src="/hari/DataProviderImages/icons/filter.png"
                alt="filter"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        {/* Tag Line */}
        <div>
          <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
            Comprehensive Business Plan And Project Reports
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
