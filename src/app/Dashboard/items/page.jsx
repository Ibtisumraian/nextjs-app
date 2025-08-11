"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteHotelButton from "./componsnts/DeleteHotelButton";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/posted");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-yellow-50 rounded shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-extrabold text-[#F9A51A]">Manage Items</h1>
        <Link
          href="/Dashboard/items/new"
          className="bg-[#F9A51A] hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold transition"
        >
          Create New
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500">You have not posted any items yet . . . .</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item._id}
              className="border border-[#F9A51A] rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.destinationName}</p>
                  <p className="text-sm font-medium text-[#F9A51A]">${item.price}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/dashboard/items/${item._id}`}
                  className="text-[#F9A51A] hover:text-yellow-700 font-medium"
                >
                  View
                </Link>
                <Link
                  href={`/Dashboard/Update/${item._id}`}
                  className="text-yellow-600 hover:text-yellow-800 font-medium"
                >
                  Edit
                </Link>
                <div>
                  <DeleteHotelButton id={item._id} onDelete={() => setItems(prev => prev.filter(i => i._id !== item._id))} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
