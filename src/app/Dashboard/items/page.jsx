"use client"
import Link from "next/link";

export default function ItemsPage() {
  // Example items, replace with your data fetching
  const items = [
    { id: "1", title: "Event A" },
    { id: "2", title: "Event B" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-yellow-50 rounded shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-extrabold text-[#F9A51A]">Manage Items</h1>
        <Link
          href="/dashboard/items/new"
          className="bg-[#F9A51A] hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold transition"
        >
          Create New
        </Link>
      </div>

      <ul className="space-y-4">
        {items.map(item => (
          <li
            key={item.id}
            className="border border-[#F9A51A] rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0"
          >
            <span className="font-semibold text-lg">{item.title}</span>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/dashboard/items/${item.id}`}
                className="text-[#F9A51A] hover:text-yellow-700 font-medium"
              >
                View
              </Link>
              <Link
                href={`/dashboard/items/${item.id}/edit`}
                className="text-yellow-600 hover:text-yellow-800 font-medium"
              >
                Edit
              </Link>
              <form
                action={`/api/items/${item.id}`}
                method="POST"
                onSubmit={(e) =>
                  confirm("Delete this item?") || e.preventDefault()
                }
              >
                <input type="hidden" name="_method" value="DELETE" />
                <button
                  type="submit"
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
