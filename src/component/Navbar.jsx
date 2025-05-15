import React, { useEffect, useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logoo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const isLandingPage = location.pathname === '/';

  return (
    <div className="relative z-100 px-6 md:px-12 flex items-center justify-between">
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-lg">
        <NavLink to="/" className="hover:font-bold cursor-pointer">Home</NavLink>
        <NavLink to="/blogPage" className="hover:font-bold cursor-pointer">Blog</NavLink>
        <NavLink to="/shop" className="hover:font-bold cursor-pointer">Shop</NavLink>
      </div>

      <img src={Logo} alt="logo" className="lg:w-26 w-16 h-auto" />

      {/* Burger Icon (Mobile Only) */}
      <div className="lg:hidden justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className='text-[#4E2A1E]'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-full left mt-2 w-40 bg-white shadow-md rounded-lg flex flex-col gap-4 p-4 lg:hidden text-lg z-50 text-[#4E2A1E]">
          <NavLink to="/" className="hover:font-bold" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/blogPage" className="hover:font-bold" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/shop" className="hover:font-bold" onClick={() => setIsOpen(false)}>Shop</NavLink>
        </div>
      )}

      <div className="flex gap-4 items-center">
        {!userName && isLandingPage ? (
          <>
            <button
              onClick={() => navigate('/signin')}
              className="hidden md:block bg-[#4E2A1E] text-white font-medium text-base py-2 px-5 rounded-lg hover:bg-[#3c2118]"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="hidden md:block text-[#4E2A1E] font-medium text-lg"
            >
              Sign Up
            </button>
            <div onClick={() => navigate('/signin')} className='lg:hidden md:hidden text-[#4E2A1E]'><User/></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
