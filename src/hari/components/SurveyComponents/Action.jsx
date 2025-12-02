import React from 'react';

const Action = () => {
    return (
        <section className="w-full px-4 lg:px-10 py-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* LEFT IMAGE */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src="/hari/SurveyImages/Action.jpg"
                        alt="Action"
                        className="w-[80%] lg:w-[85%] h-48 lg:h-70 object-cover rounded-3xl shadow-md"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-3 text-center lg:text-left">

                    {/* TOP LABEL */}
                    <p className="text-xs font-semibold tracking-wider text-blue-500">
                        ANALYZE LIKE A PRO
                    </p>

                    {/* MAIN HEADING */}
                    <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-[#652C90]">
                        Move fast with Action-Ready Insights
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Let AI do the heavy lifting with key insights, patterns, and themes, so you know what to do next.
                    </p>

                    {/* BUTTON */}
                    <button
                        className="flex items-center gap-2 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition mx-auto lg:mx-0 mt-4 mb-6 lg:mb-0"
                        style={{ backgroundColor: "#652C90" }}
                    >
                        Get Started
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Action;
