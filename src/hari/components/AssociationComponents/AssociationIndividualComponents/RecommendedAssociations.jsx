const RecommendedAssociations = () => {
  return (
    <section className="w-full pt-4 pb-10 px-4 lg:px-10">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-8">
        Recommended Business Associations
      </h2>

      {/* 70-30 layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">

        {/* LEFT Section */}
        <div>
          {/* 4 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* CARD TEMPLATE */}
            {[
              { img: "/hari/AssociationImages/ra1.jpg", title: "Finance Council", desc: "Finance • Investment" },
              { img: "/hari/AssociationImages/ra2.jpg", title: "Retail Network", desc: "Retail • E-commerce" },
              { img: "/hari/AssociationImages/ra3.jpg", title: "Services Guild", desc: "Professional Services" },
              { img: "/hari/AssociationImages/ra4.jpg", title: "Health Vision", desc: "Healthcare • Medical" },
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
            <h4 className="text-sm font-semibold text-[#01719E]">Industry Trend</h4>
            <p className="text-xs text-gray-600 mt-1">
              Business associations are transforming into digital ecosystems with virtual events, online learning, and AI-powered member matching.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#01719E]">Growth Rate</h4>
            <p className="text-xs text-gray-600 mt-1">
              The market is growing at a 12–15% CAGR, driven by demand for industry knowledge, networking, and advocacy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#01719E]">Member Value</h4>
            <p className="text-xs text-gray-600 mt-1">
              Members see a 300–400% ROI through new opportunities, training savings, and exclusive insights.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecommendedAssociations;
