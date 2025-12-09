import React from "react";
import {
  Users,
  Layers,
  Target,
  GraduationCap,
  Zap,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with industry leaders, potential partners, and like-minded professionals to expand your business network.",
  },
  {
    icon: Layers,
    title: "Resources",
    desc: "Access exclusive research, tools, and educational materials to stay ahead in your industry.",
  },
  {
    icon: Target,
    title: "Advocacy",
    desc: "Have your voice heard on policy matters and industry standards that affect your business.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Participate in workshops, seminars, and certification programs to enhance your skills.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Stay updated on the latest trends, technologies, and best practices in your field.",
  },
  {
    icon: Star,
    title: "Recognition",
    desc: "Gain credibility and visibility through awards, certifications, and member directories.",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Join a <span className="text-[#01719E]">Business Association?</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Unlock opportunities for growth and success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E6F5FB]">
                    <Icon size={28} className="text-gray-500" />
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
