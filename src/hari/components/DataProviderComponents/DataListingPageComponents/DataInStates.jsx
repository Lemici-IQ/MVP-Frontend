import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const states = [
  "Andhra Pradesh",
  "Gujarat",
  "Karnataka",
  "Maharastra",
  "Telangana",
  "Uttar Pradesh",
  "Tamil Nadu",
];

const DataInStates = () => {
  const [activeState, setActiveState] = useState("Andhra Pradesh");

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-10">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Data in States
      </h2>

      {/* Tabs + Search */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-3 mb-8">
        <div className="flex flex-wrap gap-8 text-gray-600 text-sm md:text-base">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setActiveState(state)}
              className={`pb-2 border-b-2 transition-all ${
                activeState === state
                  ? "border-[#FF6105] text-[#FF6105] font-medium"
                  : "border-transparent hover:text-[#FF6105]"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search States"
            className="pl-10 pr-4 py-2 w-48 md:w-60 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Map */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src="/hari/DataProviderImages/APmap.png"
            alt="Andhra Pradesh Map"
            className="w-80 sm:w-[22rem] md:w-[26rem] h-auto object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
            {activeState}
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Andhra Pradesh is the second largest producer of cotton and raw silk
            in India. The state has a strong textile industry base consisting of
            handlooms, handicrafts, spinning, and processing units. The state
            has integrated apparel city in Vizag with an innovative concept of
            ‘Fibre to score’. The government is providing many initiatives for
            the textile sector such as offering land for establishing textile
            and apparel parks, training programs, etc. The state has a good
            number of textile industries in the districts of Guntur, Chittoor,
            Kadapa, and Kurnool.
          </p>

          {/* Stats Boxes */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="border border-[#FF6105] text-[#FF6105] rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="border border-[#FF6105] text-[#FF6105] rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-gray-600 text-sm">Data Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInStates;
