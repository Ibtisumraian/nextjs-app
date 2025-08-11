"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen ">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-20 p-2 rounded-md bg-[#F9A51A] text-white md:hidden"
        aria-label="Toggle sidebar"
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {sidebarOpen ? (
            // X icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
<aside
  className={`
    fixed inset-y-0 left-0 z-10 w-64 bg-[#F9A51A99] p-6 pt-16 text-white min-h-screen overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:fixed md:flex-shrink-0
  `}
>
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
          <Link
            href={"/"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            href={"/Dashboard"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            Overview
          </Link>
          <Link
            href={"/Dashboard/items/new"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            Add Items
          </Link>
          <Link
            href={"/Dashboard/items"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            Manage Items
          </Link>
          <Link
            href={"/Dashboard/Bookings"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            My Bookings
          </Link>
          {/* <Link
            href={"/Dashboard/profile"}
            className="block hover:bg-yellow-50 hover:text-black p-2 rounded transition-colors"
          >
            Profile
          </Link> */}
        </nav>
      </aside>

      {/* Content */}
      <main
        className=" bg-yellow-50 p-8 pt-16 md:ml-64 min-h-[1080px] w-full"
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        {children}
      </main>
    </div>
  );
}
