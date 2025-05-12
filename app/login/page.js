"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import './AuthPage.css';

export default function AuthPage() {

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [name, setName] = useState(""); // Name state (only for signup)
  const [error, setError] = useState(""); // Error message state

  // Validate email using regex
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setError(""); // Reset error state

    // Validate form fields
    if (!email || !password || (!isLogin && !name)) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      // Prepare the payload (send different data for login vs signup)
      const payload = isLogin ? { email, password } : { name, email, password };

      // Send the request to the backend API
      const response = await fetch(
  isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/signup',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
);


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      // Display success message
      alert(data.message || (isLogin ? 'Logged in!' : 'Signed up!'));
      
      if (isLogin) {
        router.push('/dashboard'); // 👈 Change `/dashboard` to any page you want
      }


      // Optionally store a token or handle the session after login/signup
    } catch (err) {
      // Handle error in case of invalid credentials
      setError(err.message);
    }
  };

  return (
    <main className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Display error message if any */}
        {error && <p className="error">{error}</p>}

        {/* Show Name input field for Signup only */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        )}

        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Toggle between login and signup */}
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" onClick={() => { setIsLogin(!isLogin); setError(""); }}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </form>
    </main>
  );
}
