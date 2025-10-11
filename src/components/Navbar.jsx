import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">QuickPay</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/send" className="hover:underline">Send Money</Link>
        <Link to="/transactions" className="hover:underline">Transactions</Link>
      </div>
    </nav>
  );
}

export default Navbar;
