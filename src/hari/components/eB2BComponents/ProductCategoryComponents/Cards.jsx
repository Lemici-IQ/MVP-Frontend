import React from 'react';
import { productCards } from '../../../constants';
import { FaStar, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className="sm:block flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {productCards.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col justify-between min-h-[450px] rounded-2xl shadow-md p-3 w-[300px] bg-[#FFFDFD] border border-[#EDEDED]"
                    >
                        <div className="flex-1">
                            <img
                                src={product.image}
                                alt={product.itemName}
                                className="rounded-xl w-full h-[200px] object-cover"
                            />

                            <div className='flex items-center justify-between mt-2'>
                                <h2 className="text-lg font-semibold">{product.itemName}</h2>
                                <p className="text-lg font-semibold">
                                    ₹{product.price.toLocaleString()}
                                </p>
                            </div>

                            <p className="text-gray-500 text-sm">{product.tagline}</p>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center text-yellow-500 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <span className="text-gray-600 ml-1">{product.reviews}</span>
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
                                <strong>Description</strong>
                                <br />
                                {product.description}
                            </p>
                        </div>

                        {product.itemName === "Cricket Bat" ? (
                            <Link to="/cricket-bat">
                                <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white rounded-full w-full py-2 hover:bg-[#FC0C10F2] cursor-pointer">
                                    <FaShoppingBag />
                                    Buy Now
                                </button>
                            </Link>
                        ) : (
                            <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white rounded-full w-full py-2 hover:bg-[#FC0C10F2] cursor-pointer">
                                <FaShoppingBag />
                                Buy Now
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
