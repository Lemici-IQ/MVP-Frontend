import React from "react";
import { 
  FaBullhorn,       
  FaPaintBrush,     
  FaBuilding,      
  FaDollarSign,      
  FaRocket,          
  FaStore,           
  FaHome,          
  FaComments       
} from "react-icons/fa";

const services = [
    { icon: <FaBullhorn className="text-yellow-500 text-3xl" />, title: "Marketing" },
    { icon: <FaPaintBrush className="text-blue-500 text-3xl" />, title: "Creatives" },
    { icon: <FaBuilding className="text-green-500 text-3xl" />, title: "Agencies" },
    { icon: <FaDollarSign className="text-teal-500 text-3xl" />, title: "Sales" },
    { icon: <FaRocket className="text-orange-500 text-3xl" />, title: "Startups" },
    { icon: <FaStore className="text-black-500 text-3xl" />, title: "Small & Medium Business" },
    { icon: <FaHome className="text-yellow-700 text-3xl" />, title: "Real Estate" },
    { icon: <FaComments className="text-green-500 text-3xl" />, title: "Communications" },
];

const BusinessSolution = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-12">
                <div className="lg:w-1/2 w-full">
                    <img src="/hari/LemiciHomeImages/whoWeServe.jpg" alt="Who We Serve" className="rounded-xl shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#652C90] mb-4">Business Solution</h2>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        We provide AI-powered tools, market insights, and data intelligence that help businesses streamline decisions, discover opportunities, and stay ahead of the competition. From market research to strategic planning, our solutions are built to drive growth and simplify complex challenges.
                    </p>
                    <a href="#" className="text-blue-500 font-medium hover:underline text-sm sm:text-base">Learn more</a>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-white gap-3 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow text-center"
                    >
                        {service.icon}
                        <p className="text-gray-800 font-medium text-sm sm:text-base">{service.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusinessSolution;
