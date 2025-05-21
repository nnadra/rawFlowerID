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
      const res = await sanctumLogin({ email, password });
      const { user, access_token } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', access_token);
      navigate('/shop');
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="h-screen flex bg-[#FFF5E3]">
      {/* KIRI: Form */}
      <div className="flex flex-col sm:w-1/2 w-full items-center justify-center px-8">
        <img src={Logo} alt="Logo" className="mb-6" />
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Hi, Welcome back! 👋🏻
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5"
        >
          {error && <div className="text-red-600">{error}</div>}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white border border-[#4E2A1E]"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white border border-[#4E2A1E]"
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
      <div className="relative sm:block hidden sm:w-1/2">
        <img
          src={PicSignin}
          alt="Sign In Illustration"
          className="absolute w-[90%] h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
