import React from "react";

const steps = [
  {
    title: "Case Studies",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: "/hari/CapabilitiesImages/Card1.jpg",
  },
  {
    title: "Our open ecosystem of alliances and acquisitions",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: "/hari/CapabilitiesImages/Card2.jpg",
  },
  {
    title: "Solution",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: "/hari/CapabilitiesImages/Card3.jpg",
  },
];

const Cards = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border-2 border-[#EDEDED] hover:shadow-md transition p-0 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-200">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
