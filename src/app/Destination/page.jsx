import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";


export default async function Page() {
  const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection)
  const hotels = await hotelsCollections.find({}).toArray()

  return (
    <div className="bg-gray-50 py-14">
      <div className="w-11/12 mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#F9A51A] uppercase">
          Hotels to Book by Destination
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="bg-yellow-50 border-2 border-yellow-200 backdrop-blur-md shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  {hotel.description}
                </h2>
              </div>
              <div className="p-4 text-black">
                <p className="text-md text-[#F9A51A] font-semibold mt-1">{hotel.name}</p>
                <p className="text-sm opacity-80">{hotel.longDescription}</p>
                {/* <ul className="text-xs mt-2 space-y-1 list-disc list-inside opacity-90">
                  {hotel.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul> */}
                <p className="text-lg font-bold mt-2 text-[#F9A51A]">${hotel.price}</p>
                <Link
                  href={`/Details/${hotel._id}`}
                  className="mt-4 w-full flex items-center justify-center cursor-pointer bg-[#F9A51A] hover:bg-yellow-500 text-white font-semibold btn rounded-lg transition-all"
                >
                  <span>Book Now</span> 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
