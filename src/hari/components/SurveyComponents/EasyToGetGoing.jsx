import React from "react";

const steps = [
  {
    title: "Build your first survey",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    link: "Start building→",
    img: "/hari/SurveyImages/survey.jpg",
  },
  {
    title: "Let the Feedback Flow",
    desc: "Understand your ideal audience better. Start turning questions into insights in about an hour.",
    link: "Start collecting→",
    img: "/hari/SurveyImages/feedback.jpg",
  },
  {
    title: "Unlock Powerful Insights",
    desc: "Get ready for your next ah-ha moment using powerful analysis and collaboration tools.",
    link: "Start analyzing→",
    img: "/hari/SurveyImages/insights.jpg",
  },
];

const EasyToGetGoing = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#6D3E93] mb-12">
        It’s easy to get going
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border-2 border-[#EDEDED] hover:shadow-md transition p-0 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-200">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

              {/* Link (pushed to bottom) */}
              <a
                href="#"
                className="text-[#268BFF] font-medium hover:underline mt-auto"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EasyToGetGoing;
