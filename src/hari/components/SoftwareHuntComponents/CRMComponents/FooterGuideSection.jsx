import React from "react";
import { Link } from "react-router-dom";

const FooterGuideSection = () => {
  return (
    <section className="w-full">

      {/* Top Banner */}
      <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden my-12 mx-8">

        {/* Background Image */}
        <img
          src="/hari/SoftwareHuntImages/Footer.jpg"
          alt="Sourcing Guide"
          className="w-full h-full object-cover"
        />

        {/* Text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 text-white max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get Sourcing Guide 2025
          </h2>

          <p className="text-sm md:text-base text-gray-200 mb-6">
            Get custom pricing for an ideal software suitable for
            your business or practice.
          </p>

          <button className="bg-white text-black font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition">
            Guide
          </button>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="px-10 mt-20 mb-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          How we picked the Software on the list
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed italic">
          Our independent and objective research is based on market demand
          signals in India along with analysis of our proprietary data. This
          includes product information and verified user reviews in the last
          two years as of April 2025. Sponsorship or client status has no
          influence on the selection of products in the lists, but it may
          impact the order in which products appear.{" "}
          <a
            href="#"
            className="text-blue-500 underline italic"
          >
            Read our full methodology.
          </a>
        </p>
      </div>

    </section>
  );
};

export default FooterGuideSection;
