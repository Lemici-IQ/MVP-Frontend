import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendedFranchises = ({ data = [] }) => {
  const navigate = useNavigate();

  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="md:col-span-3 overflow-x-auto flex gap-4 pb-2">
      {data.map((item, index) => (
        <div
          key={item.id || index}
          className="min-w-[220px] h-full rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition relative group cursor-pointer"
          onClick={() => navigate(`/franchise/${item.slug}`)}
        >
          <img
            src={item.image?.url}
            alt={item.image?.alt || item.brand}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-1 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-1 pb-2">
            <h3 className="font-semibold text-white text-lg">
              {item.brand}
            </h3>

            <p className="text-sm text-gray-200 mt-1">
              {item.category}
            </p>

            <button
              className="mt-3 bg-white w-full border-2 border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/franchise/${item.slug}`);
              }}
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedFranchises;
