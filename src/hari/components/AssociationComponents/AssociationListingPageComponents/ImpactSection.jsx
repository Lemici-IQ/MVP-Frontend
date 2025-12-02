import React from "react";

const ImpactSection = () => {
  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/hari/AssociationImages/ImpactBanner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-sm md:text-base font-light tracking-wide">
          A Small Business Authority
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          Serves Indian Businesses To
        </h2>

        <h3 className="text-lg md:text-xl font-medium mt-2 text-[#B6E4E2]">
          Engage, Enable, Elevate & Excel
        </h3>

        <p className="text-sm md:text-base mt-3 text-gray-300">
          Helping industry in India to be trusted around the world.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-white/30 mt-8 mb-10"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl font-semibold text-[#B0DFF1]">3.6M</p>
            <p className="text-sm opacity-80 mt-1">Businesses Engaged Annually</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#B0DFF1]">6.3M</p>
            <p className="text-sm opacity-80 mt-1">MSMEs India</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#B0DFF1]">1,500+</p>
            <p className="text-sm opacity-80 mt-1">Enablers Partnered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#B0DFF1]">1200+</p>
            <p className="text-sm opacity-80 mt-1">Live Events Annually</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
