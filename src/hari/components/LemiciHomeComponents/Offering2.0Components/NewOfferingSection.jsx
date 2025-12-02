import React from "react";

const offerings = [
    {
        title: "Survey creation",
        subtitle: "End-to-end AI Insights solutions freeing up more time to...",
        img: "/hari/LemiciHomeImages/survey.jpg",
    },
    {
        title: "Association",
        subtitle: "Quantity + Quality Analysis, Automated...",
        img: "/hari/LemiciHomeImages/association.jpg",
    },
    {
        title: "Dashboard",
        subtitle: "Access 10M+ Verified Respondents...",
        img: "/hari/LemiciHomeImages/dashboard.jpg",
    },
];

const NewOfferingSection = () => {
    return (
        <section className="w-full px-6 md:px-12 py-12 max-w-7xl mx-auto">

            {/* Top Cards + Center Text */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

                {/* LEFT CARD */}
                <Card item={offerings[0]} />

                {/* CENTER TEXT */}
                <div className="flex flex-col justify-center px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left">

                        The Next
                        <br className="hidden md:block" />   {/* Laptop only */}

                        Offering
                        <br className="hidden md:block" />   {/* Laptop only */}

                        <span className="text-[#652C90]">
                            Could be
                            <br className="hidden md:block" />   {/* Laptop only */}
                            Yours !
                        </span>

                    </h2>
                </div>

                {/* RIGHT CARDS */}
                <Card item={offerings[1]} />
                <Card item={offerings[2]} />

            </div>

            {/* BIG EARTH BANNER */}
            <div className="mt-10 relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                    src="/hari/LemiciHomeImages/earth.jpg"
                    className="w-full h-full object-cover"
                    alt="Earth"
                />

                <div className="absolute inset-0 rounded-2xl flex flex-col justify-center px-8 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                        Capabilities
                    </h2>

                    <p className="text-white text-base md:text-lg mb-4 max-w-xl">
                        End-to-end AI Insights solutions–freeing up more time<br></br>
                        to focus on what matters most...
                    </p>

                    <button className="text-blue-400 text-sm cursor-pointer w-fit">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewOfferingSection;


const Card = ({ item }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
                src={item.img}
                className="w-full h-60 object-cover rounded-2xl"
                alt={item.title}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 rounded-2xl p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>

                <p className="text-gray-300 text-sm leading-snug mb-1">
                    {item.subtitle}
                </p>

                <button className="text-blue-400 text-sm cursor-pointer w-fit">
                    Learn more
                </button>
            </div>
        </div>
    );
};
