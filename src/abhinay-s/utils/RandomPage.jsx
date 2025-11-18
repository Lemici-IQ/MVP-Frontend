import React, { useState } from "react";

const RandomPage = () => {
  return (
    <>
      <div className="max-w-[86rem] mx-auto w-full">
        <div className="flex gap-4 mt-20 ">
          <div className="w-1/2 pt-10">
            <h1 className="font-bold text-4xl">
              Real-world{" "}
              <span className="bg-yellow-300 rounded-2xl pr-2 py-[2px] shadow-lg">
                peer
              </span>{" "}
              connections, conversations, and actionable advice
            </h1>
            <button className="mt-7 bg-[#633886] rounded-2xl px-7 py-3 text-white">
              Join for Free
            </button>
          </div>
          <div className="w-1/2 rounded-lg">
            <img
              src="/abhinay/allpeople.png"
              alt=""
              className="w-full p-2 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full mt-10">
        <div className="w-full bg-white text-gray-900 p-8 font-sans">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get fast answers on your mission-critical priorities
          </h1>

          <p className="text-gray-600 mb-10">
            Join our community of over 100,000 members. Ask questions and launch
            polls to get fast answers from your
            <span className="bg-yellow-300 px-1 mx-1">peer</span> business.
          </p>

          {/* Current Peer Activity Section */}
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                Current
                <span className="bg-yellow-300 px-2 mx-2 rounded">Peer</span>
                Activity:
              </h2>

              <div className="flex items-center text-5xl font-bold text-purple-800 mt-2">
                275
              </div>
              <div className="flex items-center gap-2 mt-1 text-gray-700 text-base">
                <span>Community Members</span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">ACTIVE NOW</span>
              </div>
            </div>

            {/* Most Recent Contribution Box */}
            <div className="bg-[#BCA6CD] text-gray-800 p-5 rounded-xl w-72 shadow-sm">
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
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-6 relative">
              <div className="flex items-center justify-center gap-4 mb-3 font-semibold text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 border-2 border-[#633886] rounded z-10">
                <img src="/abhinay/firstone.png" alt="" className="w-6 h-6" />
                Discover
              </div>
              <p className="text-gray-600 text-sm my-6">
                Get instant access to peer-driven actionable insights
              </p>
            </div>

            {/* Ask Card */}
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-6 relative">
              <div className="flex items-center justify-center gap-4 mb-3 font-semibold text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 border-2 border-[#633886] rounded z-10">
                <img src="/abhinay/midone.png" alt="" className="w-6 h-6" />
                Ask
              </div>
              <p className="text-gray-600 text-sm my-6">
                Get instant access to peer-driven actionable insights
              </p>
            </div>

            {/* Connect Card */}
            <div className="border-2 border-[#633886] border-dotted rounded-3xl p-6 relative">
              <div className="flex items-center justify-center gap-4 mb-3 font-semibold text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 border-2 border-[#633886] rounded z-10">
                <img src="/abhinay/lastone.png" alt="" className="w-6 h-6" />
                Connect
              </div>
              <p className="text-gray-600 text-sm my-6">
                Get instant access to peer-driven actionable insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[50vh]">
        <img
          className="w-full object-cover object-top h-full"
          src="/abhinay/hyper.jpg"
          alt=""
        />
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
          Our Numbers Tell the Story
        </h1>
        <div className="w-full flex justify-around absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-20">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
            <img src="/abhinay/ran1.png" alt="" className="mx-auto mb-4" />
            <h1 className="text-[#633886] text-3xl font-bold text-center">
              150,000+
            </h1>
            <p className="text-center text-gray-700">New Connections Made</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
            <img src="/abhinay/ran2.png" alt="" className="mx-auto mb-4" />
            <h1 className="text-[#633886] text-3xl font-bold text-center">
              100,000+
            </h1>
            <p className="text-center text-gray-700">
              Active Community Members
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
            <img src="/abhinay/ran3.png" alt="" className="mx-auto mb-4" />
            <h1 className="text-[#633886] text-3xl font-bold text-center">
              30,000+
            </h1>
            <p className="text-center text-gray-700">
              Discussions, Polls, and <br />
              Packaged Insights
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomPage;
