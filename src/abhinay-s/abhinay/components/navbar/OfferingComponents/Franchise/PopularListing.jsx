import React from "react";
import { FcardGrid } from "./Fcard";

const PopularListing = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil((data?.length || 0) / perPage));

  const visibleItems = React.useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [];
    const start = page * perPage;
    return data.slice(start, start + perPage);
  }, [data, page]);

  const prevPage = () => {
    if (!data || data.length <= perPage) return;
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    if (!data || data.length <= perPage) return;
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <>
      <div className="w-full relative mt-10">
        {/* Title centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-base font-semibold px-6 sm:px-10 lg:px-16 py-2 rounded-[30px]">
          popular listing
        </div>

        {/* Arrows on the right */}
        {Array.isArray(data) && data.length >= perPage && (
          <div className="mr-18 flex items-center gap-2 justify-end">
            <button
              type="button"
              aria-label="Previous"
              onClick={prevPage}
              className="h-9 w-9 flex items-center justify-center text-black hover:bg-gray-100 font-bold text-3xl"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={nextPage}
              className="h-9 w-9 flex items-center justify-center text-black hover:bg-gray-100 font-bold text-3xl"
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
