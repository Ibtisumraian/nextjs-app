"use client";
import React from "react";

export default function DeleteHotelButton({ id, onDelete }) {
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/detail/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onDelete?.(id); 
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800 cursor-pointer font-medium"
    >
      Delete
    </button>
  );
}
