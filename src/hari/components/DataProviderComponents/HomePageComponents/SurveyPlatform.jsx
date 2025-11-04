import React from "react";

const SurveyPlatform = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section */}
      <div className="space-y-6">
        {/* Small heading */}
        <p className="text-sm text-gray-500 font-medium">
          AI+ powered surveys and forms
        </p>

        {/* Main heading */}
        <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-900 leading-snug">
          Create Online surveys and forms
          <br />
          <span className="text-gray-900">
            The all-in-one platform for surveys,
            <br />
            forms, and market research
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] max-w-md leading-relaxed">
          Easily design surveys and forms, collect responses,
          and gain actionable insights—all from one powerful platform.
        </p>

        {/* CTA button */}
        <button className="bg-[#FF6105] hover:bg-[#e85600] text-white font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all">
          Get started free
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              260K<span className="text-[#FF6105]">+</span>
            </p>
            <p className="text-gray-500 text-sm">Organizations world wide</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900">
              42M<span className="text-[#FF6105]">+</span>
            </p>
            <p className="text-gray-500 text-sm">Users choose us</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900">
              2.4M<span className="text-[#FF6105]">+</span>
            </p>
            <p className="text-gray-500 text-sm">Daily AI predictions</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900">
              20K<span className="text-[#FF6105]">+</span>
            </p>
            <p className="text-gray-500 text-sm">5-star reviews</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="/hari/DataProviderImages/survey_image.jpg"
            alt="Survey analytics"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SurveyPlatform;
