import React, { useEffect, useRef, useState } from "react";

const DataLicensing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsIndex, setProjectsIndex] = useState(0);
  
  const carouselItems = [
    { img: "abhinay/imagegeneration.png", title: "Image Generation" },
    { img: "abhinay/fmm.jpg", title: "Foundation Models" },
    { img: "abhinay/videocreation.jpg", title: "Video Creation" },
    { img: "abhinay/vsas.jpg", title: "Visual Search" },
    { img: "abhinay/vcpp.jpg", title: "Visual Content" }
  ];

  const itemsPerView = 5;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4">
      <div className="px-4 sm:px-8 relative">
        <img className="w-full h-auto" src="abhinay/bgnew.png" alt="" />
        <div className="absolute top-8 sm:top-20 md:top-36 left-0 right-0 px-4 sm:px-8 py-4 sm:py-8">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-bold leading-[120%] sm:leading-[150%] tracking-[-1px] sm:tracking-[-2px] text-center mb-3 sm:mb-6"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Train Your AI Models with <br className="hidden sm:block" />
            <span className="text-[#652C90]">Premium Multimodal Data</span>
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Access millions of licensable images, videos, and metadata to build
            more <br className="hidden md:block" />
            accurate, ethical, and innovative AI solutions
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12">
          Why leading companies rely on LEMICI data
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-3">
          <div className="flex-1 border-2 border-[#EBEBEC] rounded-lg flex flex-col items-center shadow justify-center px-3 sm:px-4 py-6 sm:py-8 text-center gap-2 sm:gap-3">
            <img
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
              src="abhinay/license1.jpg"
              alt=""
            />
            <p className="font-bold text-sm sm:text-base">High-quality precision</p>
            <p className="text-xs sm:text-sm">
              Train your models with exceptionally accurate metadata that's
              meticulously reviewed.
            </p>
          </div>
          <div className="flex-1 border-2 border-[#EBEBEC] rounded-lg flex flex-col items-center shadow justify-center px-3 sm:px-4 py-6 sm:py-8 text-center gap-2 sm:gap-3">
            <img
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
              src="abhinay/license2.jpg"
              alt=""
            />
            <p className="font-bold text-sm sm:text-base">Largest and most diverse library</p>
            <p className="text-xs sm:text-sm">
              Leverage 600M+ images, videos, music tracks, sound effects, 3D
              models, and templates.
            </p>
          </div>
          <div className="flex-1 border-2 border-[#EBEBEC] rounded-lg flex flex-col items-center shadow justify-center px-3 sm:px-4 py-6 sm:py-8 text-center gap-2 sm:gap-3">
            <img
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
              src="abhinay/license3.jpg"
              alt=""
            />
            <p className="font-bold text-sm sm:text-base">Peace of mind</p>
            <p className="text-xs sm:text-sm">
              Work risk-free with fully licensable datasets curated to avoid
              unwanted or unlawful content.
            </p>
          </div>
          <div className="flex-1 border-2 border-[#EBEBEC] rounded-lg flex flex-col items-center shadow justify-center px-3 sm:px-4 py-6 sm:py-8 text-center gap-2 sm:gap-3">
            <img
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
              src="abhinay/license4.jpg"
              alt=""
            />
            <p className="font-bold text-sm sm:text-base">Enterprise-tested procurement</p>
            <p className="text-xs sm:text-sm">
              Proven experience navigating complex enterprise legal and
              procurement reviews—so onboarding doesn't slow you down.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 sm:mt-24 md:mt-48">
        <img className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-[16px] object-cover" src="abhinay/datasetbg.jpg" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-[16px]"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4 sm:px-8 text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Millions of datasets—and counting</h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-center text-xs sm:text-sm md:text-base">
            Download a pack of curated sample datasets, which feature premium
            images and <br className="hidden md:block" /> relevant metadata from our world-class content library.
          </p>
          <p className="mt-4 sm:mt-6 md:mt-8 text-center text-xs sm:text-sm md:text-base">
            560M+ images • 50M+ videos • 5M+ music tracks and SFX • 1M+ 3D
            models • 600K <br className="hidden md:block" /> templates • 3M+ contributors from 150+ countries
          </p>

          <button className="bg-[#652C90] px-6 sm:px-8 md:px-11 py-2 sm:py-3 rounded-2xl mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base">Download Samples</button>
        </div>
      </div>
      <div className="mt-12 sm:mt-24 md:mt-48">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12 px-4">Explore the different areas our AI training <br className="hidden md:block" /> data & services support</h1>
        <div className="relative flex items-center">
          <button 
            onClick={handlePrev} 
            className="absolute left-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <div className="overflow-hidden mx-8 sm:mx-12 w-full">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {[...carouselItems, ...carouselItems, ...carouselItems].map((item, index) => (
                <div key={index} className="shrink-0" style={{ width: `calc((100% - 2rem) / ${itemsPerView})` }}>
                  <div className="relative">
                    <img className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg" src={item.img} alt="" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-lg"></div>
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm sm:text-lg md:text-2xl text-center px-2 sm:px-4">{item.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNext} 
            className="absolute right-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>


    <div className="w-full bg-white py-8 sm:py-12 md:py-16 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 px-4">
        Trusted by the world's most innovative companies
      </h2>

      {/* Company Logos - Infinite Scroll */}
      <div className="relative w-full mb-20">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {[
            "abhinay/ani1.jpg",
            "abhinay/ani2.png",
            "abhinay/ani3.png",
            "abhinay/ani4.png",
            "abhinay/ani5.png",
            "abhinay/ani6.png",
          ].map((src, i) => (
            <div
              key={`first-${i}`}
              className="bg-white border rounded-xl shadow-sm overflow-hidden w-42 h-20 mx-4 shrink-0"
            >
              <img src={src} alt="Logo" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[
             "abhinay/ani1.jpg",
            "abhinay/ani2.png",
            "abhinay/ani3.png",
            "abhinay/ani4.png",
            "abhinay/ani5.png",
            "abhinay/ani6.png",
          ].map((src, i) => (
            <div
              key={`second-${i}`}
              className="bg-white border rounded-xl shadow-sm overflow-hidden w-42 h-20 mx-4 shrink-0"
            >
              <img src={src} alt="Logo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section Heading */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 mt-8 sm:mt-12 md:mt-18 px-4">
        Explore our AI projects & partnerships
      </h3>

      {/* Card Carousel Container */}
      <div className="relative max-w-6xl w-full px-8 sm:px-12">
        <button 
          onClick={() => setProjectsIndex((prev) => prev === 0 ? 2 : prev - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${projectsIndex * (100 / 3)}%)` }}
          >
            {/* Card 1 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
          <div className="h-2/3 w-full">
            <img
              src="/abhinay/anid1.jpg"
              alt="Data Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-1/3 p-4 flex items-center">
            <p className="text-sm text-[#268BFF] font-medium">
              Why ElevenLabs Leveraged LEMICI’S Rich Data to Build its Groundbreaking AI Sound Effect Generator
            </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
          <div className="h-2/3 w-full">
            <img
              src="/abhinay/anid2.jpg"
              alt="Lens Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-1/3 p-4 flex items-center">
            <p className="text-sm text-[#268BFF] font-medium">
              How Dataset Quality and Caption Richness Shape Fine-Tuned Text-to-Image Models
            </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
                <div className="h-2/3 w-ful">
                  <img
                    src="/abhinay/anid3.jpg"
                    alt="Lock Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/3 p-4 flex items-center">
                  <p className="text-sm text-[#268BFF] font-medium">
                    Harnessing AI for Commercial Projects: LEMICI'S Indemnity Provides Protection
                  </p>
                </div>
              </div>
            </div>

            {/* Repeat - Card 1 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
                <div className="h-1/2 w-full">
                  <img
                    src="/abhinay/anid1.jpg"
                    alt="Data Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 p-4 flex items-center">
                  <p className="text-sm text-[#268BFF] font-medium">
                    Why ElevenLabs Leveraged LEMICI'S Rich Data to Build its Groundbreaking AI Sound Effect Generator
                  </p>
                </div>
              </div>
            </div>

            {/* Repeat - Card 2 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
                <div className="h-1/2 w-full">
                  <img
                    src="/abhinay/anid2.jpg"
                    alt="Lens Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 p-4 flex items-center">
                  <p className="text-sm text-[#268BFF] font-medium">
                    How Dataset Quality and Caption Richness Shape Fine-Tuned Text-to-Image Models
                  </p>
                </div>
              </div>
            </div>

            {/* Repeat - Card 3 */}
            <div className="w-[calc(33.333%-1rem)] shrink-0">
              <div className="border rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
                <div className="h-1/2 w-full">
                  <img
                    src="/abhinay/anid3.jpg"
                    alt="Lock Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 p-4 flex items-center">
                  <p className="text-sm text-[#268BFF] font-medium">
                    Harnessing AI for Commercial Projects: LEMICI'S Indemnity Provides Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setProjectsIndex((prev) => prev === 2 ? 0 : prev + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  
      

       
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 flex flex-col items-center px-4 mt-8 sm:mt-12 md:mt-18">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-12">
        Sample Datasets for AI & Computer Vision
      </h2>

      {/* Container */}
      <div className="w-full max-w-6xl bg-white border rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {/* Left Side */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Sample Dataset for Generative AI</h3>

          <h4 className="font-semibold mb-2 text-sm sm:text-base">Description</h4>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            Explore 1,000 high-res images and their metadata from our original image library.
            These include photos, vectors, and illustrations from various content categories.
          </p>

          <h4 className="font-semibold mb-2 text-sm sm:text-base">Metadata</h4>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            asset_metadata.csv: <br />
            id, keywords, image_type, has_model_release, has_people, primary_category
          </p>

          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            file_metadata.csv: <br />
            asset_id
          </p>

          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            model_metadata.csv: <br />
            asset_id, model_release_id, age_range, gender, ethnicity
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Main Image */}
          <img
            src="/abhinay/humanoid.png"
            alt="AI Robot"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
          />

          {/* Three Small Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="relative bg-black/60 text-white rounded-lg sm:rounded-xl overflow-hidden h-20 sm:h-24 md:h-28 flex items-center justify-center text-center text-[0.6rem] sm:text-xs font-medium p-1 sm:p-2">
              <img src="/abhinay/humanoid.png" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <span className="relative z-10">Sample Dataset for Generative AI</span>
            </div>

            <div className="relative bg-black/60 text-white rounded-lg sm:rounded-xl overflow-hidden h-20 sm:h-24 md:h-28 flex items-center justify-center text-center text-[0.6rem] sm:text-xs font-medium p-1 sm:p-2">
              <img src="/abhinay/headed.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <span className="relative z-10">Sample Dataset for Facial Recognition</span>
            </div>

            <div className="relative bg-purple-700 text-white rounded-lg sm:rounded-xl overflow-hidden h-20 sm:h-24 md:h-28 flex items-center justify-center text-center text-[0.6rem] sm:text-xs font-medium p-1 sm:p-2">
              <img src="/abhinay/keybed.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <span className="relative z-10">Sample Dataset for Object Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 flex flex-col items-center mt-12 sm:mt-20 md:mt-28">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-3 sm:mb-4">
        Ready to refine your AI model with best‑in‑class data?
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base">
        Complete the form to access a pack of curated sample datasets with premium assets and
        metadata, and let us help you design a custom fit for your unique data needs.
      </p>

      {/* Form Section */}
      <div className="w-full max-w-6xl bg-white border relative border-[#E1E1E2] rounded-2xl shadow-md overflow-visible grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="hidden lg:block absolute -left-20 xl:-left-28 top-1/2 -translate-y-1/2 w-[18rem] xl:w-[23rem] h-[24rem] xl:h-[30rem]">
          <img
            src="/abhinay/mbile.jpg"
            alt="Phone Image"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* Right Form */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 md:col-span-2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl lg:ml-auto">
            {/* First Name */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">First Name *</label>
              <input type="text" className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 text-sm sm:text-base" />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Last Name *</label>
              <input type="text" className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 text-sm sm:text-base" />
            </div>

            {/* Business Email */}
            <div className="md:col-span-2">
              <label className="text-xs sm:text-sm font-medium text-gray-500">Business Email Address *</label>
              <input type="email" className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 text-sm sm:text-base" />
            </div>

            {/* Company */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Company *</label>
              <input type="text" className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 text-sm sm:text-base" />
            </div>

            {/* Job Role */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Job Role *</label>
              <select className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 bg-transparent text-gray-500 appearance-none text-sm sm:text-base" style={{backgroundImage: 'url(/abhinay/ythger.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '16px'}}>
                <option className="text-gray-500">Select</option>
              </select>
            </div>

            {/* Job Function */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Job Function *</label>
              <select className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 bg-transparent text-gray-500 appearance-none text-sm sm:text-base" style={{backgroundImage: 'url(/abhinay/ythger.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '16px'}}>
                <option className="text-gray-500">Select</option>
              </select>
            </div>

            {/* Company Size */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Company Size *</label>
              <select className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 bg-transparent text-gray-500 appearance-none text-sm sm:text-base" style={{backgroundImage: 'url(/abhinay/ythger.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '16px'}}>
                <option className="text-gray-500">Select</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Country *</label>
              <select className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 bg-transparent text-gray-500 appearance-none text-sm sm:text-base" style={{backgroundImage: 'url(/abhinay/ythger.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '16px'}}>
                <option className="text-gray-500">Select</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">State *</label>
              <select className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 bg-transparent text-gray-500 appearance-none text-sm sm:text-base" style={{backgroundImage: 'url(/abhinay/ythger.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '16px'}}>
                <option className="text-gray-500">Select</option>
              </select>
            </div>

            {/* How did you hear */}
            <div className="md:col-span-2">
              <label className="text-xs sm:text-sm font-medium text-gray-500">How did you hear about us *</label>
              <input type="text" className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-1 text-sm sm:text-base" />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4 sm:mt-6">
              <button className="w-full bg-[#652C90] text-white py-2.5 sm:py-3 rounded-[16px] font-medium hover:bg-purple-800 transition text-sm sm:text-base">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  


    </div>

 


  );
};

export default DataLicensing;
