import React from "react";

const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-4">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold">
        {data.title}
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-xs sm:text-sm leading-relaxed">
        {data.description}
      </p>
    </div>
  );
};

export default Hero;
