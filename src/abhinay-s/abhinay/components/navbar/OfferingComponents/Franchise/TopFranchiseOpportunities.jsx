import React from "react";
import { IKImage } from "imagekitio-react";

const TopFranchiseOpportunities = ({ data }) => {
  if (!data?.categories?.length) return null;

  return (
    <div className="w-full">
      <div className="py-10 px-6">
        {/* Heading */}
        <h1 className="text-center mb-2 text-4xl font-bold">
          Top Franchise Opportunities, Curated for You
        </h1>

        <p className="text-center text-[#615E63] mb-8 text-lg">
          Discover high-growth brands with the strongest ROI potential.
        </p>

        {/* Grid */}
        <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8 lg:px-12 xl:px-20">
          {data.categories.map((item) => (
            <div
              key={item.id}
              className="bg-[#E6EDFF] rounded-2xl h-28 flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-out"
            >
              <IKImage
                path={item.icon_url}
                alt={item.name}
                className="w-8 h-8 object-contain"
                loading="lazy"
              />

              <p className="text-sm font-medium text-[#3A363C] text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFranchiseOpportunities;
