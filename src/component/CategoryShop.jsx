import React, { useEffect, useState } from 'react'
import CardShop from './CardShop';
import DropDownShop from './DropDownShop';
import publicAxios from '../pages/api/axios';

const CategoryShop = () => {
  const [products, setProducts] = useState([]);

  // Fetch data produk dari API
  useEffect(() => {
    publicAxios('/products')
      .then((response) => {
        setProducts(response.data.data);  // Sesuaikan dengan struktur data dari backend
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
      });
  }, []);
  

  return (
    <div className='mt-10'>
      <h1 className='text-5xl font-veryvogue italic text-[#4E2A1E]'>Our Collection</h1>
      <div className='flex justify-end items-center gap-2 text-lg'>Short by : <DropDownShop/></div>
      <div className='mt-10 lg:flex lg:justify-between justify-center'>
        {products.map((product) => (
          <CardShop key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryShop
