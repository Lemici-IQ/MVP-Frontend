import React from "react";
import { FaSearch } from "react-icons/fa";

const ResearchSection = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-20 py-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/hari/ContentPageImages/iconsCombo.png"
            alt="Research Illustration"
            className="w-[80%] sm:w-[70%] md:w-[65%] max-w-md object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-3 sm:mb-4">
            Discover LeMiCi Research
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base max-w-md">
            Access over 160 million publication pages and stay up to date with
            what's happening in your field.
          </p>

          {/* Search Bar */}
          <div className="flex items-center border border-[#B7B5B5] rounded-md px-3 py-2 w-full sm:w-[90%] md:w-3/4 bg-[#FFFDFD]">
            <FaSearch className="text-gray-500 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search publications"
              className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center rounded-xl flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-4 sm:px-8 md:px-16 py-10 sm:py-12 mt-6 sm:mt-10 mb-8 sm:mb-10 h-auto md:h-52"
        style={{ backgroundImage: "url('/hari/ContentPageImages/bannerbackground.jpg')" }}
      >
        <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-snug md:leading-tight max-w-3xl mb-4 md:mb-0">
          Want industry statistics and news <br className="hidden sm:block" />
          delivered to your inbox monthly?
        </div>
        <button className="bg-white text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-gray-100 transition text-sm sm:text-base">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default ResearchSection;
