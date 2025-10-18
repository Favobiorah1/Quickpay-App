import { useState } from "react";

export default function DataRecharge() {
  const [form, setForm] = useState({ network: "", phone: "", plan: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Buying ${form.plan} data for ${form.phone} on ${form.network}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Data Purchase</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select name="network" value={form.network} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Network</option>
          <option>MTN</option>
          <option>Airtel</option>
          <option>Glo</option>
          <option>9mobile</option>
        </select>

        <input name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" onChange={handleChange} />

        <select name="plan" value={form.plan} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Data Plan</option>
          <option>500MB - ₦200</option>
          <option>1GB - ₦500</option>
          <option>2GB - ₦900</option>
          <option>5GB - ₦2000</option>
        </select>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Buy Data</button>
      </form>
    </div>
  );
}
