import React from 'react';
import {
  FaBullseye,
  FaShieldAlt,
  FaChartLine,
  FaChartBar,
  FaComments,
  FaGlobeAsia
} from 'react-icons/fa';

const features = [
  {
    title: "Targeted Reach",
    description:
      "Connect with qualified leads actively searching for business opportunities in your industry and location.",
    icon: <FaBullseye />,
  },
  {
    title: "Proven Results",
    description:
      "Our sellers see an average 300% increase in qualified inquiries within the first 3 months of listing.",
    icon: <FaChartLine />,
  },
  {
    title: "Secure Platform",
    description:
      "Advanced verification systems ensure you connect with genuine buyers and legitimate business inquiries.",
    icon: <FaShieldAlt />,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team helps you optimize your listings and manage inquiries effectively.",
    icon: <FaComments />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track views, inquiries, and conversions with detailed analytics to optimize your listing performance.",
    icon: <FaChartBar />,
  },
  {
    title: "Pan-India Reach",
    description:
      "Access buyers from all major cities and regions across India through our extensive network.",
    icon: <FaGlobeAsia />,
  },
];

const WhyListWithUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why List With Us?</h2>
        <p className="text-gray-600 text-lg mb-16">
          Join thousands of successful businesses that have grown their <br />
          reach and revenue through our platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* icon */}
              <div className="text-orange-500 text-3xl mt-1">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyListWithUs;
