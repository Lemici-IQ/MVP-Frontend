import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    logo: "/hari/SoftwareHuntImages/myBillBook.jpg",
    name: "myBillBook",
  },
  {
    id: 2,
    logo: "/hari/SoftwareHuntImages/invoicera.jpg",
    name: "Invoicera",
  },
  {
    id: 3,
    logo: "/hari/SoftwareHuntImages/busy.jpg",
    name: "Busy",
  },
  {
    id: 4,
    logo: "/hari/SoftwareHuntImages/tally.jpg",
    name: "TallyPrime",
  },
];

const LocalProducts = () => {
  return (
    <section className="w-full py-10 px-4 md:px-12">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Local Products for India
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFDFD] border-2 border-[#EDEDED] rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-32 h-20 object-contain mx-auto"
            />

            {/* Rating */}
            <div className="flex justify-center my-4 gap-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
            </div>

            {/* Button */}
            <button className="w-full bg-[#14A79D] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#00978E] transition">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* View More Button at Bottom */}
      <div className="flex justify-end mt-4">
        <Link
          to="/viewmore"
          className="text-[#14A79D] text-sm font-medium hover:underline"
        >
          View More →
        </Link>
      </div>

    </section>
  );
};

export default LocalProducts;
