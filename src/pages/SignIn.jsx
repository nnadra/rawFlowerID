// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient, { sanctumLogin } from '../utils/helper';
import Logo from '../assets/logoo.svg';
import PicSignin from '../assets/pict-signIn.svg';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan ke localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.access_token);

        // Redirect sesuai role
        if (data.user.role === 1) {
          navigate("/admin/dashboard");
        } else {
          navigate("/shop");
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#FFF5E3] justify-between">
      {/* form kiri */}
      <div className="flex flex-col sm:w-[50%] w-[100%] items-center justify-center px-8">
        <div className="w-full max-w-md flex flex-col items-center px-5">
          <img src={Logo} alt="Logo" className="mb-6" />
          <h1 className="text-4xl font-semibold mb-10 lg:text-left text-center">Hi, Welcome back! 👋🏻</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full mt-10">
            
            {error && <div className="text-red-600 mb-4">{error}</div>}

            <button 
              type="button" 
              className="bg-[#4E2A1E] text-white py-4 px-10 rounded-2xl font-medium hover:bg-[#3c2118] transition">
              Sign In with Google
            </button>
            <button className='color-[#4E2A1E]'>Or</button>

            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`px-5 py-4 rounded-2xl transition-colors duration-200 ${
                email ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`px-5 py-4 w-full rounded-2xl transition-colors duration-200 ${
                password ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
          />

          <button
            type="submit"
            className="w-full bg-[#4E2A1E] text-white py-4 rounded-2xl hover:bg-[#3c2218] transition"
          >
            Sign In
          </button>

          <p className="text-center text-[#AC8A82]">
            You don’t have an account?{' '}
            <span
              className="font-bold cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>

      {/* KANAN: Ilustrasi */}
      <div className="relative w-[100%] sm:flex hidden">
              <img
                src={PicSignin}
                alt="Pic SignUp"
                className="absolute w-[97%] h-[97%] object-cover m-3 rounded-lg"
              />
            </div>
    </div>
    </div>
  )}

