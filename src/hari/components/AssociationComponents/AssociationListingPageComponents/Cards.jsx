import React from "react";
import { FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { MdOutlineFileDownload, MdCropFree } from "react-icons/md";

const baseProducts = [
  {
    logo: "/hari/AssociationImages/AIGMF.png",
    name: "All India Glass Federation",
    location: "Delhi, India",
    desc: "Represents all segments of India's glass industry, from large to small manufacturers.",
    tags: ["Manufacturing", "Glass", "Government"],
    rating: 4,
    reviews: "200k",
  },
  {
    logo: "/hari/AssociationImages/Alliance.png",
    name: "Tech Business Alliance",
    location: "Delhi, India",
    desc: "Drives collaboration and growth for tech companies, startups, and innovators.",
    tags: ["Technology", "Innovation", "Startups"],
    rating: 4,
    reviews: "200k",
  },
  {
    logo: "/hari/AssociationImages/Finance.jpg",
    name: "Finance Council of India",
    location: "Delhi, India",
    desc: "Connects financial professionals to uphold industry standards and compliance.",
    tags: ["Finance", "Banking", "Investment"],
    rating: 4,
    reviews: "200k",
  },
];

const products = [...baseProducts, ...baseProducts, ...baseProducts]; 

const Cards = () => {
  return (
    <section className="w-full py-10 px-4 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#E6F5FB] shadow-sm hover:shadow-md transition border border-[#C4E7E4]"
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white p-2 rounded-2xl shadow-sm">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.location}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-snug mb-4">
                {item.desc}
              </p>

              <div className="flex gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-700 px-3 py-1 text-xs rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-sm mb-3">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                <span className="text-gray-600 ml-1">
                  ({item.reviews} review)
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center bg-[#E1E1E2] rounded-b-3xl px-6 py-4 text-gray-700">
              <button className="hover:text-black">
                <MdOutlineFileDownload size={22} />
              </button>
              <button className="hover:text-black">
                <FaShareAlt size={20} />
              </button>
              <button className="hover:text-black">
                <FaRegBookmark size={20} />
              </button>
              <button className="hover:text-black">
                <MdCropFree size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
