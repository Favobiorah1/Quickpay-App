import { useState } from "react";

export default function CableSubscription() {
  const [form, setForm] = useState({ provider: "", smartCard: "", plan: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribing ${form.provider} (${form.plan}) for smartcard ${form.smartCard}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Cable Subscription</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select name="provider" value={form.provider} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Provider</option>
          <option>DStv</option>
          <option>GOtv</option>
          <option>Startimes</option>
        </select>

        <input name="smartCard" placeholder="Smartcard Number" className="w-full border p-2 rounded" onChange={handleChange} />

        <select name="plan" value={form.plan} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Plan</option>
          <option>Basic - ₦2500</option>
          <option>Family - ₦4000</option>
          <option>Premium - ₦8000</option>
        </select>

        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Subscribe</button>
      </form>
    </div>
  );
}
