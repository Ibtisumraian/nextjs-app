"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { AiOutlinePlusCircle, AiOutlineUnorderedList } from "react-icons/ai";

export default function DashboardHome() {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsRes, detailsRes] = await Promise.all([
          fetch("http://localhost:3000/api/posted"),
          fetch("http://localhost:3000/api/detail"),
        ]);
        const itemsData = await itemsRes.json();
        const detailsData = await detailsRes.json();

        setItems(itemsData);
        setDetails(detailsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPrice = items.reduce((acc, item) => acc + (item.price || 0), 0);

  const dataByDestination = Object.values(
    items.reduce((acc, item) => {
      if (!acc[item.destinationName]) {
        acc[item.destinationName] = {
          destination: item.destinationName,
          totalPrice: 0,
          count: 0,
        };
      }
      acc[item.destinationName].totalPrice += item.price || 0;
      acc[item.destinationName].count += 1;
      return acc;
    }, {})
  );

  const totalPaidAmount = details.reduce(
    (acc, detail) => acc + Number(detail.paid_amount || 0),
    0
  );

  const bookingByDestination = Object.values(
    details.reduce((acc, detail) => {
      if (!acc[detail.destination]) {
        acc[detail.destination] = { destination: detail.destination, count: 0 };
      }
      acc[detail.destination].count += 1;
      return acc;
    }, {})
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Welcome to your Dashboard
      </h1>
      <p className="mb-8 text-gray-600 text-center sm:text-left">
        Here’s a quick overview of your activity.
      </p>

      {loading ? (
        <p className="text-gray-500 text-center">Loading stats...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-yellow-100 p-4 rounded shadow flex flex-col justify-center items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-1">Hotels Added</h2>
              <p className="text-3xl font-bold text-yellow-700">{items.length}</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded shadow flex flex-col justify-center items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-1">Total Hotel Price</h2>
              <p className="text-3xl font-bold text-yellow-700">
                ${totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="bg-yellow-100 p-4 rounded shadow flex flex-col justify-center items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-1">Bookings</h2>
              <p className="text-3xl font-bold text-yellow-700">{details.length}</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded shadow flex flex-col justify-center items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-1">Total Paid Amount</h2>
              <p className="text-3xl font-bold text-yellow-700">
                ${totalPaidAmount.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Chart: Hotels total price by destination */}
          <section className="mb-10">
            <h3 className="mb-4 font-semibold text-gray-700 text-center md:text-left">
              Hotel Prices by Destination
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={dataByDestination}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="destination" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Bar dataKey="totalPrice" fill="#F9A51A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Chart: Number of bookings by destination */}
          <section className="mb-10">
            <h3 className="mb-4 font-semibold text-gray-700 text-center md:text-left">
              Bookings by Destination
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={bookingByDestination}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="destination" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#34D399" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Buttons at bottom */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 mt-8">
            <Link
              href="/Dashboard/items/new"
              className="flex flex-col items-center sm:items-start bg-yellow-400 hover:bg-yellow-500 transition rounded p-4 w-full"
            >
              <AiOutlinePlusCircle className="text-4xl mb-2 text-white" />
              <h4 className="text-white text-xl font-semibold mb-1">
                Add New Item
              </h4>
              <p className="text-white text-center sm:text-left text-sm">
                Create a new hotel or item to add to your listings.
              </p>
            </Link>

            <Link
              href="/Dashboard/items"
              className="flex flex-col items-center sm:items-start bg-green-500 hover:bg-green-600 transition rounded p-4 w-full "
            >
              <AiOutlineUnorderedList className="text-4xl mb-2 text-white" />
              <h4 className="text-white text-xl font-semibold mb-1">
                Manage Items
              </h4>
              <p className="text-white text-center sm:text-left text-sm">
                View, edit, or delete your existing items.
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
