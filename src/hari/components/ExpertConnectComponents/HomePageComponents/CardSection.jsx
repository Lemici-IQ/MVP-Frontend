import React from "react";
import { Link } from 'react-router-dom';

const CardSection = () => {
    const cards = [
        {
            image:
                "/hari/ExpertConnectImages/cards/card1.jpg",
            title: "Instant Video Consultation",
            subtitle: "Connect within 60 sec.",
        },
        {
            image:
                "/hari/ExpertConnectImages/cards/card2.jpg",
            title: "Find Experts Near You",
            subtitle: "Confirmed Meetings",
        },
        {
            image:
                "/hari/ExpertConnectImages/cards/card3.jpg",
            title: "Be An Expert",
            subtitle: "Turn your knowledge into networking workshop.",
        },
    ];

    return (
        <>
            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 py-6 px-10">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg"
                    >
                        {/* Background Image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-90 object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-25 left-6 right-4 text-white">
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="text-sm">{card.subtitle}</p>
                        </div>

                        {/* Profile Avatars */}
                        <div className="absolute bottom-15 left-6 flex -space-x-2">
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src="/hari/ExpertConnectImages/people/person1.jpg"
                                alt="profile"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src="/hari/ExpertConnectImages/people/person2.jpg"
                                alt="profile"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src="/hari/ExpertConnectImages/people/person3.jpg"
                                alt="profile"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src="/hari/ExpertConnectImages/people/person4.jpg"
                                alt="profile"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src="/hari/ExpertConnectImages/people/person5.jpg"
                                alt="profile"
                            />
                        </div>

                        {/* Button */}
                        <div className="absolute bottom-3 left-4 right-4">
                            <Link
                                to="/expert-join"
                                className="block text-center w-full py-2 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
                            >
                                Connect
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* Heading */}
            <div className="py-6 px-8">
                <h1 className="text-3xl lg:text-7xl font-semibold">Best-in-Class</h1>
                <h1 className="text-3xl lg:text-7xl font-semibold">Resources and Support</h1>
                <h1 className="text-3xl lg:text-7xl font-semibold text-[#6D3E93]">at your Fingertips</h1>
            </div>
        </>

    );
};

export default CardSection;
