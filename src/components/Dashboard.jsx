function Dashboard() {
  const balance = 25000; // Example balance

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Welcome back, Favour 👋</h2>

      {/* Account Balance */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-lg font-medium text-gray-600">Current Balance</h3>
        <p className="text-4xl font-bold text-green-600 mt-2">₦{balance.toLocaleString()}</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <button className="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Send Money
        </button>
        <button className="bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
          Top Up
        </button>
        <button className="bg-gray-200 py-3 rounded-xl font-medium hover:bg-gray-300 transition">
          View History
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <div className="bg-white rounded-xl shadow-md divide-y">
          <div className="p-4 flex justify-between">
            <span>Payment to @Daniel</span>
            <span className="text-red-500">-₦2,000</span>
          </div>
          <div className="p-4 flex justify-between">
            <span>Received from @Chika</span>
            <span className="text-green-500">+₦5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
