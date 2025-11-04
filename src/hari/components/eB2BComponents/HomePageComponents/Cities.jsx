import React from 'react';

const cities = [
  {
    name: 'Delhi',
    image: '/hari/eB2BImages/cities/delhi.jpg',
  },
  {
    name: 'Bengaluru',
    image: '/hari/eB2BImages/cities/bengaluru.jpg',
  },
  {
    name: 'Hyderabad',
    image: '/hari/eB2BImages/cities/hyderabad.jpg',
  },
  {
    name: 'Ahmedabad',
    image: '/hari/eB2BImages/cities/ahmedabad.png',
  },
  {
    name: 'Pune',
    image: '/hari/eB2BImages/cities/pune.jpg',
  },
  {
    name: 'Kolkata',
    image: '/hari/eB2BImages/cities/kolkata.jpg',
  },
  {
    name: 'Chennai',
    image: '/hari/eB2BImages/cities/chennai.png',
  },
  {
    name: 'Mumbai',
    image: '/hari/eB2BImages/cities/mumbai.jpg',
  },
];

const Cities = () => {
  return (
    <div className="px-6 py-10 text-center">
      <p className="text-[#6D3E93] font-medium text-sm mb-1">Why you should choose LeMiCi</p>
      <h2 className="text-2xl font-semibold mb-6">Find Suppliers From Top Cities !</h2>

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
