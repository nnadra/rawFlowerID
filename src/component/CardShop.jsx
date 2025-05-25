import { ShoppingBasket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const menuItems = ["Mini", "Regular"];

const CardShop = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <div className='w-full max-w-[260px] pe-3 md:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px] m-2 lg:m-5'>
      {/* Image */}
      <div 
        className='w-full h-40 lg:h-80 bg-gray-200 overflow-hidden cursor-pointer' 
        onClick={() => navigate(`/detailproduk/${product.id}`)}
      >
        <img 
          src={product.images[0]} 
          className='w-full h-full object-cover hover:transition-transform hover:scale-130 ease-in-out duration-700' 
        />
      </div>

      <h1 className='text-lg mt-5'>{product.name}</h1>
      <h1 className='lg:block hidden font-veryvogue italic text-md'>
        {product.description?.slice(0, 60) + '...'}
      </h1>

      <p className='lg:hidden block font-bold text-lg my-2'>
        Rp. {Number(product?.original_price).toLocaleString('id-ID')}
      </p>

      {/* Size Option */}
      <div className='hidden lg:block my-4'>
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

      {/* Bottom Bar */}
      <div className="flex justify-between px-5 py-3 bg-[url('/src/assets/imageHeader.png')] text-amber-950 border-amber-950 border-1 rounded hover:shadow-lg transition-shadow duration-500 ease-in-out">
        <p className='flex gap-2 font-veryvogue'>
          <ShoppingBasket /> Add to Cart
        </p>
        <p className='hidden lg:block font-bold lg:text-xl text-sm'>
          Rp. {Number(product?.original_price).toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  )
}

export default CardShop
