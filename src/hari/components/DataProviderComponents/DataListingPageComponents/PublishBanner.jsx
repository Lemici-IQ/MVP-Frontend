import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#FF6105] text-white py-12 md:py-16 px-8 md:px-16 rounded-2xl max-w-screen-xl mx-6 md:mx-12 my-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase tracking-wide text-white/80 mb-3">
            All India Business Database providers
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            India's Leading <br /> Database Provider
          </h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            We offer the most comprehensive and reliable database solutions to
            empower businesses across industries. With accurate, updated, and
            verified data, we help organizations make smarter decisions and reach
            their target audience effectively. Our robust platform ensures seamless
            access to vast datasets, tailored to your specific needs. Trusted by top
            companies nationwide, we drive growth through data-driven insights and
            precision.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/hari/DataProviderImages/DPbanner.jpg"
            alt="Database Provider Illustration"
            className="rounded-xl w-72 sm:w-80 md:w-[24rem] h-[250px] lg:h-[350px] object-cover bg-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
