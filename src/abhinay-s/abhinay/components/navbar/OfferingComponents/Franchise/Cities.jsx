import React from "react";
import { IKImage } from "imagekitio-react";

const Cities = ({ daata }) => {
    const data = {
          "cities": [
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_bangalore",
              "name": "Bangalore",
              "state": "Bangalore",
              "image": {
                "url": "FranchiseHomePage/cities/bengaluru.jpg",
                "width": 300,
                "height": 200,
                "alt": "Bangalore City"
              },
              "slug": "bangalore"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            },
            {
              "cityId": "city_delhi",
              "name": "Delhi",
              "state": "Delhi",
              "image": {
                "url": "FranchiseHomePage/cities/delhi.jpg",
                "width": 300,
                "height": 200,
                "alt": "Delhi City"
              },
              "slug": "delhi"
            }
          ]
        }
  if (!data || !Array.isArray(data.cities)) return null;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-20 mt-6">
        {data.cities.map((city) => (
          <div key={city.cityId} className="text-center">
            <div className="w-full aspect-square h-32 rounded-[20px] overflow-hidden">
              <IKImage
                path={city.image?.url || "/placeholder.jpg"}
                alt={city.image?.alt || city.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-[#4A53FA] text-sm sm:text-base font-medium mt-2 capitalize">
              {city.name}
            </p>
          </div>
        ))}
      </div>

      <p className="text-blue-600 text-sm mt-6 cursor-pointer text-center">
        View More →
      </p>
    </div>
  );
};

export default Cities;
