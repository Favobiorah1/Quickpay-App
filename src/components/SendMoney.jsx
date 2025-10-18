import React, { useState } from "react";

export default function SendMoney() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipient || !amount) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus(`✅ You’ve successfully sent ₦${amount} to ${recipient}!`);
    setRecipient("");
    setAmount("");
  };

  return (
    <div className="send-money-page" style={styles.container}>
      <h1 style={styles.title}>Send Money 💸</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Recipient Name or Account"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Send Now
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "80px" },
  title: { fontSize: "2rem", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  input: {
    width: "250px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  status: { marginTop: "20px", color: "#16a34a", fontWeight: "bold" },
};
