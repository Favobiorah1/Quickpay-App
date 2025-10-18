import { useState } from "react";

export default function AirtimeRecharge() {
  const [form, setForm] = useState({ network: "", phone: "", amount: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recharging ₦${form.amount} on ${form.network} for ${form.phone}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Airtime Recharge</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select name="network" value={form.network} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Network</option>
          <option>MTN</option>
          <option>Airtel</option>
          <option>Glo</option>
          <option>9mobile</option>
        </select>
        <input name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="amount" type="number" placeholder="Amount (₦)" className="w-full border p-2 rounded" onChange={handleChange} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Recharge</button>
      </form>
    </div>
  );
}
