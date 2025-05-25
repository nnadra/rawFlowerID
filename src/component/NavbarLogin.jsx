import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../assets/logoo.svg";
import { Heart, ShoppingCart, User, X, Menu } from "lucide-react";
import Cart from "./Cart";
import { useCart } from "./CartContext";

export default function NavbarLogin() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { isCartOpen, setIsCartOpen } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setUserName(user.name);
  }, []);

  return (
    <div className="bg-[#FFF5E3] px-6 md:px-12 flex items-center justify-between relative h-28">
      {/* Left: Profile + NavLinks */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/*  */}

        {/* Desktop NavLinks */}
        <div className="hidden lg:flex  text-[#54321A] gap-8 text-lg">
          <NavLink to="/" className="hover:font-bold cursor-pointer">Home</NavLink>
          <NavLink to="/blogPage" className="hover:font-bold cursor-pointer">Blog</NavLink>
          <NavLink to="/shop" className="hover:font-bold cursor-pointer">Shop</NavLink>
        </div>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Logo - Always centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={Logo} alt="logo" className="lg:w-26 w-16 h-auto" />
      </div>

      {/* Right Icons */}
      <div className=" flex text-[#4E2A1E] items-center gap-4">

        <button className="hidden lg:block">
          <Heart size={25} />
        </button>
        <button className="lg:hidden block">
          <Heart size={20} />
        </button>
        <button className="hidden lg:block" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={25} />
        </button>
        <button className="block lg:hidden" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={20} />
        </button>

           {/* Profile Button Desktop */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-black hidden focus:outline-none font-medium rounded-lg text-lg py-2.5 text-center lg:inline-flex items-center"
          type="button"
        >
          <div className="w-10 h-10 flex justify-center items-center text-gray-600 rounded-full bg-gray-300">
            <User size={20} />
          </div>
          <svg
            className="w-2.5 h-2.5 ml-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Profile Button Mobile */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-white lg:hidden font-medium rounded-lg text-sm text-center inline-flex items-center"
          type="button"
        >
          <div className="w-10 h-10 flex justify-center items-center text-gray-600 rounded-full bg-gray-300">
            <User size={20} />
          </div>
          <svg
            className="w-2.5 h-2.5 ml-3 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>

      {/* Cart Panel */}
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      {/* Dropdown (User) */}
      {dropdownOpen && (
        <div className="absolute  right-4 lg:top-23 top-25 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{userName}</div>
          </div>
          <div className="py-2">
            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
                window.location.reload();
              }}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      )}

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-lg flex flex-col gap-4 p-4 lg:hidden text-lg z-50">
          <NavLink to="/" className="hover:font-bold" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/blogPage" className="hover:font-bold" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/shop" className="hover:font-bold" onClick={() => setIsOpen(false)}>Shop</NavLink>
        </div>
      )}
    </div>
  );
}
