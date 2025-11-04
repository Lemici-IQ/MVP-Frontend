import React from "react";

const Banner = () => {
  return (
    <div className="px-4 sm:px-0">
      <section
        className="relative w-full max-w-6xl mx-auto mt-8 rounded-2xl overflow-hidden mb-16"
        style={{
          backgroundImage: `url("/hari/SoftwareHuntImages/homeBanner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 px-6 sm:px-12 py-16 lg:py-10 text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Compare <br /> and Review
          </h1>
          <p className="text-lg sm:text-xl mt-3 text-gray-200">
            Breaking Down Similarities and Contrasts
          </p>
          <button className="mt-8 bg-white text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-300">
            Start for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
