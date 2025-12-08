import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full px-6 md:px-12 my-12">
      <div className="relative h-[320px] md:h-[360px] rounded-3xl overflow-hidden flex items-center">

        {/* Background Image shifted to the right */}
        <div className="absolute inset-0">
          <img
            src="/hari/AssociationImages/BannerHome.jpg"
            alt="Banner"
            className="w-full h-full object-cover object-right"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pl-6 md:pl-12 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            Ready to Grow Your Business?
          </h2>

          <p className="text-gray-200 text-sm md:text-base mt-6 mb-6 max-w-md">
            Join thousands of successful business professionals who are already benefiting from association membership. Start connecting, learning, and growing today.
          </p>

          {/* Responsive Buttons */}
          <div className="flex gap-3 flex-nowrap">
            <button className="bg-[#01719E] text-white font-medium py-2.5 px-3 text-sm md:py-3 md:px-5 md:text-base rounded-lg hover:bg-[#0074A9] transition">
              Get Started Free
            </button>

            <button className="bg-white text-[#01719E] font-medium py-2.5 px-3 text-sm md:py-3 md:px-5 md:text-base rounded-lg hover:bg-gray-100 transition">
              Browse Associations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
