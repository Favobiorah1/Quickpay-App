function WelcomePage({ onGetStarted }) {
  return (
    <div className="text-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuickPay 💸</h1>
      <p className="text-lg mb-8">
        Fast, secure, and simple payments at your fingertips.
      </p>
      <button
        onClick={onGetStarted}
        className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default WelcomePage;
