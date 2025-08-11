"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UpdateForm({ id }) {
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState(null);
  const [features, setFeatures] = useState([]);
  const router = useRouter()

  // Fetch hotel details
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await fetch(`https://nextjs-booking-app-three.vercel.app/api/update-items/${id}`);
        const data = await res.json();
        setHotel(data);
        setFeatures(data.features || [""]);
      } catch (err) {
        console.error("Error fetching hotel:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (index) => setFeatures(features.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      name: formData.get("name"),
      destinationName: formData.get("destinationName"),
      image: formData.get("image"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      longDescription: formData.get("longDescription"),
      features: features.filter((f) => f.trim() !== ""),
    };

    try {
      const res = await fetch(`https://nextjs-booking-app-three.vercel.app/api/update-items/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
        const result = await res.json();
        console.log(result);
        toast.success("Updated successfully!");
        router.push('/Dashboard/items')
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!hotel) return <p>Hotel not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded shadow-md">
      <h1 className="text-3xl font-extrabold mb-8 text-[#F9A51A]">Update Hotel</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          type="text"
          defaultValue={hotel.name}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
        />

        <input
          name="destinationName"
          type="text"
          defaultValue={hotel.destinationName}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
        />

        <input
          name="image"
          type="url"
          defaultValue={hotel.image}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
        />

        <input
          name="price"
          type="number"
          defaultValue={hotel.price}
          min={0}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
        />

        <textarea
          name="description"
          defaultValue={hotel.description}
          rows={3}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
        />

        <textarea
          name="longDescription"
          defaultValue={hotel.longDescription}
          rows={5}
          required
          className="border border-[#F9A51A] p-3 rounded w-full"
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
                className="border border-[#F9A51A] p-2 rounded flex-grow"
              />
              {features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="bg-red-600 text-white px-3 rounded"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="bg-[#F9A51A] text-white px-4 py-2 rounded"
          >
            + Add Feature
          </button>
        </div>

        <button
          type="submit"
          className="bg-[#F9A51A] hover:bg-yellow-600 cursor-pointer text-white px-6 py-3 rounded"
        >
          Update 
        </button>
      </form>
    </div>
  );
}
