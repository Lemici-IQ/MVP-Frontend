import React from "react";

const ShowStats = ({ stats }) => {
  return (
    <div className="mt-">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats &&
          stats.map((stat, idx) => (
            <div
              key={idx}
              className="
                py-16 sm:py-20
                px-10 sm:px-12 rounded-[24px]
                text-center font-semibold
                bg-white text-black
                border border-[#EDEDED]
                cursor-pointer
                transition-all duration-300
                hover:bg-blue-500 hover:text-white
                active:bg-blue-600 active:text-white
              "
            >
              <p className="text-xl sm:text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
      </div>

      
    </div>
  );
};

export default ShowStats;
