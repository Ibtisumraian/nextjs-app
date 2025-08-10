"use server";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { redirect } from "next/navigation";

// Server Action to handle form submission
export async function bookHotel(formData) {
  const from = formData.get("from");
  const to = formData.get("to");
  const hotelName = formData.get("hotelName");
  const payableAmount = formData.get("payableAmount");

  // Connect to bookings collection
  const bookingsCollection = dbConnect(collectionNameObject.bookingsCollection);

  // Save booking data (add more fields as needed)
  await bookingsCollection.insertOne({
    hotelName,
    payableAmount,
    from,
    to,
    createdAt: new Date(),
  });

  // Redirect to thank you or bookings page after submission
  redirect("/Destination");
}

// Page component to show hotel details and booking form
export default async function page({ params }) {
  const p = await params;
  const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
  const hotel = await hotelsCollections.findOne({ _id: new ObjectId(p.id) });

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000099] z-0"></div>

      <div className="relative z-10 w-11/12 mx-auto px-6 py-20 flex justify-around gap-10 min-h-screen">
        {/* Left side text */}
        <div className="text-white max-w-xl md:max-w-lg flex flex-col gap-3">
          <div className="relative">
            <img src={hotel.image} alt="Hotel Image" className="w-full rounded-md" />
            <p className="absolute bottom-2 left-2 bg-[#F9A51A99] text-white font-bold px-3 py-1 rounded-md shadow-lg">
              ${hotel.price}
            </p>
          </div>

          <h1 className="text-5xl text-[#F9A51A] font-extrabold tracking-wide">{hotel.name}</h1>
          <p className="text-md leading-relaxed">{hotel.longDescription}</p>
          <p className="text-md text-[#F9A51A] font-semibold">{hotel.destinationName}</p>
          <ul className="text-sm space-y-1 list-disc list-inside opacity-90">
            {hotel.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="mt-4">
            <Link
              href={"/Destination"}
              className="bg-[#F9A51A] hover:bg-[#d88d15] text-white font-semibold rounded-md py-3 px-4"
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Right side booking form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full h-fit max-w-md">
          <form action={bookHotel} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Origin</label>
              <input
                type="text"
                name="origin"
                defaultValue="Dhaka"
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Destination</label>
              <input
                type="text"
                name="hotelName"
                value={hotel.name}
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Payable Amount</label>
              <input
                type="text"
                name="payableAmount"
                value={hotel.price}
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">From</label>
                <input
                  type="date"
                  name="from"
                  className="w-full border border-gray-300 rounded-md p-2"
                  defaultValue="2025-09-01"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">To</label>
                <input
                  type="date"
                  name="to"
                  className="w-full border border-gray-300 rounded-md p-2"
                  defaultValue="2025-09-12"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#F9A51A] cursor-pointer hover:bg-[#d88d15] text-white font-semibold rounded-md py-3 mt-4"
            >
              Book now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
