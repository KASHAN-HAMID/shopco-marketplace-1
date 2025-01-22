"use client"
import { useState} from 'react';

export default function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-black text-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-lg font-semibold ${isSignIn ? 'bg-white text-black' : 'bg-transparent text-white'}`}
            onClick={toggleForm}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-2 text-lg font-semibold ${!isSignIn ? 'bg-white text-black' : 'bg-transparent text-white'}`}
            onClick={toggleForm}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          <form>
            <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 bg-transparent border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 bg-transparent border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form>
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-transparent border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 bg-transparent border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 bg-transparent border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
