import React, { useState } from "react";
import { login } from '../services/api';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    setError("");

    try {
      const res = await axios.post("https://backend-oa2q.onrender.com/api/login", {
        email,
        password,
      });

      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-80 bg-gray-900 p-8 rounded-md w-[90%] max-w-md"
      >
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
