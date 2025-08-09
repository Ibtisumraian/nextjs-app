'use client';
import React from "react";

export default function Page() {
  const destinations = [
    { id: 1, name: "Paris, France", image: "https://source.unsplash.com/400x250/?paris", price: "$1200", description: "City of Light, romance, and history." },
    { id: 2, name: "Tokyo, Japan", image: "https://source.unsplash.com/400x250/?tokyo", price: "$1500", description: "A blend of tradition and technology." },
    { id: 3, name: "Bali, Indonesia", image: "https://source.unsplash.com/400x250/?bali", price: "$900", description: "Tropical paradise with beaches and temples." },
    { id: 4, name: "New York, USA", image: "https://source.unsplash.com/400x250/?newyork", price: "$1300", description: "The city that never sleeps." },
    { id: 5, name: "Rome, Italy", image: "https://source.unsplash.com/400x250/?rome", price: "$1100", description: "Ancient ruins and delicious food." },
    { id: 6, name: "London, UK", image: "https://source.unsplash.com/400x250/?london", price: "$1400", description: "History, culture, and modern charm." },
    { id: 7, name: "Dubai, UAE", image: "https://source.unsplash.com/400x250/?dubai", price: "$1600", description: "Luxury shopping and futuristic architecture." },
    { id: 8, name: "Sydney, Australia", image: "https://source.unsplash.com/400x250/?sydney", price: "$1700", description: "Harbor city with stunning beaches." },
    { id: 9, name: "Cape Town, South Africa", image: "https://source.unsplash.com/400x250/?capetown", price: "$1000", description: "Nature, mountains, and coastline." },
    { id: 10, name: "Barcelona, Spain", image: "https://source.unsplash.com/400x250/?barcelona", price: "$1150", description: "Art, architecture, and Mediterranean vibes." },
    { id: 11, name: "Bangkok, Thailand", image: "https://source.unsplash.com/400x250/?bangkok", price: "$800", description: "Street food and cultural temples." },
    { id: 12, name: "Istanbul, Turkey", image: "https://source.unsplash.com/400x250/?istanbul", price: "$1050", description: "Where East meets West." },
  ];

  const handleBook = (destinationName) => {
    alert(`You have booked: ${destinationName}`);
  };

  return (
    <div className="bg-gray-50 py-14">
        <div className=" w-11/12 mx-auto min-h-screen ">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#F9A51A] uppercase">
        Top Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {dest.name}
              </h2>
            </div>
            <div className="p-4 text-white">
              <p className="text-sm opacity-80">{dest.description}</p>
              <p className="text-lg font-bold mt-2 text-[#F9A51A]">
                {dest.price}
              </p>
              <button
                onClick={() => handleBook(dest.name)}
                className="mt-4 w-full cursor-pointer bg-[#F9A51A] hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-all"
              >
                Book Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
