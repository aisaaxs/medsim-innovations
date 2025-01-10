'use client';

import { useState } from 'react';
import Image from 'next/image';
import MedSimLogo from '../../../../images/Med Sim Logo.png';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        window.location.href = '/admin/dashboard';
      } else {
        setMessage(result.error || 'Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={MedSimLogo}
            alt="Company Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-700">
            MedSim Innovations
          </h1>
        </div>
        <h2 className="text-xl font-semibold mb-6 text-center bg-gray-900 p-2 rounded-xl text-white">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-10 space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          >
            Login
          </button>
          {message && <p className={`mt-4 text-center font-semibold ${message === "Login successful!" ? "text-green-500" : "text-red-500"}`}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
