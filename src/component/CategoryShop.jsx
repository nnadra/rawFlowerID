import { useEffect, useState } from 'react'
import CardShop from './CardShop';
import DropDownShop from './DropDownShop';
import axiosClient from '../utils/helper';

const CategoryShop = () => {
  // parameter 1: isi sekarang, parameter 2: buat ubah isi parameter 1
  const [products, setProducts] = useState([]);

  // Fetch data produk dari API
  useEffect(() => {
    axiosClient('/api/products')
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
      <div className='flex lg:justify-end mt-5 lg:mt-0 items-center gap-2 text-lg'>Short by : <DropDownShop/></div>
      {/* 1 kolom -> mobile, 2 -> screen kecil n medium, 3 -> large, 4 -> layar besar */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <CardShop key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryShop
