import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logoo.svg';
import PicSignin from '../assets/pict-signIn.svg';

fetch('http://127.0.0.1:8000/api/login', {
  method: 'POST', //method login = POST
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: '',
    password: '',
  }),
});

const SignIn = () => {
  const navigate = useNavigate();
  
  return (
    
    <div className="h-screen flex overflow-hidden bg-[#FFF5E3] justify-between">
    {/* form kiri */}
    <div className="flex flex-col sm:w-[50%] w-[100%] items-center justify-center px-8">
      <div className="w-full max-w-md flex flex-col items-center px-5">
        <img src={Logo} alt="Logo" className="mb-6" />
        <h1 className="text-4xl font-semibold mb-15">Hi, Welcome back! 👋🏻</h1>
        <form className="flex flex-col space-y-5 w-full mt-10">
          <button 
            type="submit" 
            className="bg-[#4E2A1E] text-white py-4 px-10 rounded-2xl font-medium hover:bg-[#3c2118] transition">
            Sign In with Google
          </button>
          <button className='color-[#4E2A1E]'>Or</button>

          <input 
                 type="text" 
                 placeholder="Email" 
                 className="px-5 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
          />
         <input 
                 type="password" 
                 placeholder="Password" 
                 className="px-4 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
          />
          <button 
            type="button" 
            onClick={() => navigate("/")}
            className="bg-[#4E2A1E] text-white py-4 rounded-2xl font-medium hover:bg-[#3c2118] transition">
            Sign In
          </button>
        
          <button 
            type="button" 
            onClick={() => navigate("/signup")}
            className='text-center text-[#AC8A82]'>You dont have an account? Sign Up
          </button>
        </form>
      </div>
    </div>

    {/* Gambar kanan */}
    <div className="relative w-[50%] sm:flex hidden">
        <img
          src={PicSignin}
          alt="Farmer in rice field"
          className="absolute w-[90%] h-[100%] object-cover m-3 rounded-lg"
        />
      </div>
  </div>
  
  )
}

export default SignIn
