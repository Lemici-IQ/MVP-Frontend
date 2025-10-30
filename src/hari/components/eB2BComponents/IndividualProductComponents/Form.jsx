import React from 'react';
import mainImage from '/hari/eB2BImages/images/mainImg.png';
import small1 from '/hari/eB2BImages/images/smallImg1.png';
import small2 from '/hari/eB2BImages/images/smallImg2.png';
import small3 from '/hari/eB2BImages/images/smallImg3.png';

const Form = () => {
    return (
        <div className="px-6 py-10 bg-white">
            <div>
                <h3 className="italic text-gray-700 mb-5">Tell Us Your Requirement</h3>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:px-20">

                    {/* FORM */}
                    <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 lg:mt-5">
                        {/* Product */}
                        <input
                            type="text"
                            placeholder="Select Product"
                            className="border border-gray-300 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* Company */}
                        <input
                            type="text"
                            placeholder="Enter Company"
                            className="border border-gray-300 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Enter E-mail"
                            className="border border-gray-300 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* Quantity */}
                        <input
                            type="text"
                            placeholder="Enter Quantity"
                            className="border border-gray-300 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* Pincode */}
                        <input
                            type="text"
                            placeholder="Enter Pincode"
                            className="border border-gray-300 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* Phone */}
                        <div className="flex">
                            <span className="px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l text-sm">+91</span>
                            <input
                                type="tel"
                                placeholder="Enter Number"
                                className="border border-gray-300 px-3 py-2 rounded-r text-sm w-full focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>
                    </form>

                    {/* IMAGE + SUBMIT */}
                    <div className="flex flex-col items-center gap-4 lg:-mt-5">
                        <div className="relative">
                            {/* Main Image */}
                            <img
                                src={mainImage}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-6 border-[#4A53FA4D]"
                            />
                            {/* Small images around */}
                            <img
                                src={small1}
                                alt="Small"
                                className="absolute -top-2 -left-2 w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src={small2}
                                alt="Small"
                                className="absolute bottom-0 -left-4 w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src={small3}
                                alt="Small"
                                className="absolute top-0 -right-4 w-12 h-12 rounded-full border-2 border-white"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-purple-700 transition cursor-pointer">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;
