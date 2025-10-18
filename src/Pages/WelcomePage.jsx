import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
      <h1 className="text-4xl font-bold mb-3">Hello, June 👋</h1>
      <p className="text-lg mb-6">Welcome to QuickPay — your all-in-one payment platform!</p>
      <Link
        to="/dashboard"
        className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
