import React from "react";

const events = [
    {
        title: "Make new friends India+ Singapore + Malaysia weekday (online)",
        date: "Thu, 8 May",
        time: "6:30 PM IST",
        price: "Free",
        img: "/hari/ExpertConnectImages/backgrounds/event1.jpg",
    },
    {
        title: "Make new friends India+ Singapore + Malaysia weekday (online)",
        date: "Thu, 8 May",
        time: "6:30 PM IST",
        price: "Free",
        img: "/hari/ExpertConnectImages/backgrounds/event2.jpg",
    },
    {
        title: "Make new friends India+ Singapore + Malaysia weekday (online)",
        date: "Thu, 8 May",
        time: "6:30 PM IST",
        price: "Free",
        img: "/hari/ExpertConnectImages/backgrounds/event3.jpg",
    },
];

const CommunityAndEvents = () => {
    const regions = [
        { name: "North America", color: "bg-[#6D3E934D] text-[#6D3E93]" },
        { name: "Latin America", color: "bg-[#268BFF4D] text-[#268BFF]" },
        { name: "Asia Pacific", color: "bg-[#14A79D4D] text-[#13A3B5]" },
        { name: "Europe", color: "bg-[#EB58624D] text-[#EB5862]" },
        { name: "Middle East & Africa", color: "bg-[#FFCE314D] text-[#FFCE31]" },
    ];

    return (
        <>
            {/* Community Section */}
            <section className="px-8 py-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center ml-0 lg:ml-5">
                    <h2 className="text-[60px] lg:text-[80px] leading-tight font-bold mb-5 opacity-70">
                        Our Global <br /> Community
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {regions.map((region, index) => (
                            <span
                                key={index}
                                className={`px-6 py-2 rounded-full font-medium text-base ${region.color}`}
                            >
                                {region.name}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Right Content - Map */}
                <div className="flex-1 flex justify-center mr-0 lg:mr-5">
                    <img
                        src="/hari/ExpertConnectImages/backgrounds/map.png"
                        alt="World Map"
                        className="w-full max-w-3xl object-contain"
                    />
                </div>
            </section>

            {/* Events Section */}
            <section className="px-8 py-4">
                {/* Heading */}
                <h2 className="text-5xl font-bold text-[#6D3E93] mb-10">
                    Upcoming <br /> Online Events
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden shadow-md"
                        >
                            {/* Image */}
                            <img
                                src={event.img}
                                alt={event.title}
                                className="w-full h-80 object-cover"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-4xl rounded-xl p-4 shadow border-1 border-gray-300">
                                <h3 className="text-sm font-medium text-gray-900">
                                    {event.title}
                                </h3>
                                <p className="text-xs text-gray-800 mt-2">{event.price}</p>
                                <p className="text-xs text-gray-800">
                                    {event.date} <br /> {event.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CommunityAndEvents;
