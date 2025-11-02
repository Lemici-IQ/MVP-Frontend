import React from "react";

const PublishBanner = () => {
  return (
    <section className="bg-[#FF6105] text-white py-12 md:py-16 px-6 md:px-12 rounded-2xl overflow-hidden max-w-screen-xl mx-auto my-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:whitespace-nowrap">
            Publish Your Data Business on Datarade
          </h2>

          <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
            List your data on our global B2B platform to reach 120k monthly visitors
          </p>

          <ul className="space-y-1 text-white/90 text-sm sm:text-base mb-6 text-left inline-block lg:inline">
            <li>• List your data easily with no tech efforts</li>
            <li>• Tap into qualified budgets for data</li>
            <li>• Get B2B intent insights on data buyers</li>
          </ul>

          <div>
            <button
              type="button"
              className="inline-block bg-white text-black font-medium text-sm sm:text-base px-5 py-2.5 my-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Sign up as a Data provider →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src="/hari/DataProviderImages/cards.png"
            alt="Datarade Preview"
            className="w-64 sm:w-72 md:w-80 lg:w-[22rem] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PublishBanner;
