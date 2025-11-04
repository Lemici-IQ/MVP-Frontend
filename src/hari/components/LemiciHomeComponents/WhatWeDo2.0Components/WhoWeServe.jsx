import React from "react";
import { FaFilm, FaUsers, FaEnvelopeOpenText, FaCog, FaEye, FaFolder, FaBrain, FaCheckCircle } from "react-icons/fa";

const services = [
  { icon: <FaFilm className="text-pink-500 text-3xl" />, title: "Content Creation" },
  { icon: <FaUsers className="text-blue-500 text-3xl" />, title: "Team Collaboration" },
  { icon: <FaEnvelopeOpenText className="text-orange-500 text-3xl" />, title: "Brand Team Templates" },
  { icon: <FaCog className="text-teal-500 text-3xl" />, title: "Brand Management" },
  { icon: <FaEye className="text-green-500 text-3xl" />, title: "Visual Communication" },
  { icon: <FaFolder className="text-yellow-500 text-3xl" />, title: "Asset Management" },
  { icon: <FaBrain className="text-teal-700 text-3xl" />, title: "Brainstorms & Workshops" },
  { icon: <FaCheckCircle className="text-purple-500 text-3xl" />, title: "Productivity & Workflows" },
];

const WhoWeServe = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#652C90] mb-4">Who We Serve</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            We empower startups, SMEs, and enterprises with reliable market insights, business intelligence, and data-driven strategies.
            From entrepreneurs exploring new opportunities to established organizations looking to scale, LeMiCi helps every business make smarter, faster, and more confident decisions.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline text-sm sm:text-base">Learn more</a>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src="/hari/LemiciHomeImages/whoWeServe.jpg" alt="Who We Serve" className="rounded-xl shadow-lg w-full h-auto object-cover" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white gap-3 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow text-center"
          >
            {service.icon}
            <p className="text-gray-800 font-medium text-sm sm:text-base">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeServe;
