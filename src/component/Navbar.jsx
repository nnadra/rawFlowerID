import { useEffect, useState } from 'react';
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
      <div className="hidden lg:flex gap-8 text-lg text-[#54321A] transition-all ease-in-out">
        <NavLink to="/" className="hover:font-bold cursor-pointer">Home</NavLink>
        <NavLink to="/blogPage" className="hover:font-bold cursor-pointer">Blog</NavLink>
        <NavLink to="/shop" className="hover:font-bold cursor-pointer">Shop</NavLink>
      </div>

      {/* Burger Icon (Mobile Only) */}
      <div className="lg:hidden justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-full left mt-2 w-40 bg-white shadow-md rounded-lg flex flex-col gap-4 p-4 text-[#54321A] lg:hidden text-lg z-50">
          <NavLink to="/" className="hover:font-bold" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/blogPage" className="hover:font-bold" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/shop" className="hover:font-bold" onClick={() => setIsOpen(false)}>Shop</NavLink>
        </div>
      )}

      <img src={Logo} alt="logo" className="lg:w-26 w-16 h-auto" />

      <div className="flex gap-4 items-center">
        {!userName ? (
          <>
            <button onClick={() => navigate('/signin')} className="hidden md:block bg-[#4E2A1E] text-white font-medium text-base py-2 px-5 cursor-pointer">
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} className="hidden md:block text-[#4E2A1E] font-medium text-lg cursor-pointer">
              Sign Up
            </button>
            <div className='lg:hidden md:hidden text-[#4E2A1E]' onClick={() => navigate('/signin')}>
              <User/>
            </div>
          </>
        ) : userName && isLandingPage ? (
          <div className="relative">
            <div className="flex gap-5">
              <div className="hidden lg:flex w-13 h-13 justify-center items-center text-gray-600 rounded-full bg-gray-300">
                        <User className='hidden lg:block' size={30}/>
              </div>
              {/* Desktop */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hidden bg-[#54321A] hover:bg-[#3c2a1d] focus:ring-4 focus:outline-none focus:ring-amber-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:inline-flex items-center"
                type="button"
              >
                {userName}
                <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>

              {/* Mobile */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white lg:hidden focus:ring-4 focus:outline-none focus:ring-amber-950 font-medium rounded-lg text-sm text-center inline-flex items-center"
                type="button"
              >
                <div className="w-10  h-10 flex justify-center items-center text-gray-600 rounded-full bg-gray-300">
                          <User className='' size={20}/>
                </div>
                <svg className="w-2.5 h-2.5 ml-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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