import React from "react";
import { FaStar, FaStarHalfAlt, FaCheckCircle } from "react-icons/fa";
import { FiShare2, FiBookmark, FiMoreVertical } from "react-icons/fi";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const AssociationProfile = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <div className="border border-[#C2C1C3] rounded-3xl p-6 md:p-8 shadow-sm bg-white">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex gap-4 items-start w-full">

            {/* Logo */}
            <img
              src="/hari/AssociationImages/Alliance.png"
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain border border-[#C2C1C3]"
              alt="logo"
            />

            {/* Title + tags */}
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2 whitespace-nowrap sm:whitespace-normal">
                Tech Business Alliance
                <FaCheckCircle className="text-blue-500 text-lg" />
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2 justify-start">
                {["Technology", "Innovation", "Startups", "Digital Transformation"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E6F5FB] text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex gap-4 text-gray-800 text-xl self-end md:self-start">
            <FiShare2 className="cursor-pointer hover:scale-110 transition" />
            <FiBookmark className="cursor-pointer hover:scale-110 transition" />
            <FiMoreVertical className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          Leading the future of technology innovation through collaboration,
          education, and advocacy. Join the premier association for tech
          entrepreneurs and innovators.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="bg-[#01719E] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-medium hover:bg-[#026d95] transition w-full sm:w-auto">
            Follow
          </button>

          <button className="border border-[#01719E] text-[#01719E] px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-medium hover:bg-[#E8F5FB] transition w-full sm:w-auto">
            Become a Member
          </button>
        </div>

        {/* Stars + Social Icons Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500 text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="text-gray-600 text-sm ml-2">107 likes</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <FaYoutube className="text-red-500 cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="text-[#1877F2] cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="text-[#E4405F] cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="text-[#1DA1F2] cursor-pointer hover:scale-110 transition" />
            <FaPinterest className="text-[#E60023] cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociationProfile;
