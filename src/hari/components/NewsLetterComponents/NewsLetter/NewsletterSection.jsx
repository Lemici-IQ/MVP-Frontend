import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12">

      {/* MAIN HEADING CENTERED */}
      <h2 className="text-2xl md:text-5xl font-extrabold text-[#652C90] text-center mb-8 md:mb-14">
        LeMiCi for Newsletter
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-gray-800">

          {/* Sub Heading */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#633886] mb-4">
            The LeMiCi Executive Newsletter
          </h3>

          {/* Description */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            Includes actionable insights to help leaders navigate complex landscapes
            and drive stronger performance.
          </p>

          {/* Second Heading */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#633886] mb-4">
            Sign up now for our Newsletter
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            and be the first to know about cutting-edge insights that can help you
            maximize the impact of your function.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-gray-700">
            <li>• Unique, peer-led insights on best practices</li>
            <li>• Expert commentary and thought leadership on industry topics</li>
            <li>• Invitations to expert-led virtual events on key issues</li>
            <li>• Insights on critical cross-functional issues impacting the business</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-xl bg-[#9872B5] p-6 shadow-xl w-full max-w-md flex justify-center">
            <img
              src={"/hari/NewsLetterImages/NewsLetterComputer.png"}
              alt="Newsletter Computer"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;
