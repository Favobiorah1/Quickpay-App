function Transactions() {
  const transactions = [
    { id: 1, type: "Sent", to: "Daniel", amount: "-₦2,000", date: "Oct 5, 2025" },
    { id: 2, type: "Received", from: "Chika", amount: "+₦5,000", date: "Oct 4, 2025" },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Transaction History</h2>
      <div className="bg-white rounded-2xl shadow-md divide-y">
        {transactions.map((t) => (
          <div key={t.id} className="p-4 flex justify-between">
            <div>
              <p className="font-medium">{t.type === "Sent" ? `To ${t.to}` : `From ${t.from}`}</p>
              <p className="text-sm text-gray-500">{t.date}</p>
            </div>
            <p className={t.type === "Sent" ? "text-red-500" : "text-green-500"}>{t.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
