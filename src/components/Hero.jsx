"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const places = [
  {
    name: "Cox’s Bazar",
    description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach...",
    image: "https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png",
  },
  {
    name: "Sreemangal",
    description: "Sreemangal is known as the tea capital of Bangladesh, famous for its vast tea gardens, lush green hills, and tranquil natural beauty. It's a haven for nature lovers.",
    image: "https://res.cloudinary.com/deqw8tu5v/image/upload/v1749719434/samples/chair-and-coffee-table.jpg", 
  },
  {
    name: "Sundarbans",
    description: "The Sundarbans is a vast mangrove forest on the coast of the Bay of Bengal, home to the Royal Bengal Tiger. It's a UNESCO World Heritage Site.",
    image: "https://res.cloudinary.com/deqw8tu5v/image/upload/v1754728190/Rectangle_28_nlbqnl.png", 
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % places.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);


  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const currentPlace = places[currentIndex];

  return (

    <div
      className="relative sm:min-h-[750px] bg-cover bg-center flex items-center transition-all duration-500"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png)`, 
      }}
    >

      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 w-11/12 mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 pt-24 pb-12 lg:pt-24 lg:pb-0">
        
        <div className="text-white max-w-md flex flex-col items-center xl:items-start gap-4 text-center xl:text-left">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">{currentPlace.name}</h1>
          <p className="text-base">
            {currentPlace.description}
          </p>
          <Link href={'/Destination'} className="btn shadow-none w-fit rounded-lg bg-[#F9A51A] border-none text-white px-6 mx-auto lg:mx-0">
            Booking
          </Link>
        </div>


        <div className="w-full lg:w-auto hidden sm:block">
          <div className="flex justify-center items-center gap-3 sm:gap-6">
            {places.map((place, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)} 
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer 
                    ${isActive
                      ? "w-52 h-80 md:w-60 md:h-96 scale-105 shadow-xl z-10 border-4 border-[#F9A51A]" 
                      : "w-40 h-64 md:w-48 md:h-80 scale-90 opacity-60 border-4 border-transparent" 
                    }`}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold">
                    {place.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;