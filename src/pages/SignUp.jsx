import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logoo.svg';
import PicSignup from '../assets/pict-signUp.svg';

const SignUp = () => {
   const navigate = useNavigate();
  return (
    <div className='h-screen flex overflow-hidden'>

     <div className="flex flex-col sm:w-[50%] w-[100%] items-center justify-center px-8">
           <div className="w-full max-w-md flex flex-col items-center px-5">
             <img src={Logo} alt="Logo" className="mb-6" />
             <h1 className="text-4xl font-semibold mb-4">Create Your Account</h1>
             <form className="flex flex-col space-y-5  w-full mt-10">
             <input 
                 type="text" 
                 placeholder="Your Name" 
                 className="px-5 py-4 mb-15 border border-[#4E2A1E] rounded-2xl"
              />
     
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
                 <input 
                 type="number" 
                 placeholder="Phone number" 
                 className="px-4 py-4 bg-[#E5D5B7] text-[#AE968E] rounded-2xl"
               />

               <button 
                 type="button" 
                 onClick={() => navigate("/")}
                 className="bg-[#4E2A1E] text-white py-4 mt-6 rounded-2xl font-medium hover:bg-[#3c2118] transition">
                 Sign Up
               </button>
     
               <button 
                type="button" 
                onClick={() => navigate("/signin")}
                className='text-center text-[#AC8A82]'>Already have an account? Sign in
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
  )
}

export default SignUp
