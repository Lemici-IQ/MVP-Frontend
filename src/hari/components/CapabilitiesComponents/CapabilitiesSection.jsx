import React from "react";

const CapabilitiesSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 mx-auto">

      {/* Main Title */}
      <h2 className="font-space text-center text-4xl md:text-5xl font-extrabold text-[#652C90] mb-4">
        Capabilities
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 text-sm md:text-base mb-16">
        Unlocking the Potential of Those Who Advance the World
      </p>

      {/* Bold Heading */}
      <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight text-center md:text-left">
        The core capabilities are at the <br className="hidden md:block" />
        heart of our enterprise
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-small leading-relaxed text-center md:text-left">
        As an innovation company rapidly addressing the world’s most vexing challenges,
        our technical core capabilities define the areas in which technical excellence
        is critical, not only for our business, but in the work we do daily. We create
        smarter technology solutions for customers in heavily regulated industries to
        achieve the important missions on the frontlines of their industry.
      </p>
    </section>
  );
};

export default CapabilitiesSection;
