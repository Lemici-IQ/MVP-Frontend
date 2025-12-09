import React from "react";
import {
  Users,
  Handshake,
  Briefcase,
  Building2,
} from "lucide-react";

const functions = [
  {
    icon: Briefcase,
    title: "Representation and Advocacy",
    desc: "Business associations represent the interests of their members and advocate for policy changes at the government level.",
  },
  {
    icon: Users,
    title: "Knowledge Sharing and Networking",
    desc: "They provide platforms for members to share information, best practices, and network with peers.",
  },
  {
    icon: Building2,
    title: "Industry Development",
    desc: "Associations play a role in promoting industry growth and development, including through research, training, and advocacy.",
  },
  {
    icon: Handshake,
    title: "Facilitating Collaboration",
    desc: "They foster collaboration among businesses, helping to address industry-wide challenges and opportunities.",
  },
];

const FunctionsSection = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Functions Of <span className="text-[#01719E]">Business Associations</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Empowering businesses through comprehensive support and advocacy
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {functions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col gap-3">
                  
                  {/* Smaller Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1F5F6] shadow-inner">
                    <Icon size={24} className="text-gray-800" />
                  </div>

                  {/* Text */}
                  <h3 className="font-semibold text-[#005B6A] text-base">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;
