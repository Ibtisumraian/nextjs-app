import React from "react";

export default async function Page({ params }) {
  const { id } = await params; 

  const res = await fetch(`https://nextjs-booking-app-three.vercel.app/api/detail/${id}`, {
 
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Failed to load hotel details</div>;
  }

  const hotel = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="mb-4 rounded object-cover max-h-96 w-full"
      />
      <p className="mb-2 font-semibold text-lg">${hotel.price}</p>
      <p className="mb-4">{hotel.description}</p>
      <p className="mb-6">{hotel.longDescription}</p>

      <h2 className="text-xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc list-inside space-y-1">
        {hotel.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
