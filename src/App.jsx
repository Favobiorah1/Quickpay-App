import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/WelcomePage";
import DashBoard from "./Pages/DashBoard";
import AirtimeRecharge from "./Pages/AirtimeRecharge";
import DataRecharge from "./Pages/DataRecharge";
import CableSubscription from "./Pages/CableSubscription";
import SendMoneyForm from "./components/SendMoney";
import TransactionHistory from "./components/Transactions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/airtime" element={<AirtimeRecharge />} />
        <Route path="/data" element={<DataRecharge />} />
        <Route path="/cable" element={<CableSubscription />} />
        <Route path="/send-money" element={<SendMoneyForm />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </Router>
  );
}
