import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 4000, display: ' +', label: 'Businesses' },
    { value: 200, display: ' K+', label: 'Investors', highlighted: true },
    { value: 100, display: '+', label: 'Industries' },
    { value: 20, display: 'k+', label: 'Investments' },
];

const FooterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    return (
        <div className="px-6 bg-white">
            {/* Back to Top Button */}
            <div className="flex justify-end mb-5">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#FFFDFD] border-2 border-[#EDEDED] px-4 py-2 rounded-lg text-black text-sm hover:bg-[#EDEDED] transition cursor-pointer"
                >
                    Back to Top ↑
                </button>
            </div>

            <h3 className='mb-4'><i>Why you should choose LeMiCi</i></h3>

            {/* Stats Section */}
            <div
                ref={ref}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8"
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded ${stat.highlighted
                            ? 'bg-[#6D3E93] text-white font-semibold'
                            : 'text-[#6D3E93] border-2 border-[#EDEDED] bg-[#FFFDFD]'
                            }`}
                    >
                        <p className="text-2xl">
                            {inView ? (
                                <CountUp
                                    end={stat.value}
                                    duration={3}
                                    separator=","
                                    key={`${idx}-${inView}`}
                                />
                            ) : (
                                0
                            )}
                            {stat.display}
                        </p>
                        <p
                            className={`text-sm mt-1 ${stat.highlighted ? '' : 'text-black opacity-60'
                                }`}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FooterSection;
