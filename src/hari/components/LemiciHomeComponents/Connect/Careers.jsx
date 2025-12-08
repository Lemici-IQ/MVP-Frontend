import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Careers = () => {
    return (
        <section className="w-full px-4 lg:px-10 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center">

                {/* LEFT IMAGE — show second on mobile */}
                <div className="flex justify-center lg:justify-end lg:mr-8 order-2 lg:order-1">
                    <img
                        src="/hari/LemiciHomeImages/careers.jpg"
                        alt="About Us"
                        className="w-[90%] lg:w-full md:h-60 object-cover rounded-2xl shadow-sm"
                    />
                </div>

                {/* RIGHT CONTENT — show first on mobile */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "#652C90" }}>
                        Careers
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6 mr-6">
                        At Lemici, we believe our people are our greatest strength. We’re always looking
                        for passionate, curious, and driven individuals to join our team. Whether you’re
                        just starting your journey or bringing years of expertise, we offer opportunities
                        to grow, learn, and make an impact. Together, we strive to create an inclusive
                        workplace where ideas thrive and innovation leads the way.
                    </p>

                    <button
                        className="flex items-center gap-2 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
                        style={{ backgroundColor: "#652C90" }}
                    >
                        Discover more
                        <FaArrowUpRightFromSquare className="text-sm" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Careers;
