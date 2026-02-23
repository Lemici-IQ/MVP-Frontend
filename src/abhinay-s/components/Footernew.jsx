import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Icon({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eee6fb] text-[#6b21a8] hover:bg-[#e6defa] transition">
      {children}
    </span>
  );
}


export default function Footernew() {
  const [data, setData] = useState(null);

  const [footerContent, setFooterContent] = useState("");

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch("http://localhost:5040/api/footer");
        const data = await res.json();
        setFooterContent(data.data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    };

    fetchFooter();
  }, []);


  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Render string as HTML */}
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
        
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <img src="/abhinay/lemicic.png" alt="" className="w-36" />
          </div>

          <div className="text-[#268BFF] text-sm flex flex-wrap gap-x-1 gap-y-1">
            <a href="#" className="hover:underline">Bengaluru</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Mumbai</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Hyderabad</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Gurgaon</a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Copyright © 2025 LeMiCi. All rights reserved. Empowering Local Businesses with Digital Growth.
          </p>
        </div>


      </div>
    </footer>
  );
}
