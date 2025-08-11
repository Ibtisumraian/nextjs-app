import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";

export default async function TopDestinations() {
  // Connect and fetch 6 hotel documents
  const hotelsCollections = await dbConnect(collectionNameObject.hotelsCollection);
  const hotels = await hotelsCollections.find({}).limit(6).toArray();

  return (
    <section className="w-11/12 mx-auto px-4 py-16 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-500 text-center">
        Top Hotels
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map(({ _id, name, destinationName, image, description }) => (
          <div
            key={_id.toString()}
            className="bg-yellow-50 border-2 border-yellow-200 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <img src={image} alt={name} className="w-full h-70 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {name}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{description}</p>

              {/* Redirect Button */}
              <Link
                href={`/Details/${_id}`}
                className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg text-center transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
