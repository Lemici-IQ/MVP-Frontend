import React from 'react';

const Analytics = () => {

    return (
        <>
            <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-8">

                <div className="max-w-4xl mx-auto text-center">
                    <h1 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '40px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                    }}>
                        The Confidence in Knowing
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                    }} className="text-gray-500 max-w-2xl mx-auto mt-4 text-justify">
                        LeMiCi Data & Analytics to understand  markets and competitor performance.
                        Our detailed tech market datasets empower insights to keep you ahead of the
                        curve, making informed decisions and driving  innovation for your customers.
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 max-w-5xl mx-auto'>
                    <div className='text-center'>
                        <div className='flex justify-center mb-4'>
                            <img src="/abhinay/images/database.svg" alt="Database icon" className='w-12 h-12' />
                        </div>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-800 mb-2'>7B+</h1>
                        <p className='text-gray-600 font-normal text-sm md:text-base'>Data Points</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-4'>
                            <img src="/abhinay/images/mp.svg" alt="Technology icon" className='w-12 h-12' />
                        </div>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-800 mb-2'>115+</h1>
                        <p className='text-gray-600 font-normal text-sm md:text-base'>Technologies</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-4'>
                            <img src="/abhinay/images/Vector.png" alt="Companies icon" className='w-12 h-12' />
                        </div>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-800 mb-2'>550K+</h1>
                        <p className='text-gray-600 font-normal text-sm md:text-base'>Companies</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-4'>
                            <img src="/abhinay/images/Group (3).svg" alt="Contracts icon" className='w-12 h-12' />
                        </div>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-800 mb-2'>80K+</h1>
                        <p className='text-gray-600 font-normal text-sm md:text-base'>Contracts</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Analytics