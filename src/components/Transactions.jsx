import React from "react";

const transactions = [
  { id: 1, type: "Send Money", amount: 5000, recipient: "Jane Doe", date: "Oct 10, 2025" },
  { id: 2, type: "Airtime Recharge", amount: 1000, recipient: "MTN", date: "Oct 15, 2025" },
  { id: 3, type: "Cable Subscription", amount: 3500, recipient: "DSTV", date: "Oct 16, 2025" },
];

export default function Transactions() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Transaction History 📜</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Recipient</th>
            <th>Amount (₦)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.type}</td>
              <td>{t.recipient}</td>
              <td>{t.amount}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "60px", padding: "20px" },
  title: { fontSize: "2rem", marginBottom: "20px" },
  table: {
    margin: "0 auto",
    borderCollapse: "collapse",
    width: "80%",
  },
  th: { border: "1px solid #ddd", padding: "10px", background: "#f3f4f6" },
  td: { border: "1px solid #ddd", padding: "10px" },
};
