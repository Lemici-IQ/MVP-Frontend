import React from 'react';
import { FaUserPlus, FaTags, FaListAlt, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  {
    title: "STEP 1: Register your account",
    description: "Sign up with GST/PAN details and bank account.",
    icon: <FaUserPlus />,
  },
  {
    title: "STEP 2: Select Your Category",
    description: "Choose from Offerings",
    icon: <FaTags />,
  },
  {
    title: "STEP 3: Create Your Listing",
    description: "Add business details, images, and offerings.",
    icon: <FaListAlt />,
  },
  {
    title: "STEP 4: Get Leads & Payments",
    description: "Receive inquiries, close deals, and get paid securely",
    icon: <FaMoneyCheckAlt />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-orange-500 text-white py-10 mb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg mb-12">
          Join thousands of successful businesses that have grown their <br />
          reach and revenue through our platform
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow"
            >
              {/* Icon with orange light circle */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 text-xl">
                {step.icon}
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="font-semibold text-md mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
