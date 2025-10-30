import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 4000, display: '+', label: 'Businesses' },
    { value: 200, display: ' K+', label: 'Investors', highlighted: true },
    { value: 100, display: '+', label: 'Industries' },
    { value: 20, display: 'k+', label: 'Investment size' },
];

const FooterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    return (
        <div className="px-6 py-10 bg-white">
            {/* Stats Section */}
            <div
                ref={ref}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10"
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded ${stat.highlighted
                            ? 'bg-[#FF6105] text-white font-semibold'
                            : 'text-[#FF6105] border-2 border-[#EDEDED] bg-[#FFFDFD]'
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
