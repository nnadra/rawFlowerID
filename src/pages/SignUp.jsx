// 📦 Import library & assets
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from '../assets/logoo.svg';
import PicSignup from '../assets/pict-signUp.svg';

const SignUp = () => {
  const navigate = useNavigate();

  // 📋 State form input
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true); // validasi nomor telepon

  // 🔄 Cek apakah user sudah login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/shop");
    }
  }, [navigate]);

  // 🔐 Handle sign up
  const handleSignUp = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register', {
        name: nama,
        email: email,
        password: password,
        phone: phone,
      });

      // ✅ Simpan ke localStorage & redirect
      const userData = res.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/shop");
    } catch (err) {
      console.error("Failed to sign up:", err.response?.data || err.message);
      alert("Registration failed, check your data again.");
    }
  };

  // Validasi nomor HP: hanya boleh angka
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setPhone(value);
      setIsValid(true);
    } else {
      setIsValid(false); // munculin tulisan 'using number only'
    }
  };

  return (
    <div className='h-screen flex overflow-hidden'>
      {/* 📝 Form Sign Up */}
      <div className="flex flex-col sm:w-[50%] w-[100%] items-center justify-center px-8">
        <div className="w-full max-w-md flex flex-col items-center px-5">
          <img src={Logo} alt="Logo" className="mb-6" />
          <h1 className="text-4xl font-semibold mb-4">Create Your Account</h1>
          <form className="flex flex-col space-y-5 w-full mt-10">
            
            {/* Nama */}
            <input 
              type="text" 
              placeholder="Your Name" 
              className={`px-5 py-4 w-full rounded-2xl transition duration-200 ${
                nama ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            {/* Email */}
            <input 
              type="text" 
              placeholder="Email" 
              className={`px-5 py-4 w-full rounded-2xl transition duration-200 ${
                email ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input 
              type="password" 
              placeholder="Password" 
              className={`px-5 py-4 w-full rounded-2xl transition duration-200 ${
                password ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Phone number */}
            <div className="flex flex-col space-y-1">
              <input 
                type="text" 
                placeholder="Phone number" 
                className={`px-5 py-4 w-full rounded-2xl transition duration-200 ${
                  phone ? 'bg-white text-black border border-[#4E2A1E]' : 'bg-[#E5D5B7] text-[#AE968E]'
                }`}
                value={phone}
                onChange={handlePhoneChange}
              />
              {!isValid && (
                <span className="text-sm text-red-800 mt-1 ml-2">* Using number only</span>
              )}
            </div>

            {/* Tombol Sign Up */}
            <button 
              type="button" 
              onClick={handleSignUp}
              className="bg-[#4E2A1E] text-white py-4 mt-6 rounded-2xl font-medium hover:bg-[#3c2118] transition"
            >
              Sign Up
            </button>

            {/* Link ke Sign In */}
            <button 
              type="button" 
              onClick={() => navigate("/signin")}
              className='text-center text-[#AC8A82]'>
              Already have an account? Sign in
            </button>
          </form>
        </div>
      </div>

      {/* 📸 Gambar di kanan (hanya tampil di desktop) */}
      <div className="relative w-[50%] sm:flex hidden">
        <img
          src={PicSignup}
          alt="Pic SignUp"
          className="absolute w-[97%] h-[97%] object-cover m-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;
