import React from 'react'
import Chatbot from '../../../Chatbot';

const GovtNavigator = () => {
  return (
    <div>
        <div className="min-h-screen">
            <div className="bg-white py-8">
                <div className="max-w-4xl mx-auto px-6 text-center">
                
                    {/* Main Heading */}
                    <h1
                        className="w-full mt-2 max-w-4xl mx-auto text-6xl md:text-7xl mb-6 leading-[0.9] text-center"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, color: '#6D3E93' }}
                    >
                        Beyond Sentiment<br />
                        <span className="block">And History</span>
                    </h1>
                
                
                    {/* Tab Navigation Buttons */}
                    <div className='text-center w-full'>
                        {/* <TabNavigation /> */}
                    </div>
                
                
                    {/* Search Interface */}
                                
                    <Chatbot />
                                
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default GovtNavigator
