import React, { useState } from "react";
import { IKImage } from "imagekitio-react";

const DistributionCategories = ({ daata }) => {
    const data = {
          "categories": [
            {
              "id": "dist_golf_clubs",
              "name": "Golf Clubs",
              "description": "Premium golf equipment distribution",
              "image": {
                "url": "FranchiseHomePage/image.png",
                "width": 400,
                "height": 300,
                "alt": "Golf Clubs Distribution"
              },
              "slug": "golf-clubs-distribution",
              "opportunityCount": 12
            },
           {
              "id": "dist_golf_carts",
              "name": "Golf Carts",
              "description": "Distributor, C&F Agent Electric/Manual trolleys, golf carts (Toro, Yamaha)",
              "image": {
                "url": "FranchiseHomePage/image.png",
                "width": 400,
                "height": 300,
                "alt": "Golf Carts Distribution"
              },
              "slug": "golf-carts-distribution",
              "opportunityCount": 12
            },

            {
              "id": "dist_golf_balls",
              "name": "Golf Balls",
              "description": "Stockist, C&F Agent Branded and private-label balls (Callaway, Titleist, etc.)",
              "image": {
                "url": "FranchiseHomePage/image.png",
                "width": 400,
                "height": 300,
                "alt": "Golf Balls Distribution"
              },
              "slug": "golf-balls-distribution",
              "opportunityCount": 12
            },
            {
              "id": "dist_accessories_apparel",
              "name": "Accessories & Apparel",
              "description": "Distributor, Stockist Gloves, tees, caps, golf bags, apparel",
              "image": {
                "url": "FranchiseHomePage/image.png",
                "width": 400,
                "height": 300,
                "alt": "Golf Accessories and Apparel Distribution"
              },
              "slug": "accessories-apparel-distribution",
              "opportunityCount": 12
            }
          ]
        }
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
            path={item.image.url}
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
