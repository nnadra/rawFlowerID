import React from 'react'
import ProgressBar from '../component/ProgressBar'
import CardProgress from '../component/CardProgress'
import { useNavigate } from "react-router-dom";

const OrderStatus = () => {
const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="p-10">
        <h1 className="text-4xl text-center text-[#703B2B] mb-6">
          Ding dong! 🎁 Your order has arrived. Enjoy!
        </h1>
        <ProgressBar />
        <CardProgress />
        <button onClick={()=>{navigate("/shop")}} className='bg-amber-900 transition-all cursor-pointer text-2xl text-white text-center w-full p-5 font-bold mt-4 rounded-2xl hover:bg-amber-950'>
            Back to Shop
        </button>
      </div>
    </div>
  )
}

export default OrderStatus
