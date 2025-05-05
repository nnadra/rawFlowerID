import React from 'react'
import { useNavigate } from "react-router-dom";
import ButtonDark from '../component/common/ButtonDark'

const ShopPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button 
            type="button" 
            onClick={() => navigate("/detailproduk")}
            className="bg-[#4E2A1E] text-white py-4 rounded-2xl font-medium hover:bg-[#3c2118] transition">
            Sign In
        </button>
       </div>
  )
}

export default ShopPage
