import React from "react";
import { VscTriangleUp } from "react-icons/vsc";

const categories = [
  { name: 'Shuttlecock', image: '/hari/eB2BImages/products/Shuttlecock.png' },
  { name: 'Snowboard', image: '/hari/eB2BImages/products/Snowboard.png' },
  { name: 'Javelin', image: '/hari/eB2BImages/products/Javelin.png' },
  { name: 'Helmet', image: '/hari/eB2BImages/products/Helmet.png' },
  { name: 'Ball', image: '/hari/eB2BImages/products/Ball.png' },
  { name: 'Frisbee', image: '/hari/eB2BImages/products/Frisbee.png' },
  { name: 'F1 Suit', image: '/hari/eB2BImages/products/F1Suit.png' },
  { name: 'Bat', image: '/hari/eB2BImages/products/Bat.png' },
  { name: 'Roller Blades', image: '/hari/eB2BImages/products/RollerBlades.png' },
  { name: 'Gym Equipments', image: '/hari/eB2BImages/products/GymEquipments.png' },
  { name: 'Gloves', image: '/hari/eB2BImages/products/Gloves.png' },
  { name: 'Rackets', image: '/hari/eB2BImages/products/Rackets.png' },
];

const relatedCategories = [
  { name: 'Sports Equipment', image: '/hari/eB2BImages/products/SportsEquipment.png' },
  { name: 'Water Sports Equipment', image: '/hari/eB2BImages/products/WaterSportsEquipment.png' },
  { name: 'Bowling Balls', image: '/hari/eB2BImages/products/BowlingBalls.png' },
  { name: 'Sports Goods', image: '/hari/eB2BImages/products/SportsGoods.png' },
  { name: 'Sports Nets', image: '/hari/eB2BImages/products/SportsNets.png' },
  { name: 'Bowling Alley Equipment', image: '/hari/eB2BImages/products/BowlingAlleyEquipment.png' },
  { name: 'Handball Equipment', image: '/hari/eB2BImages/products/HandballEquipment.png' },
  { name: 'Volleyball Poles', image: '/hari/eB2BImages/products/VolleyballPoles.png' },
  { name: 'Bowling Pins', image: '/hari/eB2BImages/products/BowlingPins.png' },
  { name: 'Gym Goods', image: '/hari/eB2BImages/products/GymGoods.png' },
  { name: 'Netball Equipment', image: '/hari/eB2BImages/products/NetballEquipment.png' },
  { name: 'Track Hurdles', image: '/hari/eB2BImages/products/TrackHurdles.png' },
];

const RightCard = ({ title, subtitle, items }) => (
  <div className="bg-[#FFFDFD] border-2 border-[#EDEDED] rounded-lg p-4 shadow-sm mb-5 w-[90%] mx-auto h-[210px]">
    <h3 className="font-semibold text-[15px]">{title}</h3>
    <p className="text-xs text-[#4A53FA] mt-1">{subtitle}</p>
    <div className="flex items-start justify-between gap-4 mt-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[90px] flex flex-col items-center text-center"
        >
          {/* Image container */}
          <div className="bg-[#EDEDED] p-2 rounded-xl w-16 h-16 flex items-center justify-center mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-md object-cover"
            />
          </div>
          <p className="text-sm text-gray-800 font-semibold leading-4">
            {item.name}
          </p>
          {item.price && (
            <p className="text-sm mt-1 text-gray-600">₹{item.price}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);


const CategorySection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-4">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-[70%]">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-base font-semibold mb-2 lg:text-xl">Featured Sports Equipment Categories</h2>
          <p className="text-xs text-gray-500 lg:text-sm">
            The most in demanded categories among buyers
          </p>
        </div>

        {/* Circle Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-10">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-sm mt-2 text-center">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Related Categories */}
        <div>
          <div className="mt-10">
            <div className="flex bg-[#EDEDED] items-center justify-between mb-4 px-4 py-2 rounded-full">
              <div className="w-full text-sm font-medium text-gray-700">
                Related Category
              </div>
              <VscTriangleUp className="text-gray-700" size={20} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {relatedCategories.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="text-sm text-gray-800">{item.name}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-blue-600 text-sm cursor-pointer hover:underline hover:font-medium">
                See All →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-[30%] relative">
        {/* Vertical Line */}
          <div className="hidden lg:block absolute left-3 top-1/2 transform -translate-y-1/2 h-full border-1 border-[#D9D9D9]"></div>

        <div className="lg:pl-10">
          <RightCard
            title="Analyst's Choice"
            subtitle="Goods & services handpicked  by B2B"
            items={[
              { image: "/hari/eB2BImages/products/Trending.png", name: "Trending" },
              { image: "/hari/eB2BImages/products/HotPicks.png", name: "Hot Picks" },
              { image: "/hari/eB2BImages/products/Innovative.png", name: "Innovative" },
            ]}
          />

          <RightCard
            title="Low MOQ"
            subtitle="Find products from certified low MOQ manufacturers & wholesale suppliers"
            items={[
              { image: "/hari/eB2BImages/products/NewArrivals.png", name: "New Arrivals" },
              { image: "/hari/eB2BImages/products/Quick.png", name: "Quick" },
              { image: "/hari/eB2BImages/products/BestSeller.png", name: "Best Seller" },
            ]}
          />

          <RightCard
            title="Product Showcase"
            subtitle="Short, engaging videos to explain key features and benefits."
            items={[
              { image: "/hari/eB2BImages/products/BagPack1.png", name: "", price: "16,99" },
              { image: "/hari/eB2BImages/products/BagPack2.png", name: "", price: "12,99" },
              { image: "/hari/eB2BImages/products/BagPack3.png", name: "", price: "999" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
