import React from "react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    description: "The City of Light, famous for the Eiffel Tower and charming streets.",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
    description: "A vibrant metropolis blending modern tech and traditional culture.",
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    description: "Tropical paradise with stunning beaches and lush landscapes.",
  },
  {
    id: 4,
    name: "New York City, USA",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    description: "The city that never sleeps, full of iconic landmarks and culture.",
  },
];

const TopDestinations = () => {
  return (
    <section className="w-11/12 mx-auto px-4 py-16 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-500 text-center">
        Top Destinations
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map(({ id, name, image, description }) => (
          <div
            key={id}
            className="bg-yellow-50 border border-yellow-200 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-70 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
