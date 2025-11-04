import React from "react";

const OpportunitySection = () => {
    const cards = [
        {
            title: "Network",
            text: "Easily filter and identify high value contacts so you can focus on the right relationships.",
        },
        {
            title: "Earn",
            text: "See how many connections you can access through the people you’re connected with.",
        },
        {
            title: "Create",
            text: "Find and connect with the people in your network’s network — potential customers.",
        },
        {
            title: "Share Policies",
            text: "Key business connections — quickly and efficiently.",
        },
    ];

    return (
        <section className="px-6 md:px-16 py-10 text-center">
            {/* Tag */}
            <div className="inline-block bg-[#6D3E934D] text-[#6D3E93] font-medium px-6 py-2 rounded-full mb-4">
                Opportunity
            </div>

            {/* Heading */}
            <h1 className="mb-0 font-space text-[26px] font-bold text-center md:text-5xl md:mb-3">
                Share your Knowledge and
            </h1>
            <h1 className="mb-5 font-space text-[26px] font-bold text-center md:text-5xl md:mb-8">
                Unlock <span className="text-[#6D3E93]">New Professional</span> Doors
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-[#FFFDFD] shadow-md border-2 border-[#EDEDED] p-6 transition-transform hover:-translate-y-1 hover:shadow-lg
              ${index === 0 ? "rounded-2xl lg:rounded-bl-[6rem] rounded-2xl" : ""}
              ${index === cards.length - 1 ? "rounded-2xl lg:rounded-br-[6rem] rounded-2xl" : ""}
              ${index !== 0 && index !== cards.length - 1 ? "rounded-2xl" : ""}
            `}
                    >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                            {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpportunitySection;
