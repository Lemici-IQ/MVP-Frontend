import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="w-full px-4 lg:px-10 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#652C90" }}>
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Lemici, we are driven by a clear mission and strong values that guide 
            everything we do. Our team is built on collaboration, creativity, and 
            dedication to delivering meaningful solutions. We believe in building 
            trust, fostering innovation, and creating impact for our clients and 
            communities. Discover who we are, what we stand for, and why choosing 
            Lemici means choosing a partner committed to your success.
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
            src="/hari/LemiciHomeImages/aboutus.jpg"
            alt="About Us"
            className="w-[90%] lg:w-full md:h-60 object-cover rounded-2xl shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
