import React from "react";

const Footer = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">

            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-12">
                <div className="lg:w-1/2 w-full">
                    <img src="/hari/LemiciHomeImages/FooterWWD.jpg" alt="Who We Serve" className="rounded-xl shadow-lg w-full h-70 object-cover" />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#652C90] mb-4">Announce yourself to India</h2>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        See how Atlan acceleration insights ensures trusted AI data, and reduces compliance work.
                    </p>
                    <button className="bg-[#6D3E93] text-white px-6 py-2 rounded-xl font-medium">
                        List with us
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Footer;
