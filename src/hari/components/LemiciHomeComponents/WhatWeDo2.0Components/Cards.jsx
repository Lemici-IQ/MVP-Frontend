import React from "react";

const cards = [
  {
    title: "Empower your organization with an all-in-one workplace solution.",
    link: "Data →",
    image: "/hari/LemiciHomeImages/card1.jpg", 
  },
  {
    title: "Transform teamwork, grow your brand and simplify workflows.",
    link: "Research →",
    image: "/hari/LemiciHomeImages/card2.jpg",
  },
  {
    title: "Talk to sales about how Lemici can help your business.",
    link: "Consulting →",
    image: "/hari/LemiciHomeImages/card3.jpg",
  },
];

const CardSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-10 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-[320px] h-[380px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-6 text-white">
            <h3 className="text-lg font-semibold mb-3 leading-snug">
              {card.title}
            </h3>
            <p className="text-blue-400 font-semibold hover:underline">
              {card.link}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
