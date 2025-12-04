import React from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  GraduationCap,
  Building,
  Factory,
  Users,
  TrendingUp,
} from "lucide-react";

const StateSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Header */}
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        <span className="text-[#01719E]">Business Associations</span> Across India
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Discover associations and networking opportunities in your state
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center w-full max-w-3xl bg-white border border-[#D9D9D9] rounded-[12px] px-4 py-3 shadow-sm">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search state..."
            className="ml-3 flex-1 outline-none bg-transparent text-sm placeholder:text-gray-400"
          />
        </div>
      </div>

      <p className="text-center mt-4 text-sm text-gray-600 font-medium">
        50+ States & Union Territories
      </p>

      {/* Main Layout - 60/40 */}
      <div className="flex flex-col lg:flex-row gap-12 mt-10">

        {/* LEFT COLUMN (60%) */}
        <div className="lg:w-[60%]">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src="/hari/AssociationImages/andhra-pradesh.png"
              className="w-36 sm:w-40 rounded-xl mx-auto sm:mx-0"
              alt="State Map"
            />

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Andhra Pradesh</h3>
              <p className="text-gray-500 text-sm">Business Ecosystem Overview</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="bg-white border border-[#E1E1E2] rounded-xl px-6 py-4 shadow-sm flex-1 sm:flex-none">
                  <p className="text-2xl font-semibold text-[#01719E]">15+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white border border-[#E1E1E2] rounded-xl px-6 py-4 shadow-sm flex-1 sm:flex-none">
                  <p className="text-2xl font-semibold text-[#01719E]">20+</p>
                  <p className="text-sm text-gray-600">Business Consultants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mt-6">
            Andhra Pradesh is the second largest producer of cotton and raw silk in India.
            The state has a strong textile industry base consisting of handlooms, handicrafts,
            spinning and processing units. The state has integrated apparel city in Vizag with
            an innovative concept of “Fibre to Store”.
          </p>

          {/* BOTTOM BAR */}
          <div className="bg-white border border-[#E1E1E2] shadow-sm rounded-2xl p-6 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              
              <div>
                <Factory size={20} className="text-gray-700 mb-2 mx-auto sm:mx-0" />
                <h4 className="font-semibold text-gray-800 text-sm">Key Industries</h4>
                <p className="text-xs text-gray-500">
                  Textiles, IT, Pharmaceuticals, Agriculture
                </p>
              </div>

              <div>
                <Users size={20} className="text-gray-700 mb-2 mx-auto sm:mx-0" />
                <h4 className="font-semibold text-gray-800 text-sm">Major Associations</h4>
                <p className="text-xs text-gray-500">FAPCCI, APTIC, Textile Alliance</p>
              </div>

              <div>
                <TrendingUp size={20} className="text-gray-700 mb-2 mx-auto sm:mx-0" />
                <h4 className="font-semibold text-gray-800 text-sm">Business Growth</h4>
                <p className="text-xs text-gray-500">18% YoY in manufacturing sector</p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (40%) */}
        <div className="lg:w-[40%] md:border-l border-gray-200 pl-0 lg:pl-10 pt-6 lg:pt-0">

          <h3 className="text-lg font-semibold text-gray-900">Key State Highlights</h3>
          <p className="text-gray-500 text-sm mb-6">
            What makes Andhra Pradesh attractive for business
          </p>

          <div className="space-y-7">

            {/* Highlight Item */}
            <div className="flex gap-4">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg bg-[#E8F6F6] flex justify-center items-center shrink-0">
                <Lightbulb className="text-[#3A363C]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Innovation Hubs</h4>
                <p className="text-sm text-gray-500">
                  Multiple innovation centers and incubators supporting startups and SMEs
                  with mentorship, funding, and infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg bg-[#E8F6F6] flex justify-center items-center shrink-0">
                <Rocket className="text-[#3A363C]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Startup Ecosystem</h4>
                <p className="text-sm text-gray-500">
                  Growing startup community with government support, angel investors,
                  and venture capital presence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg bg-[#E8F6F6] flex justify-center items-center shrink-0">
                <GraduationCap className="text-[#3A363C]" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Skill Development</h4>
                <p className="text-sm text-gray-500">
                  Strong focus on vocational training and skill development programs
                  aligned with industry needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg bg-[#E8F6F6] flex justify-center items-center shrink-0">
                <Building className="text-[#3A363C]" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Infrastructure</h4>
                <p className="text-sm text-gray-500">
                  Well-developed industrial parks, SEZs, ports, and connectivity through
                  road, rail, and air networks.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StateSection;
