import React from "react";
import { FiActivity, FiShield, FiHeadphones } from "react-icons/fi";

const items = [
  {
    icon: <FiActivity className="text-indigo-500 text-xl" />,
    label: "Performance",
    bg: "bg-[#E9F7FF]",
  },
  {
    icon: <FiShield className="text-yellow-500 text-xl" />,
    label: "Security",
    bg: "bg-[#FFF9E6]",
  },
  {
    icon: <FiHeadphones className="text-pink-500 text-xl" />,
    label: "Support",
    bg: "bg-[#FFEAF5]",
  },
];

const Banner = () => {
  return (
    <section className="py-10 px-4 mx-6 md:mx-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

        {/* LEFT BOX */}
        <div className="bg-[#15A8A1] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:flex-1">

          {/* Left Text Block */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Compare <br /> and Review
              </h2>

              <p className="mt-4 text-white/90 max-w-md text-[15px] leading-relaxed">
                Discover where they align, where they diverge, and how these
                insights reveal a deeper understanding of both sides.
              </p>
            </div>

            <button className="bg-white text-black font-medium rounded-xl px-6 py-3 mt-6 md:mt-8 w-fit text-sm">
              Start for Free
            </button>
          </div>

          {/* RIGHT stacked cards */}
          <div className="flex flex-col gap-4 justify-center w-full md:w-[250px] md:ml-10 mt-6 md:mt-0">
            {items.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} h-20 w-full md:w-[85%] flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-2xl shadow-sm`}
              >
                <div>{item.icon}</div>
                <span className="text-gray-800 font-medium text-[15px] text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-[#FFFDFD] rounded-3xl border-2 border-[#EDEDED] p-8 md:p-10 md:w-[38%] flex flex-col items-center justify-between">
          
          <div className="text-center">
            <img
              src="/hari/SoftwareHuntImages/bannerlogo.png"
              alt="logo"
              className="w-16 h-16 object-contain mx-auto mb-6"
            />

            <h3 className="text-[18px] md:text-[20px] font-semibold leading-tight">
              List Your <br /> Software/Service to <br /> Expand Your Reach
            </h3>

            <p className="text-gray-600 mt-3 text-[15px] max-w-sm">
              Connect with potential buyers and grow your network.
            </p>
          </div>

          <button className="bg-[#15A8A1] text-white text-sm font-medium rounded-xl px-6 py-3 mt-6 md:mt-8 w-full">
            Register for free
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;
