import { useEffect, useState } from 'react';
import CardPopular from '../component/CardPopular';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/popular')
      .then(res => {
        setPopularProducts(res.data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='p-8 bg-[#FFF5E3] overflow-hidden lg:p-20'>
      <div className='flex justify-between items-center'>
        <h1 className='font-veryvogue lg:text-6xl text-2xl text-[#4E2A1E]'>
          a <span className='italic'>Popular</span> Section
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="lg:px-10 lg:py-5 px-3 py-3 cursor-pointer font-bold bg-[#4E2A1E] text-white rounded-[10px] hover:bg-[#34201a]"
        >
          <h1 className='lg:text-lg text-md'>Shop now</h1>
        </button>
      </div>

      <div className="flex gap-4 p-10 overflow-x-auto no-scrollbar">
        {popularProducts.slice(0, 4).map((product) => (
          <CardPopular key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
