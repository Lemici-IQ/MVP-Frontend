import React from "react";
import {
  FaRocket,
  FaStore,
  FaBuilding,
  FaIndustry,
  FaLandmark,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const ResearchHighlight = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-10 md:py-12">
      {/* Top Featured Research Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            Research | Aug 14, 2025
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
            Trump's Tariff Plans and 'Big Beautiful Bill' Encounter Growing
            Resistance Amid Falling Approval
          </h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Six months into his term, far more say President Trump is making the
            way the federal government works worse than making it better.
          </p>

          <a
            href="#"
            className="text-[#1663DC] font-medium inline-flex items-center hover:underline"
          >
            Know More <FaArrowRight className="ml-2 text-sm" />
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/hari/ContentPageImages/trump.png"
            alt="Research Highlight"
            className="rounded-xl w-full h-52 sm:h-64 md:h-80 object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Bottom Explore Section */}
      <div className="text-center mb-8 md:mb-10 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Explore the entire economy in one place
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          No more scrambling for credible information. Fill knowledge gaps
          instantly with the largest collection of industry research reports.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
        {[
          { icon: <FaHandshake />, label: "eB2B" },
          { icon: <FaStore />, label: "Franchise" },
          { icon: <FaRocket />, label: "Startup Zone" },
          { icon: <FaLandmark />, label: "Govt. Navigator" },
          { icon: <FaBuilding />, label: "Software Hunt" },
          { icon: <FaIndustry />, label: "Industrial Sol." },
        ].map((item, index) => (
          <div
            key={index}
            className="w-28 sm:w-32 md:w-36 bg-[#FFFDFD] rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center py-5 sm:py-6 border border-[#EDEDED]"
          >
            <div className="text-2xl sm:text-3xl text-[#7B4DBB] mb-2">
              {item.icon}
            </div>
            <p className="text-gray-700 font-medium text-xs sm:text-sm text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchHighlight;
