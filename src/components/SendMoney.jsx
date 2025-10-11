import { useState } from "react";

function SendMoney() {
  const [formData, setFormData] = useState({ recipient: "", amount: "", note: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.recipient || !formData.amount) {
      alert("Please fill all fields!");
      return;
    }
    alert(`₦${formData.amount} sent to ${formData.recipient}!`);
    setFormData({ recipient: "", amount: "", note: "" });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Send Money</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="recipient"
          placeholder="Recipient Name or Email"
          value={formData.recipient}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200 outline-none"
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200 outline-none"
        />
        <textarea
          name="note"
          placeholder="Optional Note"
          value={formData.note}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200 outline-none"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMoney;
