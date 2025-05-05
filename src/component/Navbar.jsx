import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logoo.svg'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-12 flex items-center justify-between">
    
    
     <div className="flex gap-8 text-[#4E2A1E]">
     <NavLink to="/" className="hover:text-gray-400 cursor-pointer text-lg">Home</NavLink>
     <NavLink to="/about" className="hover:text-gray-400 cursor-pointer text-lg">About Us</NavLink>
     <NavLink to="/shop" className="hover:text-gray-400 cursor-pointer text-lg">Shop</NavLink>

     </div>

       <img src={Logo} alt="logo" className='w-26 h-auto'/>

     <div className="flex gap-4">

         <button onClick={() => navigate('/signin')} className="hidden md:block bg-[#4E2A1E] text-white font-medium text-base py-2 px-5 ">Sign In</button>
         <button onClick={() => navigate('/signup')} className="hidden md:block text-[#4E2A1E] font-medium text-lg">Sign Up</button>     </div>
    
   </div>
  )
}

export default Navbar

