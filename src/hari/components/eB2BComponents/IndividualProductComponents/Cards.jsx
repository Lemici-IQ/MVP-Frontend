import React from 'react';
import { Bats } from '../../../constants';
import { FaStar, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <>  
            {/* Cards */}
            <div className="sm:block flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
                    {Bats.map((Bat, index) => (
                        <div
                            key={Bat.id}
                            className="flex flex-col justify-between min-h-[450px] rounded-2xl shadow-md p-3 w-[300px] bg-[#FFFDFD] border border-[#EDEDED]"
                        >
                            <div className="flex-1 relative">
                                {index < 3 && (
                                    <div className="absolute top-2 left-2 bg-[#FFCE31] text-black text-[15px] font-semibold px-4 py-1 rounded-full">
                                        Popular
                                    </div>
                                )}

                                <img
                                    src={Bat.image}
                                    alt={Bat.itemName}
                                    className="rounded-xl w-full h-[230px] object-cover"
                                />

                                <div className="flex items-center justify-between mt-2">
                                    <h2 className="text-lg font-semibold">{Bat.itemName}</h2>
                                    <p className="text-lg font-semibold">
                                        ₹{Bat.price.toLocaleString()}
                                    </p>
                                </div>

                                <p className="text-gray-500 text-sm">Cricket Bat</p>

                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex items-center text-yellow-500 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                        <span className="text-gray-600 ml-1">{Bat.reviews}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-[#EDEDED] rounded-full p-1 cursor-pointer">
                                            <FaMinus size={12} />
                                        </button>
                                        <span className="text-sm">1</span>
                                        <button className="bg-[#EDEDED] rounded-full p-1 cursor-pointer">
                                            <FaPlus size={12} />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mt-2">
                                    <strong>Manufacturer</strong>
                                    <br />
                                    {Bat.manufacturer}
                                </p>
                            </div>

                            {Bat.itemName === "MRF" ? (
                                <Link to="/single-product">
                                    <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white rounded-full w-full py-2 hover:bg-[#FC0C10F2] cursor-pointer">
                                        <FaShoppingBag />
                                        Contact supplier
                                    </button>
                                </Link>
                            ) : (
                                <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white rounded-full w-full py-2 hover:bg-[#FC0C10F2] cursor-pointer">
                                    <FaShoppingBag />
                                    Contact supplier
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* See More Button */}
            <div className="flex justify-end m-5">
                <button className="text-blue-600 text-sm cursor-pointer hover:underline hover:font-medium">
                    See More →
                </button>
            </div>
        </>
    );
};

export default ProductCard;
