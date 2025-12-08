import React from "react";
import {
  FiCpu,
  FiPenTool,
  FiCode,
  FiBriefcase,
  FiUsers,
  FiDollarSign,
  FiBook,
  FiBarChart,
  FiShield,
  FiMoreHorizontal,
} from "react-icons/fi";

const categories = [
  { label: "Productivity", icon: <FiCpu /> },
  { label: "Design & Creative", icon: <FiPenTool /> },
  { label: "Development Tools", icon: <FiCode /> },
  { label: "Business & ERP", icon: <FiBriefcase /> },
  { label: "Collaboration", icon: <FiUsers /> },
  { label: "Accounting & Finance", icon: <FiDollarSign /> },
  { label: "Education", icon: <FiBook /> },
  { label: "Data & Analytics", icon: <FiBarChart /> },
  { label: "Security", icon: <FiShield /> },
  { label: "View All", icon: <FiMoreHorizontal /> },
];

const ExploreProducts = () => {
  return (
    <section className="w-full py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Explore Software by Category
        </h2>
        <p className="text-gray-500 mt-2">
          Discover your next business venture from our curated list of categories.
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {categories.map((item, i) => (
          <div
            key={i}
            className="bg-blue-50 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer border border-transparent hover:border-blue-400 hover:bg-blue-100 transition-all"
          >
            <div className="text-3xl text-gray-700 mb-3">{item.icon}</div>
            <p className="text-gray-800 font-medium text-sm text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProducts;
