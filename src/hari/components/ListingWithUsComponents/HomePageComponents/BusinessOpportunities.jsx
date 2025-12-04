import React from "react";
// import businessImg from "/hari/ListingWithUsImages/businessOpp.png";

const BusinessOpportunities = () => {
  const stats = [
    { value: "50K+", label: "Active Buyers" },
    { value: "2.5M+", label: "Monthly Visitors" },
    { value: "₹500Cr+", label: "Deals Facilitated" },
    { value: "98%", label: "Success Rate" },
  ];

  const tags = [
    { text: "StartupZone Listed", top: "10%", left: "70%" },
    { text: "B2B Marketplace Listed", top: "25%", left: "20%" },
    { text: "Software Hunt Listed", top: "40%", left: "60%" },
    { text: "Franchise Listed", top: "65%", left: "20%" },
    { text: "B2B Events Listed", top: "75%", left: "73%" },
  ];

  return (
    <section className="px-6 py-24 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Sell Your{" "}
            <span className="text-orange-500">Business Opportunities</span>{" "}
            to Millions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed py-2">
            Connect with entrepreneurs, investors, and business seekers across
            India. List your franchises, software, events, and startup
            opportunities on India's fastest-growing business platform.
          </p>
          <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Start Selling
          </button>
        </div>

        {/* Right image with floating tags */}
        <div className="relative md:w-1/2">
          <img
            src={businessImg}
            alt="Business"
            className="rounded-xl shadow-lg w-full object-cover"
          />

          {tags.map((tag, i) => (
            <div
              key={i}
              className="absolute bg-black text-white text-xs md:text-sm px-3 py-1 rounded-full"
              style={{
                top: tag.top,
                left: tag.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {tag.text} ✓
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 py-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
              {item.value}
            </h3>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessOpportunities;
