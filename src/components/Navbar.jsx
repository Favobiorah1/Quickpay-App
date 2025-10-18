import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-lg">QuickPay</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/airtime" className="hover:underline">Airtime</Link>
        <Link to="/data" className="hover:underline">Data</Link>
        <Link to="/cable" className="hover:underline">Cable</Link>
      </div>
    </nav>
  );
}
