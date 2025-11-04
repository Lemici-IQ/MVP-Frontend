import React from "react";
import {
  MdOutlineInsertChart,
  MdOutlineVideoLibrary,
  MdOutlineReviews,
  MdOutlineInsights,
} from "react-icons/md";

const InfoCardsSection = () => {
  const cards = [
    {
      category: "Cost",
      title: "See Pricing Lists",
      description:
        "No hidden costs and fees. Find out products costs that fit your budget.",
      icon: <MdOutlineInsertChart size={20} className="text-white" />,
    },
    {
      category: "Videos",
      title: "Watch Product Demos",
      description:
        "Visual learner? Watch videos of software features and capabilities.",
      icon: <MdOutlineVideoLibrary size={20} className="text-white" />,
    },
    {
      category: "Reviews",
      title: "Read Unbiased Reviews",
      description:
        "Makes decisions based on user reviews - not advise from salespeople or bots.",
      icon: <MdOutlineReviews size={20} className="text-white" />,
    },
    {
      category: "Decisions",
      title: "Get Industry Insights",
      description:
        "Download free pricing guides & vendor checking to make decision.",
      icon: <MdOutlineInsights size={20} className="text-white" />,
    },
  ];

  return (
    <div className="relative bg-white py-10 px-4 md:px-8 lg:px-20 overflow-hidden">

      {/* Wavy background */}
      <img
        src="/hari/eB2BImages/images/wavyPinkLine.png"
        alt="Wavy Pink Background"
        className="absolute top-8 left-0 w-full object-contain hidden sm:block"
        style={{ zIndex: 0 }}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative cursor-pointer">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full 
        ${index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500 font-medium">
                {card.category}
              </span>
              <div className="bg-purple-600 p-1.5 rounded-full">
                {card.icon}
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-3"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex-grow">
              {card.description}
            </p>
          </div>
        ))}
      </div>


      {/* Back to Top */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 transition cursor-pointer"
        >
          Back to Top ↑
        </button>
      </div>

    </div>
  );
};

export default InfoCardsSection;
