import React from "react";
import { Link } from "react-router-dom";

import {
  MdPermDataSetting,
  MdOutlineCable,
  MdOutlineRealEstateAgent,
  MdDataObject,
  MdOutlineHealthAndSafety,
  MdOutlineTravelExplore,
} from "react-icons/md";

import { RiFileLine } from "react-icons/ri";
import {
  BsDatabaseFillLock,
  BsUiChecksGrid,
  BsDatabase,
  BsFillPeopleFill,
  BsGraphUp,
} from "react-icons/bs";

import { GoFileBinary } from "react-icons/go";
import {
  LuSquareAsterisk,
  LuMessageSquareText,
  LuX,
} from "react-icons/lu";

import { GiNetworkBars, GiArtificialHive } from "react-icons/gi";
import { FaExchangeAlt, FaMobileAlt } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";
import { PiPottedPlantBold } from "react-icons/pi";
import { HiOutlineDocumentText, HiOutlineLightBulb } from "react-icons/hi";
import { LiaIndustrySolid } from "react-icons/lia";

const categories = [
  { name: "Geospatial Data", icon: MdPermDataSetting },
  { name: "Transaction Data", icon: BsDatabaseFillLock },
  { name: "HR Data", icon: GoFileBinary },
  { name: "Contact Data", icon: MdOutlineCable },
  { name: "Risk Data", icon: LuSquareAsterisk },
  { name: "Telecom Data", icon: GiNetworkBars },
  { name: "Industry Data", icon: LiaIndustrySolid },
  { name: "Weather Data", icon: SiAccuweather },
  { name: "Trade Data", icon: FaExchangeAlt },
  { name: "Financial Data", icon: BsDatabase },
  { name: "Energy Data", icon: HiOutlineLightBulb },
  { name: "Consumer Data", icon: RiFileLine },
  { name: "Healthcare Data", icon: MdOutlineHealthAndSafety },
  { name: "Legal Data", icon: HiOutlineDocumentText },
  { name: "Mobile App Data", icon: FaMobileAlt },
  { name: "Web Data", icon: MdDataObject },
  { name: "AI Training Data", icon: GiArtificialHive },
  { name: "B2B Data", icon: LuMessageSquareText },
  { name: "Environment Data", icon: PiPottedPlantBold },
  { name: "Real Estate Data", icon: MdOutlineRealEstateAgent },
  { name: "Automotive Data", icon: BsGraphUp },
  { name: "Population Data", icon: BsFillPeopleFill },
  { name: "Political Data", icon: BsUiChecksGrid },
  { name: "Hospitality Data", icon: MdOutlineTravelExplore },
];

const ExploreProducts = () => {
  return (
    <div className="pt-16 pb-10 max-w-screen-xl mx-auto px-6">
      {/* Header */}
      <div>
        <button className='bg-[#D9D9D9] w-full my-4 rounded-4xl text-left px-4 py-2 font-medium'>Explore Products by Category</button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mx-2">
          <p className="text-gray-500 text-sm md:text-base">
            Find the right data from more than 560+ data categories
          </p>
          <Link
          to="/data-listing"
          className="text-sm text-blue-600 hover:underline mt-3 md:mt-0 flex items-center gap-1"
        >
          View all categories →
        </Link>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#FFFDFD] border border-[#EDEDED] border-2 rounded-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <cat.icon className="w-4 h-4 text-gray-700" />
              <span className="truncate">{cat.name}</span>
            </div>
            <LuX className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProducts;
