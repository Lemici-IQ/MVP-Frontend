import React from "react";

const ApiIntegration = () => {
  return (
    <section className="bg-white text-black py-12 md:py-16 px-6 md:px-12 max-w-screen-xl mx-auto rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section — Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/hari/DataProviderImages/api.jpg"
            alt="API Integration"
            className="w-full max-w-md md:max-w-90% h-70 rounded-2xl"
          />
        </div>

        {/* Right Section — Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Unlock more Data-driven Insights with an API Integration
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            Schedule a 1:1 conversation today to learn how organizations like yours
            have used API integration to incorporate our data into essential
            applications, reports, and workflows.
          </p>

          <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiIntegration;
