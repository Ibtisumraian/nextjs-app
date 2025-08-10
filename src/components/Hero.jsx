"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const places = [
  {
    name: "Cox’s Bazar",
    image: "https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png",
  },
  {
    name: "Sreemangal",
    image: "https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png",
  },
  {
    name: "Sundarbans",
    image: "https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png",
  },
];

const Hero= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % places.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-[800px] bg-cover bg-center flex items-center"
      style={{
        background: `url('https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png'), rgb(196,196,196)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00000099] z-0"></div>

      {/* Main content */}
      <div className="relative z-10 w-11/12 mx-auto flex items-center justify-between">
        {/* Left Text */}
        <div className="text-white max-w-lg flex flex-col gap-4">
          <h1 className="text-7xl font-bold uppercase">{places[currentIndex].name}</h1>
          <p className="text-lg">
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach...
          </p>
          <Link href={'/Destination'} className="btn shadow-none w-fit rounded-lg bg-[#F9A51A] border-none text-white px-6">
            Booking 
          </Link>
        </div>

        {/* Destination Carousel */}
        <div className="relative py-8 w-[700px]"> {/* or use max-w-3xl or similar */}
          <div className="flex justify-center items-center gap-6 transition-all duration-500">
            {places.map((place, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`relative w-64 h-96 rounded-xl p-1 bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "scale-110 shadow-xl z-10 border-4 border-[#F9A51A]"
                      : "scale-90 opacity-60 border-4 border-transparent"
                  }`}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-white text-lg font-semibold">
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
