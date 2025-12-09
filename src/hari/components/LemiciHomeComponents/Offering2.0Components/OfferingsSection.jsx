import React from "react";
import {
  FaRocket,
  FaChartLine,
  FaShoppingBag,
  FaUniversity,
  FaGlobe,
  FaBriefcase,
  FaIndustry,
  FaLayerGroup,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const offerings = [
  {
    title: "Startup Zone",
    subtitle: "Active metadata use cases",
    icon: <FaRocket className="text-2xl text-[#268BFF]" />,
    bg: "bg-[#CEE5FF]",
    border: "border-[#268BFF]",
    path: "/startups-zone",
  },
  {
    title: "eB2B Marketplace",
    subtitle: "Security at its simplest",
    icon: <FaLayerGroup className="text-2xl text-[#992BFF]" />,
    bg: "bg-[#ECD8FF]",
    border: "border-[#992BFF]",
    path: "/eB2B-home",
  },
  {
    title: "Software Hunt",
    subtitle: "Marketplace for business…",
    icon: <FaShoppingBag className="text-2xl text-[#14A79D]" />,
    bg: "bg-[#BAF1ED]",
    border: "border-[#14A79D]",
    path: "/software-hunt-home",
  },
  {
    title: "Franchise India",
    subtitle: "Your business's second brain",
    icon: <FaUniversity className="text-2xl text-[#4A53FA]" />,
    bg: "bg-[#BDC0FF]",
    border: "border-[#4A53FA]",
    path: "/franchise",
  },
  {
    title: "Market & Indt. Research",
    subtitle: "Your single source of truth",
    icon: <FaGlobe className="text-2xl text-[#F4B400]" />,
    bg: "bg-[#FFF1CC]",
    border: "border-[#F4B400]",
    path: "/research",
  },
  {
    title: "Business Directory",
    subtitle: "Map your entire data landscape",
    icon: <FaBriefcase className="text-2xl text-[#FF339C]" />,
    bg: "bg-[#FFD7EC]",
    border: "border-[#FF339C]",
    path: "/business-solutions/home",
  },
  {
    title: "Industrial Solution",
    subtitle: "360° visibility for every asset",
    icon: <FaIndustry className="text-2xl text-[#633C31]" />,
    bg: "bg-[#FDDAD0]",
    border: "border-[#633C31]",
    path: "/industrial-solution",
  },
  {
    title: "Government Navigator",
    subtitle: "Blazing fast, no-code setup",
    icon: <FaChartLine className="text-2xl text-[#093FB4]" />,
    bg: "bg-[#C8D7F6]",
    border: "border-[#093FB4]",
    path: "govtnavigator",
  },
];

const OfferingsSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <h2 className="font-space text-center text-4xl md:text-5xl font-bold text-[#652C90] mb-12">
        Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {offerings.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`block p-6 rounded-3xl shadow-sm border-2 ${item.bg} ${item.border} transition-transform hover:scale-[1.04] cursor-pointer`}
          >
            <div className="bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;