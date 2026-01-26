import React from "react";
import { IKImage } from "imagekitio-react";

export default function ExploreByCategories({ daata }) {
  if (!daata || !daata.categories || daata.categories.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-18">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900">
        Explore by Industry
      </h2>
      <p className="text-gray-500 mt-2">
        Tailored insights across 25+ industries—from food & beverage to
        education and beyond.
      </p>

      {/* Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {daata.categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-start gap-2 py-2 px-3 bg-[#EEF0FF] text-sm text-gray-700 rounded-2xl cursor-pointer hover:bg-[#E2E6FF] w-full"
          >
            <IKImage
              path={item.icon_url}
              alt={item.name}
              className="w-6 h-6 object-cover flex-shrink-0"
              loading="lazy"
            />
            <span className="text-xs leading-tight break-words flex-1">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-blue-600 text-sm mt-6 cursor-pointer text-end">
        View All →
      </p>
    </div>
  );
}
