import React from 'react';


const Robotgirl = () => {
    return (
        <>
            <div className="bg-[#071B2E] text-white rounded-[30px] overflow-hidden relative">
                {/* Background image */}
                <img
                    src="/abhinay/images/sana.png"
                    alt="chitti"
                    className="w-full h-full object-cover absolute inset-0"
                />

                {/* Overlay content */}
                <div className="relative z-10 py-8 px-12 flex min-h-[400px]">
                    <div className="md:w-1/2 mb-10 md:mb-0">

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4"
                            style={{ fontFamily: 'Space Grotesk' }}
                        >
                            Innovate Smarter,<br />not Harder with AI
                        </h1>
                        <div>
                            <p className="pt-4 text-[#4A53FA] text-3xl font-semibold">Raman AI</p>
                            <p className="text-base text-white/80 text-justify max-w-[200px] mb-4">
                                One clear view of your Business brought together in one seamless platform.
                            </p>
                            
                            <button className="bg-white text-black font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all duration-200">
                                Learn More
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#4A53FA] rounded-full flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.21307 11.4489L0.913352 10.142L8.78977 2.25142H2.75284L2.76705 0.454545H11.8935V9.58807H10.0824L10.0966 3.55114L2.21307 11.4489Z" fill="#FFFDFD" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Robotgirl;