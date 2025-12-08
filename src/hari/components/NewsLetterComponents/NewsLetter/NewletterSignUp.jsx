import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#4D2C68]">
          Newsletter for Leaders
        </h2>

        {/* Sub-text */}
        <p className="text-gray-700 mt-4 leading-relaxed">
          Get objective, actionable insights - plus invitations to events. <br />
          Sign up now
        </p>

        {/* Input + Button */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          {/* Email Input */}
          <input
            type="email"
            className="w-full md:w-[450px] px-4 py-3 border border-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-[#652C90]"
          />

          {/* Button */}
          <button className="bg-[#633886] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#53307a] transition">
            Subscribe
          </button>

        </div>

        {/* Terms text */}
        <p className="text-gray-500 text-xs mt-4">
          By clicking the “Continue” button, you are agreeing to the{" "}
          <span className="text-blue-700 cursor-pointer">Lemici Terms of Use</span>
          {" and "}
          <span className="text-blue-700 cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
