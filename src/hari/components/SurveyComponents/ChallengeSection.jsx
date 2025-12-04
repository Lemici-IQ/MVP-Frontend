import React from "react";

const ChallengeSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Main Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 mb-16">
        Built for any challenge
      </h2>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-xl md:text-3xl font-bold text-[#6D3E93] leading-tight mb-4">
            Improve Customer Satisfaction <br /> and Loyalty
          </h3>

          <p className="text-gray-600 mb-6 max-w-lg">
            Capture feedback across the customer journey to identify pain points,
            track satisfaction, and build brand loyalty.
          </p>

          {/* Links */}
          <ul className="space-y-2 text-blue-600 font-medium">
            <li>
              <a href="#" className="hover:underline">→ NPS survey template</a>
            </li>
            <li>
              <a href="#" className="hover:underline">→ Customer satisfaction survey template</a>
            </li>
            <li>
              <a href="#" className="hover:underline">→ Customer service feedback survey template</a>
            </li>
          </ul>

          {/* Button */}
          <button className="mt-8 bg-[#6D3E93] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#5a327a] transition">
            See more templates
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/hari/SurveyImages/handshake.jpg" 
            alt="Handshake"
            className="w-full h-auto rounded-2xl object-cover shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default ChallengeSection;
