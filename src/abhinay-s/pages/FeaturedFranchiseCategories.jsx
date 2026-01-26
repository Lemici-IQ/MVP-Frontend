import React from "react";
import { IKImage } from "imagekitio-react";

const FeaturedFranchiseCategories = ({
  title = "Featured food franchise categories",
  data = [],
  showViewMore = true,
}) => {
  if (!Array.isArray(data) || data.length === 0) return null;
    // console.log(data)
  return (
    <div className="w-[80%]">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-1">
        {title}
      </h2>
              <p className="mb-6">Explore a wide variety of categories that suit every entrepreneurial interest.</p>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={item.id || index}>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
              <IKImage
                path={item.image?.url}
                alt={item.image?.alt || item.brand}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="text-center p-2">
              <p className="font-medium text-gray-800">
                {item.brand}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View more link */}
      {showViewMore && (
        <div className="mt-4 text-right">
          <a href="#" className="text-blue-600 hover:underline">
            View more →
          </a>
        </div>
      )}
    </div>
  );
};

export default FeaturedFranchiseCategories;
