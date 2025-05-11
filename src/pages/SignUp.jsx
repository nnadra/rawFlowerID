import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from '../assets/logoo.svg';
import PicSignup from '../assets/pict-signUp.svg';

const SignUp = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // 🔄 Auto-redirect ke shop kalo udah login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/shop");
    }
  }, []);

  const handleSignUp = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register', {
        name: nama,
        email: email,
        password: password,
        phone: phone,
      });

      // simpen user ke localStorage
      const userData = res.data.user;
      localStorage.setItem("user", JSON.stringify(userData));

      // pindah ke halaman Shop
      navigate("/shop");
    } catch (err) {
      console.error("Failed to sign up:", err);
      alert("Registration failed, check your data again.");
    }
  };

  return (
    <div className='h-screen flex overflow-hidden'>
      <div className="flex flex-col sm:w-[50%] w-[100%] items-center justify-center px-8">
        <div className="w-full max-w-md flex flex-col items-center px-5">
          <img src={Logo} alt="Logo" className="mb-6" />
          <h1 className="text-4xl font-semibold mb-4">Create Your Account</h1>
          <form className="flex flex-col space-y-5 w-full mt-10">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="px-5 py-4 border border-[#4E2A1E] rounded-2xl"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="Email" 
              className="px-5 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Password" 
              className="px-4 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input 
              type="number" 
              placeholder="Phone number" 
              className="px-4 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button 
              type="button" 
              onClick={handleSignUp}
              className="bg-[#4E2A1E] text-white py-4 mt-6 rounded-2xl font-medium hover:bg-[#3c2118] transition"
            >
              Sign Up
            </button>

            <button 
              type="button" 
              onClick={() => navigate("/signin")}
              className='text-center text-[#AC8A82]'>
              Already have an account? Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-[50%] sm:flex hidden">
        <img
          src={PicSignup}
          alt="Pic SignUp"
          className="absolute w-[97%] h-[97%] object-cover m-3 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SignUp;
