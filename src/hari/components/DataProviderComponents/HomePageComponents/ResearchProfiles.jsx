import React from "react";
import {
  FaBriefcase,
  FaShoppingBag,
  FaBuilding,
  FaChartLine,
  FaStoreAlt,
} from "react-icons/fa";

const ResearchProfiles = () => {
  const profiles = [
    {
      id: 1,
      title: "Industry Financial Profile",
      icon: <FaBriefcase className="w-10 h-10" />,
      bg: "bg-[#6D3E93]", 
    },
    {
      id: 2,
      title: "Industry Market Profile",
      icon: <FaShoppingBag className="w-10 h-10" />,
      bg: "bg-[#009C8C]", 
    },
    {
      id: 3,
      title: "Company Profile",
      icon: <FaBuilding className="w-10 h-10" />,
      bg: "bg-[#3B57F0]", 
    },
    {
      id: 4,
      title: "Market Profile",
      icon: <FaChartLine className="w-10 h-10" />,
      bg: "bg-[#F5B600]", 
    },
    {
      id: 5,
      title: "Franchise Profile",
      icon: <FaStoreAlt className="w-10 h-10" />,
      bg: "bg-[#FF3CA6]", 
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">
        Access Granular & Local data for Research
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Leverage research tools to build analyses and reports based on focused
        industry, market, company, and franchise financial data.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center max-w-6xl mx-auto">
        {profiles.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} text-white flex flex-col items-center justify-center rounded-xl py-10 shadow-md hover:scale-105 transition-transform duration-300`}
          >
            {item.icon}
            <p className="mt-3 text-sm font-medium text-center px-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchProfiles;
