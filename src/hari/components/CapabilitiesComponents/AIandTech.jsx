import React from 'react';

const AIandTech = () => {
    return (
        <section className="w-full px-4 lg:px-10 py-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-3 text-center lg:text-left">

                    {/* TOP LABEL */}
                    <p className="text-xs font-semibold tracking-wider text-[#615E63]">
                        Capabilities Overview
                    </p>

                    {/* MAIN HEADING */}
                    <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-[#652C90]">
                        AI and Technology Consulting
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-base leading-relaxed">
                        Learn how McKinsey’s AI and Technology consulting is helping clients to outcompete and deliver value at scale through the latest trends in tech.
                    </p>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/hari/CapabilitiesImages/AIandTech.jpg"
                        alt="Audience"
                        className="w-[80%] lg:w-[85%] h-48 lg:h-70 object-cover rounded-3xl shadow-md"
                    />
                </div>

            </div>
        </section>
    );
};

export default AIandTech;
