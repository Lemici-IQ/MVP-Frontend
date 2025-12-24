import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const PopularListing = ({ items = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil((items?.length || 0) / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = (items || []).slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => setCurrentPage(page);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full px-4 justify-items-center">
        {currentItems.map((startup, index) => (
          <Card key={index} startup={startup} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center px-3 py-2 rounded-lg border ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
          } transition-all duration-200`}
        >
          <ChevronLeft size={16} />
          <span className="ml-1 text-sm">Previous</span>
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === page
                  ? "bg-blue-500 text-white border border-blue-500"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center px-3 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
          } transition-all duration-200`}
        >
          <span className="mr-1 text-sm">Next</span>
          <ChevronRight size={16} />
        </button>

        <div className="ml-4 text-sm text-gray-600">
          Page {currentPage} of {totalPages} (Popular Listings)
        </div>
      </div>
    </>
  );
};

export default PopularListing;
