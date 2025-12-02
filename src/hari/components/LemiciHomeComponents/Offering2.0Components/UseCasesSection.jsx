import React from "react";
import { Play } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-start md:gap-16">
          {/* LEFT SIDE — CARDS */}
          <div className="flex-1 space-y-6 md:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-left">
              Use Cases
            </h2>
            <div className="bg-[#FFFDFD] shadow-md p-6 rounded-xl border-2 border-[#EDEDED]">
              <h3 className="font-semibold text-lg mb-1">Self-service</h3>
              <p className="text-gray-600 text-sm">
                Empower your customers with instant, intuitive self-service
                options—quick solution at their fingertips, whenever they need them
              </p>
            </div>

            <div className="bg-[#FFFDFD] shadow-md p-6 rounded-xl border-2 border-[#EDEDED]">
              <h3 className="font-semibold text-lg mb-1">Agent service</h3>
              <p className="text-gray-600 text-sm">
                Equip agents with the right information, exactly when they need it,
                to deliver exceptional customer service every time.
              </p>
            </div>

            <div className="bg-[#FFFDFD] shadow-md p-6 rounded-xl border-2 border-[#EDEDED]">
              <h3 className="font-semibold text-lg mb-1">Proactive service</h3>
              <p className="text-gray-600 text-sm">
                Anticipate needs and resolve issues before they arise, ensuring
                seamless, personalized experiences.
              </p>
            </div>

            <button className="bg-[#652C90] text-white px-6 py-2 rounded-lg text-sm font-medium">
              Explore
            </button>
          </div>

          {/* RIGHT SIDE — SMALLER SQUARE IMAGES */}
          <div className="flex-1 flex flex-col justify-between space-y-10 mt-12 md:mt-0 md:max-w-md md:ml-auto">
            {/* Image Box 1 */}
            <div>
              <img
                src="/hari/LemiciHomeImages/usecase1.jpg"
                className="w-full h-50 rounded-xl mb-3 object-cover"
                alt="Industry Leaders"
              />
              <h3 className="font-semibold text-lg">Industry Leaders</h3>
              <p className="text-sm text-gray-600 mb-3">
                Find answers to your questions.
              </p>
              <button className="bg-[#652C90] text-white px-5 py-2 rounded-lg text-sm">
                Join as Expert
              </button>
            </div>

            {/* Image Box 2 */}
            <div>
              <img
                src="/hari/LemiciHomeImages/usecase2.jpg"
                className="w-full h-50 rounded-xl mb-3 object-cover"
                alt="LeMiCi AI"
              />
              <button className="bg-[#652C90] text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                LeMiCi AI <Play size={16} fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;