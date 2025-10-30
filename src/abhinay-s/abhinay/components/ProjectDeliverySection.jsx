import React from "react";

const features = [
    "Reduce delivery time with custom templates",
    "Track efforts to impact with OKR planning",
    "Manage complex projects at scale",
    "Always Delivered on Schedule",
    "Delivered with Precision and Punctuality",
    "Every Project Managed with Care",
    "Effort That Shows, Delivery That Counts",
    "Your B2B Tech Partner",
    "Custom Software Solutions",
];

const cards = [
    {
        img: "/images/1.png",
        title: "Flexible workflows for every team",
    },
    {
        img: "/images/2.png",
        title: "Task , docs, spreadsheets, and more",
    },
    {
        img: "/images/3.png",
        title: "Resources and workload optimization",
    },
    {
        img: "/images/4.png",
        title: "Dashboards and insights",
    },
];

const ProjectDeliverySection = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-12 mt-8">
            <div className="text-left mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Intelligence for every team to grow and thrive
                </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 my-6 w-full">
                {["Data", "Research", "Network", "Consulting", "Matchmaking", "Learn more"].map(
                    (tab, idx) => (
                        <button
                            key={idx}
                            className="w-full px-6 py-4 border border-gray-300 rounded-full text-base leading-none font-medium text-center text-[#6D3E93] hover:bg-gray-100 transition-all duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {tab}
                        </button>
                    )
                )}
            </div>



            <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Deliver Projects on Time, Every Time</h3>
                <p className="text-gray-600 mb-4">
                    Get teams running more efficiently with a complete <br /> management solution.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-2 text-sm">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <img src="/abhinay/tick.svg" alt="" />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {cards.map((card, i) => (
                        <div key={i} className="rounded-lg overflow-hidden">
                            <div className="relative">
                                <img
                                    src={`/abhinay${card.img}`}
                                    alt={card.title}
                                    className="w-full aspect-square object-cover rounded-[5px]"
                                />
                                <button className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm">
                                    Learn more <span className="bg-[#6D3E93] text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs ml-1">↗</span>
                                </button>
                            </div>
                            <p className="text-sm font-medium mt-3">{card.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDeliverySection;
