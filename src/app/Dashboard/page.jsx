export default function DashboardHome() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to your Dashboard
      </h1>
      <p className="mb-8 text-gray-600">
        Here’s a quick overview of your activity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Example stats cards */}
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Items Added</h2>
          <p className="text-3xl font-bold text-yellow-700">24</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pending Orders</h2>
          <p className="text-3xl font-bold text-yellow-700">7</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-3xl font-bold text-yellow-700">12</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Profile Completeness</h2>
          <p className="text-3xl font-bold text-yellow-700">80%</p>
        </div>
      </div>
    </div>
  );
}
