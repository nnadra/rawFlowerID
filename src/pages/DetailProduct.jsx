// DetailProduct.jsx
import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import Footer from '../component/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../component/CartContext';
import toast from 'react-hot-toast';
import axiosClient from '../utils/helper';


export default function DetailProduct() {
  const { id } = useParams(); // Tangkap ID dari URL
  const [detailProduct, setDetailProduct] = useState(null);
  const [liked, setLiked] = useState(false); // buat toggle love button 
  const [activeTab, setActiveTab] = useState('detail'); 
  const [activeImg, setActiveImg] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axiosClient.get(`/api/products/${id}/detail`)
      .then((res) => {
        setDetailProduct(res.data.data); // tergantung format respons API kamu
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err);
      });
  }, [id]);


  useEffect(() => {
    if (detailProduct && detailProduct.images && detailProduct.images.length > 0) {
      setActiveImg(detailProduct.images[0]);
    }
  }, [detailProduct]);

  return (
    <div className='bg-white'>
      {/* SECTION 1: ATAS - FOTO & INFO PRODUK */}
      <div className="bg-white py-10 px-6 md:px-20 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* KIRI: GAMBAR PRODUK */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* set activeImg biar gambar gede dinamis */}
            <img src={activeImg} alt="Main Product" className="rounded-xl w-full object-cover" /> 


            {/* Paggil activeImg biar gambar gede dinamis ketika di klik*/}
            <div className="flex gap-4">
              {detailProduct?.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  // alt={`product-${i}`}
                  className={`w-26 h-24 rounded-md object-cover cursor-pointer transition-all duration-200 ${
                    activeImg === img ? 'scale-105 ring-2 ring-[#4E2A1E]' : ''
                  }`}
                  onClick={() => setActiveImg(img)}
                />
              ))}
            </div>

          </div>

          {/* KANAN: DETAIL PRODUK */}
          <div className="w-full md:w-1/2 space-y-5 pt-12">
            {/* Tag kategori */}
            <div className="flex gap-2">
              {/* contoh conditional rendering yg ga perlu if-else */}
              {detailProduct?.popular && (
                <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">Popular</span>
              )}
              {detailProduct?.category && (
                <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">{detailProduct.category}</span>
              )}
            </div>

            <h1 className="text-3xl font-semibold text-[#4E2A1E]">{detailProduct?.name}</h1>
            <h2 className="text-2xl font-bold text-[#4E2A1E] underline">Rp. {Number(detailProduct?.original_price).toLocaleString('id-ID')}</h2>

            {/* Paper Color */}
            <div>
              <h2 className="font-medium text-[#4E2A1E]">Paper color</h2>
              <div className="flex gap-3 mt-2">
                {detailProduct?.colors?.map((color, i) => (
                  <img
                    key={i}
                    src={color.image}
                    alt={color.name}
                    className="w-10 h-10 rounded object-cover"
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Additional */}
            <div>
              <h2 className="font-medium text-[#4E2A1E] mt-4">Additional</h2>
              <div className="flex gap-2 mt-2 flex-wrap">
                {['Ribbon', 'Thanks Card', 'Card holder'].map((item, i) => (
                  <p key={i} className="px-3 py-1 rounded border text-[#4E2A1E] hover:bg-[#4E2A1E] hover:text-white">{item}</p>
                ))}
              </div>
            </div>

            {/* Button Add to Cart + Love */}
            <div className="flex items-center gap-4 mt-6">
              <button  onClick={() =>
              addToCart({
                product_id: detailProduct.id,
                quantity: 1, // default 1
              }).then(() => {
                toast.success('Produk berhasil ditambahkan ke cart!');
              }).catch(() => {
                toast.error('Gagal menambahkan produk ke cart!');
              })}
              className="bg-[#4E2A1E] text-white px-10 py-2 rounded-lg text-lg hover:bg-[#3c2218] transition">
                Add to cart
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className="w-10 h-10 border border-[#4E2A1E] rounded-lg flex items-center justify-center"
              >
                {liked
                  ? <FaHeart className="text-red-500 transition-all duration-300 transform scale-110" />
                  : <FiHeart className="text-[#4E2A1E] transition-all duration-300 transform hover:scale-110" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: BAWAH - DETAIL + REVIEW */}
      <div className="px-6 md:px-20 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
          {/* KIRI: DESCRIPTION */}
          <div className="w-full md:w-1/2">
            <div className="flex gap-4 mb-4">
              <h1
              onClick={() => setActiveTab('detail')}
              className={`p-1 px-3 border-b-2 font-semibold cursor-pointer transition-all duration-300 ${
                activeTab === 'detail'
                  ? 'border-[#4E2A1E] text-[#4E2A1E]'
                  : 'border-transparent text-gray-400 hover:border-[#4E2A1E] hover:text-[#4E2A1E]'
              }`}
              >Detail</h1>

              <h1  
               onClick={() => setActiveTab('review')}
               className={`p-1 px-3 border-b-2 font-semibold cursor-pointer transition-all duration-300 ${
                 activeTab === 'review'
                   ? 'border-[#4E2A1E] text-[#4E2A1E]'
                   : 'border-transparent text-gray-400 hover:border-[#4E2A1E] hover:text-[#4E2A1E]'
               }`}>Review</h1>

            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#4E2A1E] mb-2">Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {detailProduct?.description}
              </p>

              <div className="text-sm space-y-1 text-[#4E2A1E]">
                <p><strong>Flower Type :</strong> Sunflower</p>
                <p><strong>Type :</strong> {detailProduct?.category || '-'}</p>
                <p><strong>Paper Color :</strong> {detailProduct?.colors?.map((color, i) => (
                  <span key={i}>
                    {color.name}{i !== detailProduct.colors.length - 1 ? ', ' : ''}
                  </span>
                )) || '-'}
                </p>
                <p><strong>Additional :</strong> Ribbon, Thanks card, Card holder</p>
                <p><strong>Notes :</strong> Bunga bertahan 20 juta hari</p>
              </div>
            </div>
          </div>

          {/* KANAN: RATING & PROMO */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Rating */}
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-xl">★ ★ ★ ★ ☆</div>
                <span className="text-[#4E2A1E] font-bold text-lg">4.0</span>
              </div>

              <div className="mt-3 space-y-2 text-sm">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="w-4">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '70%' }} />
                    </div>
                    <span className="w-6 text-right">28</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo */}
            <div className="bg-[url('src/assets/bgreview.png')] rounded-lg p-5 text-[#4E2A1E]">
              <h3 className="font-bold text-xl leading-snug">
                Celebrate Special<br />
                Moments with<br />
                20% Off All<br />
                Bouquets!
              </h3>
              <p className="text-xs mt-2 font-semibold">RAWFLOWER.ID</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
