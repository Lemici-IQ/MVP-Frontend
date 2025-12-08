import React, { useState } from "react";
import { Link } from "react-router-dom";

const SoftwareShowcase = () => {
  const categories = [
    "EMR Software",
    "Project Management",
    "LMS Software",
    "CRM Software",
    "Human Resources",
  ];

  const [activeCategory, setActiveCategory] = useState("EMR Software");

  const softwares = [
    {
      logo: "/hari/SoftwareHuntImages/advancedMD.png",
      name: "AdvancedMD",
      desc: "AdvancedMD is a cloud-based EHR and practice management solution for independent medical...",
    },
    {
      logo: "/hari/SoftwareHuntImages/modMed.png",
      name: "ModMed EMR",
      desc: "ModMed (Modernizing Medicine) is a cloud-based, specialty-specific EMR platform designed...",
    },
    {
      logo: "/hari/SoftwareHuntImages/eClinicalWorks.png",
      name: "eClinicalWorks",
      desc: "eClinicalWorks provides comprehensive, AI-powered EHR and management solutions...",
    },
    {
      logo: "/hari/SoftwareHuntImages/nextGen.png",
      name: "NextGen Office",
      desc: "NextGen Office is an all-in-one cloud-based EHR platform built for independent medical practices...",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-12">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Explore Tech Solution Users Trust
      </h2>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-8 gap-4">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-all duration-200 ${
                activeCategory === cat
                  ? "text-[#15A8A1] font-semibold"
                  : "text-gray-700 hover:text-[#15A8A1]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdown */}
        <select className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none w-fit">
          <option>CRM Software</option>
          <option>ERP Software</option>
          <option>HR Software</option>
        </select>
      </div>

      {/* Cards */}
      <div className="bg-[#C4E7E4] rounded-3xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwares.map((item, idx) => (
            <div key={idx} className="w-full">
              {/* Logo Card */}
              <div className="bg-white rounded-xl border-2 border-[#EDEDED] p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-16 object-contain"
                />
              </div>

              {/* Info */}
              <div className="mt-3 space-y-1">
                <h3 className="font-semibold text-gray-900 text-base sm:text-[16px]">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-snug">
                  {item.desc}
                </p>

                <Link
                  to="/crm"
                  className="text-[#007BFF] text-sm font-medium hover:underline inline-block mt-2"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
