import React from "react";

const SellingBanner = () => {
  return (
    <section className="bg-orange-500 text-white text-center py-12 px-6 rounded-none mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Selling?
      </h2>
      <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
        Join thousands of successful businesses already selling on BizConnect.
        Get your first listing live in minutes.
      </p>
      <button className="bg-white text-orange-500 font-medium py-3 px-8 rounded-md hover:bg-orange-100 transition duration-300">
        Get Started Today
      </button>
    </section>
  );
};

export default SellingBanner;
