import React, { useState } from "react";

const HeroSection = () => {

  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <section
        id="home"
        className="min-h-fit flex flex-col items-center space-y-4 pt-16"
      >
        {/* Main Heading */}
        <h1 className="mb-0 font-space text-[28px] font-bold text-[#01719E] text-center md:text-5xl md:mb-3">
          Connect with Leading
        </h1>
        <h1 className="mb-0 font-space text-[28px] font-bold text-[#01719E] text-center md:text-5xl md:mb-10">
          Business Associations
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-[#FFFDFD] px-8 py-10 rounded-[4rem] shadow-md border-2 border-gray-300 flex flex-col gap-4">
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
          <p className="text-gray-600 text-sm md:text-base mt-2 text-center opacity-80">
            Discover and join professional business associations to expand your network,<br></br> access resources, and grow your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
