import { ShoppingBasket } from 'lucide-react';
import { useNavigate} from 'react-router-dom';
import React from 'react'
const menuItems = ["Mini", "Regular"];

const CardShop = ({ product }) => {
    const navigate = useNavigate();
  return (
    <div className='w-80 m-5 '>
        {/* ini image */}
      <div className='w-80 h-80 bg-gray-200  overflow-hidden' onClick={()=> navigate (`/detailproduk/${product.id}`)} >
        <img src={product.images[0]} className='w-full h-full object-cover hover:transition-transform hover:scale-130 ease-in-out duration-700'/>
      </div>
      <h1 className='text-lg mt-5'>{product.name}</h1>
      <h1 className='font-veryvogue italic text-md'>{product.description?.slice(0, 60) + '...'}</h1>

        <div className='my-4'>
          <div className="flex border-[#33261f] bg-cover bg-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="w-fit py-2 px-3 text-center border border-[#33261f] italic text-[#443122] hover:bg-[#583529] hover:text-white cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between px-5 py-3 bg-[url('/src//assets/imageHeader.png')] text-amber-950 border-amber-950 border-1 rounded hover:shadow-lg transition-shadow duration-500 ease-in-out">
          <p className='flex gap-2 text-xl font-veryvogue'> <ShoppingBasket/> Add to Cart</p>
          <p className='font-bold'>Rp 200.000</p>
        </div>
    </div>
  )
}

export default CardShop