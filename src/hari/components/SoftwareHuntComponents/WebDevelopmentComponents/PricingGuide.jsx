const PricingGuide = () => {
    return (
        <section className="w-full px-4 py-10">
            <div
                className="w-full rounded-2xl border-2 border-[#EDEDED] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-between p-6 md:p-12 min-h-[550px]"
                style={{
                    backgroundImage: `url('/hari/SoftwareHuntImages/PricingGuideBanner.jpg')`,
                }}
            >
                {/* LEFT SIDE */}
                <div className="max-w-md md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        GET <br />
                        PRICING <br />
                        GUIDE 2025
                    </h2>

                    <p className="text-gray-700 mt-4 text-sm md:text-base">
                        Get custom pricing for an
                        {" "}
                        <br className="md:hidden" />
                         ideal software suitable your
                        business or practice
                    </p>

                    <button className="mt-6 bg-[#14A79D] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-600 transition">
                        Hire Guide
                    </button>
                </div>

                {/* Right placeholder - only desktop */}
                <div className="hidden md:block w-1/2"></div>
            </div>
        </section>
    );
};

export default PricingGuide;
