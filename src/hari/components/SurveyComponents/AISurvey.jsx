import React from 'react';

const AISurvey = () => {
    return (
        <>
            <section className="w-full px-4 lg:px-10 py-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-3 text-center lg:text-left">

                        {/* TOP LABEL */}
                        <p className="text-xs font-semibold tracking-wider text-gray-400">
                            AUTOMATE LIKE A PRO
                        </p>

                        {/* MAIN HEADING */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-[#652C90]">
                            AI-powered surveys that engage your audience. Insights that drive growth.
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Create beautiful, engaging surveys and forms that inspire powerful feedback
                            and inform smarter business decisions.
                        </p>

                        {/* BUTTON */}
                        <button
                            className="flex items-center gap-2 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition mx-auto lg:mx-0 mt-4 mb-6 lg:mb-0"
                            style={{ backgroundColor: "#652C90" }}
                        >
                            Get Started
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/hari/SurveyImages/AISurvey.jpg"
                            alt="AISurvey"
                            className="w-[80%] lg:w-[85%] h-48 lg:h-70 object-cover rounded-3xl shadow-md"
                        />
                    </div>

                </div>
            </section>
            <section className="w-full py-10 flex flex-col items-center">

                {/* LOGO STRIP IMAGE */}
                <img
                    src="/hari/SurveyImages/brandlogos.png"   
                    alt="Trusted Brands"
                    className="w-full max-w-3xl mx-auto object-contain"
                />

                {/* TEXT BELOW */}
                <p className="text-center text-gray-600 mt-4 text-sm md:text-base">
                    The world's most popular survey platform used by 260K+ organizations worldwide
                </p>
            </section>
        </>
    );
};

export default AISurvey;
