import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";

function App() {
  const [page, setPage] = useState("welcome");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
      {page === "welcome" ? (
        <WelcomePage onGetStarted={() => setPage("login")} />
      ) : (
        <LoginPage onBack={() => setPage("welcome")} />
      )}
    </div>
  );
}

export default App;
