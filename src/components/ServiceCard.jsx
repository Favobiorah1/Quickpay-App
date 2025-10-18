import { Link } from "react-router-dom";

export default function ServiceCard({ title, desc, path }) {
  return (
    <Link
      to={path}
      className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </Link>
  );
}
