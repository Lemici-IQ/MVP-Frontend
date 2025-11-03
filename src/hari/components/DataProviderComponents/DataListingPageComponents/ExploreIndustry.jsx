import React from "react";

const industries = [
  { name: "Machinery & Tools" },
  { name: "Auto & E-Vehicle" },
  { name: "Electrical & Electronics" },
  { name: "Lighting & Solar" },
  { name: "Food & Processing" },
  { name: "Health & Medical" },
  { name: "Schools" },
  { name: "Builders & Architects" },
  { name: "Hospitals & Chemist" },
  { name: "Dealer/Distributor Retailers" },
  { name: "Grocery Stores" },
  { name: "GYM" },
  { name: "Mumbai" },
  { name: "Delhi/NCR" },
  { name: "Bangalore" },
  { name: "Chennai" },
  { name: "Hyderabad" },
  { name: "North India" },
];

const ExploreIndustry = () => {
  return (
    <div className="pt-10 pb-10 max-w-screen-xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Explore by Industry
          </h1>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-[#FFFDFD] border border-[#EDEDED] rounded-full text-xs text-gray-800 hover:bg-gray-100 hover:shadow-sm transition-all cursor-pointer text-center h-12 px-2"
          >
            <span className="px-2 leading-snug whitespace-normal break-words">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreIndustry;
