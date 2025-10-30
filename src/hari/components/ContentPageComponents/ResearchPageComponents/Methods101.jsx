import React from "react";
import { FaPlay, FaArrowDown } from "react-icons/fa";

const Methods101 = () => {
  const mainVideo = {
    title: "Methods 101: Random Sampling",
    date: "April 17, 2025",
    description:
      "The first video in LeMiCi Research Center's Methods 101 series helps explain random sampling — a concept that lies at the heart of all probability-based survey research and why it's important.",
    duration: "8:10",
    thumbnail: "/hari/ContentPageImages/video1.jpg",
  };

  const sideVideos = [
    {
      thumbnail: "/hari/ContentPageImages/video2.jpg",
      tag: "Feature",
      date: "Mar 21, 2019",
      title: "Methods 101: Survey Question Wording",
      duration: "5:00",
    },
    {
      thumbnail: "/hari/ContentPageImages/video3.jpg",
      tag: "Video",
      date: "Feb 21, 2019",
      title: "Methods 101: Mode Effects",
      duration: "10:20",
    },
    {
      thumbnail: "/hari/ContentPageImages/video4.jpg",
      tag: "Video",
      date: "Aug 21, 2019",
      title: "Methods 101: What are nonprobability surveys?",
      duration: "3:30",
    },
    {
      thumbnail: "/hari/ContentPageImages/video5.jpg",
      tag: "Video",
      date: "Aug 21, 2019",
      title: "Methods 101: What are nonprobability surveys?",
      duration: "8:30",
    },
  ];

  return (
    <section className="px-8 pt-10 pb-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Methods 101 Videos
      </h2>

      {/* Video Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Main Video + Text */}
        <div>
          {/* Main Video */}
          <div className="relative rounded-lg overflow-hidden h-52 md:h-60 lg:h-70 w-full">
            <img
              src={mainVideo.thumbnail}
              alt={mainVideo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <FaPlay className="absolute text-white text-4xl opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {mainVideo.duration}
            </span>
            <div className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow">
              Methods 101
            </div>
            <div className="absolute bottom-3 right-3 text-white text-xs drop-shadow">
              LeMiCi Research Center
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-4">
            <p className="text-xs text-gray-500 uppercase">
              Feature | {mainVideo.date}
            </p>
            <h3 className="text-lg md:text-xl font-semibold mt-1 text-gray-900">
              {mainVideo.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {mainVideo.description}
            </p>
          </div>
        </div>

        {/* Right Side Videos */}
        <div className="space-y-4">
          {sideVideos.map((vid, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-[1px] rounded">
                  {vid.duration}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {vid.tag} | {vid.date}
                </p>
                <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                  {vid.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Methods101;
