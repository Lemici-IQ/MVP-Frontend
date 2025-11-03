import React from 'react';

import Pin from "../assets/GovNavigator/Vector3.png";
import Star from "../assets/GovNavigator/Star2.png";
import Chart from "../assets/GovNavigator/Vector4.png";
import India from "../assets/GovNavigator/india.jpg";

// --- Icon components (as defined in the previous response) ---
const CheckmarkIcon = () => ( <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> );
const LocationIcon = () => ( <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.518 23.518 0 0112 15c-3.248 0-6.371-.884-9-2.745M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6l2 2h4a2 2 0 012 2v10a2 2 0 01-2 2z"></path></svg> );
const MinistryIcon = () => ( <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2H5a2 2 0 00-2 2v11a2 2 0 002 2h2v-5a2 2 0 012-2h6a2 2 0 012 2v5z"></path></svg> );
const MapPinIcon = () => ( <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8.997 8.997 0 0112 21a8.997 8.997 0 01-5.657-2.343m11.314 0A8.997 8.997 0 0020 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.97 4.03 9 9 9a8.997 8.997 0 005.657-2.343"></path></svg> );
const StarIcon = () => ( <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg> );
const ClockIcon = () => ( <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> );


export default function SchemeCard({ scheme }) {
    // Determine which tags to display and how many are left over
    const tagsToShow = scheme.tags.slice(0, 4);
    const remainingTags = scheme.tags.length - tagsToShow.length;

    return (
        <div className="max-w-md mx-auto bg-gradient-to-b from-[#093FB4] via-white to-white bg-[length:100%_100%] bg-no-repeat rounded-xl shadow-lg overflow-hidden p-6 border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-black">{scheme.country}</span>
                <span className="flex items-center text-black text-xs ">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1 animate-pulse"></span> {scheme.status}
                </span>
            </div>

            {/* Scheme Title and Details */}
            <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 p-1">
                    <img src={India} alt={scheme.ministry} className="w-full h-full object-contain"/>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        {scheme.title}
                        <span className="ml-2 text-sm text-gray-500 font-normal">{scheme.type}</span>
                        {scheme.isVerified && <CheckmarkIcon className="ml-1 text-blue-500" />}
                    </h2>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                        <LocationIcon /> <span className="mr-3 ml-1">{scheme.location}</span>
                        <MinistryIcon /> <span className="ml-1">{scheme.ministry}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-5 leading-relaxed">{scheme.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tagsToShow.map(tag => (
                    <span key={tag} className="bg-[#093FB4] text-white px-5 py-1 rounded-full text-sm font-medium">{tag}</span>
                ))}
                {remainingTags > 0 && (
                    <span className="bg-[#093FB4] text-white px-5 py-1 rounded-full text-sm font-medium">+{remainingTags}</span>
                )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
                {scheme.stats.map(stat => (
                    <div key={stat.label}>
                        <p className="text-xl font-bold text-black">{stat.value}</p>
                        <p className="text-xs font-semibold text-[#093FB4]">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="flex items-center justify-between flex-row   mb-6 mx-8">
                <div className="flex flex-col gap-4   items-left text-gray-700 text-sm">
                    <div className="flex gap-1 items-center">
                        <img src={Pin} alt="" /> {scheme.info.statesCovered}
                    </div>
                    <div className="flex gap-1 items-center">
                        <img src={Chart} alt="" /> {scheme.info.grantAmount}
                    </div>
                    
                    
                
                    
                </div>
                <div className="flex flex-col gap-4  items-left text-gray-700 text-sm">
                    
                    <div className="flex gap-1 items-center">
                        <img src={Star} alt=""  /> {scheme.info.acceptanceRate}
                    </div>
                    <div className="flex gap-1 items-center">
                        <img src={Chart} alt="" /> {scheme.info.applicationMode}
                    </div>
                    
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {scheme.actionButtons.map(buttonText => (
                    <button key={buttonText} className="px-4 py-2 border border-gray-300 rounded-full text-[10px] font-[Inter] font-md font-[500] text-gray-700 hover:bg-gray-50">
                        {buttonText} ?
                    </button>
                ))}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-center pt-4">
                <button className="text-gray-600 text-[10px] font-[Inter] font-semibold hover:underline">Schedule consultation</button>
                <button className="text-gray-600 text-[10px] font-[Inter] font-semibold hover:underline">Check eligibility</button>
                <button className="text-[#268BFF] px-5 py-2 rounded-lg text-[16px] font-semibold hover:text-blue-700 transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
    );
}