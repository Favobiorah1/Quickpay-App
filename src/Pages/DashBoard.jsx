import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.welcome}>Hello JUNE 👋</h1>
      <p style={styles.subtext}>Welcome back to QuickPay! What would you like to do today?</p>

      <div style={styles.grid}>
        <Link to="/send-money" style={styles.card}>
          <div style={styles.icon}>💸</div>
          <h2 style={styles.cardTitle}>Send Money</h2>
          <p style={styles.cardDesc}>Transfer cash instantly to any account.</p>
        </Link>

        <Link to="/transactions" style={styles.card}>
          <div style={styles.icon}>📜</div>
          <h2 style={styles.cardTitle}>Transaction History</h2>
          <p style={styles.cardDesc}>View all your past transactions.</p>
        </Link>

        <Link to="/airtime" style={styles.card}>
          <div style={styles.icon}>📱</div>
          <h2 style={styles.cardTitle}>Airtime Recharge</h2>
          <p style={styles.cardDesc}>Top-up airtime for any network provider.</p>
        </Link>

        <Link to="/data" style={styles.card}>
          <div style={styles.icon}>🌐</div>
          <h2 style={styles.cardTitle}>Data Subscription</h2>
          <p style={styles.cardDesc}>Buy data plans fast and easy.</p>
        </Link>

        <Link to="/cable" style={styles.card}>
          <div style={styles.icon}>📺</div>
          <h2 style={styles.cardTitle}>Cable TV</h2>
          <p style={styles.cardDesc}>Renew your cable subscription (DSTV, GOTV, Startimes).</p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  welcome: {
    fontSize: "2.5rem",
    color: "#2563eb", // ✅ fixed color string
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#111",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2563eb",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#555",
  },
};
