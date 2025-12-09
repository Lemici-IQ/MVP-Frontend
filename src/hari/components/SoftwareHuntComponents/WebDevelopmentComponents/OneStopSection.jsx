const OneStopSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center max-w-lg">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your <span className="text-[#14A79D]">One Stop-Shop</span><br />
            for better Business<br />decisions
          </h2>

          <p className="text-gray-600 mt-4">
            Tools for you no matter where you are in your research process.
          </p>
        </div>

        {/* RIGHT Image */}
        <div className="flex justify-center">
          <img
            src="/hari/SoftwareHuntImages/OneStopSection.png"
            alt="Business decision process"
            className="max-w-[500px] w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default OneStopSection;
