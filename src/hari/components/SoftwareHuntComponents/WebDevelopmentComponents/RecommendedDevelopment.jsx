const RecommendedDevelopment = () => {
  return (
    <section className="w-full pt-4 pb-10 px-4 lg:px-10">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-8">
        Recommended Development Companies
      </h2>

      {/* 70-30 layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">

        {/* LEFT Section */}
        <div>
          {/* 4 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* CARD TEMPLATE */}
            {[
              { img: "/hari/SoftwareHuntImages/devcompany12.jpg", title: "Fluper LTD", desc: "Fitness & Wellness" },
              { img: "/hari/SoftwareHuntImages/devcompany12.jpg", title: "Fluper LTD", desc: "Fitness & Wellness" },
              { img: "/hari/SoftwareHuntImages/devcompany34.jpg", title: "Lakme Salon", desc: "Salon & Beauty" },
              { img: "/hari/SoftwareHuntImages/devcompany34.jpg", title: "Lakme Salon", desc: "Salon & Beauty" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition h-80"
              >
                {/* IMAGE */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* CONTENT OVERLAY */}
                <div className="absolute bottom-10 left-0 w-full px-4 pb-2">
                  <h4 className="text-white text-sm font-semibold">{card.title}</h4>
                  <p className="text-gray-200 text-xs">{card.desc}</p>
                </div>

                {/* BOTTOM BUTTON */}
                <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-[85%]">
                  <button className="w-full bg-white text-gray-800 font-medium text-sm py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}

          </div>

          {/* View More */}
          <div className="flex justify-end mt-10">
            <a className="text-sm text-blue-500 cursor-pointer inline-flex items-center gap-1">
              View more →
            </a>
          </div>
        </div>

        {/* RIGHT Section */}
        <div className="rounded-2xl border-2 border-[#EDEDED] p-6 space-y-5">
          <h3 className="text-lg font-semibold">Key Market insights</h3>

          <div>
            <h4 className="text-sm font-semibold text-blue-500">Market Trend</h4>
            <p className="text-sm text-gray-600 mt-1">
              Golf is evolving from an elite outdoor sport to an accessible indoor
              entertainment and training experience through simulators and golf lounges.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-blue-500">Growth Rate</h4>
            <p className="text-sm text-gray-600 mt-1">
              The indoor golf simulator market in India is growing at a CAGR of 17–20%,
              driven by rising disposable income in premium experiences, and tech adoption.
            </p>
          </div>
        </div>

      </div>

      {/* DISCLAIMER SECTION */}
      <p className="text-sm text-gray-500 mt-8 leading-relaxed italic">
        Disclaimer: LeMiCi IQ is an integrated franchise solution company since 2025 and an absolute 
        authority on franchising and licensing. FHL (
        <a href="#" className="text-blue-500 underline">
          www.lemici.com
        </a>
        ) and the site sponsors accept no liability for the accuracy of any information contained 
        on this site or on other linked sites. We recommend you take advice from a lawyer, accountant 
        and franchise consultant experienced in franchising before you commit yourself. It is user's 
        responsibility to satisfy yourself as to the accuracy and reliability of the information supplied. 
        Please read the{" "}
        <a href="#" className="text-blue-500 underline">
          terms & condition
        </a>.
      </p>

    </section>
  );
};

export default RecommendedDevelopment;
