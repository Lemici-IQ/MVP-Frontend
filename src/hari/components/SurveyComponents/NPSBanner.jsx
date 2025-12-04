import React from "react";

const NPSBanner = () => {
  return (
    <section
      className="w-[95%] rounded-3xl overflow-hidden relative h-[350px] md:h-[420px] flex items-center mx-auto"
      style={{
        backgroundImage: "url('/hari/SurveyImages/BannerBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-white">
        <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
          Greyhound's NPS® response rates <br />
          jumped to 90% after using <span className="font-bold">LeMiCi</span>
        </h2>

        <p className="text-sm md:text-base opacity-90 max-w-xl mb-6">
          “Within a few months, our NPS was up almost 15 points. LeMiCi changed
          the way that data was getting into people's hands and it changed what
          they were able to do with it.“
        </p>

        <button className="bg-white text-black font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Read how
        </button>
      </div>
    </section>
  );
};

export default NPSBanner;
