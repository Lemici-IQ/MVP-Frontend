import React from "react";
import { FcardGrid } from "./Fcard";

const PopularListing = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [direction, setDirection] = React.useState("");
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil((data?.length || 0) / perPage));

  const visibleItems = React.useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [];

    const start = page * perPage;
const formatRange = (min, max, unit) => {
  if (!min || !max) return "";
  return `${min}-${max} ${unit}`;
};

    return data.slice(start, start + perPage).map((item, index) => ({
      // 🔑 BACKEND → FCARD PROPS MAPPING
      title: item.brand,
      description: item.description,
      location: item.location,
      since: item.year_of_establishment,
      rating: item.rating,
      tags: item.tags || [],
      verified: item.tags?.includes("Verified") || true,
      logoUrl: item.logo?.url,
     stats: {
  space: formatRange(
    item.space?.minSpace,
    item.space?.maxSpace,
    item.space?.spaceUnit
  ),
  outlets: item.no_of_outlets,
  investment: formatRange(
    item.investmentRange?.minInvestment,
    item.investmentRange?.maxInvestment,
    item.investmentRange?.investmentUnit
  ),
},
      c: item.color,
      slug: item.slug,
      animationClass: direction ? `slide-${direction}` : "",
      animationDelay: `${index * 0.1}s`,
    }));
  }, [data, page, direction]);

  const prevPage = () => {
    if (!data || data.length <= perPage) return;
    setDirection("right");
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    if (!data || data.length <= perPage) return;
    setDirection("left");
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .slide-left {
          animation: slideInLeft 0.5s ease-out;
        }
        
        .slide-right {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>
      
      <div className="w-full relative mt-10">
        {/* Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-base font-semibold px-6 sm:px-10 lg:px-16 py-2 rounded-[30px]">
          popular listing
        </div>

        {/* Arrows */}
        {Array.isArray(data) && data.length >= perPage && (
          <div className="mr-18 flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={prevPage}
              className="h-9 w-9 flex items-center justify-center text-black font-bold text-3xl cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextPage}
              className="h-9 w-9 flex items-center justify-center text-black font-bold text-3xl cursor-pointer"
            >
              →
            </button>
          </div>
        )}
      </div>

      <FcardGrid
        items={visibleItems}
        className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-6 sm:pt-8 lg:pt-10 pb-0"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      />
    </>
  );
};

export default PopularListing;
