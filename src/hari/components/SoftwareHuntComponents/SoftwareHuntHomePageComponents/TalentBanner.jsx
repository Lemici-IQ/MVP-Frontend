import React from "react";

const TalentBanner = () => {
  return (
    <section
      className="relative w-[95%] rounded-2xl overflow-hidden mt-8 mb-16 items-center mx-auto"
      style={{
        backgroundImage: `url("/hari/SoftwareHuntImages/talentBanner.jpg")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 py-20 md:py-28 text-white max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Find Talent That <br /> Aligns With Your Goal
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mt-4 text-gray-200 max-w-2xl">
          Work with the largest network of service providers and get things done – from quick turnarounds to big transformations.
        </p>

        {/* Bottom boxes */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="backdrop-blur-md bg-white/10 border border-white/40 rounded-xl p-5">
            <h3 className="text-blue-400 font-semibold text-sm mb-1">
              Talent Marketplace
            </h3>
            <p className="text-white text-base">
              Post a Requirement and Hire an Agency
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/40 rounded-xl p-5">
            <h3 className="text-blue-400 font-semibold text-sm mb-1">
              Project Catalog
            </h3>
            <p className="text-white text-base">
              Browse and Find Service Providers
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/40 rounded-xl p-5">
            <h3 className="text-blue-400 font-semibold text-sm mb-1">
              Consultations
            </h3>
            <p className="text-white text-base">
              Get Advice from an Industry Expert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentBanner;
