import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Heart, Share2, ArrowLeft } from "lucide-react";

export default function Top1() {
  const navigate = useNavigate();
  const images = [
    "/abhinay/franchise/single/kt1.jpg",
    "/abhinay/franchise/single/kt2.jpg",
    // add more if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="p-0 sm:p-6 max-w-6xl mx-auto">
      {/* Full-width Carousel */}
      <div className="relative w-full rounded-none sm:rounded-xl overflow-hidden">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="absolute z-10 top-3 left-3 bg-black/50 backdrop-blur text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/80"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <img
          src={images[currentIndex]}
          alt="Kathi Junction"
          className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover"
        />

        {/* Left/Right buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 backdrop-blur text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-black/60"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 backdrop-blur text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === currentIndex ? 'bg-white' : 'bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content grid below carousel */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left section with details */}
        <div className="lg:col-span-2">

        {/* Title + Actions */}
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-bold">Kathi Junction</h2>
          <span className="text-blue-500 text-lg">✔</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          Kathi Junction brings the golden opportunity to start your own
          business in the hospitality sector. Known for its flavorful
          street-style delicacies and refreshing drinks, Kathi Junction serves
          up a mouthwatering experience with every bite.{" "}
          <a href="#" className="text-blue-600">
            Read more...
          </a>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            Meerut, U.P, India
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            8+ Yrs
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            ⭐ 4.9
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            1990
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Trusted seller
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Company profile ▶
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-50">
            <Share2 size={18} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-50">
            <Heart size={18} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl text-gray-600">
          <FaYoutube className="hover:text-red-600" />
          <FaFacebook className="hover:text-blue-600" />
          <FaInstagram className="hover:text-pink-500" />
          <FaTwitter className="hover:text-blue-400" />
          <FaPinterest className="hover:text-red-500" />
        </div>
        </div>

        {/* Right Profile Card */}
        <div className="bg-white border rounded-lg shadow p-4 flex flex-col items-center lg:sticky lg:top-24 h-fit">
        <img
          src="/abhinay/franchise/single/nat.jpg"
          alt="Consultant"
          className="w-24 h-24 rounded-full object-cover mb-3"
        />
        <h3 className="font-semibold flex items-center gap-1">
          Natasha Romanoff <span className="text-blue-500">✔</span>
        </h3>
        <p className="text-gray-500 text-sm text-center mb-3">
          Hi I’m Consultant helping you make smarter, strategic decisions for
          lasting success.
        </p>
        <div className="flex justify-between w-full text-sm mb-3">
          <span>⭐ 4.7 Rating</span>
          <span>Expert</span>
          <span>Free Rate</span>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg w-full">
          Get in touch
        </button>
        </div>
      </div>
    </div>
  );
}
