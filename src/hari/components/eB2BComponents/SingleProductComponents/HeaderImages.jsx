import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const images = ["/hari/eB2BImages/images/headerImg1.jpg", "/hari/eB2BImages/images/headerImg2.png", "/hari/eB2BImages/images/headerImg3.png", "/hari/eB2BImages/images/headerImg4.png", "/hari/eB2BImages/images/headerImg5.png"]

const Header = () => {
    return (
        <section className="p-4">
            {/* Back Button */}
            <FaArrowLeft
                className="text-base sm:text-lg cursor-pointer"
                onClick={() => window.history.back()}  
                title="Go back"
            />
            {/* Moving Images */}
            <div className="w-full overflow-hidden pt-4">
                <div className="flex items-center animate-infinite-scroll cursor-pointer">
                    {[...images, ...images, ...images].map((src, index) => (
                        <img
                            key={index}
                            src={src || "/placeholder.svg"}
                            alt="Cricket Bat"
                            className="h-56 w-auto mx-2 sm:mx-3 md:mx-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            {/* See More Button */}
            <div className="flex justify-end m-5">
                <button className="text-blue-600 text-sm cursor-pointer hover:underline hover:font-medium">
                    Swipe Right →
                </button>
            </div>
        </section>

    )
}

export default Header
