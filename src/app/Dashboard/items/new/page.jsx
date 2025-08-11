"use client"
import { useState } from "react";

export default function AddItem() {
  const [features, setFeatures] = useState([""]);

  // Handle dynamic feature inputs
  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      destinationName: formData.get("destinationName"),
      image: formData.get("image"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      longDescription: formData.get("longDescription"),
      features: features.filter(f => f.trim() !== ""),
    };

    console.log("Submit this data to backend:", data);
    // TODO: submit data via API or server action
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded shadow-md">
      <h1 className="text-3xl font-extrabold mb-8 text-[#F9A51A]">Add New Hotel</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          type="text"
          placeholder="Hotel Name"
          required
          className="border border-[#F9A51A] p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <input
          name="destinationName"
          type="text"
          placeholder="Destination Name"
          required
          className="border border-[#F9A51A] p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <input
          name="image"
          type="url"
          placeholder="Image URL"
          required
          className="border border-[#F9A51A] p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          min={0}
          required
          className="border border-[#F9A51A] p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <textarea
          name="description"
          placeholder="Short Description"
          rows={3}
          required
          className="border border-[#F9A51A] p-3 rounded w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <textarea
          name="longDescription"
          placeholder="Long Description"
          rows={5}
          required
          className="border border-[#F9A51A] p-3 rounded w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
        />

        <div>
          <label className="block mb-2 font-semibold text-[#F9A51A]">Features</label>
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(idx, e.target.value)}
                placeholder={`Feature ${idx + 1}`}
                className="border border-[#F9A51A] p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
              />
              {features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="bg-red-600 text-white px-3 rounded hover:bg-red-700 transition"
                  aria-label="Remove feature"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="bg-[#F9A51A] text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            + Add Feature
          </button>
        </div>

        <button
          type="submit"
          className="bg-[#F9A51A] hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded w-full sm:w-auto transition"
        >
          Create Hotel
        </button>
      </form>
    </div>
  );
}
