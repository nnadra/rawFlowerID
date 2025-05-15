import React, { useEffect, useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logoo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const isLandingPage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-100 px-6 md:px-12 flex items-center justify-between">
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-lg">
        <NavLink to="/" className="hover:font-bold cursor-pointer">Home</NavLink>
        <NavLink to="/blogPage" className="hover:font-bold cursor-pointer">Blog</NavLink>
        <NavLink to="/shop" className="hover:font-bold cursor-pointer">Shop</NavLink>
      </div>

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

      <img src={Logo} alt="logo" className="lg:w-26 w-16 h-auto" />

      <div className="flex gap-4 items-center">
        {!userName && isLandingPage ? (
          <>
            <button onClick={() => navigate('/signin')} className="hidden md:block bg-[#4E2A1E] text-white font-medium text-base py-2 px-5">
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} className="hidden md:block text-[#4E2A1E] font-medium text-lg">
              Sign Up
            </button>
            <div onClick={() => navigate('/signin')} className='lg:hidden md:hidden text-[#4E2A1E]'><User/></div>
          </>
        ) : userName ? (
          <div className="relative">
            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-amber-900" />
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white bg-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                {userName}
                <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{userName}</div>
                </div>
                <div className="py-2">
                  <button
                    onClick={() => {
                      localStorage.removeItem('user');
                      navigate('/');
                      window.location.reload(); // refresh state
                    }}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
