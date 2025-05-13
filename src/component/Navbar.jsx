import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logoo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const isLandingPage = location.pathname === '/';

  return (
    <div className="px-6 md:px-12 flex items-center justify-between">
      <div className="flex gap-8 text-[#4E2A1E]">
        <NavLink to="/" className="hover:font-bold cursor-pointer text-lg">Home</NavLink>
        <NavLink to="/blogPage" className="hover:font-bold cursor-pointer text-lg">Blog</NavLink>
        <NavLink to="/shop" className="hover:font-bold cursor-pointer text-lg">Shop</NavLink>
      </div>

      <img src={Logo} alt="logo" className="w-26 h-auto" />

      <div className="flex gap-4 items-center">
        {!userName && isLandingPage ? (
          <>
            <button onClick={() => navigate('/signin')} className="hidden md:block bg-[#4E2A1E] text-white font-medium text-base py-2 px-5">
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} className="hidden md:block text-[#4E2A1E] font-medium text-lg">
              Sign Up
            </button>
          </>
        ) : userName ? (
          <div>
              <div className="flex gap-5">
                <div className="h-10 w-10 rounded-full bg-amber-900"/>
                <button 
                  id="dropdownButton"
                  data-dropdown-toggle="dropdownMenu"
                  className="text-white bg-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                  {userName}
                  <svg NameName="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button> 
              </div>

            {/* Dropdown Menu */}
            <div id="dropdownMenu" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{userName}</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
