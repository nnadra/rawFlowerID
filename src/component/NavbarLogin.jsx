import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logoo.svg';
import { Heart, ShoppingCart } from 'lucide-react'

const NavbarLogin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  return (
    <div className="bg-[#FFF5E3] px-6 md:px-12 flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <div className="w-13 h-13 rounded-full bg-amber-950"></div>
        <h1 className="text-xl">{userName || 'Guest'}</h1>
      </div>

      <img src={Logo} alt="logo" className="w-26 h-auto" />

      <div className="flex text-[#4E2A1E] items-center gap-4">
        <button><Heart size={30}/></button>
        <button onClick={() => navigate('/cart')}><ShoppingCart size={30}/></button>
      </div>
    </div>
  );
};

export default NavbarLogin;
