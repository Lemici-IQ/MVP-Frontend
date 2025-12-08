import React from "react";

const CareerBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-10 sm:py-12">
      <div className="bg-[#652C90] rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-0">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl text-center md:text-left">
          <p className="text-xs sm:text-sm opacity-90 mb-2">Capabilities Overview</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 leading-snug">
            Go Beyond the Expected
          </h2>

          <p className="text-xs sm:text-sm md:text-base opacity-90 mb-6 sm:mb-8 leading-relaxed">
            We’re dedicated to helping our clients do amazing things and unlocking
            the potential of those who advance the world. Join us, and you can too.
          </p>

          <button className="bg-white text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow hover:bg-gray-200 transition">
            Explore Careers
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/hari/CapabilitiesImages/BannerImage.png"
            alt="Careers Illustration"
            className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default CareerBanner;
