import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const researchData = [
  {
    id: 1,
    image: "/hari/ContentPageImages/research1.jpg",
    date: "August 5, 2025",
    title: "3 Key Insights to Optimize Your Media Planning",
    description:
      "In today's rapidly evolving advertising landscape, precise planning is no longer a luxury—it’s essential for success.",
  },
  {
    id: 2,
    image: "/hari/ContentPageImages/research2.jpg",
    date: "August 5, 2025",
    title: "Unlocking Advertising Success in Southeast Asia",
    description:
      "Discover the emerging advertising trends driving growth and innovation across Southeast Asian markets.",
  },
  {
    id: 3,
    image: "/hari/ContentPageImages/research3.jpg",
    date: "August 5, 2025",
    title: "2025 Global Sports Research",
    description:
      "How sports sponsorships and media deals are shaping global fan engagement strategies this year.",
  },
  {
    id: 4,
    image: "/hari/ContentPageImages/research4.jpg",
    date: "August 5, 2025",
    title: "No. of Media Research about Covid-19 in India 2020",
    description:
      "An in-depth look at how the pandemic reshaped media research and content trends across India.",
  },
  {
    id: 5,
    image: "/hari/ContentPageImages/research5.jpg",
    date: "November 5, 2025",
    title: "India: Research on Violent Crime 1990–2023",
    description:
      "Tracking the evolution of violent crime research in India and its influence on national policy.",
  },
];

const ResearchPage = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-10 bg-white">
      {/* Back Arrow */}
      <div className="mb-6 flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer transition">
        <FaArrowLeft className="text-xl" />
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Header Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6D3E93]">
          Research
        </h1>

        {/* Search bar */}
        <div className="relative w-full sm:w-96">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Researches"
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6D3E93] text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Research Cards */}
      <div className="space-y-8 max-w-5xl">
        {researchData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start gap-6 border-b border-gray-200 pb-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full sm:w-60 h-40 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
            <div>
              <p className="text-sm text-gray-400 mb-1">
                Research | {item.date}
              </p>
              <h2 className="text-lg font-semibold text-[#1663DC] hover:underline cursor-pointer">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPage;
