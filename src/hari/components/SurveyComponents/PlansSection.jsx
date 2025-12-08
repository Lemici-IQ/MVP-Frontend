import React from "react";
import { FaRocket, FaUser, FaUsers, FaBriefcase } from "react-icons/fa";

const plans = [
  {
    icon: <FaRocket size={28} className="text-[#FF339C]" />,
    bg: "bg-[#FFF2F9]",
    title: "Starter",
    desc: "For anyone just getting started. Create unlimited surveys and collect 25 free responses on each survey.",
  },
  {
    icon: <FaUser size={28} className="text-[#0BA84A]" />,
    bg: "bg-[#EBFFF3]",
    title: "Individuals",
    desc: "For Individual users who need advanced tools and want to save with a flexible, feature-rich annual plan.",
  },
  {
    icon: <FaUsers size={28} className="text-[#FFCE31]" />,
    bg: "bg-[#FFF6D8]",
    title: "Teams",
    desc: "For growing teams who need great surveys tools, branding control, and real-time collaboration features.",
  },
  {
    icon: <FaBriefcase size={28} className="text-[#4A53FA]" />,
    bg: "bg-[#EFF0FF]",
    title: "Enterprises",
    desc: "For Organizations that need secure access, admin tools, and powerful integration at scale.",
  },
];

const PlansSection = () => {
  return (
    <section className="w-full pt-16 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 my-14">
        Plans that fit you or your team
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-3xl p-8 flex flex-col hover:shadow-lg transition"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${plan.bg} mb-6`}
            >
              {plan.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-3">{plan.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-8 flex-grow">{plan.desc}</p>

            {/* Button */}
            <button className="bg-[#652C90] text-white font-semibold py-2 rounded-xl hover:bg-purple-800 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          View all plans and pricing →
        </a>
      </div>
    </section>
  );
};

export default PlansSection;
