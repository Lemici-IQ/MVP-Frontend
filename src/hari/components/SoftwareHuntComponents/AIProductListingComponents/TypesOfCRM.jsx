import React from "react";
import { FaRocket } from "react-icons/fa";

const TypesOfCRM = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12">

      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT CARD — bigger */}
        <div className="md:w-[25%] bg-[#FFFDFD] border-2 border-[#EDEDED] rounded-3xl px-8 py-8 shadow-sm min-h-[420px]">

          {/* Icon */}
          <div className="text-4xl mb-4">
            <FaRocket />
          </div>

          <h3 className="text-[24px] font-semibold mb-3">
            CRM for Startups
          </h3>

          <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
            We have recommendations for a wide range of Software to increase
            productivity
          </p>

          <a
            href="#"
            className="text-blue-500 underline text-sm block mb-8"
          >
            Download CRM for Startups List
          </a>

          <button className="bg-[#15A8A1] mt-10 text-white font-medium py-3 px-6 rounded-xl hover:bg-[#11857F] transition">
            Download
          </button>
        </div>

        {/* ✅ RIGHT SECTION */}
        <div className="md:w-[70%] relative">

          {/* Heading inside right column */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 opacity-60">
            Types Of CRM
          </h2>

          {/* Image / Right Card */}
          <div>
            <img
              src="/hari/SoftwareHuntImages/typeOfCrm.png"
              alt="CRM Types"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfCRM;
