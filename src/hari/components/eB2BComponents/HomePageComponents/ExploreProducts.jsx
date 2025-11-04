import React from "react";
import { Link } from 'react-router-dom';

import {
  MdPermDataSetting,
  MdOutlineCable,
  MdOutlineRealEstateAgent,
  MdDataObject,
  MdOutlineHealthAndSafety,
  MdOutlineTravelExplore,
} from "react-icons/md";

import { RiGitBranchLine, RiFileLine } from "react-icons/ri";
import {
  BsDatabaseFillLock,
  BsUiChecksGrid,
  BsDatabase,
  BsFillPeopleFill,
  BsGraphUp,
  BsFillLightningFill
} from "react-icons/bs";

import { GoFileBinary } from "react-icons/go";
import {
  LuSquareAsterisk,
  LuFolderGit2,
  LuMessageSquareText,
} from "react-icons/lu";

import { GiNetworkBars, GiArtificialHive } from "react-icons/gi";

import {
  FaLinkedin,
  FaExchangeAlt,
  FaMobileAlt,
  FaTv,
  FaRegCreditCard
} from "react-icons/fa";

import { SiAccuweather } from "react-icons/si";
import { PiPottedPlantBold } from "react-icons/pi";

import {
  HiOutlineDocumentText,
  HiOutlineLightBulb,
} from "react-icons/hi";

import { LiaIndustrySolid } from "react-icons/lia";

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';

const categories = [
  { name: "Geospatial Data", icon: MdPermDataSetting },
  { name: "Transaction Data", icon: BsDatabaseFillLock },
  { name: "Human Resources (HR) Data", icon: GoFileBinary },
  { name: "Contact Data", icon: MdOutlineCable },
  { name: "Risk Data", icon: LuSquareAsterisk },
  { name: "Telecom Data", icon: GiNetworkBars },
  { name: "Linkedin ProfileData", icon: FaLinkedin },
  { name: "Political Data", icon: BsUiChecksGrid },
  { name: "Commerce Data", icon: RiGitBranchLine },
  { name: "Weather Data", icon: SiAccuweather },
  { name: "Trade Data", icon: FaExchangeAlt },
  { name: "Financial Data", icon: BsDatabase },
  { name: "Market Research Data", icon: LuFolderGit2 },
  { name: "Consumer Data", icon: RiFileLine },
  { name: "Population Data", icon: BsFillPeopleFill },
  { name: "B2B Data", icon: LuMessageSquareText },
  { name: "AI Training Data", icon: GiArtificialHive },
  { name: "Environmental Data", icon: PiPottedPlantBold },
  { name: "Real Estate Data", icon: MdOutlineRealEstateAgent },
  { name: "Web Data", icon: MdDataObject },
  { name: "Mobile App Data", icon: FaMobileAlt },
  { name: "Legal Data", icon: HiOutlineDocumentText },
  { name: "Healthcare Data", icon: MdOutlineHealthAndSafety },
  { name: "Entertainment Data", icon: FaTv },
  { name: "Energy Data", icon: HiOutlineLightBulb },
  { name: "Industry Data", icon: LiaIndustrySolid },
  { name: "Automotive Data", icon: BsGraphUp },
  { name: "Hospitality, Travel & Tourism Data", icon: MdOutlineTravelExplore },
];

const valueCards = [
  {
    title: "Buy & Sell with Us",
    desc: "One step solution for your raw material bought and selling needs.",
    icon: <AiOutlineShoppingCart />,
  },
  {
    title: "Million of Business Offering",
    desc: "Explore products and suppliers for your business from millions of offering worldwide.",
    icon: <HiOutlineChartBarSquare />,
  },
  {
    title: "Assured Quality and Transactions",
    desc: "Ensure production quality from verified suppliers with your orders protected from payment to delivery.",
    icon: <BsFillLightningFill />,
  },
  {
    title: "Pan India",
    desc: "Seamless delivery and logistics coverage across every corner of India.",
    icon: <FaRegCreditCard />,
  },
  {
    title: "Industry Digital First",
    desc: "World class fulfillment for domestic and international markets.",
    icon: <HiOutlineLightBulb />,
  },
];

const ExploreProducts = () => {
  return (
    <div className="pt-6 pb-4 max-w-screen-xl mx-auto px-6 lg:pb-8">
      {/* Title */}
      <h1 className="text-xl lg:text-3xl mb-2 lg:mb-3">
        Explore Products by Category
      </h1>
      <p className="opacity-50 text-[11px] lg:text-base mb-6">
        Find the right data from more than 560+ data categories
      </p>

      {/* Categories Grid */}
      <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-3 lg:gap-y-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs whitespace-nowrap bg-white hover:shadow-sm bg-[#FFFDFD] cursor-pointer ${idx >= 9 ? "hidden sm:flex" : ""
              }`}
          >
            <cat.icon className="w-3.5 h-3.5 text-black" />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-end mt-6 mb-6 lg:mb-12">
        <Link
          to="/product-category"
          className="text-sm text-[#6D3E93] hover:underline underline-offset-4"
        >
          View all categories →
        </Link>
      </div>

      {/* New Card Section */}
      <div>
        <h2 className="text-[17px] lg:text-2xl mb-3 lg:mb-6">
          Delivering value to our ecosystem of buyers, suppliers and channel partners.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 bg-[#FFFDFD] hover:shadow-md transition-shadow border-[#EDEDED] border-2"
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 text-xl border border-[#EDEDED] border-2">
                {card.icon}
              </div>
              <div className="border-b border-[#EDEDED] mb-3"></div>
              <h3 className="font-semibold text-base mb-1 text-left">{card.title}</h3>
              <p className="text-xs text-[#000] opacity-60 text-justify">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
