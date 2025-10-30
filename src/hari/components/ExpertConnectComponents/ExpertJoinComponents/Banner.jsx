import React from 'react';

const Banner = () => {

    return (
        <>
            {/* Heading */}
            <section className="min-h-fit flex flex-col items-center space-y-4 pt-16 md:pt-24 px-6">
                <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl md:mb-3">
                    Share Your Expertise
                </h1>
                <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl text-[#6D3E93] md:mb-3">
                    Create, Train, Mentor, Network & Consult
                </h1>
            </section>
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
        </>
    );
};

export default Banner;
