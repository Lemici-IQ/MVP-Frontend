import React, { useState } from "react";
import { IKImage } from "imagekitio-react";

const DistributionCategories = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  if (!data || !Array.isArray(data.categories)) return null;

  // Decide which categories to show
  const visibleCategories = showAll
    ? data.categories
    : data.categories.slice(0, 4); // show first 4 by default

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      {visibleCategories.map((item) => (
        <div key={item.id}>
          <IKImage
            path={item.image?.url || "/placeholder.jpg"}
            alt={item.image?.alt || item.name}
            className="rounded-xl w-full h-64 object-cover"
            loading="lazy"
          />
          <h3 className="font-semibold text-lg mt-4">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        </div>
      ))}

      {/* View More button only if not all items are shown */}
      {!showAll && data.categories.length > 4 && (
        <div className="col-span-full text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View More →
          </button>
        </div>
      )}
    </div>
  );
};

export default DistributionCategories;
