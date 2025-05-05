import { useState } from 'react';
import product1 from '../assets/sunflower.svg';
import product2 from '../assets/sunflower1.svg';
import product3 from '../assets/sunflower2.svg';
import product4 from '../assets/sunflower3.svg';
import product5 from '../assets/sunflower4.svg';

import paper1 from '../assets/brown-paper.svg';
import paper2 from '../assets/rose-paper.svg';
import paper3 from '../assets/white-paper.svg';

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export default function DetailProduct() {
  const [liked, setLiked] = useState(false); // ← ini yang perlu ditambahka
    return (
        
      <div className="bg-[#FFFFFF] p-10 mt-8 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src={product1}  // ganti sesuai path gambar kamu
              alt="Main Product"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex gap-4">
              <img src={product1} alt="" className="w-26 h-24 rounded-md object-cover" />
              <img src={product2} alt="" className="w-26 h-24 rounded-md object-cover" />
              <img src={product3}  alt="" className="w-26 h-24 rounded-md object-cover" />
              <img src={product4}  alt="" className="w-26 h-24 rounded-md object-cover" />
            </div>
          </div>
  
          {/* Product Detail Section */}
          <div className="w-full md:w-1/2 space-y-5 pt-12">
            <div className="flex gap-2">
              <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">Popular</span>
              <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">Fresh Flower</span>
            </div>
  
            <h1 className="text-3xl font-semibold text-[#4E2A1E]">Sunflower honey Bouquet</h1>
            <h2 className="text-2xl font-bold text-[#4E2A1E] underline">Rp. 200.000,00</h2>
  
            {/* Paper Color */}
            <div>
              <h2 className="font-medium text-[#4E2A1E]">Paper color</h2>
              <div className="flex gap-3 mt-2">
                <img src={paper1} alt="" className="w-10 h-10 rounded object-cover " />
                <img src={paper2} alt="" className="w-10 h-10 rounded object-cover" />
                <img src={paper3} alt="" className="w-10 h-10 rounded object-cover" />
              </div>
            </div>
  
            {/* Additional */}
            <div>
              <h2 className="font-medium text-[#4E2A1E] mt-4">Additional</h2>
              <div className="flex gap-2 mt-2 flex-wrap">
                <p className="px-3 py-1 rounded border text-[#4E2A1E] hover:bg-[#4E2A1E] hover:text-white">Ribbon</p>
                <p className="px-3 py-1 rounded border text-[#4E2A1E] hover:bg-[#4E2A1E] hover:text-white">Thanks Card</p>
                <p className="px-3 py-1 rounded border text-[#4E2A1E] hover:bg-[#4E2A1E] hover:text-white">Card holder</p>
              </div>
            </div>
  
            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
  {/* Button Add to Cart */}
  <button className="bg-[#4E2A1E] text-white px-42 py-2 rounded-lg text-lg hover:bg-[#3c2218] transition">
    Add to cart
  </button>

  {/* Button Love */}
  <button
    className="w-10 h-10 border border-[#4E2A1E] rounded-lg flex items-center justify-center"
    onClick={() => setLiked(!liked)}
  >
    {liked ? (
      <FaHeart className="text-red-500 transition-all duration-300 transform scale-110" />
    ) : (
      <FiHeart className="text-[#4E2A1E] transition-all duration-300 transform hover:scale-110" />
    )}
  </button>
</div>
          </div>
        </div>
      </div>
    );
  }
  