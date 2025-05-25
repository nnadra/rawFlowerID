// src/pages/SignIn.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logoo.svg';
import PicSignin from '../assets/pict-signIn.svg';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.access_token);

        if (data.user.role === 1) {
          navigate('/admin/dashboard');
        } else {
          navigate('/shop');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF5E3]">
      {/* KIRI: Form */}
      <div className="flex flex-col w-full items-center justify-center px-8">
        <img src={Logo} alt="Logo" className="mb-6" />
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Hi, Welcome back! 👋🏻
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          {error && <div className="text-red-600">{error}</div>}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-5 py-4 w-full rounded-2xl transition-colors duration-200 ${
              email
                ? 'bg-white text-black border border-[#4E2A1E]'
                : 'bg-[#E5D5B7] text-[#AE968E]'
            }`}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`px-5 py-4 w-full rounded-2xl transition-colors duration-200 ${
              password
                ? 'bg-white text-black border border-[#4E2A1E]'
                : 'bg-[#E5D5B7] text-[#AE968E]'
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
  );
}
