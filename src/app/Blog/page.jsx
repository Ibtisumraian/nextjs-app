"use client";
import React, { useState } from "react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Beaches to Visit in 2025",
      description:
        "Discover the most stunning beaches around the world that should be on your travel bucket list...",
      fullText: `
        This summer, treat yourself to the world's most beautiful beaches. 
        From the Maldives' crystal-clear waters to Bali's lush coastal cliffs, 
        these destinations offer breathtaking scenery, unique cultures, 
        delicious seafood, and unforgettable sunsets. Whether you're looking 
        for a quiet hideaway or a lively beach party, you'll find it here. 
        Remember to respect local environments and leave nothing but footprints.
      `,
      author: "Sarah Mitchell",
      date: "Aug 7, 2025",
      category: "Beaches",
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      description:
        "Traveling the world doesn’t have to drain your wallet. Here’s how to make the most of your money...",
      fullText: `
        Traveling on a budget is all about planning smart. Look for flights during off-peak seasons, 
        and compare prices on multiple booking sites. Stay in hostels, guesthouses, or shared spaces. 
        Use public transportation and enjoy affordable street food. 
        Research free activities like walking tours or public parks. 
        With a bit of creativity, your trip can be both budget-friendly and unforgettable.
      `,
      author: "Daniel Carter",
      date: "Aug 3, 2025",
      category: "Budget",
    },
    {
      id: 3,
      title: "Cultural Etiquette Around the World",
      description:
        "Avoid awkward situations by learning about the customs and traditions of the places you visit...",
      fullText: `
        Understanding cultural etiquette can make your trip smoother and more respectful. 
        In Japan, bowing is a sign of respect. In Italy, greeting with both cheeks is common. 
        Some countries value punctuality highly, others are more relaxed. 
        Learn a few phrases in the local language and avoid sensitive topics. 
        Small gestures of respect can open doors to meaningful connections.
      `,
      author: "Priya Desai",
      date: "Aug 1, 2025",
      category: "Culture",
    },
    {
      id: 4,
      title: "Why Solo Travel Can Change Your Life",
      description:
        "Stepping out into the world on your own might be the most rewarding thing you’ll ever do...",
      fullText: `
        Solo travel offers freedom, self-discovery, and new connections. 
        You can explore at your own pace, follow your instincts, and embrace spontaneity. 
        While it can be intimidating, the confidence you gain is priceless. 
        Research destinations, stay connected with loved ones, and trust your gut. 
        The journey is as much inward as it is outward.
      `,
      author: "Lucas Rivera",
      date: "July 25, 2025",
      category: "Solo Travel",
    },
    {
      id: 5,
      title: "Best Mountain Treks for Beginners",
      description:
        "New to trekking? Here are beginner-friendly trails with unforgettable views...",
      fullText: `
        Hiking doesn't have to be extreme to be rewarding. 
        Trails like Nepal’s Poon Hill, Peru’s Rainbow Mountain, and Canada’s Banff paths 
        are great for beginners. They offer manageable distances, steady climbs, 
        and breathtaking views. Always start with proper shoes, check the weather, 
        and bring enough water. The mountain air will do wonders for your soul.
      `,
      author: "Emma Johansson",
      date: "July 20, 2025",
      category: "Adventure",
    },
    {
      id: 6,
      title: "Travel Safety Tips for 2025",
      description:
        "Stay safe while traveling with these essential modern tips...",
      fullText: `
        In 2025, safety means being tech-smart and travel-wise. 
        Keep digital copies of important documents, use VPNs on public Wi-Fi, 
        and enable tracking features on your phone. Be cautious when sharing 
        your location on social media. In physical safety, avoid poorly lit areas 
        at night, research neighborhoods before booking stays, and trust your instincts.
      `,
      author: "Michael Lee",
      date: "July 15, 2025",
      category: "Safety",
    },
    {
      id: 7,
      title: "Underrated Cities You Must Visit",
      description:
        "Tired of the usual tourist spots? These hidden gems might surprise you...",
      fullText: `
        Cities like Porto (Portugal), Ljubljana (Slovenia), and Medellín (Colombia) 
        offer culture, beauty, and warmth without overwhelming crowds. 
        You can explore local cafés, charming neighborhoods, and authentic experiences 
        that are often missing in bigger tourist hubs. These places give you space to 
        slow down and connect with locals.
      `,
      author: "Sophia Kim",
      date: "July 10, 2025",
      category: "Destinations",
    },
    {
      id: 8,
      title: "How to Pack Like a Pro",
      description:
        "Packing light can make your trip easier and more enjoyable...",
      fullText: `
        Start by making a packing list. Choose versatile clothing you can mix and match. 
        Roll clothes to save space and use packing cubes for organization. 
        Limit yourself to essential electronics and toiletries. 
        Remember that you can buy small necessities at your destination. 
        Traveling light gives you freedom and flexibility.
      `,
      author: "James Anderson",
      date: "July 5, 2025",
      category: "Travel Tips",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bg-gray-50 py-14">
        <div className=" w-11/12 mx-auto min-h-screen ">
      <h1 className="text-4xl font-bold text-[#F9A51A] mb-6">Travel Stories & Tips</h1>

      {/* Blog List */}
      <div className="space-y-6">
        {blogs.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-500 text-sm mb-1">
              {post.date} · {post.category}
            </p>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
            <p className="text-gray-500 text-sm mt-1">By {post.author}</p>
            <button
              onClick={() => setSelectedBlog(post)}
              className="mt-4 cursor-pointer bg-[#F9A51A] hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-3">{selectedBlog.title}</h2>
            <p className="text-gray-500 text-sm mb-4">
              {selectedBlog.date} · {selectedBlog.author}
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedBlog.fullText}
            </p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
