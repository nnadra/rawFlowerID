import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logoo.svg';
import PicSignin from '../assets/pict-signIn.svg';

const SignIn = () => {
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
        // ✅ simpan user dan token ke localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.access_token); // <--- Tambahin ini

        // ✅ redirect ke halaman shop
        navigate("/shop");
      } else {
        // ❌ kalau login gagal, tampilkan error dari backend
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
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
            
            {/* tampilkan error kalau ada */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`px-4 py-4 rounded-2xl transition-colors duration-200 ${
                password ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
            />

            <button 
              type="submit"
              className="bg-[#4E2A1E] text-white py-4 rounded-2xl font-medium hover:bg-[#3c2118] transition">
              Sign In
            </button>

            <button 
              type="button" 
              onClick={() => navigate("/signup")}
              className='text-center text-[#AC8A82] cursor-pointer' >
              You don't have an account? <span className='font-bold'>Sign Up</span>
            </button>
          </form>
        </div>
      </div>

      {/* gambar kanan */}
      <div className="relative w-[50%] sm:flex hidden">
        <img
          src={PicSignin}
          alt="Farmer in rice field"
          className="absolute w-[90%] h-[100%] object-cover m-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignIn;
