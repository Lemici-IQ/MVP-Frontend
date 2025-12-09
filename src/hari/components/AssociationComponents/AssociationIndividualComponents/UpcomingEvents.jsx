import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';

const EventsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const events = [
        {
            id: 1,
            title: "Tech Innovation Summit 2025",
            date: "December 15, 2025",
            description: "Our flagship annual conference bringing together 1,000+ tech leaders to explore emerging technologies, share insights, and forge partnerships.",
            attendees: "1,000+ Attendees",
            location: "Virtual Event",
            image: "/hari/AssociationImages/UpcomingEvents1.jpg",
        },
        {
            id: 2,
            title: "AI & Machine Learning Workshop",
            date: "November 8, 2025",
            description: "Hands-on workshop covering practical applications of AI and ML in business. Learn from industry experts and get certified.",
            attendees: "500+ Attendees",
            location: "New York, NY",
            image: "/hari/AssociationImages/UpcomingEvents2.jpg",
        },
        {
            id: 3,
            title: "Startup Pitch Competition",
            date: "November 22, 2025",
            description: "Watch innovative startups pitch to top investors. Networking reception follows with opportunities to meet founders and VCs.",
            attendees: "1,250+ Attendees",
            location: "Austin, TX",
            image: "/hari/AssociationImages/UpcomingEvents3.jpg",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    };

    const getVisibleEvents = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(events[(currentSlide + i) % events.length]);
        }
        return visible;
    };

    return (
        <div className="min-h-screen bg-[#F0FAFD] py-6 px-3 md:py-8 md:px-4 m-4 md:m-10 border border-[#01719E] rounded-3xl shadow-md">
            <div className="max-w-7xl mx-auto">

                {/* Header Navigation */}
                <div className="px-2 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-4 text-center md:text-left mb-6">
                    <button className="text-base md:text-lg font-semibold text-[#01719E] underline decoration-2 underline-offset-6">
                        Upcoming Events & Programs
                    </button>
                    <button className="text-base md:text-lg font-semibold text-[#3A363C] hover:text-[#01719E] transition hover:underline decoration-2 underline-offset-6">
                        Leadership Team
                    </button>
                    <button className="text-base md:text-lg font-semibold text-[#3A363C] hover:text-[#01719E] transition hover:underline decoration-2 underline-offset-6">
                        What Our Members Say
                    </button>
                </div>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm md:text-lg mt-4 mb-8 lg:px-10 text-center lg:text-left">
                    Join us at our signature events and educational programs
                </p>

                {/* Carousel */}
                <div className="relative px-2 md:px-12">

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition"
                        aria-label="Previous events"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {getVisibleEvents().map((event, index) => (
                            <div
                                key={`${event.id}-${index}`}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-40 md:h-48">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Date */}
                                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-md">
                                        <span className="text-xs md:text-sm font-medium text-gray-700">
                                            {event.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 line-clamp-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-3">
                                        {event.description}
                                    </p>

                                    {/* Details */}
                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 text-xs md:text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            <span>{event.attendees}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    {/* Link */}
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-700 font-medium text-xs md:text-sm inline-flex items-center"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition"
                        aria-label="Next events"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventsSection;
