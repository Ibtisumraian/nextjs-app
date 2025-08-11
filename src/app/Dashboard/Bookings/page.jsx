"use client";

import React, { useEffect, useState } from "react";

export default function page() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/detail")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching booking data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-[#F9A51A] font-semibold">Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-gray-500">No bookings found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-[#F9A51A]">My Bookings</h1>
      <table className="min-w-full border border-yellow-50 rounded-md">
        <thead className="bg-[#F9A51A] text-white">
          <tr>
            <th className="p-3 text-left">Hotel Name</th>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">User Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Paid Amount</th>
            <th className="p-3 text-left">Check In</th>
            <th className="p-3 text-left">Check Out</th>
            <th className="p-3 text-left">Booking Date</th>
          </tr>
        </thead>
        <tbody className="bg-yellow-50 text-gray-900">
          {bookings.map((booking) => (
            <tr key={booking._id} className="border-t border-yellow-100 hover:bg-yellow-100">
              <td className="p-3">{booking.hotelName}</td>
              <td className="p-3">{booking.destination}</td>
              <td className="p-3">{booking.user_name}</td>
              <td className="p-3">{booking.email}</td>
              <td className="p-3">{booking.phone_number}</td>
              <td className="p-3">${booking.paid_amount}</td>
              <td className="p-3">{booking.check_in}</td>
              <td className="p-3">{booking.check_out}</td>
              <td className="p-3">{new Date(booking.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
