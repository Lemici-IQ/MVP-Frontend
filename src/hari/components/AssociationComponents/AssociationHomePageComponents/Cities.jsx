import React from 'react';

const cities = [
  {
    name: 'Delhi',
    image: '/hari/DataProviderImages/cities/delhi.jpg',
  },
  {
    name: 'Bengaluru',
    image: '/hari/DataProviderImages/cities/bengaluru.jpg',
  },
  {
    name: 'Hyderabad',
    image: '/hari/DataProviderImages/cities/hyderabad.jpg',
  },
  {
    name: 'Ahmedabad',
    image: '/hari/DataProviderImages/cities/ahmedabad.png',
  },
  {
    name: 'Pune',
    image: '/hari/DataProviderImages/cities/pune.jpg',
  },
  {
    name: 'Kolkata',
    image: '/hari/DataProviderImages/cities/kolkata.jpg',
  },
  {
    name: 'Chennai',
    image: '/hari/DataProviderImages/cities/chennai.png',
  },
  {
    name: 'Mumbai',
    image: '/hari/DataProviderImages/cities/mumbai.jpg',
  },
];

const Cities = () => {
  return (
    <div className="px-6 py-10 text-center">
      <h2 className="text-3xl font-semibold text-[#01719E]">Why you should choose LeMiCi</h2>
      <p className='text-medium text-[#444444] mb-10 mt-3'>Find Supplies from Top Cities !</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {cities.map((city, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-400 cursor-pointer">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-36 object-cover rounded-t-xl"
            />
            <div className="py-2 bg-white">
              <p className="text-sm font-medium text-[#000]">{city.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
