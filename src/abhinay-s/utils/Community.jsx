import React, { useState } from "react";
import Footernew from '@/abhinay-s/components/Footernew';

const Community = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-[86rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2 pt-4 lg:pt-10">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              Real-world{" "}
              <span className="bg-yellow-300 rounded-2xl pr-2 py-[2px] shadow-lg">
                peer
              </span>{" "}
              connections, conversations, and actionable advice
            </h1>
            <button className="mt-4 lg:mt-7 bg-[#633886] rounded-2xl px-5 sm:px-7 py-2 sm:py-3 text-white text-sm sm:text-base">
              Join for Free
            </button>
          </div>
          <div className="w-full lg:w-1/2 rounded-lg">
            <img
              src="/abhinay/allpeople.png"
              alt=""
              className="w-full p-2 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full mt-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white text-gray-900 p-4 sm:p-6 lg:p-8 font-sans">
          {/* Header Section */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get fast answers on your mission-critical priorities
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-6 lg:mb-10">
            Join our community of over 100,000 members. Ask questions and launch
            polls to get fast answers from your
            <span className="bg-yellow-300 px-1 mx-1">peer</span> business.
          </p>

          {/* Current Peer Activity Section */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-8">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 flex flex-wrap items-center">
                Current
                <span className="bg-yellow-300 px-2 mx-2 rounded">Peer</span>
                Activity:
              </h2>

              <div className="flex items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#633886] mt-2">
                275
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-700 text-sm sm:text-base">
                <span>Community Members</span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">ACTIVE NOW</span>
              </div>
            </div>

            {/* Most Recent Contribution Box */}
            <div className="bg-[#BCA6CD] text-gray-800 p-4 sm:p-5 rounded-xl w-full md:w-72 shadow-sm">
              <p className="text-sm font-semibold mb-3 uppercase">
                Most Recent Contribution
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-purple-700 font-bold">
                  <img src="abhinay/gg_user.png" alt="" />
                </div>
                <div>
                  <p className="font-semibold">CFO</p>
                  <p className="text-sm text-gray-700">
                    voted on a poll a few seconds ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discover • Ask • Connect Section */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Discover Card */}
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-4 sm:p-6 relative">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 font-semibold text-sm sm:text-base lg:text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#633886] rounded z-10 whitespace-nowrap">
                <img src="/abhinay/firstone.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                Discover
              </div>
              <p className="text-gray-600 text-xs sm:text-sm my-6 sm:my-8">
                Get instant access to peer-driven actionable insights
              </p>
            </div>

            {/* Ask Card */}
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-4 sm:p-6 relative">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 font-semibold text-sm sm:text-base lg:text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#633886] rounded z-10 whitespace-nowrap">
                <img src="/abhinay/midone.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                Ask
              </div>
              <p className="text-gray-600 text-xs sm:text-sm my-6 sm:my-8">
                Get instant access to peer-driven actionable insights
              </p>
            </div>

            {/* Connect Card */}
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-4 sm:p-6 relative">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 font-semibold text-sm sm:text-base lg:text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#633886] rounded z-10 whitespace-nowrap">
                <img src="/abhinay/lastone.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                Connect
              </div>
              <p className="text-gray-600 text-xs sm:text-sm my-6 sm:my-8">
                Get instant access to peer-driven actionable insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 sm:mt-32 lg:mt-48 mb-32 sm:mb-40 lg:mb-48 w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[40vh] sm:h-[45vh] lg:h-[50vh]">
        <img
          className="w-full object-cover object-top h-full"
          src="/abhinay/hyper.jpg"
          alt=""
        />
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl lg:text-5xl font-bold text-center px-4">
          Our Numbers Tell the Story
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-around items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-4 sm:px-8 lg:px-20 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg flex items-center justify-center flex-col w-full sm:w-auto min-w-[250px] sm:min-w-0">
            <img src="/abhinay/ran1.png" alt="" className="mx-auto mb-3 lg:mb-4 w-12 h-12 sm:w-auto sm:h-auto" />
            <h1 className="text-[#633886] text-2xl sm:text-3xl font-bold text-center">
              150,000+
            </h1>
            <p className="text-center text-gray-700 text-sm sm:text-base">New Connections Made</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg flex items-center justify-center flex-col w-full sm:w-auto min-w-[250px] sm:min-w-0">
            <img src="/abhinay/ran2.png" alt="" className="mx-auto mb-3 lg:mb-4 w-12 h-12 sm:w-auto sm:h-auto" />
            <h1 className="text-[#633886] text-2xl sm:text-3xl font-bold text-center">
              100,000+
            </h1>
            <p className="text-center text-gray-700 text-sm sm:text-base">
              Active Community Members
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg flex items-center justify-center flex-col w-full sm:w-auto min-w-[250px] sm:min-w-0">
            <img src="/abhinay/ran3.png" alt="" className="mx-auto mb-3 lg:mb-4 w-12 h-12 sm:w-auto sm:h-auto" />
            <h1 className="text-[#633886] text-2xl sm:text-3xl font-bold text-center">
              30,000+
            </h1>
            <p className="text-center text-gray-700 text-sm sm:text-base">
              Discussions, Polls, and <br />
              Packaged Insights
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white font-sans px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
        {/* Heading + Search */}
        <div className="flex flex-col lg:flex-row mb-8 lg:mb-10 w-full gap-6 lg:gap-0 lg:justify-center">
          <h2 className="w-full lg:w-1/2 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4D2C68] max-w-lg leading-snug">
            See What Businesss Leaders Are Discussing
          </h2>

          {/* Search Bar */}
          <div className="w-full lg:w-1/2 lg:p-2">
            <div className="flex items-center gap-3 border border-[#2E1A3E] rounded-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 shadow-sm bg-white">
              <img src="abhinay/serch.png" alt="Search icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              <input
                type="text"
                placeholder="Search for insights, advice, and more"
                className="w-full outline-none text-xs sm:text-sm text-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="bg-white text-[#2E1A3E] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 font-sans px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
          <div className="w-full lg:w-1/3">
            <h2 className="mb-4 sm:mb-6 lg:mb-8 font-semibold">POLL</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              CFOs and finance leaders, what actions are you considering to
              address the talent shortage?
            </p>
            <div className="flex justify-between text-xs sm:text-sm">
              <span>1.9k views</span>
              <span>24 participants</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="mb-4 sm:mb-6 lg:mb-8 font-semibold">DISCUSSION</h2>
            <p className="mb-4 sm:mb-8 lg:mb-16 text-sm sm:text-base">
              How are other marketing teams managing their content needs? I have a content manager but keeping up with blog posts, video content, micro video content, etc. is proving to be a challenge. How are other leaders handling this?
            </p>
            <div className="flex text-xs sm:text-sm">
              <span>3,4k views</span>
              
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="mb-4 sm:mb-6 lg:mb-8 font-semibold">POLL</h2>
            <p className="mb-4 sm:mb-8 lg:mb-16 text-sm sm:text-base">
             What is the biggest roadblock to business adoption of generative AI?
            </p>
            <div className="flex justify-between text-xs sm:text-sm">
              <span>142 views</span>
              <span>5 participants</span>
            </div>
          </div>
        </div>

        {/* Explore Trending Topics */}
        <div className="max-w-[75rem] mx-auto px-4 sm:px-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Explore Trending Topics
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
            <span className="bg-[#633886] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer">
              Disruptive & Emerging Technologies
            </span>
            <span className="bg-[#633886] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer">
              Management Tools
            </span>
            <span className="bg-[#633886] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer">
              People & Leadership
            </span>
            <span className="bg-[#633886] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer">
              Process Management
            </span>
          </div>
          <button className="text-[#0E37B4] font-medium text-xs sm:text-sm hover:underline">
            View All Topics
          </button>
        </div>
      </div>
    
    
   
    <div className="w-full bg-white font-sans px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
      {/* Trending One-Minute Insights */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4D2C68] mb-2">
        Trending One-Minute Insights
      </h2>

      <p className="text-gray-600 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base max-w-3xl">
        Quick, digestible reports of benchmark surveys designed to be read between meetings
      </p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-24">
        {/* Card 1 */}
        <div className="border-gray-400 rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
          <img
            src="/abhinay/abaa.jpg" // replace
            alt=""
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="font-medium text-gray-900 mb-3 text-sm md:text-base flex-grow">
              Applications Of Generative AI In The Hiring Process
            </p>
            <button className="text-[#0E37B4] font-medium flex items-center gap-1 text-sm">
              Read Now <span>↗</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-gray-400 rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
          <img
            src="/abhinay/bbaa.jpg" // replace
            alt=""
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="font-medium text-gray-900 mb-3 text-sm md:text-base flex-grow">
              MarOps: Data governance strategy
            </p>
            <button className="text-[#0E37B4] font-medium flex items-center gap-1 text-sm">
              Read Now <span>↗</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-gray-400 rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
          <img
            src="/abhinay/cbaa.jpg" // replace
            alt=""
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="font-medium text-gray-900 mb-3 text-sm md:text-base flex-grow">
              Leveraging Generative AI to Build Personalized Customer Journeys
            </p>
            <button className="text-[#0E37B4] font-medium flex items-center gap-1 text-sm">
              Read Now <span>↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Meet the Business Community */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#633886] mb-6 sm:mb-8 lg:mb-10 text-center">
        Meet the Business Community
      </h2>

      {/* Community Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
        {/* Person 1 */}
        <div className="border rounded-xl p-4 sm:p-6 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <img src="/abhinay/pfp1.jpg" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-semibold text-[#4D2C68] text-xs sm:text-sm">Ingrid Kraaijbeek</p>
              <p className="text-gray-600 text-[10px] sm:text-xs">VP Talent, Learning & Organizational Development<br />Aliaxis</p>
            </div>
          </div>
          <p className="text-[#4D2C68] text-xs sm:text-sm italic">
            "I enjoy checking out the LeMiCi Peer Community to see how I can help others and what posts are out there from which I can learn myself."
          </p>
        </div>

        {/* Person 2 */}
        <div className="border rounded-xl p-4 sm:p-6 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <img src="/abhinay/pfp2.jpg" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-semibold text-[#4D2C68] text-xs sm:text-sm">Padhu Raman</p>
              <p className="text-gray-600 text-[10px] sm:text-xs">Chief Product Officer<br />Osa Commerce</p>
            </div>
          </div>
          <p className="text-[#4D2C68] text-xs sm:text-sm italic">
            "LeMiCi Peer Community provides a collaborative platform for a focused, productive exchange of actionable insights and knowledge specific to subject areas."
          </p>
        </div>

        {/* Person 3 */}
        <div className="border rounded-xl p-4 sm:p-6 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <img src="/abhinay/pfp3.jpg" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-semibold text-[#4D2C68] text-xs sm:text-sm">Ingrid Kraaijbeek</p>
              <p className="text-gray-600 text-[10px] sm:text-xs">Human Resource Business Partner<br />Government of Alberta</p>
            </div>
          </div>
          <p className="text-[#4D2C68] text-xs sm:text-sm italic">
            "This is what makes LeMiCi Peer Community great. It's a community where business folks from any industry can connect, inquire with each other and consider other ideas/thoughts."
          </p>
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center">
        <button className="text-[#0E37B4] font-medium text-sm hover:underline">
          View All Ambassadors
        </button>
      </div>

    </div>

    <div className="w-full bg-white font-sans">
      {/* Connect With Industry Peers Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
        {/* Left Image */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-md">
          <img
            src="abhinay/network.jpg" // replace this
            alt="Industry Network"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Connect with Industry Peers
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Expand your network by connecting with like-minded professionals.
            Share insights, ideas, and experiences to grow together in the
            industry.
          </p>

          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition text-sm sm:text-base">
            Join for Free
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#633886] mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {/* FAQ Item */}
          <div className="flex items-center justify-between gap-4 sm:gap-8 pb-3 cursor-pointer border-b border-gray-200">
            <p className="text-[#2E1A3E] text-sm sm:text-base">How does the Peer Community work?</p>
            <span className="text-lg sm:text-xl text-[#633886] shrink-0">v</span>
          </div>

          <div className="flex items-center justify-between gap-4 sm:gap-8 pb-3 cursor-pointer border-b border-gray-200">
            <p className="text-[#2E1A3E] text-sm sm:text-base">
              I'm not a LeMiCi client. Can I join community?
            </p>
            <span className="text-lg sm:text-xl text-[#633886] shrink-0">v</span>
          </div>

          <div className="flex items-center justify-between gap-4 sm:gap-8 pb-3 cursor-pointer border-b border-gray-200">
            <p className="text-[#2E1A3E] text-sm sm:text-base">
              Why does my account need to be verified?
            </p>
            <span className="text-lg sm:text-xl text-[#633886] shrink-0">v</span>
          </div>
        </div>
      </div>
    </div>
    <Footernew />
    </div>
  
  );
};

export default Community;
