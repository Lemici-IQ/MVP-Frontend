import React from 'react';

const FeatureSection = () => {

    const cardsData = [
        {
            tag: "Experience",
            tagColor: "bg-purple-100 text-purple-600",
            title: "Startups",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
        {
            tag: "Connect",
            tagColor: "bg-blue-100 text-blue-600",
            title: "Community",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
        {
            tag: "Learn",
            tagColor: "bg-pink-100 text-pink-600",
            title: "Business Consulting",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
        {
            tag: "Learn",
            tagColor: "bg-red-100 text-red-600",
            title: "Collaborate",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
        {
            tag: "Connect",
            tagColor: "bg-green-100 text-green-600",
            title: "Community",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
        {
            tag: "Experience",
            tagColor: "bg-yellow-100 text-yellow-600",
            title: "Trainings",
            description:
                "Startups are young, innovative companies focused on developing unique products or services to solve real-world problems.",
        },
    ];

    return (
        <>
            {/* Banner */}
            <section
                className="m-6 min-h-[30vh] sm:min-h-[50vh] bg-cover bg-center justify-center rounded-xl px-6 py-12 flex flex-col text-white"
                style={{
                    backgroundImage: 'url(/hari/ExpertConnectImages/backgrounds/featurebanner.jpg)',
                }}
            >
                <h1 className='text-lg lg:text-3xl font-bold mb-2'>See Why</h1>
                <h1 className='text-lg lg:text-3xl font-bold mb-2'>340K+ Entrepreneurs like</h1>
                <h1 className='text-lg lg:text-3xl font-bold mb-4'>you choose LeMiCi to grow their Business</h1>

                <div className="inline-block">
                    <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                        Get Invited
                    </button>
                </div>
            </section>

            {/* Cards Section */}
            <section className="px-6 py-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start"
                        >
                            {/* Tag */}
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium mb-4 ${card.tagColor}`}
                            >
                                {card.tag}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {card.description}
                            </p>

                            {/* Button */}
                            <button className="bg-black text-white py-2 px-5 rounded font-medium hover:bg-gray-600 transition cursor-pointer hover:bg-gray-800">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FeatureSection;
