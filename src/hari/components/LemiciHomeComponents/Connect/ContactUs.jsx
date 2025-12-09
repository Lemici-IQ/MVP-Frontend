import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Contactus = () => {
    return (
        <section className="w-full px-4 lg:px-10 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "#652C90" }}>
                        Contact Us
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        We'd love to hear from you! Whether you have questions, feedback, or would like
                        to explore how we can work together, our team is here to help. Our support staff
                        is available Monday to Friday to assist with queries, collaborations, or service-related
                        information. We truly value your input and continuously work to enhance our services
                        based on your suggestions.
                    </p>

                    <button
                        className="flex items-center gap-2 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
                        style={{ backgroundColor: "#652C90" }}
                    >
                        Discover more
                        <FaArrowUpRightFromSquare className="text-sm" />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-end lg:mr-8">
                    <img
                        src="/hari/LemiciHomeImages/contactus.jpg"
                        alt="About Us"
                        className="w-[90%] lg:w-full md:h-60 object-cover rounded-2xl shadow-sm"
                    />
                </div>

            </div>
        </section>
    );
};

export default Contactus;
