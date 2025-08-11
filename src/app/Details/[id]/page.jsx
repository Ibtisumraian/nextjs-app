"use server";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import { toast } from "react-toastify";


export async function bookHotel(formData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/Login");
  }

  const from = formData.get("from");
  const to = formData.get("to");
  const hotelName = formData.get("hotelName");
  const payableAmount = formData.get("payableAmount");
  const phone_number = formData.get("phone_number");
  const destination = formData.get("destination");

  const bookingsCollection = await dbConnect(collectionNameObject.bookingsCollection);

  await bookingsCollection.insertOne({
    user_name: session.user.name,
    email: session.user.email,
    user_photo: session.user.image,
    hotelName,
    paid_amount: payableAmount,
    phone_number,
    destination,
    check_in: from,
    check_out: to,
    createdAt: new Date(),
  });
  // toast("Booking Successful")
  redirect("/Destination");
}


export default async function page({ params }) {
  const session = await getServerSession(authOptions);
  const p = await params;
  const res = await fetch(`https://nextjs-booking-app-three.vercel.app/api/detail/${p.id}`)
  const hotel = await res.json()

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

      <div className="relative z-10 w-11/12  mx-auto px-4 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row justify-around gap-10 min-h-screen">
        {/* Left side text */}
        <div className="text-white max-w-xl md:max-w-lg flex flex-col gap-6 lg:w-1/2">
          <div className="relative rounded-md overflow-hidden">
            <img src={hotel.image} alt="Hotel Image" className="w-full rounded-md" />
            <p className="absolute bottom-2 left-2 bg-[#F9A51A99] text-white font-bold px-3 py-1 rounded-md shadow-lg">
              ${hotel.price}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl text-[#F9A51A] font-extrabold tracking-wide">{hotel.name}</h1>
          <p className="text-md leading-relaxed">{hotel.longDescription}</p>
          <p className="text-md text-[#F9A51A] font-semibold">{hotel.destinationName}</p>
          <ul className="text-sm space-y-1 list-disc list-inside opacity-90">
            {hotel.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="mt-6">
            <Link
              href={"/Destination"}
              className="bg-[#F9A51A] hover:bg-[#d88d15] text-white font-semibold rounded-md py-3 px-5 inline-block"
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Right side booking form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full h-fit max-w-md lg:w-1/2">
          <form action={bookHotel} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-600 mb-1 font-semibold">User Name</label>
              <input
                type="text"
                defaultValue={session?.user?.name}
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Email</label>
              <input
                type="text"
                defaultValue={session?.user?.email}
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>
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
                name="destination"
                value={hotel.destinationName}
                readOnly
                className="w-full bg-gray-100 rounded-md p-3 cursor-not-allowed text-gray-600"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Hotel</label>
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
            <div>
              <label className="block text-gray-600 mb-1 font-semibold">Phone Number</label>
              <input
                type="number"
                name="phone_number"
                required
                className="w-full bg-gray-100 rounded-md p-3 text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">Check In</label>
                <input
                  type="date"
                  name="from"
                  className="w-full border border-gray-300 rounded-md p-2"
                  defaultValue="2025-09-01"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">Check Out</label>
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
              // disabled={session?.user?.email === hotel}
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
