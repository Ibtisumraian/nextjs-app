"use client";
import React, { useState } from "react";

export default function Page() {
  const news = [
    {
      id: 1,
      title: "New Tourist Spots Opening in 2025",
      description: "Several new destinations are being opened for travelers...",
      fullDescription:
        "Several new destinations are being opened for travelers around the world, including hidden gems in Southeast Asia and Europe. These destinations are designed to boost local economies and provide unique experiences for adventurers.",
      image: "https://source.unsplash.com/400x250/?travel",
      date: "Aug 5, 2025",
    },
    {
      id: 2,
      title: "Airline Prices Drop Worldwide",
      description: "Good news for travelers as ticket prices are falling...",
      fullDescription:
        "Global airlines have announced a significant drop in ticket prices following a surge in tourism demand. This is expected to make travel more accessible to millions and boost tourism economies worldwide.",
      image: "https://source.unsplash.com/400x250/?airplane",
      date: "Aug 4, 2025",
    },
    {
      id: 3,
      title: "Top 10 Beaches to Visit This Summer",
      description: "From Maldives to Bali, here are the most beautiful beaches...",
      fullDescription:
        "This summer’s list of top beaches includes breathtaking spots in the Maldives, Bali, Seychelles, and the Caribbean. Each offers crystal-clear waters, soft white sands, and unforgettable sunsets.",
      image: "https://source.unsplash.com/400x250/?beach",
      date: "Aug 3, 2025",
    },
    {
      id: 4,
      title: "New Visa-Free Countries for 2025",
      description: "Travel just got easier for many passport holders...",
      fullDescription:
        "Several countries have announced new visa-free entry policies for 2025. This is expected to encourage tourism and strengthen cultural exchange between nations.",
      image: "https://source.unsplash.com/400x250/?passport",
      date: "Aug 2, 2025",
    },
    {
      id: 5,
      title: "Eco-Tourism on the Rise",
      description: "Travelers are choosing eco-friendly destinations...",
      fullDescription:
        "Eco-tourism is gaining massive popularity, with travelers opting for destinations that prioritize sustainability and environmental preservation.",
      image: "https://source.unsplash.com/400x250/?forest",
      date: "Aug 1, 2025",
    },
    {
      id: 6,
      title: "Space Tourism Tickets Selling Fast",
      description: "Booking a trip to space is now more possible than ever...",
      fullDescription:
        "With companies like SpaceX and Blue Origin pushing boundaries, space tourism tickets are selling rapidly. Early participants will experience a few minutes of weightlessness and breathtaking views of Earth.",
      image: "https://source.unsplash.com/400x250/?space",
      date: "Jul 30, 2025",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = news.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 py-14">
        <div className=" w-11/12 mx-auto min-h-screen ">
      <h1 className="text-4xl font-bold text-[#F9A51A] mb-6">Latest News</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 mb-6"
      />

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{article.date}</p>
              <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              <p className="text-gray-700 mt-2">{article.description}</p>
              <button
                onClick={() => setSelectedNews(article)}
                className="mt-4 cursor-pointer bg-[#F9A51A] hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedNews.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{selectedNews.date}</p>
            <p className="text-gray-700">{selectedNews.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
