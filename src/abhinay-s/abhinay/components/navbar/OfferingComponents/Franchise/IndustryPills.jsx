
import React from "react";
import { IKImage } from "imagekitio-react";

const IndustryPills = ({ industries }) => {

    return (
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries && industries.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 p-2">
                {/* SVG Icon */}
                <IKImage
                  path={`/${String(item.icon).replace(
                    "/abhinay/franchise",
                    ""
                  )}`}
                  alt={item.label}
                  className="w-7 h-7"
                  loading="lazy"
                />
                <span className="text-sm">{item.label}</span>
              </div>
              <X size={16} className="text-gray-500" />
            </div>
          ))}
        </div>
    );
};

export default IndustryPills;

